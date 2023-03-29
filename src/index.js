import "./style.css";
import { items } from "./data.js";
import { aboutPage } from "./about.js";
import { locationPage } from "./location.js";



export function header() {
    const bodyHeader = document.createElement("div");
    bodyHeader.setAttribute("id", "header");
    
    const hamburger = document.createElement("button");
    hamburger.classList.add("hamburger");
    
    const shade = document.createElement("div");
    document.body.appendChild(shade);
    shade.classList.add("shade-content");
    shade.onclick = () => { displaySide()};


    hamburger.addEventListener("click", () => {
        displaySide();
    })
    
    const displaySide = () => {
        const sideContainer = document.getElementById("sidebar");
        const content = document.getElementById("content")
        if(sideContainer.classList.contains("hide")){ 
            sideContainer.classList = "visible";
            content.style.gridColumn = "2 / -1";
            shade.style.display = "block";
        } else {
            sideContainer.classList = "hide";
            content.style.gridColumn = "1 / -1";
            shade.style.display = "none";
        }
    }
    
    const logo = document.createElement("div");
    logo.classList.add("logo");
    
    logo.addEventListener("click", () => {
        document.location.href = "index.html";
    })
    
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
    
    items.forEach(item => {
        let menuItem = document.createElement("button");
        let p = document.createElement("p");
        p.textContent = item.name;
        menuItem.style.backgroundImage = item.img;
        menuItem.appendChild(p);
        optionsContainer.append(menuItem);
    })
    
    content.append(cat,optionsContainer);
    
    return content;
}

export function sidebar() {
    const sideContainer = document.createElement("div");
    sideContainer.setAttribute("id", "sidebar");
    sideContainer.classList.add("hide");
    
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

function sidebarLinks() {
    const home = document.querySelector("#sidebar button:nth-child(1)");
    home.addEventListener("click", () => { 
        returnHome();
    });
    
    const info = document.querySelector("#sidebar button:nth-child(2)");
    info.addEventListener("click", () => {
        document.body.appendChild(aboutPage());
    })

    const location = document.querySelector("#sidebar button:nth-child(3)");
    location.addEventListener("click", () => {
        document.body.appendChild(locationPage());
    })
    
    const insta = document.querySelector("#sidebar button:nth-child(4)");
    insta.addEventListener("click", () => {
        window.open("http://www.instagram.com/sushirock.arroyito");
    })

    const fb = document.querySelector("#sidebar button:nth-child(5)");
    fb.addEventListener("click", () => {
        window.open("https://www.facebook.com/sushirock.arroyito");
    })
    
}

function returnHome() {
    let categories = document.querySelector("#content");
    categories.remove();
    document.querySelector(".shade-content").style.display = "none";
    document.body.appendChild(container());
    document.body.style.background = "white";
    document.querySelector("#sidebar").classList = "hide";
}

sidebarLinks();
