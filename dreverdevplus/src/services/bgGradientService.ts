export function bgGraddientService(): void {

    const $bgGradients = document.querySelectorAll(".bg-gradient")

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.9,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const { isIntersecting } = entry
            if (isIntersecting) {
                const bgClass = entry.target.getAttribute('data-bgclass');
                console.log(bgClass)
                if(bgClass != null){
                    $bgGradients.forEach((element) => {
                        element.classList.contains(bgClass) ? element.classList.add('bg-gradient-visible') : element.classList.remove('bg-gradient-visible');
                    })
                }
            }
        })
    }, observerOptions)

    const $landingSections = document.querySelectorAll('.landing-section');
    $landingSections.forEach((landingSection) => observer.observe(landingSection));
}
