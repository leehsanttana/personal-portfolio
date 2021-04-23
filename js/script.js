const page = document.querySelector('body');

const header = document.querySelector('.header');
const logo = document.querySelector('.logo');
const navbar = document.querySelector('.navbar');
const btnMenu = document.querySelector('.btn-menu');

const mainContent = document.querySelector('.main-content');
const triangle = document.querySelector('.triangle');
const socialLinks = document.querySelector('.social-links');

const aboutSection = document.querySelector('.about-section');

const menuTab = document.querySelectorAll('.tab-menu li');
const contentTab = document.querySelectorAll('.tab-content .content-group');

const experienceMenuTab = document.querySelectorAll ('[data-time-line="tab"] li')
const experienceContentTab = document.querySelectorAll ('[data-time-line="content"] section')

function showMenu() {
    navbar.classList.toggle('active-menu');
    btnMenu.classList.toggle('active-btn');
}

btnMenu.addEventListener('click', showMenu);

function Initialeffect(){
    page.classList.add('effect-on-load');
    logo.classList.add('active');
    navbar.classList.add('active');
    setTimeout(() => {
        triangle.classList.add('active');
        setTimeout(() => {
            mainContent.classList.add('active');
            socialLinks.classList.add('active');
        }, 1000);
    }, 1200);
}

window.addEventListener('load', Initialeffect);

function changeColor(){
    (window.pageYOffset > 60) ? header.classList.add('change-bg') : header.classList.remove('change-bg');
}

window.addEventListener('scroll', changeColor);

function scrollInternalLink() {
    const links = document.querySelectorAll('a[href^="#"]');
  
    function getScrollTopByHref(element) {
      const id = element.getAttribute('href');
      return document.querySelector(id).offsetTop;
    }
  
    function scrollToPosition(to) {
      window.scroll({
        top: to,
        behavior: 'smooth',
      });
    }
  
    function scrollToIdOnClick(event) {
      event.preventDefault();
      const to = getScrollTopByHref(event.currentTarget) - 60;
      scrollToPosition(to);
      navbar.classList.remove('active-menu');
      btnMenu.classList.remove('active-btn');
    }
  
    links.forEach((links, i) => {
      links.addEventListener('click', scrollToIdOnClick);
    });
  }
  
  scrollInternalLink();

function activeEffectScroll() {
    function scrollEffect() {
    
        const topScroll = document.querySelectorAll('[data-effect="top"]');
        const subTopScroll = document.querySelectorAll('[data-effect="sub-top"]');
        const leftScroll = document.querySelectorAll('[data-effect="left"]');
        const bottomScroll = document.querySelectorAll('[data-effect="bottom"]');
    
        if(topScroll.length){
            function animaScroll() {
                topScroll.forEach((section) => {
                    const sectionTop = section.getBoundingClientRect().top -500;
                    if(sectionTop < 0){
                        section.classList.add('active');
                    } else {
                        section.classList.remove('active');
                    }
                });
            }
    
            animaScroll();
        }
    
        if(subTopScroll.length){
            function animaScroll() {
                subTopScroll.forEach((section) => {
                    const sectionTop = section.getBoundingClientRect().top -700;
                    if(sectionTop < 0){
                        section.classList.add('active');
                    } else {
                        section.classList.remove('active');
                    }
                });
            }
    
            animaScroll();
        }
    
        if(leftScroll.length){
            function animaScroll() {
                leftScroll.forEach((section) => {
                    const sectionTop = section.getBoundingClientRect().top -600;
                    if(sectionTop < 0){
                        section.classList.add('active');
                    } else {
                        section.classList.remove('active');
                    }
                });
            }
    
            animaScroll();
        }
    
        if(bottomScroll.length){
            function animaScroll() {
                bottomScroll.forEach((section) => {
                    const sectionTop = section.getBoundingClientRect().top -600;
                    if(sectionTop < 0){
                        section.classList.add('active');
                    } else {
                        section.classList.remove('active');
                    }
                });
            }
    
            animaScroll();
        }
    }
    
    window.addEventListener('scroll', scrollEffect);
}

activeEffectScroll();

function experienceTabs(){
    experienceMenuTab[1].classList.add('active');
    experienceContentTab[1].classList.add('active');
    function activeExperienceTab(i) {

        experienceMenuTab.forEach((item) => {
            item.classList.remove('active');
        })

        experienceContentTab.forEach((item) => {
            item.classList.remove('active');
        })


        experienceMenuTab[i].classList.add('active');
        experienceContentTab[i].classList.add('active');
    }

    experienceMenuTab.forEach((item, i) => {
        item.addEventListener('click', () => {
            activeExperienceTab(i);
        });
    })
}

experienceTabs();

function projectTabs() {
    menuTab[0].classList.add('active');
    contentTab[0].classList.add('active');
    function activeTab(i) {

        menuTab.forEach((item) => {
            item.classList.remove('active');
        })

        contentTab.forEach((item) => {
            item.classList.remove('active');
        })


        menuTab[i].classList.add('active');
        contentTab[i].classList.add('active');
    }

    menuTab.forEach((item, i) => {
        item.addEventListener('click', () => {
            activeTab(i);
        });
    })
}

projectTabs();

