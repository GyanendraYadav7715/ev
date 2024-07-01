gsap.registerPlugin(ScrollTrigger);
//------------------------------------------------------------------THIS IS OUR STARTING PERFORMANCE SECTION CODE---------------------------------------------------//

// -------------------------------------------------------------------Navbar-Menu-Close-Content-Rendenring--------------------------------------------------------//
function menucloseopenrendercontent() {
  const vehicles = [
    { name: "Nexon", imageUrl: "./assets/nexon-ev.avif", links: [{ text: "Learn", href: "#" }] },
    { name: "Tiago", imageUrl: "./assets/tiago-ev.avif", links: [{ text: "Learn", href: "#" }] },
    { name: "Tigor", imageUrl: "./assets/tigor-ev.avif", links: [{ text: "Learn", href: "#" }] },
    { name: "Punch", imageUrl: "./assets/Punch-ev.avif", links: [{ text: "Learn", href: "#" }] },
  ];
  const vehiclesContainer = document.getElementById("vehicles-container");
  vehicles.forEach((vehicle) => {
    const vehicleDiv = document.createElement("div");
    vehicleDiv.innerHTML = `
                    <img src="${vehicle.imageUrl}" alt="${vehicle.name}" class="w-full">
                    <h2 class="text-2xl font-bold mt-4">${vehicle.name}</h2>
                    <div class="space-x-4 mt-2">
                        ${vehicle.links.map(link => `<a href="${link.href}" class="text-blue-500 hover:underline">${link.text}</a>`).join("")}
                    </div>`;
    vehiclesContainer.appendChild(vehicleDiv);
  });

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
  ];
  const navContainer = document.getElementById("navContainer");
  links.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.href = link.href;
    anchor.textContent = link.name;
    anchor.className = "block text-gray-700 hover:text-gray-900 hover:underline mb-2";
    navContainer.appendChild(anchor);
  });
}
menucloseopenrendercontent();

//------------------------------------------------------------------Navbar-Menu-Close-Open-Animation-Code----------------------------------------------------------//
function menucloseopenanimation() {
  let menu = gsap.timeline({ paused: true });
  menu.to(".menu", { top: "0", duration: 1 });
  menu.from("#vehicles-container img", { x: -150, opacity: 0, duration: 0.5, stagger: 0.15, rotate: 45 });
  menu.from("#vehicles-container h2", { y: 20, opacity: 0, duration: 0.5, stagger: 0.15, rotate: 45 });
  menu.from("#vehicles-container a", { opacity: 0, duration: 0.5, stagger: 0.15 });
  menu.from("#navContainer a", { y: 100, opacity: 0, duration: 0.5, stagger: 0.15 });
  menu.from(".close", { opacity: 0 });

  document.querySelector("nav button").addEventListener("click", () => menu.play());
  document.querySelector(".close").addEventListener("click", () => menu.reverse());
}
menucloseopenanimation();

//------------------------------------------------------------------Navbar-Element-Animation-Code-------------------------------------------------------------------//
function navbarAnimation() {
  gsap.timeline()
    .from("#Performance nav a img", { y: -50, duration: 0.5, delay: 1, opacity: 0 })
    .from("#nav-part2 h6", { y: -50, duration: 0.5, opacity: 0, stagger: 0.1 })
    .from("nav button", { x: 50, duration: 0.5, opacity: 0, stagger: 0.1 })
    .from(".mySwiper", { opacity: 0, duration: 0.8 });
}
navbarAnimation();

//------------------------------------------------------------------Landing-Page-Slider-Animation---------------------------------------------------------------
function landingPageSliderAnimation() {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChangeTransitionStart: runAnimation,
    },
  });

  function runAnimation() {
    const time = gsap.timeline();
    document.querySelectorAll(".animatedImage").forEach((image) => {
      time.from(image, { duration: 1, opacity: 0, x: 300, ease: "power3.out" });
    });
    time.from(".content h1", { y: 50, opacity: 0, duration: 0.3 });
    time.from(".landinglinks", { y: -40, opacity: 0, duration: 0.5, stagger: 0.25 });
  }

  document.addEventListener("DOMContentLoaded", runAnimation);
}
landingPageSliderAnimation();

//----------------------------------------------------------------THIS IS OUR ENDING PERFORMANCE SECTION CODE-------------------------------------------------------//

