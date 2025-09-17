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

