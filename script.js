/* ==========================================================================
   NOOR AL-SHIFA SPECIALIST CLINIC - BOOKING & PORTAL LOGIC (HEFZ|TECH)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const labModal = document.getElementById('labModal');
    const openLabBtn = document.getElementById('openLabBtn');
    const closeLabBtn = document.getElementById('closeLabBtn');
    const bookingForm = document.getElementById('bookingForm');

    // Open Patient Lab Portal Modal
    openLabBtn.addEventListener('click', () => {
        labModal.style.display = 'flex';
    });

    // Close Modal
    closeLabBtn.addEventListener('click', () => {
        labModal.style.display = 'none';
    });

    // Close Modal when clicking outside
    labModal.addEventListener('click', (e) => {
        if (e.target === labModal) {
            labModal.style.display = 'none';
        }
    });

    // Handle Appointment Booking via WhatsApp
    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('patientName').value.trim();
        const dept = document.getElementById('department').value;
        const date = document.getElementById('preferredDate').value;
        const phone = document.getElementById('patientPhone').value.trim();

        const message = `Assalamu Alaikum, I would like to schedule a clinic appointment:\n\n*Patient Name:* ${name}\n*Department:* ${dept}\n*Preferred Date:* ${date}\n*Phone:* ${phone}\n\n_(Sent via Clinic Website Demo by Hefz|tech)_`;

        // Replace with your actual WhatsApp number (e.g., 2348031234567)
        const whatsappNumber = "2349027192335";
        const whatsappUrl = `https://wa.me{whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
    });
});
