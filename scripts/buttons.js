// Order button
document.getElementById('sendOrderBtn').addEventListener('click', function() {
    const articles = document.getElementById('articles').innerHTML;
    const amount = document.getElementById('amount').value;
    const totalPrice = document.getElementById('totalPrice').value;
    const gettingStyle = document.getElementById('gettingStyle').value;
    const customerEmail = prompt('Bitte geben Sie Ihre E-Mail-Adresse ein:');
    
    const orderMessage = `
Artikel:
${articles}
Menge: ${amount}
Gesamtpreis: ${totalPrice} €
Abholungsart: ${gettingStyle}
Abholung bestätigt: ${switchChecked}
    `;
    
    document.getElementById('customerEmail').value = customerEmail;
    document.getElementById('orderMessage').value = orderMessage;
    
    document.getElementById('orderForm').submit();

    // check keys in localStorage
    if (localStorage.getItem('orderArticles') || localStorage.getItem('cartAmount') || localStorage.getItem('cartTotalPrice')) {
        // localStorage leeren
        localStorage.removeItem('orderArticles');
        localStorage.removeItem('cartAmount');
        localStorage.removeItem('cartTotalPrice');
    }

    // check deleted keys from localstorage
    if (!localStorage.getItem('orderArticles') && !localStorage.getItem('cartAmount') && !localStorage.getItem('cartTotalPrice')) {
    } else {
        alert('Es gab ein Problem beim Leeren des localStorage.');
    }

    // empty basket in DOM
    document.getElementById('articles').innerHTML = '';
    document.getElementById('amount').value = '0';
    document.getElementById('totalPrice').value = '0';
});

// Sidebar functions
function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("show");
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
    const storedArticles =
      JSON.parse(localStorage.getItem("orderArticles")) || [];
    const existingArticleIndex = storedArticles.findIndex(
      (article) => article.name === articleName
    );
  
    if (existingArticleIndex !== -1) {
      storedArticles[existingArticleIndex].quantity += 1;
      localStorage.setItem("orderArticles", JSON.stringify(storedArticles));
  
      // actual input in DOM
      const quantityInput = document.getElementById(
        `articleQuantity-${storedArticles[existingArticleIndex].id}`
      );
      if (quantityInput) {
        quantityInput.value = storedArticles[existingArticleIndex].quantity;
      }
      calculateTotalArticles();
      calculateTotalPrice();
    }
  }
  
  function lowerValue(articleName) {
    const storedArticles =
      JSON.parse(localStorage.getItem("orderArticles")) || [];
    const existingArticleIndex = storedArticles.findIndex(
      (article) => article.name === articleName
    );
  
    if (existingArticleIndex !== -1) {
      if (storedArticles[existingArticleIndex].quantity > 1) {
        storedArticles[existingArticleIndex].quantity -= 1;
        localStorage.setItem("orderArticles", JSON.stringify(storedArticles));
  
        // actual input in DOM
        const quantityInput = document.getElementById(
          `articleQuantity-${storedArticles[existingArticleIndex].id}`
        );
        if (quantityInput) {
          quantityInput.value = storedArticles[existingArticleIndex].quantity;
        }
        calculateTotalArticles();
        calculateTotalPrice();
      }
    }
  }


  // delivery button
function toggleInputValue() {
    let checkbox = document.getElementById("switch");
    let input = document.getElementById("gettingStyle");
    
    if (checkbox.checked) {
        input.value = "Lieferung";
    } else {
        input.value = "Abholung";
    }
  }
  window.onload = function() {
    let checkbox = document.getElementById("switch");
    checkbox.addEventListener("change", toggleInputValue);
  };