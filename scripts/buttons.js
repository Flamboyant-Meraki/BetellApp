// Order button
document.getElementById("sendOrderBtn").addEventListener("click", handleSendOrder);

function handleSendOrder() {
    const articles = getArticles();
    const amount = getValue("amount");
    const totalPrice = getValue("totalPrice");
    const gettingStyle = getValue("gettingStyle");
    const customerEmail = prompt("Bitte geben Sie Ihre E-Mail-Adresse ein:");
    const orderMessage = generateOrderMessage(articles, amount, totalPrice, gettingStyle);

    setValue("customerEmail", customerEmail);
    setValue("orderMessage", orderMessage);

    document.getElementById("orderForm").submit();

    clearLocalStorage();
    resetFormFields();
}

function generateOrderMessage(articles, amount, totalPrice, gettingStyle) {
    let message = `
Artikel:
${articles}
Anzahl: ${amount}
Gesamtpreis: ${totalPrice}€
Abholart: ${gettingStyle}`;

    return message;
}

function getArticles() {
    const articlesElements = document.querySelectorAll("#articles .shoppingArticle");
    let articles = "";
    articlesElements.forEach(article => {
        const articleName = article.querySelector(".article-head h3").textContent;
        const articleQuantity = article.querySelector(".articleQuantity").value;
        articles += `${articleName} (Menge: ${articleQuantity})\n`;
    });
    return articles;
}

function getValue(id) {
    return document.getElementById(id).value;
}

function setValue(id, value) {
    document.getElementById(id).value = value;
}

function clearLocalStorage() {
    localStorage.removeItem("orderArticles"); // oder den spezifischen Schlüssel, der verwendet wird
}

function resetFormFields() {
    document.getElementById("articles").innerHTML = "";
    document.getElementById("amount").value = "0";
    document.getElementById("totalPrice").value = "0";
    alert("Die Bestellung wurde erfolgreich aufgegeben.");
}


function toggleShoppingCart() {
  const shoppingCart = document.querySelector("#shopping-cart");
  shoppingCart.classList.toggle("show");
}

// Dishbox functions
function toggleDishBox(dishBoxId, arrowId) {
  const dishBox = document.querySelector(`#${dishBoxId}`);
  dishBox.classList.toggle("show");

  const elementToRotate = document.querySelector(`#${arrowId}`);
  elementToRotate.classList.toggle("rotate-180deg");
}

// input Btns
function higherValue(articleName) {
  const storedArticles = JSON.parse(localStorage.getItem("orderArticles")) || [];
  const article = storedArticles.find(article => article.name === articleName);

  if (article) {
    article.quantity += 1;
    localStorage.setItem("orderArticles", JSON.stringify(storedArticles));

    const quantityInput = document.getElementById(`articleQuantity-${article.id}`);
    if (quantityInput) {
      quantityInput.value = article.quantity;
    }
    calculateTotalArticles();
    calculateTotalPrice();
  }
}

function lowerValue(articleName) {
  const storedArticles = JSON.parse(localStorage.getItem("orderArticles")) || [];
  const article = storedArticles.find(article => article.name === articleName);

  if (article && article.quantity > 1) {
    article.quantity -= 1;
    localStorage.setItem("orderArticles", JSON.stringify(storedArticles));

    const quantityInput = document.getElementById(`articleQuantity-${article.id}`);
    if (quantityInput) {
      quantityInput.value = article.quantity;
    }
    calculateTotalArticles();
    calculateTotalPrice();
  }
}

function toggleInputValue() {
  let checkbox = document.getElementById("switch");
  let input = document.getElementById("gettingStyle");
  let priceElements = document.getElementsByClassName("deliveryPrice");

  if (checkbox.checked) {
    input.value = "Lieferung";
    for (let price of priceElements) {
      price.classList.toggle("show");
    }
  } else {
    input.value = "Abholung";
    for (let price of priceElements) {
      price.classList.remove("show");
    }
  }
}

window.onload = function () {
  let checkbox = document.getElementById("switch");
  checkbox.addEventListener("change", toggleInputValue);
};

// updatePrice by delivery
document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('switch');
  const input = document.getElementById('totalPrice');

  checkbox.addEventListener('change', () => {
      input.value = (parseFloat(input.value) + (checkbox.checked ? 4 : 0)).toFixed(2);
  });
});
