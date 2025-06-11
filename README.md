# 🚀 стартовий шаблон с предпроцессором SCSS

# ✅ Мультисторінковий підхід (Multi-Page App - MPA)

# 👉 підключаю файл обнулення стилів

1. створюю файл reset.scss у папці SCSS
2. імпортую файл reset.scss у файлі main.js -- import "../scss/reset.scss"; // імпорт

# 👉 використовую зміні

1. у папці SCSS створюю файл variables.scss (для визначення зміних)
2. імпортурю файл у файл style.scss -- @import "variables.scss"; // імпорт файла змінних
3. background-color: $color-bac; //у файлі variables.scss записав змінну з кольором $color-bac: blue;

# 👉 підключення шрифтів Імпорт через CSS / SCSS

1. у папці FONTS створюю файл fonts.css та додаю -- @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
2. у main.js підключаю шрифт -- import "../../public/fonts/fonts.css"; // імпорт шрифта
