(function (window) {
    'use strict';
    function DomManager(){
        this.getTaskIdFromTask = function (task) {
            var id = task.getAttribute('data-task-id');
            return id;
        }
        this.showToggledView = function () {
            this.hideTaskList();
            this.hideFilterList();
            this.disableNewTaskButton();
            this.showInputForm();
        }
        this.hideTaskList = function () {
            document.getElementById('todo-tasklist').style.display = 'none';
        }
        this.hideFilterList = function () {
            document.getElementById('todo-radiofilter').style.display = 'none';
        }
        this.disableNewTaskButton = function () {
            document.getElementById('newtask').disabled = true;
            document.getElementById('newtask').style.cursor = 'not-allowed';
        }
        this.showInputForm = function () {
            document.getElementById('task-form').style.display = 'block';
        }
        this.showMainView = function () {
            this.showTaskList();
            this.showFilterList();
            this.enableNewTaskButton();
            this.hideInputForm();
        }
        this.showTaskList = function () {
            document.getElementById('todo-tasklist').style.display = 'block';
        }
        this.showFilterList = function () {
            document.getElementById('todo-radiofilter').style.display = 'block';
        }
        this.enableNewTaskButton = function () {
            document.getElementById('newtask').disabled = false;
            document.getElementById('newtask').style.cursor = 'default';
        }
        this.hideInputForm = function () {
            document.getElementById('task-form').style.display = 'none';
        }
        this.getTitleFromInputField = function () {
            var title = document.getElementById('todo-title').value;
            return title;
        }
        this.getDescriptionFromInputField = function () {
            var description = document.getElementById('todo-description').value;
            return description;
        }
        this.updateView = function () {
            document.getElementById('todo-tasklist').innerHTML = "";
            var tasklist = controller.getFilteredList();
            for (var id in tasklist) {
                var domTask = this.getDomTask(id, tasklist[id]);
                document.getElementById('todo-tasklist').appendChild(domTask);
            }
        }
        this.createTaskTitle = function (title) {
            var tasktitle = document.createElement("todo-task-title");
            var titletext = document.createTextNode(title);
            tasktitle.appendChild(titletext);
            return tasktitle;
        }
        this.createTaskDescription = function (description) {
            var taskdescription = document.createElement("todo-task-description");
            var descriptiontext = document.createTextNode(description);
            taskdescription.appendChild(descriptiontext);
            return taskdescription;
        }
        this.createCheckbox = function (status) {
            var checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.checked = status;
            checkbox.onclick = function () { listener.checkboxButtonClickEvent(checkbox) };
            return checkbox;
        }
        this.createEditButton = function () {
            var button = document.createElement("input");
            button.setAttribute("type", "button");
            button.value = "...";
            button.onclick = function () { listener.editButtonClickEvent(button) };
            return button;
        }
        this.createDeleteButton = function () {
            var button = document.createElement("input");
            button.setAttribute("type", "button");
            button.value = "X";
            button.onclick = function () { listener.deleteButtonClickEvent(button) };
            return button;
        }
        this.getDomTask = function (id, task) {
            var item = document.createElement("div");
            item.classList.add('todo-task');
            item.classList.add('todo-box-bordered');
            item.appendChild(this.createTaskTitle(task.title));
            item.appendChild(this.createDeleteButton());
            item.appendChild(this.createEditButton());
            item.appendChild(this.createCheckbox(task.status));
            item.appendChild(this.createTaskDescription(task.description));
            if (task.status) {
                item.classList.add('todo-task-done');
            }
            item.setAttribute("data-task-id", id);
            return item;
        }
        this.getSearchKey = function () {
            var searchKey = document.getElementById('searchbox').value;
            return searchKey;
        }
        this.getFilterValue = function () {
            var filterType = this.findSelection('filter');
            var filter = [];
            if (filterType == "all") {
                filter = [true, false];
            }
            else if (filterType == "done") {
                filter = [true];
            }
            else if (filterType == "pending") {
                filter = [false];
            }
            return filter;
        }
        this.findSelection = function (field) {
            var test = document.getElementsByName(field);
            for (var i = 0; i < test.length; i++) {
                if (test[i].checked == true) {
                    return test[i].value;
                }
            }
        }
    }
    window.domManager = new DomManager();
}
)(window);
