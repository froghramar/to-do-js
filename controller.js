﻿(function (window) {
    'use strict';
    var mode = 'taskview';
    var editId;
    function Controller() {
        this.controllEditTask = function (id) {
            mode = 'edit';
            editId = id;
            var task = repository.getTaskById(id);
            domManager.fillOutInputField(task.title, task.description);
            domManager.showToggledView();
        }
        this.controllDeleteTask = function (id) {
            if (confirm("Are You Sure?")) {
                repository.deleteTask(id);
                domManager.updateView(this.getFilteredList());
            }
        }
        this.controllStatusChange = function (id) {
            repository.changeStatus(id);
            domManager.updateView(this.getFilteredList());
        }
        this.controllSaveTask = function () {
            var title = domManager.getTitleFromInputField();
            var description = domManager.getDescriptionFromInputField();
            if (mode === 'add') {
                repository.addTask(title, description);
                domManager.updateView(this.getFilteredList());
            }
            else if (mode === 'edit') {
                repository.updateTask(editId, title, description);
                domManager.updateView(this.getFilteredList());
            }
            mode = 'taskview';
            domManager.showMainView(this.getFilteredList());
        }
        this.controllNewTask = function () {
            mode = 'add';
            domManager.resetInputForm();
            domManager.showToggledView(this.getFilteredList());
        }
        this.getFilteredList = function () {
            var searchKey = domManager.getSearchKey();
            var filter = domManager.getFilterValue();
            var tasklist = repository.getAllTask();
            var filteredList = {};
            for (var id in tasklist) {
                var task = tasklist[id];
                if ((task.title.includes(searchKey) || task.description.includes(searchKey))  && filter.indexOf(task.status) != -1)
                    filteredList[id] = tasklist[id];
            }
            return filteredList;
        }
        this.controllSeachBoxInputEffect = function () {
            domManager.updateView(this.getFilteredList());
        }
        this.controllRadioButtonEffect = function () {
            domManager.updateView(this.getFilteredList());
        }
        this.init = function () {
            domManager.updateView(this.getFilteredList());
        }
    }
    window.controller = new Controller();
}
)(window);

window.onload = function () {
    controller.init();
}