
// menu bar icon 
const mobile_menu_container = document.querySelector('.mobile_menu_container')
const mobile_menu_wrapper = document.querySelector('.mobile_menu_wrapper')
const clickx = document.getElementById('pencet');

clickx.addEventListener('click', () => {
  clickx.classList.toggle('Diam');
  mobile_menu_container.classList.toggle('toggle');
  mobile_menu_wrapper.classList.toggle('toggle');
});



// header srcoll show header section
const headerScroll = document.querySelector('.header_section');
window.addEventListener('scroll', () => {
  if (window.scrollY > 250) {
    headerScroll.classList.add('is_sticky');
  } else {
    headerScroll.classList.remove('is_sticky');
  }
});



// current page active js code 
const nav_links = document.querySelectorAll('.nav_links');
const activePage = (links) => {
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    link.addEventListener('click', () => {
      links.forEach(element => {
        if (element.className == 'active') {
          element.classList.remove('active');
        }
      });
      links[i].classList.add('active');

      // didden and show mobile menu 
      clickx.classList.toggle('Diam');
      mobile_menu_container.classList.toggle('toggle');
      mobile_menu_wrapper.classList.toggle('toggle');
    })

  }
}

activePage(nav_links[0].childNodes)
activePage(nav_links[1].childNodes)


// copy text js code 
const copyButton = document.getElementById("copy_email");

const copyText = (e) => {
  window.getSelection().selectAllChildren(copyButton);
  document.execCommand("copy");
  e.target.setAttribute("tooltip", "Copied! ✅");
};

const resetTooltip = (e) => {
  e.target.setAttribute("tooltip", "Copy to clipboard");
};

copyButton.addEventListener("click", (e) => copyText(e));
copyButton.addEventListener("mouseover", (e) => resetTooltip(e));