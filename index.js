/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")


// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
const header = document.getElementById("header")

function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

header.addEventListener('click', function(event){toggleColor(event.target)})




/***** Deliverable 2 *****/
const form = document.querySelector("#new-player-form")
form.addEventListener('submit', function(event){
  event.preventDefault()
  let player = {
    number: event.target.number.value,
    name: event.target.name.value,
    nickanme: event.target.nickname.value,
    photo: event.target.photo.value,
    likes: 1000
  }
  renderPlayer(player)
  form.reset()

})



/***** Deliverable 3 *****/

playerContainer.addEventListener('click', function(event){
  if (event.target.className === 'like-button'){
    let playerLikes = event.target.parentNode.querySelector('.likes')
    playerLikes.innerText = `${(parseInt(playerLikes.innerText) + 1)} likes`
  }
})