# ZYRO — Audio Brand Landing Page

Проект виконаний у рамках **Frontend-марафону Mate Academy** (травень 2025).

## Посилання

- **Живий сайт:** https://zyro-landing.netlify.app
- **GitHub:** https://github.com/HiljSV/zyro-portfolio

## Важливо щодо шаблону

Для збірки використовував **FLS v4 (Чертоги Фрілансера)** — готовий Vite-стартер від Євгена Андріканича.

Що надає шаблон (не моє):

- Vite-конфіг та налаштування збірки
- SCSS-міксини (`adaptiveValue`, `toRem`, `toEm`)
- Базова структура папок

Що написано самостійно:

- Весь HTML розмітки (`header`, `menu`, `footer`, секції `hero`, `recommended`, `gallery`, `why`)
- Всі SCSS-стилі компонентів (BEM, адаптивність, анімації, CSS Grid, Flexbox)
- JavaScript — бургер-меню, dropdown субменю, приховування header при скролі
- Дизайн відтворено за Figma-макетом (gallery grid з асиметричним 672fr/324fr layout)

## Стек

| Інструмент    | Призначення              |
| ------------- | ------------------------ |
| Vite (FLS v4) | Збірка та dev-сервер     |
| SCSS + BEM    | Стилізація, адаптивність |
| Vanilla JS    | Меню, бургер, скрол      |
| Netlify       | Хостинг                  |

## Секції

- **Hero** — головний банер з CTA
- **Recommended** — рекомендовані товари (hover-ефект)
- **Gallery** — сітка категорій за Figma-макетом
- **Why ZYRO** — переваги бренду

## Запуск локально

```bash
npm install
npm run dev
```

## Збірка

```bash
npm run build
# output → /dist
```
