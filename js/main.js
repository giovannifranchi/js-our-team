const person1 = {
  firstName: "Wayne",
  lastName: "Barnett",
  role: "Founder & CEO",
  img: "img/wayne-barnett-founder-ceo.jpg",
};

const person2 = {
  firstName: "Angela",
  lastName: "Caroll",
  role: "Chief Editor",
  img: "img/angela-caroll-chief-editor.jpg",
};

const person3 = {
  firstName: "Walter",
  lastName: "Gordon",
  role: "Office Manager",
  img: "img/walter-gordon-office-manager.jpg",
};

const person4 = {
  firstName: "Angela",
  lastName: "Lopez",
  role: "Social Media Manager",
  img: "img/angela-lopez-social-media-manager.jpg",
};

const person5 = {
  firstName: "Scott",
  lastName: "Estrada",
  role: "Developer",
  img: "img/scott-estrada-developer.jpg",
};

const person6 = {
  firstName: "Barbara",
  lastName: "Ramos",
  role: "Graphic Designer",
  img: "img/barbara-ramos-graphic-designer.jpg",
};

function logProperties(arrayOfObj) {
  for (let i = 0; i < arrayOfObj.length; i++) {
    for (let key in arrayOfObj[i]) {
      console.log(arrayOfObj[i][key]);
    }
  }
}

function displayStrInDom(arrayOfObj, container) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < arrayOfObj.length; i++) {
    let divElement = document.createElement("div");
    divElement.innerText = "";
    for (let key in arrayOfObj[i]) {
      divElement.innerText += ` ${arrayOfObj[i][key]}`;
    }
    fragment.append(divElement);
  }
  container.append(fragment);
}

function createCards(arrayOfObj, container) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < arrayOfObj.length; i++) {
    let col = document.createElement("div");
    col.classList.add("col-4");
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("d-flex");
    card.classList.add("flex-column");
    let img = document.createElement("img");
    img.classList.add("img-fluid");
    img.src = arrayOfObj[i].img;
    let cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");
    let personName = document.createElement("h4");
    personName.classList.add("text-center");
    personName.innerText = `${arrayOfObj[i].firstName} ${arrayOfObj[i].lastName}`;
    let personRole = document.createElement("h5");
    personRole.classList.add("text-center");
    personRole.innerText = arrayOfObj[i].role;
    cardFooter.append(personName);
    cardFooter.append(personRole);
    card.append(img);
    card.append(cardFooter);
    col.append(card);
    fragment.append(col);
  }
  container.append(fragment);
}

function createCardsFromTemplate(template, arrayOfObj, container) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < arrayOfObj.length; i++) {
    let contentElement = template.content.cloneNode(true);
    let col = contentElement.firstElementChild;
    let card = col.firstElementChild;
    let img = card.firstElementChild;
    img.src = arrayOfObj[i].img;
    let cardFooter = card.lastElementChild;
    let name = cardFooter.firstElementChild;
    name.innerText = `${arrayOfObj[i].firstName} ${arrayOfObj[i].lastName}`
    let role = cardFooter.lastElementChild;
    role.innerText = arrayOfObj[i].role;
    fragment.append(contentElement);
  }
  container.append(fragment);
}

const persons = [person1, person2, person3, person4, person5, person6];
const container = document.querySelector(".row");
const template = document.getElementById("card");

// logProperties(persons);

// displayStrInDom(persons, container);

// createCards(persons, container);

createCardsFromTemplate(template, persons, container);


