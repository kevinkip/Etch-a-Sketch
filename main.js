let color = 'black';
let click = true;

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
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'white';
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

//next attempt to make the HSL color transition smooth
function colorSquare(){
    if(click){
        if(color === 'random'){
            const hue = Math.random() * 360;
            const saturation = 100;
            const lightness = 50;
            this.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
            console.log(this.style.backgroundColor);
        } else {
            this.style.backgroundColor = color;
    
        }
    }
}

function changeColor(choice){
    color = choice;
}

function resetBoard(){
    let canvas = document.querySelector('.canvas');
    let squares = canvas.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor='white');
}

document.querySelector('body').addEventListener('click', (e) => {
    if(e.target.tagname !== 'BUTTON'){
        click = !click;
    }
});
