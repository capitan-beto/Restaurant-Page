import "./style.css";
import {items} from "./data.js";



function header() {
    const bodyHeader = document.createElement("div");
    bodyHeader.setAttribute("id", "header");
    
    const hamburger = document.createElement("button");
    hamburger.classList.add("hamburger");

    const displaySidebar = (() => {
        hamburger.addEventListener("click", () => {
            const sideContainer = document.getElementById("sidebar");
            const content = document.getElementById("content")
            if(sideContainer.classList.contains("visible")){ 
                sideContainer.classList = "hide";
                content.style.gridColumn = "1 / -1"
            } else {
                sideContainer.classList = "visible";
                content.style.gridColumn = "2 / -1";
            }
        })
    })();

    const logo = document.createElement("div");
    logo.classList.add("logo");
    
    bodyHeader.append(hamburger, logo);
    
    return bodyHeader;
}


function container() {
    const content = document.createElement("div");
    content.setAttribute("id", "content");

    const cat = document.createElement("div");
    cat.classList.add("menu-categories");
    cat.textContent = "Categorías";
    
    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("options");
    
    const options = (() => {
        items.forEach(item => {
            let p = document.createElement("button");
            p.textContent = item.name;
            p.style.backgroundImage = item.img;
            optionsContainer.appendChild(p);
        })
    })();

    content.append(cat,optionsContainer);

    return content;
}

function sidebar() {
    const sideContainer = document.createElement("div");
    sideContainer.setAttribute("id", "sidebar");
    sideContainer.classList.add("visible");

    for(let i = 0; i < 5; i++){
        let a = document.createElement("button");
        a.classList.add("sidebar-option");
        let icon = document.createElement("div");
        icon.classList.add("side-icon");
        let text = document.createElement("div");
        text.classList.add("side-text");


        a.append(icon, text);
        sideContainer.appendChild(a);
    }
    
    return sideContainer;
}


document.body.append(header(), container(), sidebar());
