const darkMode = () => {
    document.getElementById("btnSwitchMode").addEventListener("click", () => {        
    document
        .getElementById("site")
        .classList.toggle("dark-mode");
}) }

export {darkMode};