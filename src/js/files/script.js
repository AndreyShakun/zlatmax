// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Выпадающее меню
document.addEventListener("click", documentActions);

const menuBlocks = document.querySelectorAll ('.sub-menu-catalog__block');
if (menuBlocks.length) {
    menuBlocks.forEach (menuBlock => {
        const menuBlockItems = menuBlock.querySelectorAll('.sub-menu-catalog__category').length;
        menuBlock.classList.add (`sub-menu-catalog__block_${menuBlockItems}`);
    });
}

function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest('[data-parent]')) {
        const subMenuID = targetElement.dataset.parent ? targetElement.dataset.parent : null;
        const subMenu = document.querySelector(`[data-submenu="${subMenuID}"]`);
        const catalogMenu = document.querySelector('.catalog-header');
        if (subMenu) {
            const activeLink = document.querySelector ('._sub-menu-active');
            const openBlock = document.querySelector ('._sub-menu-open');

            if (activeLink && activeLink !== targetElement) {
                activeLink.classList.remove('_sub-menu-active');
                openBlock.classList.remove('_sub-menu-open');
                document.documentElement.classList.remove('sub-menu-open');
            }
            document.documentElement.classList.toggle('sub-menu-open');
            targetElement.classList.toggle('_sub-menu-active');
            subMenu.classList.toggle('_sub-menu-open');
        } else {
            console.log ('OMG!')
        }
        e.preventDefault();
    }
    if (targetElement.closest('.menu-top-header__link_catalog')) {
        // const catalogLink = targetElement.closest('.menu-top-header__link_catalog')
        document.documentElement.classList.add('catalog-open');
        e.preventDefault();
    }
    if (targetElement.closest('.menu-catalog__back')) {
        document.documentElement.classList.remove('catalog-open');
        document.querySelector ('._sub-menu-active') ? document.querySelector ('._sub-menu-active').classList.remove('_sub-menu-active') : null;
        document.querySelector ('._sub-menu-open') ? document.querySelector ('._sub-menu-open').classList.remove('_sub-menu-open') : null;
        e.preventDefault();
    }
    if (targetElement.closest('.sub-menu-catalog__back')) {
        document.documentElement.classList.remove('sub-menu-open');

        document.querySelector ('._sub-menu-active') ? document.querySelector ('._sub-menu-active').classList.remove('_sub-menu-active') : null;
        document.querySelector ('._sub-menu-open') ? document.querySelector ('._sub-menu-open').classList.remove('_sub-menu-open') : null;
        e.preventDefault();
    }
}


//availability
const availability = document.querySelector('[data-availability]');
if (availability) {
	if(availability.dataset.availability == 'yes') {
		availability.style.color = `#24AD53`;
		availability.textContent = `В наличии`;
	} 
	if(availability.dataset.availability == 'no') {
		availability.style.color = `#E7401B`;
		availability.textContent = `Нет в наличии`;
	} 
}

// зависимые селекты
//   var country = document.getElementById("country");
//   var city = document.getElementById("city");
// //   if (city.value !== '') {
// //     city.remove()
// //   } 
// //   var countrySelected = document.getElementById("country");
//   for (let i = 0; i < country.length; i++) {
//     console.log(country[i].selected)
//     console.log(country[i].value)
//     if (country[i].selected == true) {
//         let countrySelected = country[i].value;
//         console.log(country[i].value)
//         for (let e = 0; e < city.length; e++) {
//             // console.log(city[i].dataset.country)
//             // city[e].remove()
//             console.log(countrySelected)
//             if(city[e].dataset.country !== countrySelected) {
//                 console.log(city[e])
//                 city[e].removeChild();
//                 // console.log(city[i])
//             } 
//             // console.log(city.dataset.country)
//         }
//     }
//     function selectCountry(ev){
//         city.innerHTML = "";
//         var c = this.value || "bra", o;
//         for(let i = 0; i < cities[c].length; i++){
//           o = new Option(cities[c][i],i,false,false);
//           city.add(o);
//         };
//       }

//   }

//   var city = document.getElementById("city");
//   var city1 = city.options;
//   console.log(country.options)
//   console.log(city.options)


//   if(city.dataset.country == 'rus') {
//     city.style.display = `block`;
//     } 
//   window.onload = selectCountry;
//   country.onchange = selectCountry;
  
//   function selectCountry(ev){
//     city.innerHTML = "";
//     var c = this.value || "bra", o;
//     for(let i = 0; i < cities[c].length; i++){
//       o = new Option(cities[c][i],i,false,false);
//       city.add(o);
//     };
//   }
