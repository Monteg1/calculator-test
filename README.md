# Calc-Test

## Описание

Calc-Test - это простое приложение калькулятора, созданное с использованием React и Vite. Оно поддерживает базовые арифметические операции и обладает современным интерфейсом.

## Установка

1. Клонируйте репозиторий:
  git clone https://github.com/Monteg1/calculator-test

2. Перейдите в директорию проекта:
  cd calc-test

3. Установите зависимости:
  npm install

## Запуск

Режим разработки
Чтобы запустить проект в режиме разработки, используйте команду:
  npm run dev

## Сборка проекта

Чтобы собрать проект для продакшена, используйте команду:
  npm run build

Собранный проект будет находиться в папке dist.

## Предварительный просмотр сборки

Для предварительного просмотра собранного проекта используйте команду:
  npm run preview

## Запуск собранного проекта

Для запуска собранного проекта вы можете использовать любой статический сервер. Например, http-server:

Установите http-server глобально:
  npm install -g http-server

Запустите сервер в папке dist:
  cd dist
  http-server

## Тестирование

Для запуска тестов используйте команду:
  npm run test

## Статический анализ

Линтинг JavaScript/TypeScript
Для проверки кода на соответствие стандартам используйте ESLint:
  npm run lint:js

Линтинг CSS
Для проверки стилей используйте Stylelint:
  npm run lint:css

