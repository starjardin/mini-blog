console.log('it works');

// code your solution in here
const postForm = document.querySelector('form');
const submitButton = document.getElementById('submit-form');
const span = document.getElementsByClassName('badge badge-light');
// const check = document.querySelectorAll('');

const myPost = () => {
  const hobbies = document.createElement('span');
  const schoolLife = document.createElement('span');
  const personal = document.createElement('span');

  const cardBody = document.createElement('div');
  const cardSpace = document.createElement('div');
  const divPostStorage = document.querySelector('#post-list');
  const postContent = document.querySelector('#new-post-content');
  const newPostTitle = document.createElement('h5');
  const newPostContent = document.createElement('p');
  const posTitle = document.querySelector('#new-post-title');
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
  
  document.getElementById('hobbies-tag').addEventListener("change", ($event) => {
    if ($event.target.checked) {
      cardBody.appendChild(hobbies);
    }
  });
  hobbies.classList.add('badge', 'badge-light');
  
  document.getElementById('school-life-tag').addEventListener("change", ($event) => {
    if ($event.target.checked) {
      cardBody.appendChild(schoolLife);
    }
  });
  schoolLife.classList.add('badge', 'badge-light');
  
  document.getElementById('personal-tag').addEventListener("change", ($event) => {
    if ($event.target.checked) {
      cardBody.appendChild(personal);
    }
    personal.classList.add('badge', 'badge-light');
  });
};


submitButton.addEventListener('click', ($event) => {
  $event.preventDefault();
  myPost();
  postForm.reset();
  hobbies.textContent = "Hobbies";
  schoolLife.textContent = "School life";
  personal.textContent = "Personal";
});
