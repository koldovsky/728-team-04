(function () {
  const iconBurger = document.querySelector(".top-line__burger");
  const navigationsBody = document.querySelector(".top-nav__navigation");
  iconBurger.addEventListener("click", function (e) {
    document.body.classList.toggle("lock");
    iconBurger.classList.toggle("active");
    navigationsBody.classList.toggle("active");
  });

  const navLinks = document.querySelectorAll(".navigation__link");
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", (_) => {
      if (iconBurger.classList.contains("active")) {
        document.body.classList.remove("lock");
        iconBurger.classList.remove("active");
        navigationsBody.classList.remove("active");
      }
    });
  });

  const socialIconText = document.querySelectorAll(".social-icons__icon-text");
  socialIconText.forEach((iconText) => {
    iconText.addEventListener("mouseover", (_) => {
      const socialIconSvg = iconText.parentNode.querySelector(".social-icons__icon-outer");
      socialIconSvg.classList.add("social-icons__mouseover");
    });
    iconText.addEventListener("mouseout", (_) => {
      const socialIconSvg = iconText.parentNode.querySelector(".social-icons__icon-outer");
      socialIconSvg.classList.remove("social-icons__mouseover");
    });
  });
})();
