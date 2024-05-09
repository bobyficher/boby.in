// import { Application } from '@splinetool/runtime';

// make sure you have a canvas in the body
//const canvas = document.getElementById('canvas3d');

// start the application and load the scene
//const spline = new Application(canvas);
//spline.load('https://prod.spline.design/Iang-QPHJv0jPoJY/scene.splinecode');

document.addEventListener("DOMContentLoaded", function () {
    // Ensure isMobileDevice() function is defined to accurately detect mobile devices
    if (!isMobileDevice()) {
      // Get the element you want to animate
      let groupImage = document.querySelector('.hero-section .profile-photo');
  
      // Ensure groupImage is not null (element exists)
      if (groupImage) {
        // Create a GSAP animation using the groupImage variable
        gsap.to(groupImage, { // Corrected to use the groupImage variable
          y: "-200px", // Moves the image 200px upwards
          scrollTrigger: {
            trigger: '.hero-section', // Updated to '.hero-section' assuming that's your intended trigger element
            start: "top top", // Starts the animation at the top of the hero section
            end: "bottom top", // Ends the animation at the bottom of the hero section
            scrub: true // Smooth scrolling effect
          }
        });
      }
    }
  });
  
  
  // Function to check if the device is a mobile device
  function isMobileDevice() {
    return window.innerWidth <= 768; // Adjust the width as per your mobile device breakpoints
  }
  
  
  
  
    gsap.registerPlugin(ScrollTrigger);
  
    window.addEventListener('load', () => {
        const titles = document.querySelectorAll('.title-gsap');
        
        titles.forEach((title, index) => {
            gsap.fromTo(title, {
                opacity: 0,
              scale: 1.1,
              y: '8vh'
            }, {
                opacity: 1,
                scale: 1,
                y: 0,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: title,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: true
                }
            });
        });
    });
  
  
  
  
  
    document.addEventListener("DOMContentLoaded", function() {
      var grid = document.querySelector('.grid');
      
      var msnry = new Masonry(grid, {
          itemSelector: '.content, .content1',
          columnWidth: '.content',
          percentPosition: true,
          gutter: 16
      });
      
      // Ensure all images are loaded before applying the layout
      imagesLoaded(grid).on('always', function() {
          msnry.layout();
      });
    });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const hoverButton = document.getElementById("hoverButton");
    const futureVideo = document.getElementById("futureVideo");
  
    hoverButton.addEventListener("mouseover", function () {
      gsap.to("#futureVideo", {
        opacity: 1,
        duration: 1.5,
        ease: Power4
      });
      futureVideo.play();
    });
  
    hoverButton.addEventListener("mouseleave", function () {
      gsap.to("#futureVideo", {
        opacity: 0,
        duration: 1.5,
        ease: Power4
      });
      futureVideo.pause();
      futureVideo.currentTime = 0; // Reset video to the beginning
    });
  });
  
  
  
  
  
  
  // images aniamtion
  
  
  
    document.addEventListener("DOMContentLoaded", function() {
      // Function to initialize hover effect
      function initHoverEffect(sectionClass) {
        var sections = document.querySelectorAll(sectionClass);
  
        sections.forEach(function(section) {
          var images = section.querySelectorAll('.image-wrapper img, .image-wrapper1 img');
          var currentImage = 0;
  
          function nextImage() {
            images[currentImage].style.opacity = 1; // Hide current image
            currentImage = (currentImage + 1) % images.length; // Move to the next image
            images[currentImage].style.opacity = 1; // Show next image
          }
  
          section.addEventListener('mouseenter', function() {
            // Start the interval when hovering
            imageInterval = setInterval(nextImage, 1000); // Change image every 2 seconds
          });
  
          section.addEventListener('mouseleave', function() {
            // Clear the interval when not hovering
            clearInterval(imageInterval);
            // Hide all images except the first one
            images.forEach((img, index) => {
              img.style.opacity = index === 0 ? 1 : 0;
            });
            currentImage = 0; // Reset the counter to the first image
          });
        });
      }
  
      // Initialize hover effect for both sections
      initHoverEffect('.content1');
      initHoverEffect('.content1.featured');
    });
  
  
  
  
  
  
  
  
  
  
  
  
  
  // Function to initialize GSAP animations only on mobile
  function initAnimationsOnMobile() {
    // Check if the screen width is less than or equal to 768px (considered as mobile view)
    if (window.innerWidth <= 768) {
      // Get all content containers
      const contentContainers = document.querySelectorAll('.content, .content1');
  
      // Loop through each container and define GSAP animations
      contentContainers.forEach((container, index) => {
        // Define the animation for each container
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top 95%", // Change the percentage value to adjust the start position
            end: "bottom 95%", // Change the percentage value to adjust the end position
            markers: false, // Optional: Shows markers for debugging
            toggleActions: "restart none none reverse" // Restart animation when reaching start, pause when leaving, no action when reaching end, reverse when scrolling up
          }
        });
  
        // Add animation properties to the timeline
        tl.from(container, { y: 100, duration: 1 }); // Example animation, change properties as needed
      });
    }
  }
  
  // Initialize animations only on mobile
  initAnimationsOnMobile();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    document.getElementById('copyButton').addEventListener('click', function() {
      // Get the email address
      var email = 'bhaveshchaubey37@gmail.com';
    
      // Create a temporary input element
      var tempInput = document.createElement('input');
      tempInput.value = email;
    
      // Append the input element to the document
      document.body.appendChild(tempInput);
    
      // Select and copy the email address
      tempInput.select();
      document.execCommand('copy');
    
      // Remove the temporary input element
      document.body.removeChild(tempInput);
    
      // Change the button text to "Copied"
      var btnCopied = document.querySelector('.btn_copied');
      btnCopied.textContent = 'Email Copied';
    
      // Optional: Reset the button text after a certain delay (e.g., 2 seconds)
      setTimeout(function() {
        btnCopied.textContent = 'Copy Email';
      }, 500);
    });
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    function initMarqueeAnimation() {
      const animationConfig = {
          duration: 5,
          x: "-125%",
          repeat: -1,
          ease: "linear"
      };
  
      const marqueeContainer = document.querySelector(".js-btn-loop");
      gsap.to(marqueeContainer, {
          ...animationConfig
      });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
      // Other code ...
  
      // Call the function to initialize marquee animation
      initMarqueeAnimation();
  });
  
  
  
  
  
  
  
  
  
  
  
  
  // Function to update Uttarakhand time
  function updateUttarakhandTime() {
    const options = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        timeZone: "Asia/Kolkata", // Updated timeZone for Uttarakhand
    };
    const timeString = new Date().toLocaleString("en-US", options);
    document.getElementById("time").textContent = timeString;
  }
  
  // Function to get weather information for kerala
  function getUttarakhandWeather() {
    const cityName = "Thiruvananthapuram"; // City in kerala
    const apiKey = "159fee27b0d5c9f3b20d5c9d6d3d511b";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const temperature = (data.main.temp - 273.15).toFixed(1);
            document.getElementById("temperature").textContent = `${temperature}\xb0C`;
            document.getElementById("weather-icon").src = getWeatherIcon(data.weather[0].main);
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
            document.getElementById("temperature").textContent = "Temperature data unavailable";
        });
  }
  
  // Function to get weather icon based on weather condition
  function getWeatherIcon(weatherCondition) {
    console.log(weatherCondition,"this is the weather condition")
    switch (weatherCondition) {
        case "Clear":
        default:
            return "img/clear.svg";
        case "Clouds":
            return "img/clouds.svg";
        case "Rain":
            return "img/rain.svg";
        case "Snow":
            return "img/snow.svg";
    }
  }
  
  // Invoke the functions for Uttarakhand
  updateUttarakhandTime();
  getUttarakhandWeather();
  
  // Set intervals for updating time and weather
  setInterval(updateUttarakhandTime, 1000);
  setInterval(getUttarakhandWeather, 600000);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  document.addEventListener("DOMContentLoaded", function() {
      var cursor = document.getElementById('viewMoreCursor');
      var content = document.querySelector('.content1');
    
      // Function to move the cursor
      function moveCursor(e) {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: 'Power3.easeOut'
        });
      }
    
      // Show and animate cursor on hover
      content.addEventListener('mouseenter', function(e) {
        gsap.to(cursor, { scale: 1, autoAlpha: 1 });
        moveCursor(e);
      });
    
      // Hide cursor on mouse leave
      content.addEventListener('mouseleave', function() {
        gsap.to(cursor, { scale: 0.5, autoAlpha: 0 });
      });
    
      // Move cursor on mouse move
      content.addEventListener('mousemove', moveCursor);
    });
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    window.addEventListener('scroll', function() {
      var scrollPosition = window.pageYOffset;
      var backgroundPosition = "50% " + (scrollPosition * 0.5) + "px";
      document.querySelector('.full-width').style.backgroundPosition = backgroundPosition;
    });
  
  
  
  
  
  
  
  
  
  
  
  
  
    // JavaScript for Testimonials Slider
    document.addEventListener('DOMContentLoaded', (event) => {
      const slides = document.querySelectorAll('.slide');
      const dots = document.querySelectorAll('.dot');
  
      function setActiveSlide(index) {
          slides.forEach((slide, i) => {
              slide.classList.remove('active');
              dots[i].classList.remove('active');
          });
          slides[index].classList.add('active');
          dots[index].classList.add('active');
      }
  
      dots.forEach((dot, index) => {
          dot.addEventListener('click', () => setActiveSlide(index));
      });
  
      // Initialize the first slide and dot as active
      setActiveSlide(0);
  });
  
  let currentSlideIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  
  function showSlide(index) {
      slides[currentSlideIndex].classList.remove('active');
      slides[index].classList.add('active');
      dots[currentSlideIndex].classList.remove('active');
      dots[index].classList.add('active');
      currentSlideIndex = index;
  }
  
  function slideLeft() {
      let newIndex = currentSlideIndex - 1;
      if (newIndex < 0) {
          newIndex = slides.length - 1;
      }
      showSlide(newIndex);
  }
  
  function slideRight() {
      let newIndex = currentSlideIndex + 1;
      if (newIndex >= slides.length) {
          newIndex = 0;
      }
      showSlide(newIndex);
  }
  
  
  
  
  
  
  
  
  
  
  
  
  const cursor = new MouseFollower({
      el: null,
      container: document.body,
      className: 'mf-cursor',
      innerClassName: 'mf-cursor-inner',
      textClassName: 'mf-cursor-text',
      mediaClassName: 'mf-cursor-media',
      mediaBoxClassName: 'mf-cursor-media-box',
      iconSvgClassName: 'mf-svgsprite',
      iconSvgNamePrefix: '-',
      iconSvgSrc: '',
      dataAttr: 'cursor',
      hiddenState: '-hidden',
      textState: '-text',
      iconState: '-icon',
      activeState: '-active',
      mediaState: '-media',
      stateDetection: {
          '-pointer': 'a,button',
          '-hidden': 'iframe'
      },
      visible: true,
      visibleOnState: false,
      speed: 0.55,
      ease: 'expo.out',
      overwrite: true,
      skewing: 0,
      skewingText: 2,
      skewingIcon: 2,
      skewingMedia: 2,
      skewingDelta: 0.001,
      skewingDeltaMax: 0.15,
      stickDelta: 0.15,
      showTimeout: 20,
      hideOnLeave: true,
      hideTimeout: 300,
      hideMediaTimeout: 300
  });
  
   
  
  
      // Function to initialize the custom cursor
      function initCustomCursor() {
        const cursor = new MouseFollower({
          // ... all your existing options
        });
      }
    
      // Check if the screen width is more than 768px
      if (window.innerWidth > 768) {
        // Initialize the custom cursor for non-mobile devices
        initCustomCursor();
      }
    
      // Optional: Re-check on window resize or orientation change if needed
      window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
          // Optionally, implement logic to properly destroy or hide the custom cursor for smaller screens
        } else {
          // Re-initialize the custom cursor for larger screens
          initCustomCursor();
        }
      });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // -----------------map------------------
      var map;
      var zoomLevel = 10; // Set initial zoom level to 10
      var zoomCount = 0; // Count of zoom actions performed, starting at 0 for default zoom level
  
      function loadMapScenario() {
          var indiaLocation = new Microsoft.Maps.Location(29.140036, 79.501166); // Coordinates for India
  
          // Initialize the map
          map = new Microsoft.Maps.Map('#bingMap', {
              center: indiaLocation,
              zoom: zoomLevel,
              disablePanning: true,
              disableZooming: true,
              showLocateMeButton: false,
              showMapTypeSelector: false,
              showZoomButtons: false,
              disableMouseInput: true,
              showScalebar: false
          });
  
          // Zoom control buttons
          var zoomInButton = document.getElementById('zoomIn');
          var zoomOutButton = document.getElementById('zoomOut');
  
          // Zoom In functionality
          zoomInButton.onclick = function() {
              if (zoomCount < 2) { // Allows for 3 distinct zoom levels
                  zoomCount++;
                  updateZoomLevel();
              }
          };
  
          // Zoom Out functionality
          zoomOutButton.onclick = function() {
              if (zoomCount > -2) { // Allows for 3 distinct zoom levels
                  zoomCount--;
                  updateZoomLevel();
              }
          };
  
         // Update the zoom level on the map
  function updateZoomLevel() {
  var newZoomLevel = calculateZoomLevel();
  // Trigger the map to update its zoom level with animation
  map.setView({ zoom: newZoomLevel, animate: true });
  
  // Adjust the timing or add additional animations if needed
  // This timeout is adjusted to match the expected duration of the map's zoom animation
  setTimeout(updateZoomButtons, 500); // Adjust this delay based on the actual animation time
  }
  
  function calculateZoomLevel() {
  // Smoother transitions between zoom levels
  switch (zoomCount) {
  case 1:
  return 12; // Slightly closer
  case 0:
  return 10; // Default zoom level
  case -1:
  return 7; // Slightly further away
  case -2:
  return 3; // More zoomed out
  default:
  return 10; // Default to initial zoom level
  }
  }
  
  
          // Update the state of the zoom buttons
          function updateZoomButtons() {
              // Disable or enable buttons based on zoomCount
              zoomInButton.disabled = zoomCount >= 0;
              zoomOutButton.disabled = zoomCount <= -2;
  
              // Optionally, hide or show the buttons at the ends
              zoomOutButton.style.display = zoomCount <= -2 ? 'none' : 'block';
              zoomInButton.style.display = zoomCount >= 0 ? 'none' : 'block';
          }
  
          // Initialize button states and map view
          updateZoomButtons();
          updateZoomLevel();
      }
  
