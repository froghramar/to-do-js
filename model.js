(function (window) {
    'use strict';
    function Task(title, description, status){
        this.title = title;
        this.description = description;
        this.status = status;
    }
    window.Task = Task;
}
)(window);

(function (window) {
    'use strict';
    var tasklist = {};
    function Repository() {
        this.addTask = function(title, description){
            var newId = this.getMaxId() + 1;
            var task = new Task(title, description, false);
            tasklist[String(newId)] = task;
            this.updateLocalStorage();
        }
        this.updateTask = function (id, title, description) {
            var task = new Task(title, description, tasklist[id].status);
            tasklist[id] = task;
            this.updateLocalStorage();
        }
        this.deleteTask = function (id) {
            delete tasklist[id];
            this.updateLocalStorage();
        }
        this.changeStatus = function (id) {
            tasklist[id].status = !tasklist[id].status;
            this.updateLocalStorage();
        }
        this.getAllTask = function () {
            return tasklist;
        }
        this.getMaxId = function () {
            var maxId = 0;
            for (var id in tasklist) {
                if (parseInt(id) > maxId) {
                    maxId = parseInt(id);
                }
            }
            return maxId;
        }
        this.cloneFromLocalStorage = function () {
            if (localStorage.getItem("to-do-js") === null) return;
            tasklist = JSON.parse(localStorage.getItem("to-do-js"));
        }
        this.updateLocalStorage = function () {
            localStorage.setItem('to-do-js', JSON.stringify(tasklist));
        }
        this.cloneFromLocalStorage();
    }
    window.repository = new Repository();
}
)(window);