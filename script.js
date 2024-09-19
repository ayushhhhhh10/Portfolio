//smooth scrolling
(function () {
  const locomotiveScroll = new LocomotiveScroll();
})();

//functions
let circleMoving = () => {
  var cursor = document.querySelector("#circle");
  var projectpage = document.querySelector("#project-page");

  window.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.clientX,
      y: dets.clientY,
      duration: 0.7,
      ease: Power3.easeOut,
    });
  });
  projectpage.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      height: "80px",
      width: "80px",
      duration: 0.7,
      ease: Power3.easeOut,
    });
    cursor.innerText = "Click";
  });
  projectpage.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      height: "10px",
      width: "10px",
      duration: 0.7,
      ease: Power3.easeOut,
    });
    cursor.innerText = "";
  });
};

let page1Animation = () => {
  var timeline = gsap.timeline();

  timeline.from("#loading-page h1", {
    delay: 1,
    y: 50,
    stagger: 0.2,
    opacity: 0,
    duration: 1,
    ease: Power1.easeOut,
  });
  timeline.to("#loading-page h1", {
    delay: 0.5,
    y: -50,
    stagger: 0.2,
    opacity: 0,
    duration: 0.5,
    ease: Power3.easeOut,
  });
  timeline.to("#loading-page", {
    height: 0,
    duration: 1,
    ease: Power3.easeOut,
  });
  timeline.from("#heading h1", {
    delay: -1,
    y: 200,
    stagger: 0.2,
    duration: 1,
    ease: Power1.easeOut,
  });
  timeline.from("nav", {
    delay: -0.5,
    y: -10,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
  });
  timeline.from("#heading h3", {
    opacity: 0,
    duration: 0.5,
  });
  gsap.to("#page1", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "body",
      start: "10%",
      end: "80%",
      scrub: true,
    },
  });
};

function navigationClick() {
  gsap.to("#icon", {
    scale: 1,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "body",
      start: "3%",
      end: "6%",
      scrub: 1,
    },
  });

  gsap.to("nav", {
    y: -100,
    ease: Power3.easeOut,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "body",
      start: "0",
      end: "1%",
      scrub: 0.5,
    },
  });
  var c = 1;
  document.querySelector("#icon").addEventListener("click", function () {
    if (c == 1) {
      document.querySelector("#icon").innerHTML =
        '<i class="ri-close-fill"></i>';
      gsap.to("#navigation", {
        left: 0,
        ease: Power3.easeOut,
      });
      c = 0;
    } else {
      document.querySelector("#icon").innerHTML =
        '<i class="ri-menu-4-line"></i>';
      gsap.to("#navigation", {
        left: "-100%",
        ease: Power3.easeIn,
      });
      c = 1;
    }
  });
}

function page2Animation() {
  var data =
    "I create elevating digital experiences that inspire and connect with people through development and design.";
  var letters = data.split(" ");
  var clutter = "";
  letters.forEach(function (letter) {
    clutter += `<h1>${letter}</h1>`;
  });
  document.querySelector("#page2").innerHTML = clutter;
  gsap.from("#page2 h1", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      start: "230",
      end: "1%",
      scrub: 0.5,
    },
  });
}

function AboutSection() {
  var count = 0;
  document.querySelector("#skill1").addEventListener("click", function () {
    if (count == 0) {
      gsap.to("#para1", {
        display: "block",
      });
      count = 1;
    } else {
      gsap.to("#para1", {
        display: "none",
      });
      count = 0;
    }
  });
  document.querySelector("#skill2").addEventListener("click", function () {
    if (count == 0) {
      gsap.to("#para2", {
        display: "block",
      });
      count = 1;
    } else {
      gsap.to("#para2", {
        display: "none",
      });
      count = 0;
    }
  });
}

function projectPage() {
  //selections
  var project0 = document.querySelector("#project0");
  var project1 = document.querySelector("#project1");
  var project2 = document.querySelector("#project2");
  var project3 = document.querySelector("#project3");

  var image0 = document.querySelector("#image-box0");
  var image1 = document.querySelector("#image-box1");
  var image2 = document.querySelector("#image-box2");
  var image3 = document.querySelector("#image-box3");

  project0.addEventListener("mouseenter", function () {
    image0.style.opacity = "100%";
  });
  project0.addEventListener("mouseleave", function () {
    image0.style.opacity = "0";
  });

  project1.addEventListener("mouseenter", function () {
    image1.style.opacity = "100%";
  });
  project1.addEventListener("mouseleave", function () {
    image1.style.opacity = "0";
  });

  project2.addEventListener("mouseenter", function () {
    image2.style.opacity = "100%";
  });
  project2.addEventListener("mouseleave", function () {
    image2.style.opacity = "0";
  });

  project3.addEventListener("mouseenter", function () {
    image3.style.opacity = "100%";
  });
  project3.addEventListener("mouseleave", function () {
    image3.style.opacity = "0";
  });
}

function contactPage() {
  gsap.from("#contact-header h3", {
    y: 300,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#contact-page",
      scroller: "body",
      start: "-55%",
      end: "10%",
      scrub: 0.5,
    },
  });
  gsap.from("#contact-header h1", {
    y: 60,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#contact-page",
      scroller: "body",
      start: "-55%",
      end: "10%",
      scrub: 0.5,
    },
  });
}

function onTopButton() {
  var button = document.querySelector("#onTop");
  button.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

//function calling
circleMoving();
page1Animation();
navigationClick();
page2Animation();
AboutSection();
projectPage();
contactPage();
onTopButton();
