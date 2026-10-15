export type Kind = "medical" | "brand" | "corporate" | "mobile";
export type Project = { title: string; url: string; kind: Kind; task: string; review: string; author: string; image?: string };
export type Job = { company: string; period: string; stack: string; note: string };
// image: шлях до фото в public/, наприклад "/kinds/medical.jpg". Без нього в модалці буде градієнт.
export type KindCard = { kind: Kind; title: string; text: string; stack: string; details: string[]; image?: string };
export const shot = (p: Project) =>
  p.image ?? `https://s.wordpress.com/mshots/v1/${encodeURIComponent(p.url)}?w=700&h=440`;

export const profile = {
  name: "Валерій Гребенніков",
  role: "Front-End розробник",
  headline: "Роблю сайти, які швидко вантажаться і приводять клієнтів",
  intro:
    "React, Next.js, React Native. З 2025 року працюю у команді та на проєктах клієнтів: від сайтів клінік до інтернет-магазинів і мобільних застосунків.",
  email: "hrebennikovvalerii@gmail.com",
  phone: "+380958541859",
  telegram: "https://t.me/valera_grebennikov",
  telegramHandle: "@valera_grebennikov",
  linkedin: "https://www.linkedin.com/in/valeriihrebennikov-2a9633305",
};

export const facts = [
  { value: "7", label: "сайтів у продакшені" },
  { value: "3", label: "команди за 2025 рік" },
  { value: "RN", label: "і веб, і мобільні застосунки" },
];

export const about = [
  "Я почав з нуля у 2023 році: Hebron IT Academy, HTML і CSS, потім JavaScript і React. Далі продовжив навчання у Todor Academy і вже з березня 2025 працюю комерційно.",
  "За цей час встиг попрацювати над застосунками на React Native, сайтами на WordPress, магазинами на Horoshop і лендінгами на Weblium. Тому легко вибираю інструмент під задачу, а не навпаки.",
  "Паралельно вчуся на юриста. Це дає мені звичку уважно читати ТЗ, фіксувати домовленості та не пропускати дрібниці. Для клієнта це менше правок і зрозумілі терміни.",
];

export const kinds: KindCard[] = [
  {
    kind: "medical", title: "Сайти клінік і лікарів", stack: "React, Next.js, WordPress",
    text: "Довіра з першого екрана: послуги, лікарі, ціни, запис на прийом. Швидко на телефоні, бо пацієнти шукають у дорозі.",
    details: ["Структура: послуги, лікарі, ціни, відгуки, контакти", "Форма запису та кнопки дзвінка й месенджерів", "Швидке завантаження на мобільних", "Базове SEO для пошуку за послугами"],
  },
  {
    kind: "brand", title: "Сайти брендів і магазини", stack: "Next.js, Horoshop, SASS",
    text: "Каталог, красива подача товару, оформлення замовлення. Якщо потрібен швидкий старт, піднімаю магазин на Horoshop.",
    details: ["Каталог із фільтрами та сторінка товару", "Кошик та оформлення замовлення", "Швидкий старт на Horoshop або власний сайт на Next.js", "Акуратна подача фото та тексту бренду"],
  },
  {
    kind: "corporate", title: "Корпоративні сайти й лендінги", stack: "React, Weblium",
    text: "Один чіткий меседж і кнопка дії. Для швидкого запуску можна зібрати на Weblium, для складнішого — на React.",
    details: ["Один головний меседж і зрозумілі кнопки дії", "Швидкий запуск на Weblium за кілька днів", "Складніша логіка та анімації на React", "Адаптивність під усі екрани"],
  },
];

