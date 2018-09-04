const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('button').addEventListener('click', fetchData)
});

function fetchData() {
  fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(jsonData => render(jsonData.results[0]))
}

function render(personData) {
  fullname.innerText = `${personData.name.first} ${personData.name.last}`
  email.innerText = personData.email
  street.innerText = personData.location.street
  city.innerText = personData.location.city
  state.innerText = personData.location.state
  postcode.innerText = personData.location.postcode
  phone.innerText = personData.phone
  cell.innerText = personData.cell
  date_of_birth.innerText = personData.dob.date
}
