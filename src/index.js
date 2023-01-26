import "./style.css";


function header() {
    const bodyHeader = document.createElement("div");
    bodyHeader.setAttribute("id", "header");
    
    const hamburger = document.createElement("div");
    hamburger.classList.add("hamburger");
    
    const logo = document.createElement("div");
    logo.classList.add("logo");
    
    bodyHeader.append(hamburger, logo);
    
    return bodyHeader;
}

function container() {
    //Crear archivo data.js y pasar el array de objetos pallá,

    const items = [
        {
            name: "Entradas",
            img: "url(./images/DO.jpg)"
        },
        {
            name: "Combos",
            img: "url(./images/bg.jpg)"
        },
    ]
    
    const cat = document.createElement("div");
    cat.classList.add("menu-categories");
    cat.textContent = "Categorías";
    
    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("options");
    
    const options = (() => {
        items.forEach(item => {
            let p = document.createElement("div");
            p.textContent = item.name;
            optionsContainer.appendChild(p);
        })
    })();

    const content = document.querySelector("#content");
    content.append(cat,optionsContainer);

    return content;
}

function sidebar() {
    const sideContainer = document.createElement("div");
    sideContainer.setAttribute("id", "sidebar");
    
    for(let i = 0; i < 5; i++){
        let a = document.createElement("div");
        a.classList.add("sidebar-option");
        a.textContent = "HOLA";
        let icon = document.createElement("div");
        let text = document.createElement("div");


        a.append(icon, text);
        sideContainer.appendChild(a);
    }
    
    return sideContainer;
}

document.body.append(header(), container(), sidebar());
