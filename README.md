# Github projects

Поиск проектов на Github, вывод результатов на экран

## Технологии

React.js, Redux-toolkit, Bootstrap, React-router-dom

## Задачи

Разработать одностраничное приложение, руководствуясь дизайном по [https://www.figma.com/file/nPBJfhZXTX79RSYZv9beYk/Test_Front](ссылке).

Приложение должно реализовывать следующий механизм:
• Пользователь вводит в поле поиска текст, нажимает кнопку «Поиск»
• Производится отправка запроса на API Github [https://api.github.com/search/repositories?q=subject], где subject – введенный текст
• Результаты поиска выводятся на страницу
• Должен быть настроен Роут на первую страницу

Результаты выводить в виде карточек (cards). В карточке отображать:
• Имя проекта
• Автор
• Количество звезд (Stargazers)
• Количество просмотров (Watchers)
• Кнопка раскрытия подробной информации

При нажатии на имя проекта осуществлять переход на репозиторий Github;
При нажатии на имя автора осуществлять переход на пользователя Github;
При перезагрузке страницы восстанавливать поисковой запрос в строке поиска, карточки проектов, актуальную страницу (в пагинаторе) без отправки запроса на API Github, т.е. восстанавливать данные из сохраненных локально (данные должны храниться в параметрах пути роута).

Добавить возможность открывать карточку проекта с подробной информацией. Должна быть возможность редактирования карточки пользователя. Возможность удаления пользователя.

Приложение не должно взаимодействовать с серверным API (кроме поиска на Github), все операции выполняются локально. В случае необходимости сохранения данных, необходимо использовать роут.

## Дополнительные задачи

• Сохранять состояние отредактированного проекта, при перезагрузке страницы.
• Сохранение состояния удаленного пользователя после перезагрузки страницы.
• Вывод оповещений, в виде toast, о каких-либо изменениях в карточках
• Возможность просмотра по страницам: количество элементов на страницу выбирается из выпадающего списка (10, 25, 50).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
