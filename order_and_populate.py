import json
import os

langs = ['content.json', 'content_kz.json', 'content_en.json']

popups_ru = {
    0: {"text": "В нашем хабе собраны ведущие специалисты различных направлений, работающие в команде. Это позволяет получать комплексную оценку здоровья за один визит без очередей и ожиданий.", "services": ["Консилиум врачей", "Комплексный чекап", "Ведение сложных случаев", "Второе мнение"]},
    1: {"text": "Лечение заболеваний суставов, позвоночника и костей. Мы устраняем причину боли и возвращаем радость полноценного движения с помощью современных методик.", "services": ["Лечение артроза и артрита", "Спортивная травматология", "Компьютерная диагностика осанки", "Безоперационное лечение боли"]},
    2: {"text": "Эффективная реабилитация и восстановление после травм или операций. Используем аппаратные и мануальные техники, чтобы ускорить заживление и снять воспаление.", "services": ["Ударно-волновая терапия (УВТ)", "Магнитотерапия", "Электрофорез", "Кинезиотейпирование"]},
    3: {"text": "Инфузионная терапия (капельницы) для быстрого восполнения дефицитов, укрепления иммунитета и восстановления энергии. Составы подбираются строго индивидуально.", "services": ["Detox-капельницы", "Витаминные комплексы", "Восстановление после болезней", "Anti-age терапия"]},
    4: {"text": "Собственная лаборатория экспертного класса. Оперативные и сверхточные результаты анализов, необходимые для правильной постановки диагноза.", "services": ["Общеклинические исследования", "Биохимия и гормоны", "Генетические тесты", "Аллергопанели"]},
    5: {"text": "Деликатный подход к женскому здоровью. От профилактических осмотров до инъекционного и аппаратного лечения с соблюдением мировых протоколов.", "services": ["Видеокольпоскопия", "Лечение патологий шейки матки", "Эстетическая гинекология", "Подбор контрацепции"]},
    6: {"text": "Бережное отношение к детям и спокойствие для родителей. Диагностика, лечение и профилактика детских заболеваний в дружелюбной атмосфере.", "services": ["Патронаж детей до года", "Составление графика прививок", "Справки в школу и детсад", "Лечение инфекционных заболеваний"]},
    7: {"text": "Специализированный центр по диагностике и лечению деформаций грудной клетки (воронкообразная, килевидная). Применяем современные безоперационные методики.", "services": ["Вакуумный колокол (Vacuum Bell)", "Ортезирование", "Индивидуальная ЛФК", "Мониторинг динамики"]},
    8: {"text": "Индивидуальный подход к питанию: для снижения веса, лечения заболеваний ЖКТ или улучшения качества жизни без жестких ограничений.", "services": ["Биоимпедансометрия", "Составление персонального меню", "Лечебное питание", "Коррекция метаболического синдрома"]},
    9: {"text": "Экспертное УЗИ на аппаратах премиум-класса. Позволяет выявить мельчайшие изменения в органах на самых ранних стадиях с высокой детализацией.", "services": ["УЗИ органов малого таза", "УЗИ брюшной полости и почек", "УЗИ щитовидной железы", "УЗИ сосудов и вен"]},
    10: {"text": "Профессиональный медицинский массаж для расслабления мышц, снятия спазмов и улучшения кровообращения. Выполняется сертифицированными специалистами.", "services": ["Лечебно-оздоровительный массаж", "Спортивный массаж", "Лимфодренажный массаж", "Детский массаж"]},
    11: {"text": "Защита от опасных инфекций качественными вакцинами с соблюдением холодовой цепи. Консультация врача перед каждой прививкой.", "services": ["Календарные прививки", "Сезонная вакцинация от гриппа", "Вакцинация путешественников", "Составление догоняющего графика"]}
}

