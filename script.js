const emptiesEl = document.querySelectorAll(".empty");
const fillEl = document.querySelector(".fill");

fillEl.addEventListener("dragstart", ({target}) => {
    target.classList.add("hold");
    setTimeout(() => {target.className = ""}, 0);
});

fillEl.addEventListener("dragend", ({target}) => {
    target.className = "fill";
});

for (const emptyEl of emptiesEl) {
    emptyEl.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    emptyEl.addEventListener("dragenter", (e) => {
        e.preventDefault();
        e.target.classList.add("hovered");
    });

    emptyEl.addEventListener("drop", ({target}) => {
        target.className = "empty";
        target.append(fillEl);
    });

    emptyEl.addEventListener("dragleave", ({target}) => {
        target.className = "empty";
    })
}

const botonModo = document.querySelector(".btnChangeMode");
botonModo.addEventListener("click", cambiarModo);
function cambiarModo() {
    const html = document.querySelector("html");
    if(html.classList.contains("dark")){
        html.classList.remove("dark");
    }
    else{
        html.classList.add("dark");
    }
}