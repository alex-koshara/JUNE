<h2>Run project:</h2>
- <code>git clone https://github.com/alex-koshara/JUNE June</code> <br>
- <code>npm i</code> <br>
- <code>npm run dev</code> <br>

<br>

1. Задание будет следующим: У нас есть форма, состоящая из шагов(превью в папке /preview, контент шагов произвольный.
- [x] Напихать инпуты в каждую форму
- [x] Сделать только кнопку Далее и пагинацию в качестве nav

2. Важно, чтобы был список предыдуших шагов, заголовок и кнопка для значений шага
- [x] FullName, Addres ... => buttons появляются при заполнение.
- [x] Показывать текущую активную форму, связать это с пагинацией.

3. на 5м шагу показываем контактную форму, под ней выбранные значения.
- [x] Собрать все ВЫБРАННЫЕ инпуты со всех форм и склонировать в форму 5

4. Нужно реализовать переключение шагов последовательное, а так же возможность возврата и редактирования каждого конкретного шага.
- Сохранять текущую заполняемую форму в стате.
- [x] Переключение по пагинации.
- [x] Хранение информации в localStorage.
<!-- FIXME: Исправить прямой доступ к localStorage -->
- [x] Построить архитектуру localStorage
- [x] fn для возвращения на текущую активную страницу.

5. После редактирования шага пользователь должен вернуться на последний после заполненного шага (например, я заполнил 2 шага и на 3м остановился, отредактировал первый, меня должно вернуть на 3й шаг)
- [x] fn которая будет помечать готовые формы. Если форма готовая, показать кнопку пагинации, см. п. 2.1


6. Плюсом будет:
 - перестроение сетки для мобильного устройства
 - [x] сохранение заполненных данных для случая, когда пользователь покинул и потом вернулся на страницу
 - добавление анимации.
