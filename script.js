// Получаем элементы
const burgerButton = document.getElementById('burgerButton');
const menu = document.getElementById('menu');

// Добавляем обработчик события для кнопки бургера
burgerButton.addEventListener('click', () => {
  // Переключаем классы для кнопки и меню
  burgerButton.classList.toggle('active');
  menu.classList.toggle('open');
});

// Закрытие меню при клике на ссылку
menu.addEventListener('click', () => {
  burgerButton.classList.remove('active');
  menu.classList.remove('open');
});


// Получаем элементы
const dropdownButton = document.getElementById('dropdownButton');
const dropdownContent = document.getElementById('dropdownContent');

// Добавляем обработчик события для кнопки
dropdownButton.addEventListener('click', () => {
  // Переключаем класс 'open' для родительского блока
  dropdownButton.parentElement.classList.toggle('open');
});

// Закрытие списка при клике вне его области
document.addEventListener('click', (event) => {
  // Проверяем, был ли клик внутри выпадающего списка или кнопки
  if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
    dropdownButton.parentElement.classList.remove('open');
  }
});

// Получаем все кнопки
const buttons = document.querySelectorAll('.btn');

// Добавляем обработчик кликов для каждой кнопки
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Удаляем класс "active" у всех кнопок
    buttons.forEach(btn => btn.classList.remove('active'));

    // Добавляем класс "active" только к нажатой кнопке
    button.classList.add('active');
  });
});