const person1 = {
    firstName: 'Wayne',
    lastName: 'Barnett',
    role: 'Founder & CEO',
    img: 'wayne-barnett-founder-ceo.jpg',
}

const person2 = {
    firstName: 'Angela',
    lastName: 'Caroll',
    role: 'Chief Editor',
    img: 'angela-caroll-chief-editor.jpg',
}

const person3 = {
    firstName: 'Walter',
    lastName: 'Gordon',
    role: 'Office Manager',
    img: 'walter-gordon-office-manager.jpg',
}

const person4 = {
    firstName: 'Angela',
    lastName: 'Lopez',
    role: 'Social Media Manager',
    img: 'angela-lopez-social-media-manager.jpg',
}

const person5 = {
    firstName: 'Scott',
    lastName: 'Estrada',
    role: 'Developer',
    img: 'scott-estrada-developer.jpg',
}


const person6 = {
    firstName: 'Barbara',
    lastName: 'Ramos',
    role: 'Graphic Designer',
    img: 'barbara-ramos-graphic-designer.jpg',
}


const persons = [person1, person2, person3, person4, person5, person6];
const container = document.querySelector('.container');

function logProperties(arrayOfObj){
    for(let i = 0; i < arrayOfObj.length; i++){
        for(let key in arrayOfObj[i]){
            console.log(arrayOfObj[i][key]);
        }
    }
}

function displayStrInDom(arrayOfObj, container){
    const fragment = document.createDocumentFragment();
    for(let i = 0; i < arrayOfObj.length; i++){
        let divElement = document.createElement('div');
        divElement.innerText = '';
        for(let key in arrayOfObj[i]){
            divElement.innerText += ` ${arrayOfObj[i][key]}`;
        }
        fragment.append(divElement);
    }
    container.append(fragment);
}

logProperties(persons);

displayStrInDom(persons, container);

