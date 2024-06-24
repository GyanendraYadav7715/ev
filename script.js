// Register the plugin
gsap.registerPlugin(ScrollTrigger);

// navbar-menu-close-content
function menucloseopenrendercontent() {
  const vehicles = [
    {
      name: "Nexon",
      imageUrl: "./assets/nexon-ev.avif",
      links: [{ text: "Learn", href: "#" }],
    },
    {
      name: "Tiago",
      imageUrl: "./assets/tiago-ev.avif",
      links: [{ text: "Learn", href: "#" }],
    },
    {
      name: "Tigor",
      imageUrl: "./assets/tigor-ev.avif",
      links: [{ text: "Learn", href: "#" }],
    },
    {
      name: "Punch",
      imageUrl: "./assets/Punch-ev.avif",
      links: [{ text: "Learn", href: "#" }],
    },
  ];
  const vehiclesContainer = document.getElementById("vehicles-container");
  vehicles.map((vehicle) => {
    const vehicleDiv = document.createElement("div");
    vehicleDiv.innerHTML = `
                <img src="${vehicle.imageUrl}" alt="${
      vehicle.name
    }" class="w-full">
                <h2 class="text-2xl font-bold mt-4">${vehicle.name}</h2>
                <div class="space-x-4 mt-2">
                    ${vehicle.links
                      .map(
                        (link) =>
                          `<a href="${link.href}" class="text-blue-500 hover:underline ">${link.text}</a>`
                      )
                      .join("")}
                </div>`;
    vehiclesContainer.appendChild(vehicleDiv);
  });
  //menu-links
  const links = [
    { name: "Digital Showroom", href: "#" },
    { name: "Test Drive", href: "#" },
    { name: "Charging Locator", href: "#" },
    { name: "Dealer Locator", href: "#" },
    { name: "Request a call back", href: "#" },
    { name: "Concept Cars", href: "#" },
    { name: "Rewards", href: "#" },
    { name: "Exchange Car", href: "#" },
    { name: "Services", href: "#" },
    { name: "Accessories", href: "#" },
    { name: "Account", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Sitemap", href: "#" },
  ];
  const navContainer = document.getElementById("navContainer");
  links.map((link) => {
    const anchor = document.createElement("a");
    anchor.href = link.href;
    anchor.textContent = link.name;
    anchor.className = "block text-gray-700 hover:text-blue-500 mb-2";
    navContainer.appendChild(anchor);
  });
}
menucloseopenrendercontent();
// navbar-menu-close-animaiton-content
function menucloseopenanime() {
  let tl = gsap.timeline();
  tl.to(".menu", {
    top: "0",
    duration: 0.5,
  });
  tl.from("#vehicles-container img", {
    x: -150,
    opacity: 0,
    duration: 0.5,
    stagger: 0.15,
    rotate: 45,
  });
  tl.from("#navContainer a", {
    y: 100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.15,
  });
  tl.from(".close", {
    opacity: 0,
  });
  tl.pause();
  document.querySelector("nav button").addEventListener("click", function () {
    tl.play();
  });
  document.querySelector(".close").addEventListener("click", function () {
    tl.reverse();
  });
}
menucloseopenanime();
//all-h2-heading-animation
function headindinganimetion() {
  gsap.from("#Ourvision h2", {
    y: -50,
    duration: 0.8,
    opacity: 0,
    scrollTrigger: {
      trigger: "#Ourvision",
      scroller: "body",
      start: "top 30%",
    },
  });
  gsap.from(".charging h2", {
    y: -50,
    duration: 0.8,
    opacity: 0,
    scrollTrigger: {
      trigger: ".charging",
      scroller: "body",
      start: "top 30%",
    },
  });
  gsap.from(".ourrange h2", {
    y: -50,
    duration: 0.8,
    opacity: 0,
    scrollTrigger: {
      trigger: ".ourrange",
      scroller: "body",
      start: "top 30%",
    },
  });
  gsap.from(".Schedule h2", {
    y: -50,
    duration: 0.8,
    opacity: 0,
    scrollTrigger: {
      trigger: ".Schedule h2",
      scroller: "body",
      start: "top -30%",
    },
  });
  gsap.from(".about h2", {
    y: -50,
    duration: 0.8,
    opacity: 0,
    scrollTrigger: {
      trigger: ".about ",
      scroller: "body",
      start: "top -30%",
    },
  });
}
headindinganimetion();

gsap.to(".page3-element", {
  transform: "translate(-33%)",
  scrollTrigger: {
    trigger: ".page3-element",
    scroller: "body",
    start: "top 10%",
    end: "top -70%",
    scrub: 2,
    pin: true,
  },
});

gsap.from("#page3-top h4", {
  opacity: 0,
  duration: 3,
  y: -20,
  scrollTrigger: {
    trigger: "#page3-top",
    scroller: "body",
    scrub: 4,
    start: "top 50%",
  },
});
gsap.from("#page3-top h2", {
  opacity: 0,
  duration: 3,
  x: -20,
  scrollTrigger: {
    trigger: "#page3-top",
    scroller: "body",
    scrub: 4,
    start: "top 50%",
  },
});
gsap.from(".page3-nav span", {
  opacity: 0,
  duration: 3,
  x: 20,
  scrollTrigger: {
    trigger: ".page3-nav",
    scroller: "body",
    scrub: 4,
    start: "top 50%",
  },
});

// test deive

let Scheduletl = gsap.timeline();

Scheduletl.from(".container h1", {
  duration: 1.5,
  x: -100,
  opacity: 0,
});
Scheduletl.from(".container p", {
  duration: 1.5,
  x: 100,
  opacity: 0,
});
Scheduletl.from(".container video", {
  duration: 1.5,
  scale: 0.8,
  opacity: 0,
});
Scheduletl.from(".container a", {
  duration: 1.5,
  scale: 0.8,
  opacity: 0,
});

// footer gsap animation
function forFooterallanimations() {
  // Add event listeners to all links
  document.querySelectorAll(".link").forEach((link) => {
    link.addEventListener("mouseenter", function () {
      const icon = link.querySelector("i");
      gsap.to(icon, {
        scale: 2,
        rotate: 360,
        duration: 1,
        delay: 0,
        yoyo: true,
      });
    });
  });
  document.querySelectorAll(".link").forEach((link) => {
    link.addEventListener("mouseleave", function () {
      const icon = link.querySelector("i");
      gsap.to(icon, {
        scale: 1,
        rotate: -360,
        duration: 1,
        delay: 0,
        yoyo: true,
      });
    });
  });

  // h1 tata motors

  function braketheText() {
    let tata = document.querySelector(".tata");
    let tatah1 = tata.textContent;
    let splitedtext = tatah1.split("");
    let halfvalue = splitedtext.length / 2;
    let clutter = "";

    splitedtext.forEach(function (e, idx) {
      if (idx < halfvalue) {
        clutter += `<span class="a">${e}</span>`;
      } else {
        clutter += `<span class="b">${e}</span>`;
      }
    });

    console.log(clutter);
    tata.innerHTML = clutter;
  }
  braketheText();

  gsap.from(".tata .a", {
    opacity: 0,
    y: 150,
    duration: 0.6,
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".tata",
      scroller: "body",
      start: "top 70%",
    },
  });
  gsap.from(".tata .b", {
    opacity: 0,
    y: 150,
    duration: 0.6,
    stagger: -0.15,
    scrollTrigger: {
      trigger: ".tata",
      scroller: "body",
      start: "top 70%",
    },
  });

  //line svg

  let finalPath = `M 10 10 Q 750 10 1490 10`;

  let string = document.querySelector(".string");
  string.addEventListener("mouseenter", function (dets) {
    path = `M 10 10 Q  ${dets.x} ${dets.y} 1490 10`;
    gsap.to("svg path", {
      attr: { d: path },
      duration: 0.3,
      ease: "power.out",
    });
  });
  string.addEventListener("mouseleave", function () {
    gsap.to("svg path", {
      attr: { d: finalPath },
      duration: 1.5,
      ease: "elastic.out(1,0.2)",
    });
  });
}
forFooterallanimations();

// gsap animation code is started
document.querySelectorAll("h2").forEach((h2) => {
  h2.addEventListener("mouseenter", () => {
    gsap.to(h2.querySelector(".underline"), {
      duration: 0.5,
      scaleX: 1,
      transformOrigin: "left",
      ease: "power2.out",
    });
  });

  h2.addEventListener("mouseleave", () => {
    gsap.to(h2.querySelector(".underline"), {
      duration: 0.5,
      scaleX: 0,
      transformOrigin: "right",
      ease: "power2.out",
    });
  });
});
document.querySelectorAll("h4").forEach((h4) => {
  h4.addEventListener("mouseenter", () => {
    gsap.to(h4.querySelector(".underline"), {
      duration: 0.5,
      scaleX: 1,
      transformOrigin: "left",
      ease: "power2.out",
    });
  });

  h4.addEventListener("mouseleave", () => {
    gsap.to(h4.querySelector(".underline"), {
      duration: 0.5,
      scaleX: 0,
      transformOrigin: "right",
      ease: "power2.out",
    });
  });
});
