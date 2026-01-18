const selectElem = document.querySelector("#theme-select");
const logo = document.querySelector("#logo");

selectElem.addEventListener("change", changeTheme);

function changeTheme() {
    const theme = selectElem.value;

    // Remove existing theme classes
    document.body.classList.remove("light", "dark");

    // Apply selected theme
    if (theme === "dark") {
        document.body.classList.add("dark");
        logo.src = "https://wddbyui.github.io/wdd131/images/byui-logo-white.png";
    }
    else if (theme === "light") {
        document.body.classList.add("light");
        logo.src = "https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp";
    }
}
