 ![YChampion](./preview.svg)

## YChampion

Этот проект основан на [Create React App](https://github.com/facebook/create-react-app). Это система управления бизнесом предназначена для предприятий работающих с детьми и имеет встроенную систему поощрений - **Геймификация**.

Проект лишь визуальная часть и без написанного для этого проекта API работать не будет

---


### Старт проекта

#### Для развертывания проекта локально:

1. Для того чтобы стартануть проект в системе должен быть установлен [Node JS](https://nodejs.org/en/), [npm](https://www.npmjs.com/) и [git](https://git-scm.com/).

2. Установите глобально [yarn](https://yarnpkg.com/) для этого откройте терминал и введите комманду (могут потребоваться права администратора)
 
    > `npm install -g yarn`

3. Откройте в терминале каталог с проектом (вы должны быть в корне папки 
**newChampionBackEnd**), здесь нужно сменить ветку в гит. Введите комманду   

    > ` git checkout redux-saga `

4. Находясь в корне проекта (в терминале) введите команду 

    > ` yarn `
    
    Эта комманда запустит установку всех зависимостей проекта из файла package.json

    ---

#### Для развертывания на сервере:

1. Установить [Docker](https://www.docker.com/) и настроить на сервере

2. Склонировать репозиторий

3. Открыть терминал в корне проекта и запустить команду 

    > ` docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true front `

    это запустит скачивание образов для работы контейнера, а так же будет установлены все зависимости проекта

    ---

#### Для скачивания и применения изменений на сервере:

1. В терминале нужно перейти в корень проекта

2. Скачать изменения 

    > ` git pull `

3. Найти запущенный контейнер 

    > ` docker ps `
    
    и скопировать ID контейнера

4. И наконец перезапустить контейнер 

    > ` docker restart {ID контейнера} `
    
    после этого сайт будет недоступен на некоторое время, это связано с тем что проект будет пересобираться.

    ---

### Структура проекта



- <b id="src"><a href='#srcquote'>src/</a></b>
    - <b id="api"><a href='#apiquote'>Api/</a></b>
    - <b id="assets"><a href='#assetsquote'>assets/</a></b>
    - <b id="components"><a href='#componentsquote'>components/</a></b>
        - <b id="add"><a href='#addquote'>Add/</a></b>
        - <b id="auth"><a href='#authquote'>Auth/</a></b>
        - <b id="clients"><a href='#clientsquote'>Clients/</a></b>
        - <b id="common"><a href='#commonquote'>common/</a></b>
        - <b id="edit"><a href='#editquote'>Edit/</a></b>
        - <b id="footer"><a href='#footerquote'>Footer/</a></b>
        - <b id="genpage"><a href='#genpagequote'>GeneralPage/</a></b>
        - <b id="header"><a href='#headerquote'>Header/</a></b>
        - <b id="profile"><a href='#profilequote'>Profile/</a></b>
        - <b id="reports"><a href='#reportsquote'>Reports/</a></b>
        - <b id="settings"><a href='#settingsquote'>Settings/</a></b>
        - <b id="sidebar"><a href='#sidebarquote'>SideBar/</a></b>
        - <b id="stuffs"><a href='#stuffsquote'>Stuffs/</a></b>
        - <b id="apps"><a href='#appsquote'>app.css</a></b>
        - <b id="app"><a href='#appquote'>App.js</a></b>
    - <b id="constants"><a href='#constantsquote'>constants/</a></b>
    - <b id="helpers"><a href='#helpersquote'>helpers/</a></b>
    - <b id="hooks"><a href='#hooksquote'>hooks/</a></b>
    - <b id="routes"><a href='#routesquote'>Routes/</a></b>
    - <b id="store"><a href='#storequote'>store/</a></b>
        - <b id="actions"><a href='#actionsquote'>Actions/</a></b>
        - <b id="reducers"><a href='#reducersquote'>reducers/</a></b>
        - <b id="sagas"><a href='#sagasquote'>Sagas/</a></b>
        - <b id="sagasi"><a href='#sagasiquote'>index.js</a></b>
    - <b id="styles"><a href='#stylesquote'>styles/</a></b>
    - <b id="utils"><a href='#utilsquote'>utils/</a></b>
    - <b id="indexs"><a href='#indexsquote'>index.css</a></b>
    - <b id="index"><a href='#indexquote'>index.js</a></b>
- <b id="prettier"><a href='#prettierquote'>.prettierrc/</a></b>
- <b id="docker"><a href='#dockerquote'>Dockerfile</a></b>

#### Теперь подробнее о каждом пункте:

1. <b id="srcquote"><mark style='background:#e6d095'>***&nbsp;&nbsp;src/&nbsp;&nbsp;***</mark><b> - хранит в себе весь проект React, в нем же находится точка входа. <a href="#src" role="doc-backlink">↩</a>

2. <b id="prettierquote"><mark style='background:#e6d095'>***&nbsp;&nbsp;.prettier&nbsp;&nbsp;***</mark><b> - настройка для плагина [Prettier](https://prettier.io/) (!)Он должен быть установлен в IDE <a href="#prettier" role="doc-backlink">↩</a>

3. <b id="dockerquote"><mark style='background:#e6d095'>***&nbsp;&nbsp;Dockerfile&nbsp;&nbsp;***</mark><b> - файл для запуска [Docker](https://www.docker.com/) контейнера <a href="#docker" role="doc-backlink">↩</a>

4. <b id="apiquote"><mark style='background:#e6d095'>***&nbsp;&nbsp;Api/&nbsp;&nbsp;***</mark><b> - там хранится класс для общения с сервером и предварительной конфигурацей [axios](https://github.com/axios/axios). <a href="#api" role="doc-backlink">↩</a>

5. <b id="assetsquote"><mark style='background:#e6d095'>***&nbsp;&nbsp;assets/&nbsp;&nbsp;***</mark><b> - изображения и шрифты для проекта <a href="#assets" role="doc-backlink">↩</a>

6. <b id="componentsquote"><mark style='background:#e6d095'>***&nbsp;&nbsp;components/&nbsp;&nbsp;***</mark><b> - папка с основными компонентами приложения <a href="#components" role="doc-backlink">↩</a>

7. <b id="addquote"><mark style='background:#e6d095'>***&nbsp;&nbsp;Add/&nbsp;&nbsp;***</mark><b> - компонент добавления нового клиента в систему <a href="#add" role="doc-backlink">↩</a>

8. <b id="authquote"><mark style='background:#e6d095'>***&nbsp;&nbsp;Auth/&nbsp;&nbsp;***</mark><b> - компонент авторизации в системе <a href="#auth" role="doc-backlink">↩</a>

9. <b id="clientsquote"><mark style='background:#e6d095'>***&nbsp;&nbsp;Clients/&nbsp;&nbsp;***</mark><b> - компонент просмотра всех клиентов зарегестрированных в системе <a href="#clients" role="doc-backlink">↩</a>

10. <b id="commonquote"><mark style='background:#e6d095'>***&nbsp;&nbsp;common/&nbsp;&nbsp;***</mark><b> - каталог содержит общие для остальных компоненты <a href="#common" role="doc-backlink">↩</a>

11. <b id="editquote"><mark style='background:#e6d095'>***&nbsp;&nbsp;Edit/&nbsp;&nbsp;***</mark><b> - компонент редактирования клиента <a href="#edit" role="doc-backlink">↩</a>

12. <b id="footerquote"><mark style='background:#e6d095'>***&nbsp;&nbsp;Footer/&nbsp;&nbsp;***</mark><b> - компонент отображения подвала приложения <a href="#footer" role="doc-backlink">↩</a>

13. <b id="genpagequote"><mark style='background:#e6d095'>***&nbsp;&nbsp;GeneralPage/&nbsp;&nbsp;***</mark><b> - компонент главной страницы с расписанием занятий <a href="#genpage" role="doc-backlink">↩</a>

14. <b id="headerquote"><mark style='background:#e6d095'>***&nbsp;&nbsp;Header/&nbsp;&nbsp;***</mark><b> - компонент шапки сайта <a href="#header" role="doc-backlink">↩</a>

15. <b id="profilequote"><mark style='background:#e6d095'>***&nbsp;&nbsp;Profile/&nbsp;&nbsp;***</mark><b> - компонент отображения все информации о клиенте <a href="#profile" role="doc-backlink">↩</a>

16. <b id="reportsquote"><mark style='background:#e6d095'>***&nbsp;&nbsp;Reports/&nbsp;&nbsp;***</mark><b> - компонент с отчетами о состоянии клуба и клиентах <a href="#reports" role="doc-backlink">↩</a>

17. <b id="settingsquote"><mark style='background:#e6d095'>***&nbsp;&nbsp;Settings/&nbsp;&nbsp;***</mark><b> - компонент настроек CRM <a href="#settings" role="doc-backlink">↩</a>

18. <b id="sidebarquote"><mark style='background:#e6d095'>***&nbsp;&nbsp;SideBar/&nbsp;&nbsp;***</mark><b> - компонент-навигация, появляется на desktop'ной версии сайта <a href="#sidebar" role="doc-backlink">↩</a>

19. <b id="stuffsquote"><mark style='background:#e6d095'>***&nbsp;&nbsp;Stuffs/&nbsp;&nbsp;***</mark><b> - компонент для отображения всех сотрудников зарегестрированных в системе <a href="#stuffs" role="doc-backlink">↩</a>

20. <b id="appsquote"><mark style='background:#e6d095'>***&nbsp;&nbsp;app.css&nbsp;&nbsp;***</mark><b> - глобальные стили в дополнении к index.css  <a href="#apps" role="doc-backlink">↩</a>

21. <b id="appquote"><mark style='background:#e6d095'>***&nbsp;&nbsp;App.js&nbsp;&nbsp;***</mark><b> - компонент-обертка в основном содержит логику маршрутизации  <a href="#app" role="doc-backlink">↩</a>

22. <b id="constantsquote"><mark style='background:#e6d095'>***&nbsp;&nbsp;constants/&nbsp;&nbsp;***</mark><b> - содержит файлы констант для экшенов приложения и триггеры для [саг](https://redux-saga.js.org/) <a href="#constants" role="doc-backlink">↩</a>

23. <b id="helpersquote"><mark style='background:#e6d095'>***&nbsp;&nbsp;helpers/&nbsp;&nbsp;***</mark><b> - содержит файлы c функциями-хэлперами, используются в разных местах приложения <a href="#helpers" role="doc-backlink">↩</a>

24. <b id="hooksquote"><mark style='background:#e6d095'>***&nbsp;&nbsp;hooks/&nbsp;&nbsp;***</mark><b> - содержит кастомные хуки <a href="#hooks" role="doc-backlink">↩</a>

25. <b id="routesquote"><mark style='background:#e6d095'>***&nbsp;&nbsp;Routes/&nbsp;&nbsp;***</mark><b> - ссылки на компоненты <a href="#routes" role="doc-backlink">↩</a>

26. <b id="storequote"><mark style='background:#e6d095'>***&nbsp;&nbsp;store/&nbsp;&nbsp;***</mark><b> - конфигурация мозгов приложения <a href="#store" role="doc-backlink">↩</a>

27. <b id="actionsquote"><mark style='background:#e6d095'>***&nbsp;&nbsp;Actions/&nbsp;&nbsp;***</mark><b> - экшены для миграции и загрузки данных <a href="#actions" role="doc-backlink">↩</a>

28. <b id="reducersquote"><mark style='background:#e6d095'>***&nbsp;&nbsp;reducers/&nbsp;&nbsp;***</mark><b> - редюсеры <a href="#reducers" role="doc-backlink">↩</a>

29. <b id="sagasquote"><mark style='background:#e6d095'>***&nbsp;&nbsp;Sagas/&nbsp;&nbsp;***</mark><b> - конфигурация [саги](https://redux-saga.js.org/) <a href="#sagas" role="doc-backlink">↩</a>

30. <b id="sagasiquote"><mark style='background:#e6d095'>***&nbsp;&nbsp;index.js&nbsp;&nbsp;***</mark><b> - конфигурация store и запуск саги <a href="#sagasi" role="doc-backlink">↩</a>

31. <b id="stylesquote"><mark style='background:#e6d095'>***&nbsp;&nbsp;styles/&nbsp;&nbsp;***</mark><b> - глобальные стили для приложения <a href="#styles" role="doc-backlink">↩</a>

32. <b id="utilsquote"><mark style='background:#e6d095'>***&nbsp;&nbsp;utils/&nbsp;&nbsp;***</mark><b> - UI-компоненты для приложения <a href="#utils" role="doc-backlink">↩</a>

33. <b id="indexsquote"><mark style='background:#e6d095'>***&nbsp;&nbsp;index.css&nbsp;&nbsp;***</mark><b> - глобальные стили (сброс стилей, переопределение классов [antd](https://ant.design/)) <a href="#indexs" role="doc-backlink">↩</a>

34. <b id="indexquote"><mark style='background:#e6d095'>***&nbsp;&nbsp;index.css&nbsp;&nbsp;***</mark><b> - вход в приложение, подключение store к проекту, подключение стилей <a href="#index" role="doc-backlink">↩</a>