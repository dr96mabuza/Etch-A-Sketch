function grid(num) {
    const content = document.querySelector('#container');
    for (let i = 0; i < num; i++) {

        const span = document.createElement('span');
        span.style.gridAutoFlow = 'column'; //span are placed in columns
        content.appendChild(span);

        for (let j = 0; j < num; j++){
            
            const div = document.createElement('div');
            div.classList.add('grid');
            div.style.gridAutoColumns = '600px/num'; //divs are made equal and placed in rows
            div.addEventListener('click', () => {
                div.style.cssText = 'background-color: black';
            });
            span.appendChild(div);

        }
    }

    
    
}

grid(16);

function newGrid() {
    document
    .querySelectorAll('span')
    .forEach((e) => e.parentNode.removeChild(e));
    
    let result = prompt('Enter number of squares you want: ');
    if (result < 100 || result > 0){
        return result;
    } else {
        return result = 16;
    }
    
}

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    grid(newGrid());
});