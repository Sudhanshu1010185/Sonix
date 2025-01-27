const words = ["Happy", "Angry", "Sad", "Disturbed", "Crying", "Anxious", "Depressed", "Joyful"];
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typingSpeed = 200;
const deletingSpeed = 100;
const blinkSpeed = 500;
const pauseTime = 1500;
const cursor = '|';

function typeWord() {
    const target = document.getElementById("responsive-para");
    let currentWord = words[currentWordIndex];
    
    if (isDeleting) {
        target.innerHTML = currentWord.substring(0, currentCharIndex) + cursor;
        currentCharIndex--;
        if (currentCharIndex < 0) {
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % words.length;
            setTimeout(typeWord, typingSpeed);
        } else {
            setTimeout(typeWord, deletingSpeed);
        }
    } else {
        target.innerHTML = currentWord.substring(0, currentCharIndex) + cursor;
        currentCharIndex++;
        if (currentCharIndex > currentWord.length) {
            setTimeout(() => {
                isDeleting = true;
                setTimeout(typeWord, deletingSpeed);
            }, pauseTime);
        } else {
            setTimeout(typeWord, typingSpeed);
        }
    }
}

function blinkCursor() {
    const target = document.getElementById("responsive-para");
    target.innerHTML = target.innerHTML.endsWith(cursor) ? target.innerHTML.slice(0, -1) : target.innerHTML + cursor;
    setTimeout(blinkCursor, blinkSpeed);
}

typeWord(); // Start the typing effect
blinkCursor(); // Start the blinking cursor