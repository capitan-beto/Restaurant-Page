import "./style.css"

export function locationPage() {
    let categories = document.querySelector("#content");
    let shade = document.querySelector(".shade-content");
    let sidebar = document.querySelector("#sidebar");

    categories.remove();
    shade.style.display = "none";
    sidebar.classList.toggle("hide");

    let container = document.createElement("div");
    container.setAttribute("id", "content");
    container.style.gridTemplateRows = "1fr"
    document.body.style.backgroundColor = "#000";

    let content = document.createElement("div");
    content.classList.add("about-body");
    container.appendChild(content);

    let mapContainer = document.createElement("div");
    mapContainer.classList.add("map-container");
    content.appendChild(mapContainer);

    const iframe = document.createElement("iframe");
    iframe.src = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d724.4348157511951!2d-63.05746537781037!3d-31.415598189021004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943355d1d3dae2d3%3A0xd4d321103c547f23!2sSushi%20Rock!5e0!3m2!1sen!2sar!4v1675296641642!5m2!1sen!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`
    mapContainer.appendChild(iframe);

   return container;
}

