const spanText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatem tenetur culpa placeat, odit fuga quo laborum veritatis praesentium. Voluptate assumenda facilis eligendi libero animi architecto ullam nostrum dicta totam.';


// Parametry
let indexText = 0;
const time = 70;

// Implementacja
const addLetter = () => {
    spanText.textContent += txt[indexText];
    indexText++;

    if (indexText === txt.length) clearInterval(indexTyping);
}

const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}

const indexTyping = setInterval(addLetter, time);
setInterval(cursorAnimation, 400);