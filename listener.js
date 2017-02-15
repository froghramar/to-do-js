(function (window) {
    'use strict';
    function Listener() {
        this.editButtonClickEvent = function (item) {
            var id = domManager.getTaskIdFromTask(item.parentNode);
            controller.controllEditTask(id);
        }
        this.deleteButtonClickEvent = function (item) {
            var id = domManager.getTaskIdFromTask(item.parentNode);
            controller.controllDeleteTask(id);
        }

        this.checkboxButtonClickEvent = function (item) {
            var id = domManager.getTaskIdFromTask(item.parentNode);
            controller.controllStatusChange(id);
        }
        this.addTaskButtonClickEvent = function () {
            controller.controllAddTask();
        }
    }
    window.listener = new Listener();
}
)(window);
