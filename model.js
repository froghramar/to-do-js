(function (window) {
    'use strict';
    var taskTitle, taskDescription, taskStatus;
    function Task(title, description, status){
        taskTitle = title;
        taskDescription = description;
        taskStatus = status;
        this.getTitle = function () {
            return taskTitle;
        }
        this.getDescription = function () {
            return taskDescription;
        }
        this.getStatus = function () {
            return taskStatus;
        }
    }
    window.Task = Task;
}
)(window);

(function (window) {
    'use strict';
    var tasklist = {};
    function Repository() {
        this.addTask = function(title, description, status){
            var newId = this.getMaxId() + 1;
            var task = new Task(title, description, status);
            tasklist[String(newId)] = task;
        }
        this.getAllTask = function () {
            return tasklist;
        }
        this.getMaxId = function () {
            var maxId = 0;
            for (var id in tasklist) {
                if (parseInt(id) > maxId) {
                    maxId = id;
                }
            }
            return maxId;
        }
        this.cloneFromLocalStorage = function () {
            if (localStorage.getItem("to-do-js") === null) return;
            taskList = JSON.parse(localStorage.getItem("to-do-js"));
        }
        this.cloneFromLocalStorage();
    }
    window.repository = new Repository();
}
)(window);