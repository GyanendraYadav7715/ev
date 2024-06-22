const vehicles = [
  {
    name: "Nexon",
    imageUrl: "./assets/nexon-ev.avif",
    links: [
      { text: "Learn", href: "#" },
      { text: "Order", href: "#" },
    ],
  },
  {
    name: "Tiago",
    imageUrl: "./assets/tiago-ev.avif",
    links: [
      { text: "Learn", href: "#" },
      { text: "Order", href: "#" },
    ],
  },
  {
    name: "Tigor",
    imageUrl: "./assets/tigor-ev.avif",
    links: [
      { text: "Learn", href: "#" },
      { text: "Order", href: "#" },
    ],
  },
  {
    name: "Punch",
    imageUrl: "./assets/Punch-ev.avif",
    links: [
      { text: "Learn", href: "#" },
      { text: "Order", href: "#" },
    ],
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
                          `<a href="${link.href}" class="text-blue-500 hover:underline">${link.text}</a>`
                      )
                      .join("")}
                </div>
            `;
  vehiclesContainer.appendChild(vehicleDiv);
});
// our ranges of the products

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

gsap.from(".container h1", { duration: 1.5, x: -100, opacity: 0 });
gsap.from(".container p", { duration: 1.5, x: 100, opacity: 0, delay: 0.5 });
gsap.from(".container video", {
  duration: 1.5,
  scale: 0.8,
  opacity: 0,
  delay: 1,
  
});
gsap.from(".container a", {
  duration: 1.5,
  scale: 0.8,
  opacity: 0,
  delay: 1,

});

// footer gsap animation
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
});
gsap.from(".tata .b", {
  opacity: 0,
  y: 150,
  duration: 0.6,
  stagger: -0.15,
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

// gsap animation code is started
