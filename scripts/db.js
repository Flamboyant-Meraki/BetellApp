document.addEventListener("DOMContentLoaded", function () {
    // BREAD
    const breadDishes = [
      {id: "article1", title: "Bauernbrot", description: "Ein rustikales, herzhaftes Mischbrot mit kräftiger Kruste und saftiger Krume, traditionell aus Roggen und Weizenmehl gebacken.", price: "8.65€"},
      {id: "article2", title: "Weißbrot", description: "Ein klassisches, süffiges Brot mit einer knusprigen Kruste und einer weichen, flauschigen Krume, ideal für Sandwiches und zur Seite von herzhaften Gerichten.", price: "6.85€"},
      {id: "article3", title: "Gesunder Gerald", description: "Das Gersten Vital ist ein saftiges Vollkornbrot aus Gerste und Roggen.", price: "9.30€"},
      {id: "article4", title: "Ciabatta", description: "Ein italienisches Weißbrot mit einer knusprigen Kruste und einer weichen, luftigen Krume.", price: "8.30€"},
      {id: "article5", title: "Sauerteigbrot", description: "Ein Brot mit einem charakteristisch leicht sauren Geschmack, das durch natürliche Fermentation hergestellt wird.", price: "9.00€"},
      {id: "article6", title: "Baguette", description: "Frisches, knuspriges Baguette - ideal für Ihre nächste Mahlzeit.", price: "3.30€"},
      {id: "article7", title: "Pfiffiger Puck", description: "Probieren Sie unser dunkles, aromatisches Pumpernickel mit einem Hauch von Süße.", price: "4.24€"}
    ];
  
    const breadBox = document.getElementById("dishBox1");
    breadDishes.forEach((dish) => {
      const dishHTML = getDishTemplate(dish.id, dish.title, dish.description, dish.price);
      breadBox.innerHTML += dishHTML;
    });
  
    // ROLLS
    const rollDishes = [
      {id: "article8", title: "Kaiserbrötchen", description: "Knuspriges Weizenbrötchen mit charakteristischer Sternform.", price: "0.40€"},
      {id: "article9", title: "Vollkornbrötchen", description: "Gesundes Brötchen aus Vollkornmehl mit hohem Ballaststoffgehalt.", price: "0.55€"},
      {id: "article10", title: "Roggenbrötchen", description: "Herzhaftes Roggenbrötchen mit kräftigem Geschmack.", price: "0.50€"},
      {id: "article11", title: "Sonnenblumenbrötchen", description: "Weizenbrötchen mit knackigen Sonnenblumenkernen.", price: "0.60€"},
      {id: "article12", title: "Laugenbrötchen", description: "Salziges Brötchen mit einer glänzenden, goldbraunen Kruste.", price: "0.45€"},
      {id: "article13", title: "Mehrkornbrötchen", description: "Brötchen mit einer Mischung aus verschiedenen Körnern und Samen.", price: "0.65€"},
      {id: "article14", title: "Kartoffelbrötchen", description: "Weiches Brötchen mit Kartoffelanteil, das länger frisch bleibt.", price: "0.50€"},
      {id: "article15", title: "Kürbiskernbrötchen", description: "Saftiges Brötchen mit knackigen Kürbiskernen.", price: "0.70€"},
      {id: "article16", title: "Dinkelbrötchen", description: "Leicht nussiges Brötchen aus Dinkelmehl.", price: "0.60€"},
      {id: "article17", title: "Sesambrötchen", description: "Weizenbrötchen mit aromatischen Sesamsamen bestreut.", price: "0.55€"},
    ];
  
    const rollBox = document.getElementById("dishBox2");
    rollDishes.forEach((dish) => {
      const dishHTML = getDishTemplate(dish.id, dish.title, dish.description, dish.price);
      rollBox.innerHTML += dishHTML;
    });
  
    // SANDWICHES
    const sandwichDishes = [
      {id: "article18", title: "Käsebrötchen", description: "Leckeres Brötchen mit mildem Käse überbacken.", price: "0.99€" },
      {id: "article19", title: "Roggenbrot mit Eiersalat", description: "Herzhaftes Roggenbrot belegt mit hausgemachtem Eiersalat.", price: "2.10€"},
      {id: "article20", title: "Salamibrötchen", description: "Herzhaftes Brötchen mit feiner Salami und einem Hauch Butter.", price: "1.84€" },
      {id: "article21", title: "Fladenbrot mit Hummus", description: "Weiches Fladenbrot, dick mit Hummus bestrichen und mit Oliven verziert.", price: "2.24€" },
      {id: "article22", title: "Mehrkornbrot mit Avocado", description: "Gesundes Mehrkornbrot, belegt mit cremiger Avocado und Tomaten.", price: "2.35€" },
      {id: "article23", title: "Sandwich mit Hähnchen", description: "Vollkornsandwich belegt mit gegrilltem Hähnchen und frischem Gemüse.", price: "2.74€" },
      {id: "article24", title: "Pitabrot mit Falafel", description: "Orientalisches Pitabrot belegt mit knusprigen Falafel und Tahini-Sauce.", price: "2.55€" },
    ];
  
    const sandwichBox = document.getElementById("dishBox3");
    sandwichDishes.forEach((dish) => {
      const dishHTML = getDishTemplate(dish.id, dish.title, dish.description, dish.price);
      sandwichBox.innerHTML += dishHTML;
    });
  
    // DRINKS
    const drinkDishes = [
      {id: "article25", title: "Cappuccino", description: "Espresso mit aufgeschäumter Milch und einer Schicht Milchschaum.", price: "2.80€"},
      {id: "article26", title: "Latte Macchiato", description: "Heiße Milch mit einem Schuss Espresso und viel Schaum.", price: "3.00€"},
      {id: "article27", title: "Americano", description: "Espresso, verlängert mit heißem Wasser für einen milderen Geschmack.", price: "2.20€"},
      {id: "article28", title: "Flat White", description: "Doppio (doppelter Espresso) mit samtig aufgeschäumter Milch.", price: "3.20€"},
      {id: "article29", title: "Chai Latte", description: "Würziger Teemix aus Schwarztee und Gewürzen mit aufgeschäumter Milch.", price: "3.50€"},
      {id: "article30", title: "Heiße Schokolade", description: "Cremiger Schokoladengenuss mit Sahnehaube.", price: "2.50€"},
      {id: "article31", title: "Eiskaffee", description: "Gekühlter Kaffee mit Vanilleeis und Sahne.", price: "4.00€"},
      {id: "article32", title: "Frappé", description: "Kalt geschlagener Kaffee mit Eis, Milch und Zucker.", price: "3.00€"},
    ];
  
    const drinkBox = document.getElementById("dishBox4");
    drinkDishes.forEach((dish) => {
      const dishHTML = getDishTemplate(dish.id, dish.title, dish.description, dish.price);
      drinkBox.innerHTML += dishHTML;
    });
  });