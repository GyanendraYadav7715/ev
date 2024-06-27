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

    duration: 1,
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
      start: "top 10%",
      
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
}
headindinganimetion();
//Our Range of products animations
function ourrangeanimation() {
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
}
ourrangeanimation();
//Schedule a Test Drive
function Scheduleatestdriveanimation() {
  let Scheduletl = gsap.timeline({
    scrollTrigger: {
      trigger: ".Schedule",
      scroller: "body",
      start: "top 0%",
    },
  });

  Scheduletl.from(".container h1", {
    duration: 0.5,
    x: -100,
    opacity: 0,
  });
  Scheduletl.from(".container p", {
    duration: 0.5,
    x: 100,
    opacity: 0,
  });
  Scheduletl.from(".container video", {
    duration: 1,
    scale: 0.8,
    opacity: 0,
  });
  Scheduletl.from(".container a", {
    duration: 0.5,
    scale: 0.8,
    opacity: 0,
  });
}
Scheduleatestdriveanimation();
//footer-all-emlement-animation
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

  document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector("#page3 video");

    // Initial animation on load
    gsap.from(video, {
      duration: 2,
      opacity: 0,
      scale: 0.5,
      ease: "power4.out",
      delay: 0.5,
      y: 50, // Adding vertical slide effect
      rotationY: 180, // Adding a flip effect
      scrollTrigger: {
        trigger: "video ",
        scroller: "body",
        start: "top 70%",
      },
    });

    // Hover animation
    video.addEventListener("mouseenter", () => {
      gsap.to(video, {
        duration: 0.5,
        scale: 1.1,
        rotation: 3,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
        filter: "blur(0) grayscale(0)"
       
      });
    });

    video.addEventListener("mouseleave", () => {
      gsap.to(video, {
        duration: 0.5,
        scale: 1,
        rotation: 0,
        boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
         filter: "blur(3px) grayscale(20%)",
      });
    });
  });


   const commuteSlider = document.getElementById("daily-commute");
   const commuteValue = document.getElementById("commute-value");
   const fuelPriceSlider = document.getElementById("fuel-price");
   const fuelPriceValue = document.getElementById("fuel-price-value");

   commuteSlider.addEventListener("input", () => {
     commuteValue.textContent = commuteSlider.value + " km";
   });

   fuelPriceSlider.addEventListener("input", () => {
     fuelPriceValue.textContent = "₹" + fuelPriceSlider.value;
   });
   var swiper = new Swiper(".mySwiper", {
     spaceBetween: 30,
     centeredSlides: true,
     autoplay: {
       delay: 2500,
       disableOnInteraction: false,
     },
     pagination: {
       el: ".swiper-pagination",
       clickable: true,
     },
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
   });

