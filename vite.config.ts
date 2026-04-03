import fs from 'node:fs'
import path from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

function parseEnvFile(): Record<string, string> {
  const envPath = path.join(process.cwd(), '.env')
  if (!fs.existsSync(envPath)) return {}

  const envContent = fs.readFileSync(envPath, 'utf8')
  return Object.fromEntries(
    envContent
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith('#'))
      .map((line) => {
        const separator = line.includes('=') ? '=' : ':'
        const idx = line.indexOf(separator)
        if (idx === -1) return [line, '']
        return [line.slice(0, idx).trim(), line.slice(idx + 1).trim()]
      })
  )
}

function formatAlmatyNow(): string {
  return new Intl.DateTimeFormat('ru-RU', {
    timeZone: 'Asia/Almaty',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(new Date())
}

function normalizeKzPhone(input: string): string | null {
  const raw = String(input || '').trim()
  const hasLeadingPlus = raw.startsWith('+')
  const digits = raw.replace(/\D/g, '')

  if (hasLeadingPlus && digits.length >= 8 && digits.length <= 15) {
    return `+${digits}`
  }

  if (digits.length === 11 && (digits.startsWith('7') || digits.startsWith('8'))) {
    return `+7${digits.slice(1)}`
  }

  if (digits.length === 10) {
    return `+7${digits}`
  }

  if (!hasLeadingPlus && digits.length >= 8 && digits.length <= 15) {
    return `+${digits}`
  }

  return null
}

function whatsappDevApiPlugin(): Plugin {
  return {
    name: 'whatsapp-dev-api',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/api/whatsapp-lead', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }

        let rawBody = ''
        for await (const chunk of req) {
          rawBody += chunk
        }

        let parsedBody: { name?: string; phone?: string } = {}
        try {
          parsedBody = JSON.parse(rawBody || '{}')
        } catch {
          res.statusCode = 400
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Invalid JSON body' }))
          return
        }

        const name = (parsedBody.name || '').trim()
        const phone = (parsedBody.phone || '').trim()
        const normalizedPhone = normalizeKzPhone(phone)

        if (!name || !phone) {
          res.statusCode = 400
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Name and phone are required' }))
          return
        }

        if (!normalizedPhone) {
          res.statusCode = 400
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Invalid phone format. Use international format, e.g. +77771234567' }))
          return
        }

        const fileEnv = parseEnvFile()
        const env = { ...fileEnv, ...process.env }
        const accessToken = env.API_WHATSAPP || env['API-WHATSAPP']
        const phoneNumberId = env.PHONE_NUMBER_ID || '1055384357659254'
        const toNumber = (env.WHATSAPP_TO_NUMBER || env.WHATSAPP_RECIPIENT || '787757401405').replace(/\D/g, '')

        if (!accessToken) {
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'WhatsApp API token is missing' }))
          return
        }

        const messageText = [
          'Новая заявка с сайта',
          `Имя: ${name}`,
          `Телефон: ${normalizedPhone}`,
          `Дата и время: ${formatAlmatyNow()}`
        ].join('\n')

        try {
          const response = await fetch(`https://graph.facebook.com/v25.0/${phoneNumberId}/messages`, {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              messaging_product: 'whatsapp',
              to: toNumber,
              type: 'text',
              text: {
                preview_url: false,
                body: messageText
              }
            })
          })

          const payload = await response.json()
          res.statusCode = response.status
          res.setHeader('Content-Type', 'application/json')

          if (!response.ok) {
            res.end(
              JSON.stringify({
                error: payload?.error?.message || 'WhatsApp API request failed',
                details: payload
              })
            )
            return
          }

          res.end(JSON.stringify({ ok: true, payload }))
        } catch (error) {
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(
            JSON.stringify({
              error: error instanceof Error ? error.message : 'Unknown server error'
            })
          )
        }
      })
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), whatsappDevApiPlugin()],
})
