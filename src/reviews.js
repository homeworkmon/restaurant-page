function createReview() {
    const review = document.createElement("div");
    review.classList.add('review-section');

    review.appendChild(
        createBlurb(
            "Anton Ego",
            "Last night, I experienced something new: an extraordinary meal from a singularly unexpected source. To say that both the meal and its maker have challenged my preconceptions about fine cooking is a gross understatement. I will be returning to Gusteau's soon, hungry for more."
        )
    );
    return review;
}

function createBlurb(author, description) {
    const blurb = document.createElement("div");
    blurb.classList.add('blurb');

    const quoteBox = document.createElement('div');
    quoteBox.classList.add('quotebox');
    
    const quote = document.createElement("p");
    quote.textContent = description;

    const attributed = document.createElement("h2");
    attributed.textContent = author;

    quoteBox.appendChild(quote);
    quoteBox.appendChild(attributed);

    const authorImage = new Image();
    const attributedSrc = (author.replace(/\s/g, "")).toLowerCase();
    authorImage.src = `../dist/images/reviews/${attributedSrc}.jpg`;
    authorImage.alt = `${author}`;
    authorImage.classList.add(`${attributedSrc}`);

    blurb.append(quoteBox);
    blurb.append(authorImage);

    return blurb;
}

function loadReview() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createReview());
}

export default loadReview;