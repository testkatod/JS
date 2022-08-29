const btn = document.querySelector('.btn');
const inputFieldHeader = document.querySelector('.inputField_header');
const inputFieldTaks = document.querySelector('.inputField_task');
const selectField = document.querySelector('.selectField');
const columnOngoing = document.querySelector('.column_ongoing');
const columnCompleted = document.querySelector('.column_completed');
const column = document.querySelector('.column');
const iconMenu = document.querySelector('.menu-icon');
const leftPanel = document.querySelector('.left-panel');
const iconCancel = document.querySelector('.cancel-icon');

iconMenu.addEventListener('click', () => {
    leftPanel.style.display = 'block';
    leftPanel.style.position = 'fixed';
})

iconCancel.addEventListener('click', () => {
    leftPanel.style.display = 'none';
})


btn.addEventListener('click', () => {
    
    // Cоздаем элемент li c задачей
    let itemOngoing = document.createElement('li');
    itemOngoing.classList.add('item');
    itemOngoing.classList.add('itemOngoing');

    // Создаем индикатор выполнения
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.classList.add('circleNotClicked');
    itemOngoing.appendChild(circle);

    // Создаем wrapper текстового блока внутри li
    const itemWrapper = document.createElement('div');
    itemWrapper.classList.add('item-text-wrapper');
    
    // Заголовок
    const itemHeader = document.createElement('h3');
    itemHeader.innerText = inputFieldHeader.value;
    itemHeader.classList.add('task-header');
    itemWrapper.appendChild(itemHeader);

    // Текст самой задачи
    const itemTask = document.createElement('p');
    itemTask.innerText = inputFieldTaks.value;
    itemTask.classList.add('task');
    itemWrapper.appendChild(itemTask);

    // Добавляем wrapper к li
    itemOngoing.appendChild(itemWrapper);

    // Условия для выбора картинки в блоке li (в зависимости от выбранной тематики)
    const itemIcon = document.createElement('div');
    if (selectField.value === 'sport') {
        itemIcon.classList.add('item-icon_sport');
        itemOngoing.classList.add('item_sport');
    } else if (selectField.value === 'education') {
        itemIcon.classList.add('item-icon_education');
        itemOngoing.classList.add('item_education');
    } else if (selectField.value === 'work') {
        itemIcon.classList.add('item-icon_work');
        itemOngoing.classList.add('item_work');
    } else if (selectField.value === 'hobby') {
        itemIcon.classList.add('item-icon_hobby');
        itemOngoing.classList.add('item_hobby');
    } else if (selectField.value === 'other') {
        itemIcon.classList.add('item-icon_other');
        itemOngoing.classList.add('item_other');
    } 
    itemOngoing.appendChild(itemIcon);

    // Добавляем крест к li
    const itemCross = document.createElement('div');
    itemCross.classList.add('itemCross');
    itemOngoing.appendChild(itemCross);

    
    // В колонку "Ongoing" добавляем весь блок li
    columnOngoing.appendChild(itemOngoing);

    // Обнуляем поля input
    inputFieldHeader.value = '';
    inputFieldTaks.value = '';
    selectField.value = 'sport';

    itemCross.addEventListener('click', () => {
        column.removeChild(itemOngoing);
    })

    // EventListener на клик на элементу
    itemOngoing.addEventListener('click', () => {

        // Проверка на наличие класса itemCompleted: если есть, элемент в колонке itemCompleted и надо перенести в колонку itemOngoing и наоборот
        if (itemOngoing.classList.contains('itemCompleted')) {
            columnOngoing.appendChild(itemOngoing);
            itemOngoing.classList.remove('itemCompleted');
            circle.classList.toggle('circleClicked');
        } else {
            columnCompleted.appendChild(itemOngoing);
            itemOngoing.classList.add('itemCompleted');
            itemOngoing.classList.remove('itemOngoing');
            circle.classList.toggle('circleClicked');
        }
       
    })

})

