const data = [{
    name: "John Doe",
    age: 30,
    gender: 'male',
    lokingfor: "female",
    location: "Boston MA",
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  },
  {
    name: "Jen Smith",
    age: 326,
    gender: 'female',
    lokingfor: "male",
    location: "Lynn MA",
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: "William Johnson",
    age: 38,
    gender: 'male',
    lokingfor: "female",
    location: "Miami FL",
    image: 'https://randomuser.me/api/portraits/men/10.jpg'
  }, {
    name: "Emma Avery",
    age: 27,
    gender: 'female',
    lokingfor: "male",
    location: "New York  NY",
    image: 'https://randomuser.me/api/portraits/women/25.jpg'
  }
];

const profiles = profileIterator(data);

nextProfile();

//Next Event
document.getElementById('next').addEventListener("click", nextProfile);

//Next Profile display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
     <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lokingfor}</li>
     </ul>`

    document.getElementById("imgDisplay").innerHTML = `<img src=" ${currentProfile.image}">`
  } else {
    //No more profile
    window.location.reload()
  }
}


//Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0

  return {
    next: function () {
      return nextIndex < profiles.length ? {
        value: profiles[nextIndex++],
        done: false
      } : {
        done: true
      }
    }
  };
}