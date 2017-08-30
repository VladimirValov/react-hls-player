## HLS видео плеер

По имеющемуся макету нужно написать React компонент с использованием Redux для состояний плеера (воспроизведение, пауза, время трансляции, уровень громкости).

### Требования:
* Кроссбраузерность (актуальные версии Chrome, Firefox, Safari) как для верстки, так и для работы компонента, поддержка HLS должна быть учтена для каждого из этих браузеров, для совместимости можно использовать сторонние библиотеки/решения
ES6
* Путь к заголовку и источнику видео необходимо получать выполнив GET запрос к json файлу2
* Тесты для компонентов
* Для стилизации элементов использовать препроцессор SCSS
* Видео плеер должен занимать всю рабочую область страницы при этом не меняя соотношения сторон видеопотока, он может быть как 16/9 так и 4/3, если высота рабочей области избыточна, то центрировать плеер по вертикали
* В полноэкранном режиме должны быть доступны все органы управления
* При неактивности мыши в течении 5 секунд органы управления и заголовок видео должны убираться с экрана
* Не показывать органы управления пока не началась буферизация видео
* Git
* Автоматизация проекта - webpack 

### Приветствуется:
* Адаптивность (на случай если страница плеера будет вставляться через iframe)
* БЭМ



### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.


