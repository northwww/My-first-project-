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
    setTimeout(() => { // ось тут ми обгортаємо створення елементів у setTimeout
      const newCard = document.createElement('div');
      newCard.classList.add('product-card');

      const img = document.createElement('img');
      img.src = url;
      img.alt = `Додатковий продукт ${index + 1}`;

      const title = document.createElement('h3');
      title.textContent = `природа ${index + 1}`;

      newCard.appendChild(img);
      newCard.appendChild(title);

      productGrid.appendChild(newCard);
    }, index * 1000); // затримка 1 сек для кожного наступного
  });
}
