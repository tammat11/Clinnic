import {
    Activity,
    Stethoscope,
    HeartPulse,
    Microscope,
    Thermometer,
    Syringe,
    Pill,
    ClipboardCheck,
    Ambulance,
    Dna,
    BriefcaseMedical,
    FlaskConical,
    Search,
    ShieldCheck,
    UserPlus,
    Bone,
    Zap,
    Beaker,
    Sparkles,
    CheckCircle2
} from 'lucide-react';

export const ICON_POOL: any = {
    Activity,
    Stethoscope,
    HeartPulse,
    Microscope,
    Thermometer,
    Syringe,
    Pill,
    ClipboardCheck,
    Ambulance,
    Dna,
    BriefcaseMedical,
    FlaskConical,
    Search,
    ShieldCheck,
    UserPlus,
    Bone,
    Zap,
    Beaker,
    Sparkles,
    CheckCircle2
};

export type IconName = keyof typeof ICON_POOL;

export const AVAILABLE_ICONS: IconName[] = [
    'Activity',
    'Stethoscope',
    'HeartPulse',
    'Microscope',
    'Thermometer',
    'Syringe',
    'Pill',
    'ClipboardCheck',
    'Ambulance',
    'Dna',
    'BriefcaseMedical',
    'FlaskConical',
    'Search',
    'ShieldCheck',
    'UserPlus'
];
