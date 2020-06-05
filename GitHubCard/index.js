/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// const URL = 'https://api.github.com/users/cameronlares';

// axios.get(URL)
// .then(response=> console.log(response))
// .catch(error=>  console.log('Error',error ))




{
  /* <div class="card">
        <img src={image url of user} />
        <div class="card-info">
          <h3 class="name">{users name}</h3>
          <p class="username">{users user name}</p>
          <p>Location: {users location}</p>
          <p>Profile:
            <a href={address to users github page}>{address to users github page}</a>
          </p>
          <p>Followers: {users followers count}</p>
          <p>Following: {users following count}</p>
          <p>Bio: {users bio}</p>
        </div>
      </div> */
}
const followersArray = ['cameronlares',
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'

];

// const followersArray = ['https://api.github.com/users/cameronlares',
//   'https://api.github.com/users/tetondan',
//   'https://api.github.com/users/dustinmyers',
//   'https://api.github.com/users/justsml',
//   'https://api.github.com/users/luishrd',
//   'https://api.github.com/users/bigknell'

// ];


const cardCreator = function (arr) {
  const card = document.createElement('div') // class of card
  const img = document.createElement('img') //scr 
  const cardInfo = document.createElement('div')
  // nested
  const name = document.createElement('h3') //  name class
  const userName = document.createElement('p') // username class
  const myLocation = document.createElement('p')
  const profile = document.createElement('p')
  const href = document.createElement('a') // src href nested in p tag profile
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  //Add Classes
  card.classList.add('card')
  // img.setAttribute('src','users.avatar_url')
  name.classList.add('name')
  userName.classList.add('username')
  href.setAttribute('href', '')


  //Add Order

  card.appendChild(img)
  card.appendChild(cardInfo)
  cardInfo.appendChild(name)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(myLocation)
  cardInfo.appendChild(profile)
  profile.appendChild(href)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)

  img.src = arr.avatar_url
  name.textContent = arr.name
  userName.textContent = arr.login
  myLocation.textContent = `Location: ${arr.location}`
  href.href = arr.html_url
  followers.textContent = `Followers: ${arr.followers}`
  following.textContent = `Following: ${arr.following}`
  bio.textContent = `Bio: ${arr.bio}`
  return card
}

const fetchUsers = () => {

  followersArray.forEach(arr => {

      // axios.get(`${arr}`)
        axios.get(`https://api.github.com/users/${arr}`)

        .then(response => {
          const users = response.data;
          myCard.appendChild(cardCreator(users))
          //push axios. replace followersarray with arr in axios 

        })

      const myCard = document.querySelector('.cards')

      // })

      //  })
    })
    .catch(error => console.error(error));
};


fetchUsers()






/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/