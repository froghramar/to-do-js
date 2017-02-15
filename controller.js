(function (window) {
    'use strict';
    function Controller() {
        this.controllEditTask = function(id){
            alert('edit ' + id);
        }
        this.controllDeleteTask = function (id) {
            alert('del ' + id);
        }
        this.controllStatusChange = function (id) {
            alert('check ' + id);
        }
        this.controllAddTask = function () {
            var title = document.getElementById('todo-title').value;
            var description = document.getElementById('todo-description').value;
            alert(description);
        }
    }
    window.controller = new Controller();
}
)(window);

