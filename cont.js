let display = document.getElementById('screen');

const wash = () => {
    display.value = '';
}

const show = (n) => {
    display.value += n;
}

const otvet = () => {
    display.value = eval(display.value);
}