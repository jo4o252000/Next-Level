const options = {
    dragging:false,
    touchZoom:false,
    doubleClickZom:false,
    scrollWheelZoom:false,
    zoomControl:false,
}

var map = L.map('mapid' ,  options).setView([-27.222633, -49.6455874], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

//create icon

const icon = L.icon({
    iconUrl:"./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor:[29, 68],
    popupAnchor:[170, 2]
})
//create popup overlay


L.marker([-27.222633, -49.6455874], { icon }).addTo(map)

//galeria de imagens 
function selectImage(event){
    const button =  event.currentTarget
    //remover todas as classe .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
    }
    //selecionar a imagem
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    //atualizar o container
    imageContainer.src = image.src

    //adcionar a classe .active
    button.classList.add('active')
}