# 🚀 ОНОВЛЕНА СТРУКТУРА ДЛЯ MPA (під твій шаблон)

# 💡 ВАЖЛИВО !!!! ЗДІЙСНЮВАТИ ПЕРЕХІД НА ІНШІ СТОРІНКИ З СТОРІНКИ INDEX.HTML

root/
├── public/
│ └── fonts/
│ └── home.html ← нова сторінка (у public!)
│ └── about.html ← інші сторінки (у public!)
├── src/
│ ├── js/
│ │ ├── main.js ← загальний код (index.html)
│ │ └── main-home.js ← скрипт для home.html
│ └── scss/
│ ├── reset.scss
│ ├── style.scss ← стилі index.html
│ └── home.scss ← стилі home.html
├── index.html
├── vite.config.js

🧱 КРОК 1. Створюємо окрему сторінку home.html у /public
У тебе index.html — в корені, він збирається Vite’ом. А от для всіх інших сторінок, щоб не морочитися з конфігурацією, Vite автоматично віддає файли з папки public/ як є.

👉 Створи public/home.html:

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Головна</title>
  </head>
  <body>
    <div class="wrapper">
      <header class="header">Шапка</header>
      <main class="page">Тело</main>
      <footer class="footer">Подвал</footer>
    </div>

    <script type="module" src="/src/js/main-home.js"></script>

  </body>
</html>

🧱 КРОК 2. Створи main-home.js
src/js/main-home.js

import "../scss/reset.scss";
import "../scss/home.scss";

🧱 КРОК 3. Створи home.scss
src/scss/home.scss

body {
font-family: 'Roboto', sans-serif;
background-color: #f5f5f5;
font-size: 20px;
color: #333;
}
✅ Тепер:
index.html — стартова, з main.js і style.scss.

home.html — окрема сторінка в public/, яка сама підключає свій CSS+JS.

Немає конфігурації — Vite сам роздає public/home.html як є.

# 💡 простими словами.

1 у файл main-home.js імпортуються всі потрібні стилі з файлів SCSS
2 файл main-home.js підключається до файла home.html --- <script type="module" src="/src/js/     main-home.js"></script>
