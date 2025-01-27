document.addEventListener("DOMContentLoaded", () => {
         // Function to update GST time
         function updateGSTTime() {
            const gstOffset = 5; // Gulf Standard Time (UTC+5)
            const now = new Date();
            const gstDate = new Date(now.getTime() + (gstOffset * 60 - now.getTimezoneOffset()) * 60000);

            const hours = gstDate.getHours().toString().padStart(2, '0');
            const minutes = gstDate.getMinutes().toString().padStart(2, '0');
            const ampm = hours >= 12 ? 'AM' : 'PM';

            const formattedHours = hours % 12 || 12; // Convert to 12-hour format
            const gstTime = `${formattedHours}:${minutes} ${ampm}`;

            document.getElementById('gst-time').textContent = `GST: ${gstTime}`;
        }

        // Function to handle menu toggle and dropdowns
        function initializeMenuScripts() {
            // Get references to the button and menu
            const menuButton = document.getElementById('menu-toggle');
            const menu = document.getElementById('menu');

            // Add click event listener to the button
            menuButton.addEventListener('click', function () {
                // Toggle the 'hidden' class to show/hide the menu
                menu.classList.toggle('hidden');
                menu.classList.toggle('show');
            });

            const menuItems = document.querySelectorAll('.menu');

            menuItems.forEach((menuItem) => {
                const dropdown = menuItem.querySelector('div');

                // Ensure dropdown visibility on hover
                menuItem.addEventListener('mouseenter', () => {
                    dropdown.classList.remove('hidden');
                });

                // Allow smooth hover over dropdown without flickering
                menuItem.addEventListener('mouseleave', (e) => {
                    if (!dropdown.contains(e.relatedTarget)) {
                        dropdown.classList.add('hidden');
                    }
                });

                // Toggle dropdown on click (for mobile)
                menuItem.addEventListener('click', (e) => {
                    const isVisible = !dropdown.classList.contains('hidden');
                    document.querySelectorAll('.menu div').forEach((d) => d.classList.add('hidden')); // Close others
                    if (!isVisible) {
                        dropdown.classList.remove('hidden');
                    }
                });
            });

            // Close dropdown on outside click
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.menu')) {
                    document.querySelectorAll('.menu div').forEach((dropdown) => {
                        dropdown.classList.add('hidden');
                    });
                }
            });


           
            // Array of substrings to check in the URL
            const urlKeywordsProducts = [
                'fluid-transfer',
                'controlled-bolting-hydraulic-equipment',
                'hydrotesting-chemical-injection-skids',
            ];

            const manufacturing = [
                'manufacturing' // Add 'manufacturing' as one of the cases
            ];

            const services = [
                "procurement-project-management",
                "lv-installation",
                "trainings"
            ];

            const explore = [
                "about-us",
                "certifications",
                "careers",
                "contact"
            ]

            // Get the current URL
            const currentUrl = window.location.href;
            let activeLink = null;
            // Check if any of the substrings are in the URL
            // const isMatch = ;

            // If there's a match, apply the border actions
            if (manufacturing.some(keyword => currentUrl.includes(keyword))) {
                activeLink = document.getElementById('manufacturing');
            } else if (urlKeywordsProducts.some(keyword => currentUrl.includes(keyword))) {
                activeLink = document.getElementById('products');
            } else if (services.some(keyword => currentUrl.includes(keyword))) {
                activeLink = document.getElementById('services');
            } else if (explore.some(keyword => currentUrl.includes(keyword))) {
                activeLink = document.getElementById('explore-active');
            }

            console.log(activeLink);
            if (activeLink) {
                const border = activeLink.querySelector('.active-nav-link');
                if (border) {
                    // Add or remove classes
                    border.classList.add('w-1/2');
                    border.classList.remove('w-0');
                }
            }
        }

        // Fetch and inject the header
        fetch('header.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header').innerHTML = data;

                // Initialize menu scripts after header is injected
                initializeMenuScripts();

                // Initialize GST time update
                setInterval(updateGSTTime, 60000);
                updateGSTTime(); // Initial call to set the time
            });


        // Fetch and inject the header
        fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });

           // Fetch and inject the header
           fetch('header-white.html')
           .then(response => response.text())
           .then(data => {
               document.getElementById('header-white').innerHTML = data;

               // Initialize menu scripts after header is injected
               initializeMenuScripts();

               // Initialize GST time update
               setInterval(updateGSTTime, 60000);
               updateGSTTime(); // Initial call to set the time



           });
});