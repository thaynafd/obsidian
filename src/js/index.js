function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
    navbar.style.display = "block"; // Certifique-se de que o dropdown esteja visível
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
    setTimeout(() => {
        navbar.style.display = "none"; // Esconde o dropdown após a animação
    }, 200); // O tempo deve ser igual ao tempo da animação
}

// Typewriter Effect
const texts = [
    "BOTS PERSONALIZADOS",
    "SOLUÇÕES EM AUTOMAÇÃO",
    "DESCOMPLIQUE AGORA"
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter