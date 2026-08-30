async function loadMinigolf() {
    const app = document.getElementById("app");
    const loader = document.getElementById("loader");

    try {
        const response = await fetch("Minigolf.html");

        if (!response.ok) {
            throw new Error("Minigolf.html could not be loaded");
        }

        const html = await response.text();

        loader.style.display = "none";

        // Load the entire HTML file
        app.innerHTML = html;

    } catch (error) {
        loader.innerHTML = `
            <p>Failed to load Minigolf.html 😭</p>
            <small>${error.message}</small>
        `;

        console.error(error);
    }
}

loadMinigolf();
