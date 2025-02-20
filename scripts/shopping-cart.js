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
  console.log(`Deleting article: ${articleName}`);
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
    console.log(`Article name to delete: ${articleName}`);
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
// Aufruf der Funktion
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

  // Ergebnis in das totalPrice Eingabefeld setzen
  document.getElementById("totalPrice").value = totalPrice.toFixed(2); // auf 2 Dezimalstellen runden
}

// Beispielaufruf der Funktion beim Laden der Seite
window.onload = function () {
  displayStoredArticles();
  calculateTotalArticles();
  calculateTotalPrice();
};


