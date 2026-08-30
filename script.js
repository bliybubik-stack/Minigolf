const game = document.getElementById("game");
const loader = document.getElementById("loader");

game.addEventListener("load", () => {
    loader.classList.add("hidden");
    game.classList.add("loaded");
});

game.addEventListener("error", () => {
    loader.innerHTML = `
        <p>Failed to load Minigolf.html 😭</p>
    `;
});
