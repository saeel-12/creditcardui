
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.feature-section').forEach(section => {
            observer.observe(section);
        });


        setTimeout(() => {
            document.querySelectorAll('.feature-section').forEach(section => {
                section.classList.add('visible');
            });
        }, 100);

