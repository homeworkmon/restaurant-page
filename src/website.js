import loadHome from "./home.js";
import loadReview from "./reviews.js";
import loadBook from './book.js';

function createHeader() {
    const header = document.createElement("header");

    const rhombusBox = document.createElement('div');
    rhombusBox.classList.add('rhombus-box');

    const restaurantName = document.createElement('h1');
    restaurantName.textContent = "Welcome to Gusteau's!";

    const shadow = document.createElement('div');
    shadow.classList.add('shadow');
    
    const rhombus = document.createElement('div');
    rhombus.classList.add('rhombus');
    rhombus.appendChild(restaurantName);

    rhombusBox.appendChild(rhombus);
    rhombusBox.appendChild(shadow);
    header.appendChild(rhombusBox);
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const nav = document.createElement("nav");

    const homeButton = document.createElement("button");
    homeButton.textContent = "HOME";
    homeButton.classList.add("button-nav");
    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        loadHome();
    });

    const reviewButton = document.createElement('button');
    reviewButton.textContent = "REVIEWS";
    reviewButton.classList.add("button-nav");
    reviewButton.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(reviewButton);
        loadReview();
    })

    const bookButton = document.createElement('button');
    bookButton.textContent = "BOOK";
    bookButton.classList.add("button-nav");
    bookButton.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(bookButton);
        loadBook();
    });

    nav.appendChild(homeButton);
    nav.appendChild(reviewButton);
    nav.appendChild(bookButton);

    return nav;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".button-nav");

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove('active');
        }
    });

    button.classList.add("active");
}

function createMain() {
    const main = document.createElement("main");
    main.setAttribute("id", "main");
    return main;
}

function createFooter() {
    const footer = document.createElement("footer");
    return footer;
}

function initializeWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActiveButton(document.querySelector(".button-nav"));
    loadHome();
}

export default initializeWebsite;