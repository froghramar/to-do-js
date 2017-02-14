function edit(item) {
    item = item.parentNode;
    var id = item.getAttribute('data-task-id');
    alert('edit ' + id);
}

function del(item) {
    item = item.parentNode;
    var id = item.getAttribute('data-task-id');
    alert('del ' + id);
}

function check(item) {
    item = item.parentNode;
    var id = item.getAttribute('data-task-id');
    alert('check ' + id);
}