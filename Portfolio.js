//   let section = document.quleterySelectorAll('section');
//   let ection = document.quleterySelectorAll('header nav a');
// window.onscroll = () => {
//   sections.forEach(sec=> {
//     let top = window.scrollY;
//     let offset = sec.offsetTop -  150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute('id');
//     if(top >= offset && top < offset + height){
//       navLinks.forEach(links => {
//         links.classList.remove('active');
//         document.querySelector('hrader nav a[href*=' + id + ']').classList.add('active');


// console.log("ramu kakka aa gye ghar me ");


//       });

//     };
//     });
//     let header = document.querySelector('.header');
//     header.classList.toggle('sticky', window.scrollY > 100);
//   };
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   }); 


window.onscroll =() =>{
  let header = document.querySelector('.header');
  header.classList.toggle('sticky',window.scrollY > 100);
};