//----------------------------------------------------------------THIS IS OUR STARTING OUR-PRODUCTS SECTION CODE----------------------------------------------------//
function productAnimation() {


  gsap.from('.procenter', {
    opacity: 0,
    y: 50,
    duration: 1.3,
    scrollTrigger: {
      trigger: '[data-scroll-section]',
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: true
    }
  });
  gsap.utils.toArray('.product').forEach((product, i) => {
    const isOdd = i % 2 === 0;
    const fromDirection = isOdd ? '-=200' : '+=200';

    gsap.fromTo(product, { opacity: 0, x: fromDirection }, {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: product,
        start: 'top 75%',
        end: 'bottom 25%',

      }
    });

    gsap.from(product.querySelectorAll('h3, h6, .quote, a'), {
      opacity: 0,
      y: 20,
      duration: 0.5,
      delay: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: product,
        start: 'top 80%',
        end: 'bottom 40%',

      }
    });
  });
}
productAnimation();
//----------------------------------------------------------------THIS IS OUR ENDING OUR-PRODUCTS SECTION CODE----------------------------------------------------//

//----------------------------------------------------------------THIS IS OUR STARTING OUR-VISION SECTION CODE----------------------- -----------------------------//
function ourVisionAnimation() {
  gsap.from(".ourcenter", {
    y: -50,
    duration: 0.8,
    opacity: 0,
    scrollTrigger: {
      trigger: ".ourcenter",
      scroller: "body",
      start: "top 70%",
    },
  });

  document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector("#Ourvision video");
    gsap.from(video, {
      duration: 2,
      opacity: 0,
      scale: 0.5,
      ease: "power4.out",
      delay: 0.5,
      y: 50,
      rotationY: 180,
      scrollTrigger: {
        trigger: "#Ourvision  ",
        scroller: "body",
        start: "top 80%",
      },
    });
    video.addEventListener("mouseenter", () => {
      gsap.to(video, {
        duration: 0.5,
        scale: 1.1,
        rotation: 3,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
        filter: "blur(0) grayscale(0)",
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

}
ourVisionAnimation();
//----------------------------------------------------------------THIS IS OUR ENDING OUR-VISION SECTION CODE--------------------------------------------------------//

//------------------------------------------------------------THIS IS OUR STARTING CHARGING LOCATOR SECTION CODE----------------------------------------------------//

//-----------------------------------------------------------Loaction-List-Rendering-----------------------------------------------------------------------//
function chargingLocatorContentrending() {
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
}
chargingLocatorContentrending();
//----------------------------------------------------------------------------Charing-Sation-Animation------------------------------------------------------------//
function findChargingLocatorAnimation() {
  gsap.from(".charging ", {
    y: -50,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".charging",
      scroller: "body",
      start: "top 50%",
    },
  });
  // Function to animate elements
  function animateElements() {
    // Select elements to animate
    const elements = document.querySelectorAll('.container h3, .container p, .container input, .container img,.container iframe');

    // Loop through each element
    elements.forEach(element => {
      // Define animations using GSAP
      gsap.fromTo(element, {
        opacity: 0,
        y: 50
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: 1
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    animateElements();
  });
}
findChargingLocatorAnimation();
//------------------------------------------------------------THIS IS OUR ENDING CHARGING LOCATOR SECTION CODE----------------------------------------------------//

//-------------------------------------------------------THIS IS OUR STARTING OUR RANGE SECTION CODE-------------------------------------------------------------//
function ourrangeanimation() {
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
      start: "top 50%",
    },
  });
}
ourrangeanimation();

//-------------------------------------------------------THIS IS OUR ENDING OUR RANGE SECTION CODE-------------------------------------------------------------//

//-------------------------------------------------------THIS IS OUR STARTING SCHEDULE A TEST DRIVE SECTION CODE-------------------------------------------------------------//

//Schedule a Test Drive
function Scheduleatestdriveanimation() {
  gsap.from(".Schedule ", {
    y: -50,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".Schedule ",
      scroller: "body",
      start: "top 50%",

    },
  });
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
//-------------------------------------------------------THIS IS OUR ENDING SCHEDULE A TEST DRIVE SECTION CODE--------------------------------------------------------//

//-------------------------------------------------------THIS IS OUR ENDING  ABOUT US AS FOOTER SECTION CODE----------------------------------------------------------//


function forFooterallanimations() {

  gsap.from(".about h2", {
    y: -50,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".about ",
      scroller: "body",
      start: "top 50%",
    },
  });
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

//-------------------------------------------------------THIS IS OUR ENDING  ABOUT US AS FOOTER SECTION CODE----------------------------------------------------------//


//=========================================================STARING-FOR-ALL-H4-ELEMENT-UNDLERLINE ANIMATION============================================================//
function headindinganimetion() {

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
//=========================================================ENDING-FOR-ALL-H4-ELEMENT-UNDLERLINE ANIMATION============================================================//









