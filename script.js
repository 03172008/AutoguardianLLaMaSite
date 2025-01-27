// Smooth Scrolling

document.addEventListener("DOMContentLoaded", function() {
  // Add event listener to each navigation link
  document.querySelectorAll(".navigation-links li").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.target.href.split("#")[1];
      document.querySelector(`#${target}`).scrollIntoView({ behavior: "smooth" });
    });
  });

});

// Contact Form Validation

document.querySelector(".contact-form").addEventListener("submit", function(e) {
  // Prevent default form submission
  e.preventDefault();

  // Get input values
  const name = this.name.value;
  const email = this.email.value;
  const message = this.message.value;

  // Validate inputs
  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return false;
  }

// Reset form on successful submission

if (true) {
    document.querySelector(".contact-form").reset();
}
});
