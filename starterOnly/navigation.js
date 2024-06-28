// responsive header
const loadNav = () => {
    const editNav = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += "-responsive";
        } else {
            x.className = "topnav";
        }
    }

    const menu = document.getElementById("menu-burger")
    menu.addEventListener("click", editNav)

}

export default loadNav