// service: service_t02ht9n
// template: template_48le9xw
// public key: 84s8nGLZJITkN594v

async function contact(event) {
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");

  event.preventDefault();

  loading.classList += " modal__overlay--visible";

  try {
    await emailjs.sendForm(
      "service_t02ht9n",
      "template_48le9xw",
      event.target,
      "84s8nGLZJITkN594v"
    );

    // setTimeout(() => {
    //   loading.classList.remove("modal__overlay--visible");
    //   success.classList.add("modal__overlay--visible");
    //   console.log("email sent");
    // }, 2000);
  } catch (error) {
    console.log("error sending email");
    loading.classList.remove("modal__overlay--visible");
    alert(
      "The email service is currently unavailable - please contact me directly at chow.tedric@gmail.com."
    );
  }
}

let isModalOpen = false;
function toggleModal() {
  if (isModalOpen) {
    document.body.classList.remove("modal__open");
    isModalOpen = false;
    console.log("modal closed");
  } else {
    document.body.classList.add("modal__open");
    isModalOpen = true;
    console.log("modal open");
  }
}

let darkMode = false;
function toggleContrast() {
  if (darkMode) {
    document.body.classList.remove("dark__theme");
    darkMode = false;
    console.log("dark mode off");
  } else {
    document.body.classList.add("dark__theme");
    darkMode = true;
    console.log("dark mode on");
  }
}

const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 === 1;
    const bool = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * bool}px, ${y * bool}px) rotate(${x * bool * 10}deg)`;
  }

  //   for (let i = 0; i < shapes.length; i++) {
  //     const isOdd = i % 2 === 1;
  //     const bool = isOdd ? -1 : 1;
  //   }
}
