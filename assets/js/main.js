const reviwes = [
  {
    id: 1,
    name: "Abdallah Atef",
    job: "Front End",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sed iure harum veniam,doloribus facilis? Ea asperiores architecto neque possimus",
    img: "./assets/img/1.jfif",
  },
  {
    id: 2,
    name: "Mohamed Ali",
    job: "Ui Ux Disignr",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sed ",
    img: "./assets/img/2.jfif",
  },
  {
    id: 3,
    name: "Ahmed Shapn",
    job: "Cyper Cecurity",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sed iure harum veniam,doloribus facilis? Ea asperiores ",
    img: "./assets/img/3.jpg",
  },
  {
    id: 4,
    name: "Seif Mohamed",
    job: "Markting",
    info: "Lorem ipsum dolor sit  Architecto sed iure harum veniam,doloribus facilis? Ea asperiores architecto neque possimus",
    img: "./assets/img/4.jfif",
  },
  {
    id: 5,
    name: "Marwan Atef",
    job: "Mobile Ablication",
    info: "Lorem ipsum dolor sit  harum veniam,doloribus facilis? Ea asperiores architecto neque possimus",
    img: "./assets/img/5.jfif",
  },
];

// Start a Difintion The Varibals

let img = document.getElementById("img");
let name = document.getElementById("name");
let job = document.getElementById("job");
let info = document.querySelector(".info");

//btn
const preveBtn = document.querySelector(".btn-preve");
const nextBtn = document.querySelector(".btn-next");
const randomBtn = document.querySelector(".random");
//counter in the object
let counterReviwes = 0;

nextBtn.addEventListener("click", function () {
  counterReviwes++;
  if (counterReviwes > 4) {
    counterReviwes = 0;
  }
  img.src = reviwes[counterReviwes].img;
  name.textContent = reviwes[counterReviwes].name;
  job.textContent = reviwes[counterReviwes].job;
  info.textContent = reviwes[counterReviwes].info;
});
preveBtn.addEventListener("click", function () {
  counterReviwes--;
  if (counterReviwes < 0) {
    counterReviwes = 4;
  }
  img.src = reviwes[counterReviwes].img;
  name.textContent = reviwes[counterReviwes].name;
  job.textContent = reviwes[counterReviwes].job;
  info.textContent = reviwes[counterReviwes].info;
});

// Random Button
randomBtn.addEventListener("click", function () {
  let randomIndex = Math.floor(Math.random() * reviwes.length);
  img.src = reviwes[randomIndex].img;
  name.textContent = reviwes[randomIndex].name;
  job.textContent = reviwes[randomIndex].job;
  info.textContent = reviwes[randomIndex].info;
});
