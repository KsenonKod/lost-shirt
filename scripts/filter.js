const elem = document.querySelector('.products__list');
const iso = new Isotope( elem, {
  // options
  itemSelector: '.products__item',
  filter: '.new'
  
});

const controlls = document.querySelectorAll('.filter__link');
const activeClasss = 'filter__item--active';

controlls.forEach(function(control) {
   
    control.addEventListener('click', function(e) {
        e.preventDefault();

    const filterName = control.getAttribute("data-filter");

       controlls.forEach(function(link) {
            link.closest('.filter__item').classList.remove(activeClasss)
        })
    

        console.log('click');

        control.closest('.filter__item').classList.add(activeClasss);
      iso.arrange({
        filter: `.${filterName}`
    })
})

  
     controlls.forEach(function(link) {
            link.closest('.filter__item').classList.remove(activeClasss)
        })
 
})