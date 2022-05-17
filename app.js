// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const toggleBtn = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")
const classes = links.classList


toggleBtn.addEventListener("click", function(){
    const show = classes.toggle("c")
    if (show) {
        links.style.display = `none`;
    } /* else {
        span.textContent = `'c' removed; classList is now "${classes}".`;
    } */
})