const locations = [
  {
    name: "LC EV hub shamshabad",
  },
  {
    name: "Unity Mall Vasai DC Charger",
  },
  {
    name: "Hotel Classik Dombivali DC Charger",
  },
  {
    name: "R City Mall, Ghatkopar",
  },
  {
    name: "Ginger Mumbai, Andheri East",
  },
  {
    name: "Tata Power RS, Versova",
  },
  {
    name: "Heritage Motors, Panchpakhadi",
  },
  {
    name: "Tata Power, Vikhroli",
  },
  {
    name: "Bombay House, Fort",
  },
  {
    name: "Godrej One, Vikhroli",
  },
  {
    name: "Inderjit Cars, Mira Road",
  },
  {
    name: "IOCL, Breach Candy",
  },
  {
    name: "Puneet, Prabadevi",
  },
  {
    name: "IOCL - FORT Motors, Goregaon",
  },
  {
    name: "IOCL - COCO, Prabhadevi",
  },
  {
    name: "Nathani Heights, Mumbai Central",
  },
  {
    name: "CSMT Station, Fort",
  },
  {
    name: "Mahanagar Gas Limited, Wadala",
  },
  {
    name: "IOCL COCO, BKC",
  },
  {
    name: "Zenith Chemical Works Pvt Ltd, Andheri East",
  },
  {
    name: "Hotel Executive Enclave, Bandra",
  },
  {
    name: "Brookfield, Powai (Spectra)",
  },
  {
    name: "Brookfield, Powai",
  },
  {
    name: "IOCL iCarPort, Andheri East",
  },
  {
    name: "IOCL BARC, Chembur",
  },
  {
    name: "Anand Cinema, Thane East",
  },
  {
    name: "TML Sagar Motors, Patparganj",
  },
  {
    name: "Panvel Industrial Fastners, Mum-Pune Expressway",
  },
  {
    name: "Oberoi Mall, Goregaon",
  },
  {
    name: "CR - Kalyan Station, Kalyan West",
  },
  {
    name: "CR - Lokmanya Tilak Station, Kurla",
  },
  {
    name: "CR - Bhandup Station, Bhandup East",
  },
  {
    name: "WR - Mumbai Central Station, Tardeo",
  },
  {
    name: "Trimurti Petroleum, Panvel",
  },
  {
    name: "Police Petrol Pump, Ambernath",
  },
  {
    name: "The Capital Mall, Nallasopara East",
  },
  {
    name: "Hotel Suba International, Andheri East",
  },
  {
    name: "Hotel Suba Galaxy, Andheri East",
  },
  {
    name: "Hotel Suba Palace, Fort",
  },
  {
    name: "The Taj Mahal Palace, Colaba",
  },
  {
    name: "Pratha NGO, near Bus Depot - Ghatkopar East",
  },
  {
    name: "Pratha NGO, Naydu Colony - Ghatkopar East",
  },
  {
    name: "Pratha NGO, Godrej Colony - Vikhroli",
  },
  {
    name: "Phoenix Marketcity, Kurla",
  },
  {
    name: "Taj Wellington Mews, Colaba",
  },
  {
    name: "Taj Santacruz, Mumbai",
  },
  {
    name: "Vijay Associate, Virar West",
  },
  {
    name: "The Park, CBD Belapur",
  },
  {
    name: "Ashuraj Agencies, Pawne",
  },
  {
    name: "The President, Cuffe Parade",
  },
  {
    name: "Vivanta Navi Mumbai, Turbhe",
  },
  {
    name: "Audi Service, Kalina",
  },
  {
    name: "Taj Lands End, Bandra West",
  },
  {
    name: "Radisson Blu, Marol Metro Station",
  },
  {
    name: "MH | Navi Mumbai | Capital EV Car Rental",
  },
  {
    name: "Neelkanth Business Park, Vidyavihar West",
  },
  {
    name: "Fortune Cars, Navi Mumbai",
  },
  {
    name: "Decathlon Malad",
  },
  {
    name: "MIDC Industrial Area",
  },
  {
    name: "HP Petrol Pump Gaondevi Mandir",
  },
  {
    name: "MG Motor India",
  },
  {
    name: "Haji Ali Jn, Thackeray Udyan",
  },
  {
    name: "MH | Mumbai | Powai #Hiranandani Gardens",
  },
  {
    name: "MH | Mumbai | The Westin Mumbai Powai Lake",
  },
  {
    name: "MH | Mumbai | NSCI - Worli",
  },
  {
    name: "MH | Mumbai | Ro-Ro Service Jetty - Mumbai",
  },
  {
    name: "MH | Mumbai | JW Marriott Sahar",
  },
  {
    name: "MH | Mumbai | JW Marriott Mumbai Juhu (BOMJW)",
  },
  {
    name: "MH | Navi Mumbai | Four Points by Sheraton Navi Mumbai",
  },
  {
    name: "MH | Navi Mumbai | Marriott Executive Apartments - Rupa Renaissance",
  },
  {
    name: "BP-JHAJJAR KOTLI",
  },
  {
    name: "Magenta TTC, Turbhe",
  },
  {
    name: "Prima Bay",
  },
  {
    name: "MG Motors Thane-Fortum (50kw)",
  },
  {
    name: "MSEDCL POWERUP",
  },
  {
    name: "MSEDCL Rustomjee Substation PowerUp",
  },
  {
    name: "MSEDCL Airoli Substation PowerUP",
  },
  {
    name: "MSEDCL Rabale - PowerUpEV (50KW)",
  },
  {
    name: "MSEDCL CBD Belapur - PowerUpEV (50KW)",
  },
  {
    name: "MSEDCL Dream Substation Bhandup W",
  },
  {
    name: "SCCG Thane-ChargeGrid (60kw)",
  },
  {
    name: "Parag Building Khar-ChargeGrid (30kw)",
  },
  {
    name: "Prabhat Building Magenta FC",
  },
  {
    name: "Mahindra First Choice-Pure Energy EV (50kw)",
  },
  {
    name: "BMW Navnit Motors-RechargeEV (24kw)",
  },
  {
    name: "Tata Power, Borivali",
  },
  {
    name: "Sofitel Hotel BKC - Jio BP Pulse",
  },
  {
    name: "Reliance Mall",
  },
  {
    name: "Reliance Acme Mall",
  },
  {
    name: "GreenShift DC 30kW @ Arctica, Kalyan",
  },
  {
    name: "PARAMETER ENGINEERING PROJECTS",
  },
  {
    name: "Trident, Bandra Kurla",
  },
  {
    name: "POM 122kW Ev Charger",
  },
  {
    name: "Tata Power, Salsette",
  },
  {
    name: "MH | MMRDA Parking at BKC Near Dhirubhai Ambani School",
  },
  {
    name: "Trident, Nariman Point",
  },
  {
    name: "Srijan Cheritable trust",
  },
  {
    name: "SWAGAT AUTO",
  },
  {
    name: "KINI HIGHWAY PETROLEUM",
  },
  {
    name: "SHRI MAI FILLING STATION",
  },
  {
    name: "DEBARIGATE FILLING STATION",
  },
];

const locationList = document.getElementById("location-list");

locationList.innerHTML = locations
  .map(
    (location) =>
      `<li><span class="mr-4"><i class="ri-map-pin-line"></i></span>${location.name}</li>`
  )
  .join("");

var swiper = new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChangeTransitionStart: function () {
      var activeSlide = document.querySelector(".swiper-slide-active");
      gsap.fromTo(
        activeSlide,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      );
    },
  },
});
