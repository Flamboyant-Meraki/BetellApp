function getDishTemplate(id, title, description, price) {
  return  `
            <div class="dishTemplate" id="${id}">
              <h3>${title}</h3>
              <p>${description}</p>
              <span>${price}</span>
              <button id="addOrderButton" onclick="addToOrder('${id}', '${title}', '${price}')">
                <img
                  class="menu-icon hoverIcon"
                  src="./assets/icons/add.png"
                  alt="Plus"
                />
              </button>
            </div>
          `;
}

function displayArticle(article) {
  const orderArticles = document.getElementById("articles");
  const articleHTML = `
      <div class="shoppingArticle" id="${article.id}">
          <div class="article-head">
            <button class="deleteBtn" data-name="${article.name}"><img src="./assets/icons/delete.png" alt="Bin"></button>
            <h3>${article.name}</h3>
            <p>${article.price}</p>
          </div>  
          <div class="articleContent">
                <div>
                  <button onclick="lowerValue('${article.name}')"><img src="./assets/icons/slideopen.png" alt="less"></button>
                  <input type="text" class="articleQuantity" id="articleQuantity-${article.id}" value="${article.quantity}">
                  <button onclick="higherValue('${article.name}')"><img class="turn180" src="./assets/icons/slideopen.png" alt="more"></button>
                </div>
          </div>
          <hr>
      </div>
  `;
  orderArticles.innerHTML += articleHTML;
}