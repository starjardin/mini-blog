console.log('it works');

// code your solution in here
const newPostTitle = document.createElement('h5');
const newPostContent = document.createElement('p');
const cardSpace = document.createElement('div');
const cardBody = document.createElement('div');
const posTitle = document.querySelector('#new-post-title');
const postContent = document.querySelector('#new-post-content');
const postForm = document.getElementsByTagName('form');
const submitButton = document.getElementById('submit-form');
const divPostStorage = document.querySelector('#post-list');

submitButton.addEventListener('click', ($event) => {
  $event.preventDefault();
  newPostTitle.textContent = `${posTitle.value}`;
  newPostContent.textContent = `${postContent.value}`;
});

newPostTitle.classList.add('card-title')
newPostContent.classList.add('card-text');
cardBody.classList.add('card-body');
cardSpace.classList.add('card', 'some-space')

cardBody.appendChild(newPostTitle);
cardBody.appendChild(newPostContent);
cardSpace.appendChild(cardBody);
divPostStorage.appendChild(cardSpace);
console.log(divPostStorage);