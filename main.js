function fillBoard(size){
    let canvas = document.querySelector('.canvas');
    let squares = canvas.querySelectorAll('div');
    //remove squares from previous run
    squares.forEach((div) => div.remove());
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let amount = size*size;
    for(let i = 0; i<amount; i++){
        let square = document.createElement('div');
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        })
        square.style.backgroundColor = 'green';
        canvas.insertAdjacentElement('beforeend', square);
    }
};

function changeSize(input){
    if(input >=2 && input <= 100){
        fillBoard(input);        
    } else {
        console.log('error');
    }
};