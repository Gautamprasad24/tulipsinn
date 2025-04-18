         // Smooth scrolling for nav links
         document.querySelectorAll('.nav-menu a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                window.scrollTo({
                    top: targetSection.offsetTop - 60,
                    behavior: 'smooth'
                });
                document.querySelectorAll('.nav-menu a').forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Navbar background change on scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Menu tabs functionality
        document.querySelectorAll('.menu-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Carousel functionality
        const slides = document.querySelectorAll('.carousel-slide');
        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        showSlide(currentSlide);
        setInterval(nextSlide, 5000);

        // Booking form room type and price display
        const bookingType = document.getElementById('booking-type');
        const roomTypeGroup = document.getElementById('room-type-group');
        const roomType = document.getElementById('room-type');
        const priceDisplay = document.getElementById('price-display');

        const roomPrices = {
            'deluxe': 3500,
            'double-deluxe': 3541,
            'superior': 3935,
            'executive': 4328,
            'mini-suite': 5115,
            'suite': 5509
        };

        bookingType.addEventListener('change', function() {
            if (this.value === 'room') {
                roomTypeGroup.classList.add('active');
                roomType.value = '';
                priceDisplay.classList.remove('active');
                priceDisplay.textContent = '';
            } else {
                roomTypeGroup.classList.remove('active');
                priceDisplay.classList.remove('active');
                priceDisplay.textContent = '';
            }
        });

        roomType.addEventListener('change', function() {
            const selectedRoom = this.value;
            if (selectedRoom && roomPrices[selectedRoom]) {
                const basePrice = roomPrices[selectedRoom];
                const gst = basePrice * 0.18;
                const totalPrice = basePrice + gst;
                priceDisplay.textContent = `Total Price: ₹${totalPrice.toLocaleString('en-IN')} (incl. 18% GST)`;
                priceDisplay.classList.add('active');
            } else {
                priceDisplay.classList.remove('active');
                priceDisplay.textContent = '';
            }
        });

        // Mobile sidebar functionality
        document.addEventListener('DOMContentLoaded', () => {
// Select DOM elements with null checks
const mobileToggle = document.querySelector('.mobile-toggle');
const sidebar = document.querySelector('.mobile-sidebar');
const sidebarClose = document.querySelector('.sidebar-close');
const overlay = document.querySelector('.sidebar-overlay');
const sidebarMenu = document.querySelector('.sidebar-menu');

// Function to close the sidebar
const closeSidebar = () => {
    if (sidebar && overlay) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
};

// Open sidebar
if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        if (sidebar && overlay) {
            sidebar.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Disable scrolling
        }
    });
}

// Close sidebar on close button or overlay click
if (sidebarClose) {
    sidebarClose.addEventListener('click', closeSidebar);
}
if (overlay) {
    overlay.addEventListener('click', closeSidebar);
}

// Close sidebar when clicking any link in sidebar-menu (using event delegation)
if (sidebarMenu) {
    sidebarMenu.addEventListener('click', (e) => {
        if (e.target.closest('a')) {
            closeSidebar();
        }
    });
}

// Handle multiple dropdowns
document.querySelectorAll('.sidebar-dropdown').forEach((dropdown) => {
    const toggle = dropdown.querySelector('p');
    const menu = dropdown.querySelector('.dropdown-menu');
    const icon = toggle?.querySelector('i');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            // Toggle active class
            menu.classList.toggle('active');
            toggle.setAttribute('aria-expanded', menu.classList.contains('active'));

            // Update icon
            if (icon) {
                icon.classList.toggle('fa-chevron-down', !menu.classList.contains('active'));
                icon.classList.toggle('fa-chevron-up', menu.classList.contains('active'));
            }
        });

        // Initialize ARIA attribute
        toggle.setAttribute('aria-expanded', 'false');
    }
});
});
        // Modal functionality
        function openModal(modalId) {
            const modal = document.getElementById(modalId);
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    closeModal(modalId);
                }
            });
        }

        function closeModal(modalId) {
            const modal = document.getElementById(modalId);
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }

        document.querySelectorAll('.category-tab').forEach(tab => {
    tab.addEventListener('click', function () {
        // Remove active class from all tabs
        document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        this.classList.add('active');

        // Hide all category contents
        document.querySelectorAll('.category-content').forEach(content => content.classList.remove('active'));
        // Show the selected category content
        const category = this.getAttribute('data-category');
        document.getElementById(category).classList.add('active');
    });
});

// Modal Functionality
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Open modals when clicking "More Items" buttons
document.querySelectorAll('.more-items-btn').forEach(button => {
    button.addEventListener('click', function () {
        const modalId = this.getAttribute('data-modal');
        openModal(modalId);
    });
});

// Close modals when clicking the close button
document.querySelectorAll('.modal-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function () {
        const modalId = this.closest('.modal').id;
        closeModal(modalId);
    });
});

// Close modals when clicking outside of modal content
window.addEventListener('click', function (event) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
document.querySelectorAll('.gallery-item').forEach(item => {
    const img = item.querySelector('img');
    const text = item.querySelector('.gallery-text');
    if (img && text) {
        text.textContent = img.alt;
    }
});
});
function showPopup() {
    document.getElementById('iplPopup').style.display = 'flex';
    // Add your image source here
    document.getElementById('popupImage').src = 'popup.jpg'; // Replace with your image path or data
}

function closePopup() {
    document.getElementById('iplPopup').style.display = 'none';
}
