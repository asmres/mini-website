// JavaScript file for blog website enhancements and animations

// Add smooth scrolling functionality to anchor links
document.addEventListener("DOMContentLoaded", function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    for (let anchor of anchorLinks) {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
          behavior: "smooth",
        });
      });
    }
  });
  
  // Add scroll reveal animation to elements
  window.addEventListener("scroll", revealElements);
  
  function revealElements() {
    const elements = document.querySelectorAll(".reveal");
    for (let element of elements) {
      if (isElementVisible(element)) {
        element.classList.add("visible");
      }
    }
  }
  
  function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Add animation to hero section
  const heroSection = document.querySelector(".hero");
  const heroImage = document.querySelector(".hero-image");
  const heroContent = document.querySelector(".hero-content");
  
  heroSection.addEventListener("mousemove", function(e) {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    heroImage.style.transform = `translateX(${xAxis}px) translateY(${yAxis}px)`;
    heroContent.style.transform = `translateX(${-xAxis}px) translateY(${-yAxis}px)`;
  });
  
  heroSection.addEventListener("mouseleave", function() {
    heroImage.style.transform = "translateX(0) translateY(0)";
    heroContent.style.transform = "translateX(0) translateY(0)";
  });
  
  // Add animation to featured blogs section
  const featuredBlogs = document.querySelector(".featured-blogs");
  const blogItems = featuredBlogs.querySelectorAll(".blog-item");
  
  for (let blogItem of blogItems) {
    blogItem.addEventListener("mouseenter", function() {
      this.classList.add("active");
    });
  
    blogItem.addEventListener("mouseleave", function() {
      this.classList.remove("active");
    });
  }

  document.addEventListener("DOMContentLoaded", function() {
    const style = document.createElement("style");
    style.innerHTML = `
      ::-webkit-scrollbar {
        width: 8px;
      }
  
      ::-webkit-scrollbar-track {
        background: #fff;
      }
  
      ::-webkit-scrollbar-thumb {
        background: #000;
      }
  
      ::-webkit-scrollbar-thumb:hover {
        background: #666;
      }
    `;
    document.head.appendChild(style);
  });