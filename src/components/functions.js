import background from '@/assets/atom-background.jpg'

export function scrollToTop() {
    const x = window.scrollX;
    window.scrollTo({
        top: 0,
        left: x,
        behavior: 'smooth'
    });
}

export function scrollToSection(id){
    const element = document.getElementById(id);
    if (element) {
        window.scrollTo({
        top: element.offsetTop - window.innerHeight*0.1,
        behavior: 'smooth',
        });
    }
}

//Fading background when scrolling
export function handleScroll() {
    const nextSection = document.getElementById('section1');
    const nextSectionRect = nextSection.getBoundingClientRect();
    const currentScrollY = window.scrollY;
    const nextSectionScrollY = nextSectionRect.top + window.scrollY;

    const distanceToNextSection = nextSectionScrollY - currentScrollY;

    let fadeFactor = Math.max((distanceToNextSection / nextSectionScrollY), 0);
    const main = document.getElementsByTagName("main")[0];

    main.style.backgroundImage = `linear-gradient(rgba(0, 14, 40, ${Math.min(1-fadeFactor, 0.5)}),rgba(0, 14, 40, ${Math.min(1-fadeFactor, 0.5)})), url(${background})`;
};