function ready (callback) {
    // in case the document is already rendered
    if (document.readyState != "loading") callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener("DOMContentLoaded", callback);
    // IE <= 8
    else document.attachEvent("onreadystatechange", function (){
        if (document.readyState=="complete") callback();
    });
}

ready(function(){
    document.body.classList.remove("awaitingPageLoad");

    let theme = window.localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("darkmode");
    } else if (theme === "light") {
        document.body.classList.add("lightmode");
    } else {
        document.body.classList.add("darkmode");
        window.localStorage.setItem("theme", "dark");
    }
});