(function (window) {
    'use strict';
    function DomManager(){
        this.getTaskIdFromTask = function (task) {
            var id = task.getAttribute('data-task-id');
            return id;
        }
    }
    window.domManager = new DomManager();
}
)(window);
