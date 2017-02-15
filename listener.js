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
        this.saveTaskButtonClickEvent = function () {
            controller.controllSaveTask();
        }
        this.newTaskButtonClickEvent = function () {
            controller.controllNewTask();
        }
        this.searchBoxInputEvent = function () {
            controller.controllSeachBoxInputEffect();
        }
        this.radioButtonClickEvent = function () {
            controller.controllRadioButtonEffect();
        }
    }
    window.listener = new Listener();
}
)(window);
