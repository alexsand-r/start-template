# 🔧 КРОК 6: Винести header та footer в шаблон, щоб не дублювати HTML

1 структура папок

/public/
├── header.html ✅ фрагмент (інклюд)
└── footer.html ✅ фрагмент (інклюд)

/src/
└── js/
├── main.js ✅ скрипт для index.html
└── include.js ✅ універсальний include-функціонал

/index.html ✅ головна індекс-сторінка (огляд)
/home.html ✅ окрема сторінка "Головна"
/about.html ✅ окрема сторінка "Про нас"

2 створив файли header.html footer.html у папці publik

3 підключив у окрему сторінку

  <body>
    <div class="wrapper">
      <div data-include="header"></div>
      <main class="page">
        <h1>Головна сторінка</h1>
        <p>Контент головної сторінки</p>
      </main>
      <div data-include="footer"></div>
    </div>
    <script type="module">
      import { includeHTML } from "/src/js/include.js";
      includeHTML();
    </script>
    <script type="module" src="/src/js/main-home.js"></script>
  </body>

4 створив у SCSS header.scss і footer.scss
5 підключаю header і footer у файлі style.scss у низу
