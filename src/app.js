var cardArray = [];
var idArray = ['#card01', '#card02', '#card03', '#card04',
    '#card05', '#card06', '#card07', '#card08', '#card09',
    '#card10', '#card11', '#card12', '#card13', '#card14', '#card15', '#card16'
];
var first = null; // Az első kiválasztott kártya tartalma
var firstCardElement = null; // Az első kiválasztott kártya DOM-eleme
var counter = 0; // Kattintásszámláló
var gameEnded = false; // Jelzi, hogy vége van-e a játéknak
var content = ['A', 'C', 'B', 'A',
    'G', 'E', 'C', 'G',
    'B', 'D', 'D', 'F',
    'F', 'H', 'E', 'H'
];
var counter_const = document.getElementById('counter'); // Számláló elem
var msg = document.getElementById('msg'); // Üzenet elem
// Kártyák inicializálása
for (let i = 0; i < idArray.length; i++) {
    const card = document.querySelector(idArray[i]);
    card.setAttribute('data-content', content[i]);
    card.addEventListener('click', (event) => {
        if (gameEnded) return; // Ha vége van a játéknak, ne lehessen kattintani
        const content = event.target.getAttribute('data-content');
        // Ha a kártya már része egy megtalált párnak, ne csináljon semmit
        if (event.target.classList.contains('flipped')) {
            return;
        }
        console.log(content);
        event.target.innerHTML = content;
        if (!first) {
            first = content; // Ha ez az első választás
            firstCardElement = event.target; // Mentjük az első kártya DOM-elemét
        } else {
            counter++; // Növeljük a kattintásszámlálót
            counter_const.innerText = `Kattintások száma: ${counter}`;
            if (first === content) {
                // Ha párokat találtunk
                gameEnded = true; // Véget ér a játék
                event.target.classList.add('flipped');
                firstCardElement.classList.add('flipped');
                msg.style.display = "block";
                msg.innerText = `Siker! Párokat találtál: 1. Kattintások száma: ${counter}`;
            } else {
                // Ha nem egyeznek, az összes kártyát visszaállítjuk üresre 1 másodperc múlva
                setTimeout(() => {
                    cardArray.forEach(card => {
                        if (!card.classList.contains('flipped')) {
                            card.innerHTML = ""; // Csak azokat töröljük, amelyek nincsenek "flipped" állapotban
                        }
                    });
                }, 500);
            }
            first = null; // Reseteljük az első választást
            firstCardElement = null; // Reseteljük az első kártya DOM-elemét
        }
    });
    cardArray.push(card);
}
// Reset funkció
function resetGame() {
    counter = 0;
    gameEnded = false; // Újra lehet játszani
    first = null;
    firstCardElement = null;
    counter_const.innerText = "Kattintások száma: 0";
    msg.style.display = "none";
    cardArray.forEach(card => {
        card.innerHTML = ""; // Minden kártyát visszaállítunk üresre
        card.classList.remove('flipped'); // Eltávolítjuk a "flipped" osztályt
    });
}
// Reset gomb létrehozása
const resetButton = document.createElement("button");
resetButton.innerText = "Reset";
resetButton.className = "btn btn-primary mt-3";
resetButton.style.display = "block"; // Biztosítjuk, hogy látható legyen
resetButton.addEventListener("click", resetGame);
document.body.appendChild(resetButton);