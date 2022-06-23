const modal = document.getElementById("modal");
const container = document.getElementById("container");
// modal.className += "hiden";
// console.log(modal);
modal.remove();


function(){
container.insertBefore(modal, container.children[0]);
}