// save in localstorage
function displayStoredArticles() {
  const orderArticles = document.getElementById("articles");
  orderArticles.innerHTML = "";
  const storedArticles = JSON.parse(localStorage.getItem("orderArticles")) || [];
  storedArticles.forEach((article) => {
    displayArticle(article);
  });
}

window.onload = displayStoredArticles();

// delete article
function deleteArticle(articleName) {
  const storedArticles =
    JSON.parse(localStorage.getItem("orderArticles")) || [];
  const updatedArticles = storedArticles.filter(
    (article) => article.name !== articleName
  );

  localStorage.setItem("orderArticles", JSON.stringify(updatedArticles));
  displayStoredArticles();
}

document.addEventListener("click", function (event) {
  const deleteButton = event.target.closest(".deleteBtn");
  if (deleteButton) {
    const articleName = deleteButton.getAttribute("data-name");
    deleteArticle(articleName);
  }
  calculateTotalArticles();
  calculateTotalPrice();
});


// Total fuctions
function calculateTotalArticles() {
  let total = 0;
  const storedArticles =
    JSON.parse(localStorage.getItem("orderArticles")) || [];
  for (let article of storedArticles) {
    total += article.quantity;
  }
  document.getElementById("amount").value = total;
}
calculateTotalArticles();

function calculateTotalPrice() {
  let totalPrice = 0;
  const storedArticles =
    JSON.parse(localStorage.getItem("orderArticles")) || [];

  for (let article of storedArticles) {
    const price = parseFloat(article.price);
    const quantity = parseInt(article.quantity, 10);

    if (!isNaN(price) && !isNaN(quantity)) {
      totalPrice += price * quantity;
    }
  }
  document.getElementById("totalPrice").value = totalPrice.toFixed(2);
}

window.onload = function () {
  displayStoredArticles();
  calculateTotalArticles();
  calculateTotalPrice();
};

function addToOrder(articleId, articleName, articlesPrice) {
  const storedArticles = JSON.parse(localStorage.getItem("orderArticles")) || [];
  const article = storedArticles.find(article => article.name === articleName);

  if (article) {
    article.quantity += 1;
  } else {
    storedArticles.push({ id: articleId, name: articleName, price: articlesPrice, quantity: 1 });
  }

  localStorage.setItem("orderArticles", JSON.stringify(storedArticles));
  displayStoredArticles();
}

