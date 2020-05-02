let counter = 0;

function changeColor() {
    counter++;
    let color = document.querySelector('.main');

    switch (counter) {
        case 1:
            color.style.backgroundColor = 'yellow';
            break;
        case 2:
            color.style.backgroundColor = 'pink';
            break;
        case 3:
            color.style.backgroundColor = 'magenta';
            break;
        case 4:
            color.style.backgroundColor = 'yellow';
            break;
        case 5:
            color.style.backgroundColor = 'pink';
            break;
        case 6:
            color.style.backgroundColor = 'lightcoral';
            break;
        case 7:
            color.style.backgroundColor = "rgb(158, 106, 106)";
            break;
        case 8:
            color.style.backgroundColor = "rgb(135, 187, 130)";
            counter = 0;
            break;
            
    }
};
