import { header, sidebar, sidebarMenu } from "./index.js"
import { about } from "./data.js"

export function aboutPage() {
    let categories = document.querySelector("#content");
    let shade = document.querySelector(".shade-content");
    let sidebar = document.querySelector("#sidebar");

    categories.remove();
    shade.style.display = "none";
    sidebar.classList.toggle("hide");

    let container = document.createElement("div");
    container.setAttribute("id", "content");
    container.style.backgroundColor = "#000";

    let content = document.createElement("div");
    content.classList.add("about-body");
    container.appendChild(content);

    let entry = (() => {
        for (const item of about){
            let member = document.createElement("div");
            member.classList.add("member-container");
            
            let imgMember = document.createElement("div");
            imgMember.classList.add("img-member");
            let titleMember = document.createElement("h1");
            titleMember.classList.add("title-member");
            let paraMember = document.createElement("p");
            paraMember.classList.add("para-member");

            // imgMember.style.backgroundImage = item.img;
            titleMember.textContent = item.name;
            paraMember.textContent = item.about;
            
            content.appendChild(member);
            member.append(imgMember, titleMember, paraMember);

        }
    })();

   return container;
}