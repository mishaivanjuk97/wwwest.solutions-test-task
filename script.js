const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

function cleanLinks() {
   links.forEach(link => link.classList.remove('text-primary', 'border', 'border-2', 'rounded-3'))
}

function showSections() {
   const trigerPoint = window.innerHeight / 5 * 4;

   sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if(sectionTop < trigerPoint){
         section.classList.add('show');
      }
   })
}

links.forEach(link => link.addEventListener('click',() => {
   cleanLinks();

   link.classList.add('text-primary', 'border', 'border-2', 'rounded-3')   
}))

showSections();

document.addEventListener('scroll', showSections);