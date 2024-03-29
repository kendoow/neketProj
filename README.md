
# Серверный модуль
* **mongo-server** - локальный сервер построенный на json для хранения картинок.
* **client-api** - функции для получения данных о пользователях, новостях и матчах с сервера.
* **server-api:** 
    + *controllers* - модуль отвечает за обработку взаимодействий с базой данных.
    + *models* - задают формирование структур данных на основе которых, данные вносятся в таблицы.
    + *routes* - устанавливают зависимость между запросами пользователями и функциями контроллеров.
    + *logs* - файл в котором хранятся логи работы серверного модуля.
    + *index.js* - файл через которых запускается серверный модуль.
    + *db.js* - файл конфигурирующий подключение к базе данных.

# Клиентский модуль
* **components** - переиспользуемые несколько раз конструкции данных. 
* **assets** - картинки и иконки. 
* **hooks** - переиспользуемые несколько раз вспомогательные функции.
* **pageComponents** - компоненты страниц.
* **pages** - внутри этой папки указана структура страниц.
* **redux** - хранилище глобальных состояний переменных.
* **routes** - навигация между страницами.


# Настройка и запуск
1. Зайти в папку проекта и открыть терминал.
2. Введите ``` npm i --save ``` для загрузки необходимых пакетов для работы приложения. 
3. Затем напишите ``` npm start ```, поздравляю - вы запустили проект.
