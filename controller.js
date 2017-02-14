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
    }
    window.controller = new Controller();
}
)(window);

