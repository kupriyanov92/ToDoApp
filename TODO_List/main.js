(function() {
    //создаем и возвращаем заголовок приложения
    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    }

    //создаем и возвращаем форму для создания дела
    function createTodoItemForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите название дела';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Добавить дело';

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        return {
            form,
            input,
            button,
        };
    }

    //создаем и возвращаем список элементов
    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    function createTodoItem (name) {
        let item = document.createElement('li');
        //кнопки помещае в элемент который красиво покажет их в одной группе
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        //устанавливаем стили для элементов списка а также для размещения кнопок
        //в его правой части с пмощью flex
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.textContent = name;

        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn','btn-success');
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn','btn-danger');
        deleteButton.textContent = 'Удалить';

        //вкладываем кнопки в отдельный элемент что бы они объединились в один блок
        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        //Приложению нужен доступ к самому элементу и кнопкам что бы обрабатывать собяытия нажатия
        return {
            item,
            doneButton,
            deleteButton,
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        let container = document.getElementById('todo-app');

        let todoAppTitle = createAppTitle('Список дел');
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();
        let todoItems = [createTodoItem('Сходить за хлебом'), createTodoItem('Купить молоко')];

        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);
        todoList.append(todoItems[0].item);
        todoList.append(todoItems[1].item);
    })
})();