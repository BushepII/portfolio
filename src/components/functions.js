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

export function handleScroll() {
    const nextSection = document.getElementById('section1');
    const nextSectionRect = nextSection.getBoundingClientRect();
    const currentScrollY = window.scrollY;
    const nextSectionScrollY = nextSectionRect.top + window.scrollY;

    const distanceToNextSection = nextSectionScrollY - currentScrollY;

    let fadeFactor = Math.max((distanceToNextSection / window.innerHeight), 0);

    const endColor = { r: 0, g: 0, b: 0 };
    const startColor = { r: 121, g: 35, b: 9 };

    const interpolatedColor = {
      r: Math.round(startColor.r + fadeFactor * (endColor.r - startColor.r)),
      g: Math.round(startColor.g + fadeFactor * (endColor.g - startColor.g)),
      b: Math.round(startColor.b + fadeFactor * (endColor.b - startColor.b)),
    };

    app.style.backgroundColor = `rgb(${interpolatedColor.r}, ${interpolatedColor.g}, ${interpolatedColor.b})`;
  };