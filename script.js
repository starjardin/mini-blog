console.log('it works');

// code your solution in here
const postForm = document.querySelector('form');
const posTitle = document.querySelector('#new-post-title');
const postContent = document.querySelector('#new-post-content');
const submitButton = document.getElementById('submit-form');
const divPostStorage = document.querySelector('#post-list');
const span = document.getElementsByClassName('badge badge-light');
const cardBody = document.createElement('div');
const cardSpace = document.createElement('div');
const check = document.querySelectorAll('')

const myPost = () => {
  const newPostTitle = document.createElement('h5');
  const newPostContent = document.createElement('p');
  cardBody.appendChild(newPostTitle);
  cardBody.appendChild(newPostContent);
  cardSpace.appendChild(cardBody);
  
  newPostTitle.classList.add('card-title')
  newPostContent.classList.add('card-text');
  cardBody.classList.add('card-body');
  cardSpace.classList.add('card', 'some-space');

  newPostTitle.textContent = `${posTitle.value}`;
  newPostContent.textContent = `${postContent.value}`;
  divPostStorage.appendChild(cardSpace);
};


submitButton.addEventListener('click', ($event) => {
  $event.preventDefault();
  myPost();
  postForm.reset();
  checkBox();
});

const checkBox = () => {
const hobbies = document.createElement('span');
document.getElementById('hobbies-tag').addEventListener("change", ($event) => {
  if ($event.target.checked) {
    cardBody.appendChild(hobbies);
  }
});
hobbies.classList.add('badge', 'badge-light');

const schoolLife = document.createElement('span');
document.getElementById('school-life-tag').addEventListener("change", ($event) => {
  if ($event.target.checked) {
    cardBody.appendChild(schoolLife);
  }
});
schoolLife.classList.add('badge', 'badge-light');

const personal = document.createElement('span');
document.getElementById('personal-tag').addEventListener("change", ($event) => {
  if ($event.target.checked) {
    cardBody.appendChild(personal);
  }
  personal.classList.add('badge', 'badge-light');
});

hobbies.textContent = "Hobbies";
schoolLife.textContent = "School life";
personal.textContent = "Personal";
};