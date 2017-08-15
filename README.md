#### Task manager

#### Технологии
- TypeScript для написания логики,
- Sass для стилей,
- Webpack для сборки,
- [Vuejs](http://vuejs.org/v2/guide/) фреймворк для компонентной разработки
- [vue-class-component](https://github.com/vuejs/vue-class-component) для наилучшей интеграции vuejs и typescript.

#### Разработка и запуск
- `npm install`,
- `npm start` - запуск сервера разработки, результат будет доступен по адресу [http://localhost:3200](http://localhost:3200)
- `npm run server` - запуск сервера для продакшена, результат будет доступен по адресу [http://localhost:3200](http://localhost:3200)

#### Компоненты
Приложение имеет компонентную структуру, входной точкой является `src/app/components/app.component`, 
он содержит в себе дочерние компоненты и запускается в файле `src/main.ts`.