popups_kz = {
    0: {"text": "Біздің орталықта түрлі бағыттағы жетекші мамандар жиналған. Бұл бір барғанда, кезексіз әрі күтусіз денсаулықты кешенді бағалауға мүмкіндік береді.", "services": ["Дәрігерлер консилиумы", "Кешенді чекап", "Күрделі жағдайларды жүргізу", "Екінші пікір"]},
    1: {"text": "Буын, омыртқа және сүйек ауруларын емдеу. Біз ауырсынудың себебін жойып, заманауи әдістер арқылы толыққанды қозғалыс қуанышын қайтарамыз.", "services": ["Артроз бен артритті емдеу", "Спорттық травматология", "Мүсінді компьютерлік диагностикалау", "Ауырсынуды отасыз емдеу"]},
    2: {"text": "Жарақаттар мен оталардан кейінгі тиімді оңалту және қалпына келтіру. Сауығуды тездетіп, қабынуды басу үшін аппараттық және мануалды әдістерді қолданамыз.", "services": ["Соққы-толқындық терапия (СҚТ)", "Магнитотерапия", "Электрофорез", "Кинезиотейптеу"]},
    3: {"text": "Тапшылықты жылдам толтыру, иммунитетті көтеру және қуатты қалпына келтіруге арналған инфузиялық терапия (тамшылатқыштар). Құрамы жеке таңдалады.", "services": ["Detox-тамшылатқыштар", "Дәрумендер кешені", "Аурудан кейінгі қалпына келтіру", "Anti-age терапиясы"]},
    4: {"text": "Сараптамалық деңгейдегі жеке зертханамыз. Дұрыс диагноз қою үшін аса қажетті жылдам әрі дәл анализ нәтижелерін ұсынамыз.", "services": ["Жалпы клиникалық зерттеулер", "Биохимия және гормондар", "Генетикалық тестілер", "Аллергопанельдер"]},
    5: {"text": "Әйелдер денсаулығына ұқыпты көзқарас. Профилактикалық қарап-тексеруден бастап әлемдік хаттамаларға сай инъекциялық және аппараттық емдеуге дейін.", "services": ["Видеокольпоскопия", "Жатыр мойны патологияларын емдеу", "Эстетикалық гинекология", "Контрацепцияны таңдау"]},
    6: {"text": "Балаларға мейірімділікпен қарау және ата-аналарға тыныштық сыйлау. Жайлы атмосферада балалар ауруларын диагностикалау, емдеу және алдын алу.", "services": ["Бір жасқа дейінгі балалар патронажы", "Екпе кестесін құру", "Мектепке және балабақшаға анықтамалар", "Жұқпалы ауруларды емдеу"]},
    7: {"text": "Кеуде қуысының деформацияларын (шұңқырлы, төс тәрізді) диагностикалау және емдеуге маманданған орталық. Заманауи отасыз әдістер қызмет етеді.", "services": ["Вакуумдық қоңырау (Vacuum Bell)", "Ортездеу", "Жеке ЕДШ", "Динамиканы бақылау"]},
    8: {"text": "Тамақтануға жеке көзқарас: салмақ тастауға, АІЖ ауруларын емдеуге немесе қатаң шектеусіз өмір сапасын жақсартуға арналған.", "services": ["Биоимпедансометрия", "Жеке мәзір құру", "Емдік тамақтану", "Метаболикалық синдромды түзету"]},
    9: {"text": "Премиум-класс аппараттарындағы сараптамалық УДЗ (УЗИ). Ағзалардағы ең ұсақ өзгерістерді бастапқы кезеңінде жоғары дәлдікпен анықтауға мүмкіндік береді.", "services": ["Кіші жамбас ағзаларының УДЗ", "Құрсақ қуысы мен бүйрек УДЗ", "Қалқанша без УДЗ", "Тамырлар мен веналар УДЗ"]},
    10: {"text": "Бұлшықеттерді босаңсытуға, спазмды басуға және қан айналымын жақсартуға арналған кәсіби медициналық массаж. Білікті мамандар орындайды.", "services": ["Емдік-сауықтыру массажы", "Спорттық массаж", "Лимфодренажды массаж", "Балалар массажы"]},
    11: {"text": "Қауіпті инфекциялардан суық тізбекті сақтай отырып, сапалы вакциналармен қорғау. Әрбір екпе алдында дәрігердің кеңесі жүргізіледі.", "services": ["Күнтізбелік екпелер", "Тұмауға қарсы маусымдық вакцинация", "Саяхатшыларды вакцинациялау", "Қуып жететін кесте құру"]}
}