export const projects: Project[] = [
  { title: "Chesna Vaga", url: "https://chesnavaga.com.ua/", kind: "corporate", task: "Корпоративний сайт: зрозуміла структура та швидке завантаження.", review: "Сайт вийшов чітким, усе знаходиться за пару кліків.", author: "Представник компанії" },
  { title: "Healthy Smile Kyiv", url: "https://healthysmilekiev.com.ua/", kind: "medical", task: "Сайт стоматологічної клініки: послуги, лікарі, запис на прийом.", review: "Пацієнти стали частіше писати з сайту, а не дзвонити з питаннями.", author: "Адміністратор клініки" },
  { title: "New Clinic", url: "https://newclinic.com.ua/", kind: "medical", task: "Сайт медичної клініки з каталогом послуг та контактами.", review: "Швидко зрозумів задачу і здав у строк.", author: "Власник клініки" },
  { title: "Ваш лікар", url: "https://vashvrach.com.ua/", kind: "medical", task: "Сайт для медичного напрямку: акцент на довірі та простій навігації.", review: "Зручно і на телефоні, і на комп'ютері.", author: "Лікар" },
  { title: "Liliway NYC", url: "https://www.liliway.nyc/", kind: "brand", task: "Англомовний сайт для клієнта з Нью-Йорка.", review: "Сайт виглядає акуратно, а правки вносились швидко.", author: "Власниця бренду" },
  { title: "La Belle Peau Paris", url: "https://labellepeauparis.com/", kind: "brand", task: "Сайт б'юті-бренду: каталог і охайна подача.", review: "Каталог зручний, клієнтам легко обирати.", author: "Представник бренду" },
];

const di = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${path}.svg`;

export type Skill = { name: string; icon?: string };

export const skills: Skill[] = [
  { name: "React", icon: di("react/react-original") },
  { name: "Next.js", icon: di("nextjs/nextjs-original") },
  { name: "React Native", icon: di("react/react-original") },
  { name: "JavaScript", icon: di("javascript/javascript-original") },
  { name: "TypeScript", icon: di("typescript/typescript-original") },
  { name: "SASS", icon: di("sass/sass-original") },
  { name: "Firebase", icon: di("firebase/firebase-plain") },
  { name: "WordPress", icon: di("wordpress/wordpress-plain") },
  { name: "Horoshop" },
  { name: "Weblium" },
  { name: "Figma", icon: di("figma/figma-original") },
];

export const jobs: Job[] = [
  { company: "Pro Resultat (віддалено)", period: "жовт. 2025 — тепер", stack: "React, React Native, JS, TS, WordPress, Horoshop, Weblium, SASS", note: "Сайти для клієнтів на різних платформах." },
  { company: "Obre, Львів", period: "лип. — лист. 2025", stack: "React, React Native, JS, TS, WordPress, Figma", note: "Верстка за макетами з Figma, веб і мобільна розробка." },
  { company: "Insiders, Львів", period: "бер. — трав. 2025", stack: "React, React Native, JS, TS, Firebase", note: "Перший комерційний досвід у команді." },
];

export const faq = [
  { q: "Чи працюєш ти у команді?", a: "Так. У 2025 році я працював у двох львівських компаніях, зараз працюю у Pro Resultat віддалено." },
  { q: "На чому краще робити сайт: Next.js, WordPress чи конструктор?", a: "Залежить від задачі. Для швидкого лендінгу вистачить Weblium, для магазину зручний Horoshop, для контентного сайту WordPress. Якщо потрібні швидкість і гнучкість, роблю на Next.js." },
  { q: "Ти працюєш з макетами з Figma?", a: "Так, верстаю за макетом і можу доопрацювати дрібні речі у самому Figma." },
  { q: "Яка у тебе англійська?", a: "Базова: читаю технічну документацію, спілкуюся письмово. Українською та російською спілкуюся вільно." },
  { q: "Чи можна приєднатися до команди віддалено або у Львові?", a: "Так, мені підходять обидва формати. Живу у Львові, зараз працюю віддалено." },
  { q: "Як швидко ти можеш почати?", a: "Напишіть мені в Telegram, і ми обговоримо терміни під вашу задачу." },
];
