// tema dark

const changeTheme = document.getElementById("change-theme")

changeTheme.addEventListener("change", () => {
    document.body.classList.toggle("dark")
})