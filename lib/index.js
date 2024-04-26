// TODO - Fetch an activity with the Bored API - Let's psuedocode!
const url = 'https://www.boredapi.com/api/activity/';
// const button = document.querySelector(".btn-warning");
// const header = document.getElementById("activity");
// console.log(header);

// button.addEventListener("click", (event) => {
//   fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//     header.innerText = data["activity"]
//   });
// });

const button = document.querySelector(".btn-warning")
const header = document.querySelector("#activity")
console.log(header);

// button.addEventListener("click", (event) => {
//   const activities = ["go to the gym", "learn Chinese", "call your mom"];
//   const randomIndex = Math.floor(Math.random()*3);
//   // console.log(button);
//   console.log(event.currentTarget);
//   event.currentTarget.innerText = activities[randomIndex];
//   event.currentTarget.setAttribute("disabled", "ww");
//   // console.log(event.currentTarget.disabled);
// })

button.addEventListener("click", (event) => {
  fetch(url)
  .then(response => response.json())
  .then((data) => {
    // console.log(data);
    header.innerText = data["activity"]
  })
})
