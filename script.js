document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll(".header button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            this.classList.toggle("active");
        })
    })
})