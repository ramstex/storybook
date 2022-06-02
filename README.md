## Оглавление

1. [Введение](#introduction)
2. [Начало работы](#getting_started)
3. [Работа с проектом](#workflow)
4. [Конфигурация](#config)

<a name="introduction"></a>
## Введение

**STORYBOOK** - это заготовка под лендинги на Vue 3.
Её задача - предоставить Frontend-программисту компоненты и конфигурации для ускорения разработки.
Заготовка не накладывает никаких ограничений на организацию и ход разработки. Она только предоставляет набор
готовых решений. Итогом работы с заготовкой станет набор файлов, с которыми будет работать **CMS**.

[Документация по Vue 3](https://v3.vuejs.org/guide/introduction.html#getting-started)

<a name="getting_started"></a>
## Начало работы

Глобально должны быть установлены последние стабильные версии:

1. [node.js](https://nodejs.org/)
2. [npm](https://www.npmjs.com/)

Заготовку надо разместить в той папке проекта, в которой лежат шаблоны.
На момент написания этого руководства, это папка `/visual`.
После размещения заготовка попадёт в историю версий проекта.

Из папки c заготовкой устанавливаем зависимости:

```bash
cd <имя_папки_с_заготовкой>
npm i
```

<a name="workflow"></a>
## Работа с проектом

Работа ведётся в папке заготовки, а за её пределы выходит только для изменения какой-либо серверной логики.
Разработка заключается в непосредственном редактировании любых файлов заготовки согласно нуждам конкретного проекта.

Запуск скриптов осуществляется через **npm**-скрипты.

```bash
npm run <имя скрипта>
```

Список скриптов:

1. **dev**: запускает **development**-сборку и стартует сервер.
2. **build**: запускает **development**-сборку и генерирует файлы для CMS.

Разработка ведётся в режиме **development**.

<a name="config"></a>
## Конфигурация

В проекте используется сборщик **Webpack**. Его настройки прописаны в файле `webpack.config.js`.
Он содержит общие настройки для всех режимов сборки. Так же предусмотрены конфиги для отдельных аспектов проекта.
Они расположены в папке `config`.

### Конфигурация приложения
Файл `app.config.js` содержит конфиги, отвечающие за окружение приложения.
Это, например, адреса и алиасы.

### Конфигурация роутера
За конфигурацию роутера отвечает файл `router.config.js`. Для роутинга используется стандартный **Vue-Router**.

[Документация по Vue-Router](https://router.vuejs.org/)