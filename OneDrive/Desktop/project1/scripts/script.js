/*Завдання 1
const paragraphs = document.querySelectorAll("p");
console.log("Кількість <p>:", paragraphs.length);

const headings2 = document.querySelectorAll("h2");
console.log("Кількість <h2>:", headings2.length);

const bodyStyles = window.getComputedStyle(document.body);
console.log("Фон <body>:", bodyStyles.backgroundColor);

const h1 = document.querySelector("h1");
if (h1) {
  const h1Styles = window.getComputedStyle(h1);
  console.log("Розмір шрифту <h1>:", h1Styles.fontSize);
} else {
  console.log("<h1> на сторінці немає");
}
let elems = document.querySelectorAll("*"); 

elems.forEach(elem => {
    let oldColor = window.getComputedStyle(elem).backgroundColor;

    elem.addEventListener("mouseenter", function() {
        oldColor = window.getComputedStyle(elem).backgroundColor; 
        elem.style.backgroundColor = "red";
    });

    elem.addEventListener("mouseleave", function() {
        elem.style.backgroundColor = oldColor;
    });
});


/*Завдання 2
window.addEventListener('load', () => {
  setTimeout(loadNewImages, 5000);
});

function loadNewImages() {
  const imagesUrl = [
    "https://img.freepik.com/free-photo/mountains-lake_1398-1150.jpg?semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/free-photo/landscape-with-mountains-lake_1398-2287.jpg?semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/free-photo/landscape-with-mountains-lake_1398-1035.jpg?w=360",
    "https://img.freepik.com/free-photo/mountains-lake_1398-1153.jpg?semt=ais_hybrid&w=740&q=80"
  ];

  const productGrid = document.querySelector('.product-grid');

  imagesUrl.forEach((url, index) => {
    setTimeout(() => {
      const fragment = document.createDocumentFragment();
      const img = document.createElement('img');
      img.src = url;
      img.alt = `Зображення ${index + 1}`;
      img.style.width = '200px';
      img.style.margin = '10px';
      
      fragment.appendChild(img);
      productGrid.appendChild(fragment);
    }, index * 1000);
  });
}
*/

const _name = /^[A-Za-z0-9]{2,}$/
const _email = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
const _form = document.querySelector('pure-form');
let _strName = document.getElementById('Name');
let _strEmail = document.getElementById('Email');
let _pass = document.getElementById('Password');
_form.addEventListener("submit",(f)=>{
  let isValid = true;
  _strEmail.setCustomValidity("");
  _strName.setCustomValidity("");

  if(_strEmail.value.search(_email) === -1){
    _strEmail.setCustomValidity("Введіть коректний Email");
    isValid = false;
  }
  if(_strName.value.search(_name) === -1){
    _strName.value = _strName.value.replace(/[^A-Za-z0-9]/g,"");
  }
  if(!isValid){
    f.preventDefault();
    _strEmail.reportValidity();
    _strName.reportValidity();
  }
  _passConf.setCustomValidity("");
  if(_pass.value != _passConf.value){
    _passConf.setCustomValidity("Ви ввели різні паролі");
    f.preventDefault();
    _passConf.reportValidity();
  }
})