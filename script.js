// Mobile nav toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
}

// Booking form fake submit message
const bookingForm = document.getElementById('booking-form');
const formMessage = document.getElementById('form-message');

if (bookingForm && formMessage) {
    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault(); // stop real submit (no backend)
        formMessage.textContent =
            'Thanks! Your request was sent to staff for confirmation. Please wait for an email reply for your booking.';
        formMessage.style.color = '#5cff9b';

        bookingForm.reset();

        // Clear selected plan text when form resets
        const selectedPlanText = document.getElementById('selected-plan');
        const planInput = document.getElementById('plan');
        if (selectedPlanText) selectedPlanText.textContent = '';
        if (planInput) planInput.value = '';
    });
}

// Pricing cards: make them clickable and link to the form
const pricingCards = document.querySelectorAll('.pricing-card');
const planInput = document.getElementById('plan');
const selectedPlanText = document.getElementById('selected-plan');

if (pricingCards.length && bookingForm) {
    pricingCards.forEach(card => {
        card.addEventListener('click', () => {
            const plan = card.getAttribute('data-plan') || '';

            // Remove previous selection
            pricingCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');

            if (planInput) {
                planInput.value = plan;
            }
            if (selectedPlanText) {
                selectedPlanText.textContent = `Selected pricing: ${plan}`;
            }

            // Scroll smoothly to the form
            bookingForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}
