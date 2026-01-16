const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('___');

const li = document.createElement('li');
const buttonDelete = document.createElement('button');

li.textContent = input.value;
buttonDelete.textContent = 'X';

li.append(buttonDelete);
list.append(li);

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const buttonDelete = document.createElement('button');

        li.textContent = input.value;
        buttonDelete.textContent = 'X';

        li.append(buttonDelete);
        list.append(li);

        buttonDelete.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });
    }
});

buttonDelete.addEventListener('click', function() {
    list.removeChild(li);
    input.focus();
});

input.value = '';
input.focus();