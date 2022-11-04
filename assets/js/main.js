const cardsContainer = document.getElementById('cardsContainer')

const imgPath = './assets/img/'

const team = [
   {
     name: 'Wayne Barnett',
     role: 'Founder & CEO',
     image: 'wayne-barnett-founder-ceo.jpg',
   },
   {
     name: 'Angela Caroll',
     role: 'Chief Editor',
     image: 'angela-caroll-chief-editor.jpg',
   },
   {
     name: 'Walter Gordon',
     role: 'Office Manager',
     image: 'walter-gordon-office-manager.jpg',
   },
   {
     name: 'Angela Lopez',
     role: 'Social Media Manager',
     image: 'angela-lopez-social-media-manager.jpg',
   },
   {
     name: 'Scott Estrada',
     role: 'Developer',
     image: 'scott-estrada-developer.jpg',
   },
   {
     name: 'Barbara Ramos',
     role: 'Graphic Designer',
     image: 'barbara-ramos-graphic-designer.jpg',
   },
];

for (let i = 0; i < team.length; i++){

   let element = team[i];
   console.log(element.name, element.role);

   cardsContainer.innerHTML += 
   `
   <div class="card col-3 m-3 p-0">
      <img src=${imgPath + element.image} class="card-img-top" alt="profile-image">
      <div class="card-body text-center">
         <h5 class="card-title">${element.name}</h5>
         <p class="card-text">${element.role}</p>
      </div>
   </div>
   `

}