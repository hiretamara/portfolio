
        // Simple Single Page App Navigation Router
        function navigateTo(sectionId) {
            // Hide all sections
            const sections = document.querySelectorAll('section');
            sections.forEach(sec => sec.classList.remove('active'));

            // Remove active class from nav links
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => link.classList.remove('active'));

            // Show active section
            const activeSection = document.getElementById(sectionId);
            if (activeSection) {
                activeSection.classList.add('active');
            }

            // Highlight current nav item
            const activeNav = document.getElementById('nav-' + sectionId);
            if (activeNav) {
                activeNav.classList.add('active');
            }

            // Scroll to top on navigation
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Form Submission Interceptor
        function handleFormSubmit(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const errorElement = document.getElementById('formError');

            if (!name || !email || !message) {
                errorElement.style.display = 'block';
                return;
            }

            errorElement.style.display = 'none';
            alert(`Thanks, ${name}! Your message has been sent successfully (simulated action).`);
            document.getElementById('contactForm').reset();
        }
