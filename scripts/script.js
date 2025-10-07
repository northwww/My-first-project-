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
      // СОЗДАЕМ FRAGMENT
      const fragment = document.createDocumentFragment();
      const img = document.createElement('img');
      img.src = url;
      img.alt = `Зображення ${index + 1}`;
      img.style.width = '200px';
      img.style.margin = '10px';
      
      // Добавляем в fragment, потом fragment в DOM
      fragment.appendChild(img);
      productGrid.appendChild(fragment);
    }, index * 1000);
  });
}