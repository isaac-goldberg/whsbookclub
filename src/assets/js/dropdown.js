const trigger = document.getElementById("navbar-dropdown-trigger");
const triggerContainer = document.getElementById("navbar-dropdown-trigger-container")
const menu = document.getElementById("navbar-dropdown-content");
const input = document.querySelector(".switch-container input");

window.addEventListener("click", function (e) {
    if (e.target.id === menu.id || menu.contains(e.target)) {
        return
    } else if (e.target.id === trigger.id || e.target.id === triggerContainer.id) {
        menu.classList.toggle("hide");
        triggerContainer.classList.toggle("open");
    } else {
        menu.classList.add("hide");

        triggerContainer.classList.remove("open");
    }
});

function setInput (val) {
    if (val) {
        input.checked = true;
        input.setAttribute("checked", "yes");
    } else if (!val) {
        input.checked = false;
        input.setAttribute("checked", "no");
    }
}

window.ready(function () {
    if (document.body.classList.contains("darkmode")) {
        setInput(true);
    } if (document.body.classList.contains("lightmode")) {
        setInput(false);
    } else if (!document.body.classList.contains("darkmode") && !document.body.classList.contains("lightmode")) {
        setInput(true);
    }
});

input.addEventListener("change", function () {
    let val = input.getAttribute("checked");
    if (val === "yes") {
        setInput(false);
        window.localStorage.setItem("theme", "light");
        document.body.classList.remove("darkmode");
        document.body.classList.add("lightmode");
    } else if (val === "no") {
        setInput(true);
        window.localStorage.setItem("theme", "dark");
        document.body.classList.remove("lightmode");
        document.body.classList.add("darkmode");
    }
});