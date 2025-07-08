// Animate linear progress bars
let menuIcon = document.querySelector('.ri-menu-line');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

document.querySelectorAll('.progress-bar-fill').forEach(bar => {
  let percent = bar.getAttribute('data-percent');
  bar.style.width = percent + '%';
});

// Animate circular progress rings
document.querySelectorAll('.progress').forEach(circle => {
  let percent = circle.getAttribute('data-percent');
  let radius = circle.getAttribute('r');
  let circumference = 2 * Math.PI * radius;
  let offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
});

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      })
    }
  })
}

menuIcon.onclick = () => {
  menuIcon.classList.toggle('ri-menu-line');
  menuIcon.classList.toggle('ri-close-line');
  navbar.classList.toggle('active');
};