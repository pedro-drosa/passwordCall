let section = document.querySelector('[data-value]');
window.addEventListener('click',nextPass);
function nextPass(){
    section.dataset.value < 99 ? section.dataset.value++: section.dataset.value = 0; 
    section.dataset.value < 10 ? section.children[0].innerText = "0"+section.dataset.value: section.children[0].innerText = section.dataset.value;
}