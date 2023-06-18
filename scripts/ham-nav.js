const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#menu-links');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// const activeButtons = document.querySelectorAll('.navigation a');
// const activeTitle = document.getElementById('active-page');

// activeButtons.forEach((button) => {
//   button.addEventListener('click', (event) => {
//     event.preventDefault();

//     activeButtons.forEach((button) => {
//       button.classList.remove('active');
//     });

//     button.classList.add('active');
//     const pageTitle = button.getAttribute('title');
//     activeTitle.textContent = pageTitle;
//   });
// });


