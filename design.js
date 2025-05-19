const links = document.querySelector('.Links');
const menu = document.querySelector('.menu');
const closeTag = document.querySelector('.close-tag');
const allSections = document.querySelectorAll('section')
const allLinks = document.querySelectorAll('.navLink')

let currentSection = 'Home-section';

menu.addEventListener('click', () => {
    links.classList.add('show')
})
closeTag.addEventListener('click', () => {
    links.classList.remove('show')
})
window.addEventListener('scroll',() => {
    allSections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 250){
            currentSection = section.id;
        };
    });
    allLinks.forEach(link => {
        if(link.href.includes(currentSection)){
            removeActive(allLinks, 'active')
            link.classList.add('active')
        }
    } )
    
});


function removeActive(linked, given){
    for(let i = 0; i < allLinks.length; i++){
        linked[i].classList.remove(given)
    }
}