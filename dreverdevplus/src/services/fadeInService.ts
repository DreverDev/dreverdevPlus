export function fadeInService(): void {


    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.9,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const { isIntersecting } = entry
            if (isIntersecting) {
                entry.target.classList.add("faded");
                observer.unobserve(entry.target);
            }
        })
    }, observerOptions)

    const $elements = document.querySelectorAll('.fade-in');
    $elements.forEach((element) => observer.observe(element))
}
