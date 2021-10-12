function createHome() {
    const home = document.createElement("div");
    home.classList.add('home');

    const gusteau = new Image();
    gusteau.src = '../dist/images/Auguste_Gusteau.jpg';
    gusteau.alt = 'Chef Gusteau';
    gusteau.classList.add('chef');

    const stars = document.createElement('p');
    stars.textContent = '⭐⭐⭐⭐⭐';
    stars.classList.add('stars');

    home.appendChild(gusteau);
    home.appendChild(stars);
    home.appendChild(createParagraph("The finest restaurant in all of France"));

    return home;
}

function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;