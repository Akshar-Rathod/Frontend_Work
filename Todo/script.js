let todo = [];

function addTask() {
    var inputElement = document.getElementById('taskInput');
    var Task = inputElement.value.trim();
    if (Task) {

        if (todo.push(Task)) {
            event.preventDefault();
            showSuccessAlert(`Task Added Successfully :: ${Task}`)
            inputElement.value = '';
        }
    } else {
        showErrorAlert("Please Enter a Task !!!")
    }
}

$('#listTask').on('shown.bs.modal', function () {
    listTasks();
});


function showListmodal() {
    if (todo.length == 0) {
        showInfoAlert("0 Task is Available !!!")
    } else {
        $('#listTask').modal('show');
        listTasks();
    }
}

function listTasks() {
    const contentDiv = document.getElementById("content");

    contentDiv.innerHTML = "";
    for (let i = 0; i < todo.length; i++) {
        contentDiv.innerHTML += `<p>${i + 1} - ${todo[i]}</p>`;
    }
}


function deletemodal() {
    if (todo.length == 0) {
        showInfoAlert("No Task Is Available !!!");
    } else {
        $('#deleteTask').modal('show');
    }
}

function deleteTask() {
    var inputElement = document.getElementById('deleteTaskIp');
    var dTask = inputElement.value - 1;

    if (!isNaN(dTask) && dTask >= 0 && dTask < todo.length) {
        if (todo.splice(dTask, 1)) {
            showSuccessAlert("Task Deleted Successfully !!!");
        }
    } else {
        showErrorAlert("Invalid Task Number!");
    }
}




// Define success alert function
function showSuccessAlert(message) {
    Swal.fire({
        title: 'Success!',
        text: message,
        icon: 'success',
        confirmButtonText: 'OK'
    });
}


// Define error alert function
function showErrorAlert(message) {
    Swal.fire({
        title: 'Error!',
        text: message,
        icon: 'error',
        confirmButtonText: 'OK'
    });
}

// Define warning alert function
function showWarningAlert(message) {
    Swal.fire({
        title: 'Warning!',
        text: message,
        icon: 'warning',
        confirmButtonText: 'OK'
    });
}

function showInfoAlert(message) {
    Swal.fire({
        title: 'Information',
        text: message,
        icon: 'info',
        confirmButtonText: 'OK'
    });
}
