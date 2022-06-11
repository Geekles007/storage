# РУССКИЙ - Начало работы с сервером

## Предварительные условия

Убедитесь, что у вас установлены следующие предварительные условия:

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/) или [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)

Убедитесь, что ваш docker установлен и запущен.

## Настройка

Обязательно создайте файл **.env** и скопируйте в него содержимое файла **.env.example**.

## Установка зависимостей

Вам необходимо установить зависимости, выполнив следующую команду:

С помощью Yarn:

    $ yarn

С помощью Npm

    $ npm install

## Запуск сервера

Если все хорошо установлено, вы можете запустить сервер, выполнив следующую команду:

С Yarn:

    $ yarn dev:restart

Win Npm:

    $ npm run dev:restart

Эти команды установят postgresql в docker и запустят сервер. Не беспокойтесь о конфигурации, она будет выполнена автоматически.

## Подробнее

Сервер будет работать на порту 8000, как указано в файле **.env**. но если вы ничего не укажете в файле **.env**, он будет работать на порту 3000.

--------------

# ENGLISH - Getting Started with the server

## Prerequisites

Please make sure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)

  Make sure your docker is installed and running.

## Setup

Make sure to create a **.env** file and copy the content of the **.env.example** file to it.

## Installation dependencies

You need to install the dependencies running the following command:

With Yarn:

    $ yarn

With Npm

    $ npm install

## Run the server

If everything is well installed, you can start the server by running the following command:

With Yarn:

    $ yarn dev:restart

Win Npm:

    $ npm run dev:restart

Those commands will install postgresql in docker and start the server. Don't worry about configuration, it will be done automatically.

## More details

It will run on port 8000 as define in the **.env** file. but if you don't specify anything in the **.env** file, it will run on port 3000.

