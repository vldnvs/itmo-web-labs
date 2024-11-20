function addButtonHoverEffect() {
    const buttons = document.querySelectorAll(".link-button");

    function onMouseOver() {
        this.style.boxShadow = "0px 7px 0 12px #bd9b87";
        this.style.transform = "scale(0.98)";
    }

    function onMouseOut() {
        this.style.boxShadow = "0px 10px 0 15px #bd9b87";
        this.style.transform = "scale(1)";
    }

    function onMouseDown() {
        this.style.transform = "translateY(4px)";
        this.style.boxShadow = "none";
    }

    function onMouseUp() {
        this.style.transform = "scale(0.98)";
        this.style.boxShadow = "0px 5px 0 10px #bd9b87";
    }

    buttons.forEach(button => {
        button.addEventListener("mouseover", onMouseOver);
        button.addEventListener("mouseout", onMouseOut);
        button.addEventListener("mousedown", onMouseDown);
        button.addEventListener("mouseup", onMouseUp);
    });
}

document.addEventListener("DOMContentLoaded", addButtonHoverEffect);