popups_en = {
    0: {"text": "Our hub brings together leading specialists in various fields, working as a united team. This allows for comprehensive health assessments in a single visit with no queues.", "services": ["Medical Concilium", "Comprehensive Check-up", "Complex Case Management", "Second Opinion"]},
    1: {"text": "Treatment of joint, spine, and bone diseases. We eliminate the root cause of pain and restore the joy of full movement using advanced techniques.", "services": ["Arthrosis & Arthritis Treatment", "Sports Traumatology", "Posture Computer Diagnostics", "Non-Surgical Pain Relief"]},
    2: {"text": "Effective rehabilitation and recovery after specific injuries or surgeries. We use hardware and manual techniques to accelerate healing and reduce inflammation.", "services": ["Shockwave Therapy (SWT)", "Magnetotherapy", "Electrophoresis", "Kinesiotaping"]},
    3: {"text": "Intravenous therapy (IV drips) for rapid replenishment of deficiencies, immunity boosting, and energy recovery. Formulations are strictly individualized.", "services": ["Detox Drips", "Vitamin Complexes", "Post-Illness Recovery", "Anti-Age Therapy"]},
    4: {"text": "Our own expert-class laboratory. Prompt and highly accurate test results essential for making the correct diagnosis.", "services": ["General Clinical Tests", "Biochemistry & Hormones", "Genetic Testing", "Allergy Panels"]},
    5: {"text": "A delicate approach to women's health. From preventive check-ups to injection and hardware treatments following global protocols.", "services": ["Video Colposcopy", "Cervical Pathology Treatment", "Aesthetic Gynecology", "Contraception Selection"]},
    6: {"text": "Gentle care for children and peace of mind for parents. Diagnostics, treatment, and prevention of childhood diseases in a friendly atmosphere.", "services": ["Infant Care (up to 1 year)", "Vaccination Scheduling", "School & Kindergarten Certificates", "Infectious Disease Treatment"]},
    7: {"text": "A specialized center for the diagnosis and treatment of chest deformities (funnel or pigeon chest). We apply modern non-surgical methods.", "services": ["Vacuum Bell Therapy", "Orthotics", "Individual Physiotherapy", "Dynamics Monitoring"]},
    8: {"text": "A personalized approach to nutrition: for weight loss, treating gastrointestinal diseases, or improving quality of life without strict, painful limits.", "services": ["Bioimpedance Analysis", "Personalized Menu Planning", "Therapeutic Nutrition", "Metabolic Syndrome Correction"]},
    9: {"text": "Expert ultrasound on premium-class equipment. Allows detecting the slightest organ changes early on with high detailing.", "services": ["Pelvic Ultrasound", "Abdominal & Kidney Ultrasound", "Thyroid Ultrasound", "Vascular Ultrasound"]},
    10: {"text": "Professional medical massage to relax muscles, relieve spasms, and improve blood circulation. Performed by certified specialists.", "services": ["Therapeutic & Wellness Massage", "Sports Massage", "Lymphatic Drainage Massage", "Pediatric Massage"]},
    11: {"text": "Protection against dangerous infections with high-quality vaccines, strictly maintaining the cold chain. Doctor's consultation before every shot.", "services": ["Routine Immunizations", "Seasonal Flu Vaccination", "Traveler's Vaccination", "Catch-up Vaccination Schedules"]}
}

popups_map = {
    'content.json': popups_ru,
    'content_kz.json': popups_kz,
    'content_en.json': popups_en
}

# The target sequence by index from the OLD RU ARRAY
# old target: 1: Все специалисты
# 2: Ортопедия, 3: Физиотерапия, 4: Диетология, 5: Педиатрия, 6: IV-терапия, 7: Лаборатория, 8: Гинекология, 9: УЗИ, 10: Массажная, 11: Пектус, 12: Вакцинация
# wait, actual old indices (0-based) from my first run:
# 0: Все специалисты
# 1: Ортопедия
# 2: Физиотерапия
# 3: Диетология
# 4: Педиатрия
# 5: IV-терапия
# 6: Лаборатория
# 7: Гинекология
# 8: УЗИ
# 9: Массажная
# 10: Пектус
# 11: Вакцинация

mapping = [
    0,  # Все специалисты
    1,  # Ортопедия
    2,  # Физиотерапия
    5,  # IV-терапия
    6,  # Лаборатория
    7,  # Гинекология
    4,  # Педиатрия
    10, # Пектус
    3,  # Диетология
    8,  # УЗИ
    9,  # Массажная 
    11  # Вакцинация
]

for lang in langs:
    filepath = f"src/data/{lang}"
    if not os.path.exists(filepath):
        continue
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    old_specs = data['directions']['specialties']
    new_specs = []
    
    # We map new position 'i' to the old_specs using mapping[i]
    for new_idx, old_idx in enumerate(mapping):
        spec = dict(old_specs[old_idx])
        # Insert popup data into spec
        popups = popups_map[lang]
        spec['popup'] = popups[new_idx]
        new_specs.append(spec)
        
    data['directions']['specialties'] = new_specs
    
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

print("Done updating json files!")
