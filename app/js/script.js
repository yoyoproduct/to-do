const dateGeneration = (() => {
    let time = document.querySelector('.footer-text-time');
    const date = new Date();
    time.innerText = date.getHours() + ':' + date.getMinutes();


    let timesOfDay = document.querySelector('.times-of-day');

    if (date.getHours() > 17) {
        timesOfDay.innerText = 'вечер';
    } else {
        timesOfDay.innerText = 'день';
    }

    if (date.getMinutes() < 10) {
        time.innerText = date.getHours() + ':' + '0' + date.getMinutes();
    } else {
        time.innerText = date.getHours() + ':' + date.getMinutes();
    }

})();

setInterval(function () {
    let time = document.querySelector('.footer-text-time');
    let timesOfDay = document.querySelector('.times-of-day');
    const date = new Date();

    if (date.getMinutes() < 10) {
        time.innerText = date.getHours() + ':' + '0' + date.getMinutes();
    } else {
        time.innerText = date.getHours() + ':' + date.getMinutes();
    }

    if (date.getHours() > 17) {
        timesOfDay.innerText = 'вечер';
    } else {
        timesOfDay.innerText = 'день';
    }
}, 60000);


const addBtn = document.querySelector('.add-btn');

addBtn.addEventListener('click', function () {
    const newTasksBox = document.querySelector('.new-tasks');

    const wrapper = document.createElement('div');
    wrapper.classList.add('new-tasks-element');

    const textBox = document.createElement('div');
    textBox.classList.add('new-tasks-element-textbox');
    textBox.setAttribute('contenteditable', 'true');

    const checkbox = document.createElement('div');
    checkbox.classList.add('new-tasks-element-checkbox');

    checkbox.addEventListener('click', function () {
        checkbox.classList.toggle('new-tasks-element-checkbox-active');
    });


    wrapper.appendChild(checkbox);
    wrapper.appendChild(textBox);
    newTasksBox.appendChild(wrapper);
});


