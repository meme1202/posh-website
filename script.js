// Global Variables
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
let carouselInterval;

// Carousel Functionality
function initializeCarousel() {
    if (!slides.length) return;
    
    // Set initial positions
    updateCarouselSlides();
    
    // Start autoplay
    carouselInterval = setInterval(nextSlide, 5000);
    
    // Pause on hover
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => clearInterval(carouselInterval));
        carousel.addEventListener('mouseleave', () => {
            carouselInterval = setInterval(nextSlide, 5000);
        });
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarouselSlides();
}

function updateCarouselSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        
        if (index === currentSlide) {
            slide.classList.add('active');
            slide.style.transform = 'translateZ(0) scale(1)';
            slide.style.opacity = '1';
            slide.style.filter = 'blur(0)';
        } else {
            const offset = (index - currentSlide + slides.length) % slides.length;
            const isNext = offset === 1;
            const isPrev = offset === slides.length - 1;
            
            if (isNext) {
                slide.style.transform = 'translateZ(-200px) translateX(100px) rotateY(-30deg) scale(0.8)';
            } else if (isPrev) {
                slide.style.transform = 'translateZ(-200px) translateX(-100px) rotateY(30deg) scale(0.8)';
            } else {
                slide.style.transform = 'translateZ(-400px) scale(0.6)';
            }
            
            slide.style.opacity = '0.6';
            slide.style.filter = 'blur(2px)';
        }
    });
}

// Event Cards Functionality
function initializeEventCards() {
    const eventCards = document.querySelectorAll('.event-card');
    
    eventCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            card.style.setProperty('--x', x + '%');
            card.style.setProperty('--y', y + '%');
        });
    });
}

// Registration Form Functionality
function initializeRegistrationForm() {
    if (!document.getElementById('registration-form')) return;
    
    // Extract event name from URL
    const urlParams = new URLSearchParams(window.location.search);
    const eventName = urlParams.get('event');
    
    if (eventName) {
        updateEventDetails(eventName);
    }
    
    // Form validation
    const form = document.getElementById('registration-form');
    const inputs = form.querySelectorAll('input[required]');
    const submitBtn = document.getElementById('submit-btn');
    
    inputs.forEach(input => {
        input.addEventListener('input', validateForm);
        input.addEventListener('blur', validateField);
    });
    
    form.addEventListener('submit', handleFormSubmit);
    
    validateForm(); // Initial validation
}

function updateEventDetails(eventName) {
    // Update registration title
    const title = document.getElementById('registration-title');
    if (title) {
        title.textContent = `Register for ${eventName.replace(/-/g, ' ')}`;
    }
    
    // Update event name in details
    const eventNameEl = document.getElementById('event-name');
    if (eventNameEl) {
        eventNameEl.textContent = eventName.replace(/-/g, ' ');
    }
    
    // Update event-specific rules and details
    const rulesContainer = document.getElementById('rules-list');
    if (rulesContainer) {
        const eventRules = getEventRules(eventName);
        rulesContainer.innerHTML = eventRules.map(rule => `<li>${rule}</li>`).join('');
    }
}

function getEventRules(eventName) {
    const rules = {
        'CodeClash-4.0': [
            'Individual participation only',
            'Duration: 3 hours',
            'Programming languages: C++, Java, Python',
            'Laptop with IDE required',
            'No internet access during contest'
        ],
        'TechQuiz-Pro': [
            'Team of 2-3 members allowed',
            'Duration: 2 hours',
            'Topics: Programming, AI, Cybersecurity',
            'No electronic devices allowed',
            'Final round will be buzzer-based'
        ],
        'WebDev-Championship': [
            'Individual or team participation',
            'Duration: 24 hours',
            'Theme will be announced on spot',
            'Use any framework/technology',
            'Hosting and presentation required'
        ],
        'AI-ML-Workshop': [
            'Hands-on workshop format',
            'Laptop with Python required',
            'Basic programming knowledge needed',
            'Certificate of participation',
            'Duration: 4 hours'
        ],
        'Gaming-Tournament': [
            'Multiple game categories',
            'Individual and team events',
            'BYOD (Bring Your Own Device)',
            'Fair play policy strictly enforced',
            'Prizes for top 3 in each category'
        ],
        'Cybersecurity-CTF': [
            'Team of 2-4 members',
            'Duration: 6 hours',
            'Various security challenges',
            'Linux knowledge preferred',
            'Writeups submission required'
        ]
    };
    
    return rules[eventName] || [
        'Registration is mandatory for all participants',
        'Valid college ID required for entry',
        'Follow event-specific guidelines'
    ];
}

function validateField(event) {
    const field = event.target;
    const errorElement = document.getElementById(field.name + '-error');
    let isValid = true;
    let errorMessage = '';
    
    // Check if field is empty
    if (field.hasAttribute('required') && !field.value.trim()) {
        isValid = false;
        errorMessage = 'This field is required';
    }
    
    // Field-specific validation
    switch (field.name) {
        case 'fullName':
            if (field.value.trim() && field.value.trim().length < 2) {
                isValid = false;
                errorMessage = 'Name must be at least 2 characters long';
            }
            break;
            
        case 'usn':
            const usnPattern = /^[A-Za-z0-9]{12}$/;
            if (field.value.trim() && !usnPattern.test(field.value.trim())) {
                isValid = false;
                errorMessage = 'USN/Roll Number must be exactly 12 characters (letters and numbers)';
            }
            break;
            
        case 'email':
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (field.value.trim() && !emailPattern.test(field.value.trim())) {
                isValid = false;
                errorMessage = 'Invalid email format';
            }
            break;
            
        case 'phone':
            const phonePattern = /^(\+91[\s-]?)?[6-9]\d{9}$/;
            if (field.value.trim() && !phonePattern.test(field.value.trim().replace(/\s/g, ''))) {
                isValid = false;
                errorMessage = 'Invalid phone number format';
            }
            break;
    }
    
    // Update field appearance and error message
    if (isValid) {
        field.classList.remove('error');
        errorElement.textContent = '';
    } else {
        field.classList.add('error');
        errorElement.textContent = errorMessage;
    }
    
    return isValid;
}

function validateForm() {
    const form = document.getElementById('registration-form');
    if (!form) return;
    
    const inputs = form.querySelectorAll('input[required]');
    const submitBtn = document.getElementById('submit-btn');
    let allValid = true;
    
    inputs.forEach(input => {
        const isFieldValid = input.value.trim() !== '' && !input.classList.contains('error');
        if (!isFieldValid) {
            allValid = false;
        }
    });
    
    submitBtn.disabled = !allValid;
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    const submitBtn = document.getElementById('submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const spinner = document.getElementById('spinner');
    
    // Show loading state
    btnText.textContent = 'Registering...';
    spinner.style.display = 'block';
    submitBtn.disabled = true;
    
    // Store form data in localStorage
    const formData = new FormData(event.target);
    const registrationData = {
        fullName: formData.get('fullName'),
        usn: formData.get('usn').toUpperCase(),
        college: formData.get('college'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        event: new URLSearchParams(window.location.search).get('event')
    };
    
    localStorage.setItem('registrationData', JSON.stringify(registrationData));
    
    // Check if event is paid or free
    const eventPrices = {
        'CodeClash-4.0': 0,
        'TechQuiz-Pro': 0,
        'WebDev-Championship': 150,
        'AI-ML-Workshop': 200,
        'Gaming-Tournament': 0,
        'Cybersecurity-CTF': 100
    };
    
    const eventName = registrationData.event;
    const eventPrice = eventPrices[eventName] || 0;
    
    // Simulate processing time
    setTimeout(() => {
        if (eventPrice > 0) {
            // Redirect to payment page for paid events
            window.location.href = `payment.html?amount=${eventPrice}`;
        } else {
            // Redirect directly to success for free events
            window.location.href = 'success.html';
        }
    }, 1500);
}

// Success Page Functionality
function initializeSuccessPage() {
    if (window.location.pathname.includes('success.html')) {
        // Trigger confetti animation
        triggerConfetti();
        
        // Load registration data and generate ticket
        const registrationData = JSON.parse(localStorage.getItem('registrationData'));
        if (registrationData) {
            generateETicket(registrationData);
        }
        
        // Show payment confirmation if payment was made
        const paymentData = JSON.parse(localStorage.getItem('paymentData') || 'null');
        if (paymentData) {
            showPaymentConfirmation(paymentData);
        }
        
        // Initialize download functionality
        const downloadBtn = document.getElementById('download-ticket');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', downloadTicket);
        }
    }
}

function showPaymentConfirmation(paymentData) {
    const confirmationDiv = document.getElementById('payment-confirmation');
    if (confirmationDiv) {
        confirmationDiv.style.display = 'block';
        
        document.getElementById('transaction-id').textContent = paymentData.transactionId;
        document.getElementById('paid-amount').textContent = paymentData.amount;
        document.getElementById('payment-method').textContent = paymentData.method.toUpperCase();
    }
}

function triggerConfetti() {
    // Check if confetti library is loaded
    if (typeof confetti !== 'undefined') {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#00BFFF', '#E040FB', '#00ff88']
        });
        
        setTimeout(() => {
            confetti({
                particleCount: 50,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#00BFFF', '#E040FB']
            });
        }, 200);
        
        setTimeout(() => {
            confetti({
                particleCount: 50,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#E040FB', '#00ff88']
            });
        }, 400);
    }
}

function generateETicket(data) {
    // Update ticket information
    document.getElementById('ticket-event').textContent = data.event.replace(/-/g, ' ');
    document.getElementById('ticket-name').textContent = data.fullName;
    document.getElementById('ticket-usn').textContent = data.usn;
    
    // Generate QR code
    const qrData = JSON.stringify({
        name: data.fullName,
        usn: data.usn,
        event: data.event
    });
    
    const canvas = document.getElementById('qr-code');
    if (canvas && typeof QRCode !== 'undefined') {
        QRCode.toCanvas(canvas, qrData, {
            width: 120,
            margin: 2,
            color: {
                dark: '#00BFFF',
                light: '#1A1A2E'
            }
        }, function(error) {
            if (error) console.error('QR Code generation failed:', error);
        });
    }
}

function downloadTicket() {
    const ticketElement = document.getElementById('e-ticket');
    const downloadBtn = document.getElementById('download-ticket');
    
    // Change button text
    const originalText = downloadBtn.innerHTML;
    downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
    downloadBtn.disabled = true;
    
    // Use html2canvas to convert ticket to image
    if (typeof html2canvas !== 'undefined') {
        html2canvas(ticketElement, {
            backgroundColor: '#1A1A2E',
            scale: 2,
            logging: false,
            useCORS: true
        }).then(canvas => {
            // Create download link
            const link = document.createElement('a');
            link.download = 'legacy-of-bca-ticket.png';
            link.href = canvas.toDataURL('image/png');
            
            // Trigger download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Reset button
            downloadBtn.innerHTML = originalText;
            downloadBtn.disabled = false;
            
            // Show success message
            showNotification('Ticket downloaded successfully!', 'success');
        }).catch(error => {
            console.error('Download failed:', error);
            downloadBtn.innerHTML = originalText;
            downloadBtn.disabled = false;
            showNotification('Download failed. Please try again.', 'error');
        });
    } else {
        downloadBtn.innerHTML = originalText;
        downloadBtn.disabled = false;
        showNotification('Download library not loaded. Please refresh the page.', 'error');
    }
}

// Utility function to show notifications
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#00ff88' : type === 'error' ? '#ff4757' : '#00BFFF'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        z-index: 10000;
        font-weight: 600;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(26, 26, 46, 0.95)';
        } else {
            header.style.background = 'rgba(26, 26, 46, 0.9)';
        }
    }
});

// Payment Page Functionality
function initializePaymentPage() {
    if (!window.location.pathname.includes('payment.html')) return;
    
    loadPaymentData();
    initializePaymentMethods();
    initializePaymentForms();
    generateUPIQR();
    
    const payBtn = document.getElementById('pay-now-btn');
    if (payBtn) {
        payBtn.addEventListener('click', processPayment);
    }
}

function loadPaymentData() {
    // Get registration data from localStorage
    const registrationData = JSON.parse(localStorage.getItem('registrationData') || '{}');
    const urlParams = new URLSearchParams(window.location.search);
    const amount = urlParams.get('amount') || '150';
    
    // Update payment page with data
    if (registrationData.event) {
        document.getElementById('payment-event-name').textContent = registrationData.event.replace(/-/g, ' ');
    }
    if (registrationData.fullName) {
        document.getElementById('payment-participant-name').textContent = registrationData.fullName;
    }
    if (registrationData.usn) {
        document.getElementById('payment-usn').textContent = `USN: ${registrationData.usn}`;
    }
    
    // Update amounts
    const baseAmount = parseInt(amount);
    const processingFee = 10;
    const totalAmount = baseAmount + processingFee;
    
    document.getElementById('payment-amount').textContent = `₹${baseAmount}`;
    document.getElementById('base-amount').textContent = `₹${baseAmount}`;
    document.getElementById('total-amount').textContent = `₹${totalAmount}`;
    document.getElementById('btn-amount').textContent = `₹${totalAmount}`;
    
    // Store total amount for processing
    localStorage.setItem('paymentAmount', totalAmount.toString());
}

function initializePaymentMethods() {
    const paymentOptions = document.querySelectorAll('.payment-option');
    
    paymentOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove active class from all options
            paymentOptions.forEach(opt => opt.classList.remove('active'));
            
            // Add active class to clicked option
            option.classList.add('active');
            
            // Show corresponding form
            const method = option.getAttribute('data-method');
            showPaymentForm(method);
        });
    });
}

function showPaymentForm(method) {
    const forms = document.querySelectorAll('.payment-form');
    forms.forEach(form => form.classList.remove('active'));
    
    const targetForm = document.getElementById(`${method}-form`);
    if (targetForm) {
        targetForm.classList.add('active');
    }
}

function initializePaymentForms() {
    // Card number formatting
    const cardNumber = document.getElementById('card-number');
    if (cardNumber) {
        cardNumber.addEventListener('input', formatCardNumber);
    }
    
    // Expiry date formatting
    const cardExpiry = document.getElementById('card-expiry');
    if (cardExpiry) {
        cardExpiry.addEventListener('input', formatExpiryDate);
    }
    
    // CVV validation
    const cardCVV = document.getElementById('card-cvv');
    if (cardCVV) {
        cardCVV.addEventListener('input', formatCVV);
    }
    
    // UPI ID validation
    const upiId = document.getElementById('upi-id');
    if (upiId) {
        upiId.addEventListener('input', validateUPIId);
    }
}

function formatCardNumber(event) {
    let value = event.target.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
    event.target.value = formattedValue;
}

function formatExpiryDate(event) {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    event.target.value = value;
}

function formatCVV(event) {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
}

function validateUPIId(event) {
    const value = event.target.value;
    const upiPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/;
    
    if (value && !upiPattern.test(value)) {
        event.target.style.borderColor = '#ff4757';
    } else {
        event.target.style.borderColor = 'rgba(169, 169, 169, 0.3)';
    }
}

function generateUPIQR() {
    const canvas = document.getElementById('upi-qr-code');
    if (!canvas || typeof QRCode === 'undefined') return;
    
    const totalAmount = localStorage.getItem('paymentAmount') || '160';
    const registrationData = JSON.parse(localStorage.getItem('registrationData') || '{}');
    
    // UPI payment string
    const upiString = `upi://pay?pa=legacyofbca@paytm&pn=Legacy%20of%20BCA&am=${totalAmount}&cu=INR&tn=Event%20Registration%20${registrationData.event || ''}`;
    
    QRCode.toCanvas(canvas, upiString, {
        width: 150,
        margin: 2,
        color: {
            dark: '#000000',
            light: '#FFFFFF'
        }
    }, function(error) {
        if (error) console.error('UPI QR Code generation failed:', error);
    });
}

function processPayment() {
    const payBtn = document.getElementById('pay-now-btn');
    const btnText = payBtn.querySelector('.btn-text');
    const spinner = document.getElementById('payment-spinner');
    
    // Get selected payment method
    const selectedMethod = document.querySelector('.payment-option.active')?.getAttribute('data-method');
    
    if (!selectedMethod) {
        showNotification('Please select a payment method', 'error');
        return;
    }
    
    // Validate payment details based on method
    if (!validatePaymentDetails(selectedMethod)) {
        return;
    }
    
    // Show loading state
    btnText.textContent = 'Processing Payment...';
    spinner.style.display = 'block';
    payBtn.disabled = true;
    
    // Simulate payment processing
    setTimeout(() => {
        // Store payment success data
        const paymentData = {
            method: selectedMethod,
            amount: localStorage.getItem('paymentAmount'),
            transactionId: generateTransactionId(),
            timestamp: new Date().toISOString()
        };
        
        localStorage.setItem('paymentData', JSON.stringify(paymentData));
        
        // Redirect to success page
        window.location.href = 'success.html';
    }, 3000);
}

function validatePaymentDetails(method) {
    switch (method) {
        case 'upi':
            const upiId = document.getElementById('upi-id').value;
            if (!upiId) {
                showNotification('Please enter UPI ID or use QR code', 'error');
                return false;
            }
            break;
            
        case 'card':
            const cardNumber = document.getElementById('card-number').value.replace(/\s/g, '');
            const cardExpiry = document.getElementById('card-expiry').value;
            const cardCVV = document.getElementById('card-cvv').value;
            const cardName = document.getElementById('card-name').value;
            
            if (!cardNumber || cardNumber.length < 16) {
                showNotification('Please enter valid card number', 'error');
                return false;
            }
            if (!cardExpiry || cardExpiry.length < 5) {
                showNotification('Please enter valid expiry date', 'error');
                return false;
            }
            if (!cardCVV || cardCVV.length < 3) {
                showNotification('Please enter valid CVV', 'error');
                return false;
            }
            if (!cardName.trim()) {
                showNotification('Please enter cardholder name', 'error');
                return false;
            }
            break;
            
        case 'netbanking':
            const bankSelect = document.getElementById('bank-select').value;
            if (!bankSelect) {
                showNotification('Please select your bank', 'error');
                return false;
            }
            break;
    }
    return true;
}

function generateTransactionId() {
    const prefix = 'TXN';
    const timestamp = Date.now().toString().slice(-8);
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `${prefix}${timestamp}${random}`;
}

/* =================== AUDIENCE REGISTRATION =================== */
function initAudienceForm(){
    if(!location.pathname.includes('audience-register.html')) return;

    const form   = document.getElementById('audience-form');
    const inputs = form.querySelectorAll('input[required]');
    const submit = document.getElementById('aud-submit');
    const spinner= submit.querySelector('.spinner');

    // simple enable/disable
    inputs.forEach(inp=>inp.addEventListener('input', ()=> {
        const filled=[...inputs].every(i=>i.value.trim());
        submit.disabled=!filled;
    }));

    form.addEventListener('submit', e=>{
        e.preventDefault();
        submit.disabled=true;
        spinner.style.display='block';

        // mock USN list pulled from localStorage
        const usnList = JSON.parse(localStorage.getItem('allowedUSN')||'["1VV23CS001ABC","1VV23CS002XYZ"]');
        const usn     = document.getElementById('aud-usn').value.toUpperCase();

        setTimeout(()=>{
            if(!usnList.includes(usn)){
                showNotification('USN not found – access denied','error');
                submit.disabled=false;
                spinner.style.display='none';
                return;
            }

            // store reg & redirect to success
            const regData={
                fullName:document.getElementById('aud-name').value,
                usn,
                category:'audience',
                event:'AUDIENCE-PASS'
            };
            localStorage.setItem('registrationData',JSON.stringify(regData));
            localStorage.removeItem('paymentData'); // free
            location.href='success.html';
        },1000);
    });
}

/* =================== ADMIN LOGIN / DASHBOARD ================= */
function initAdminPages(){
    const isLogin = location.pathname.includes('admin-login.html');
    const isDash  = location.pathname.includes('admin-dashboard.html');

    // ---- simple hard-coded admin ----
    const ADMIN_EMAIL='admin@legacy.com';
    const ADMIN_PASS='legacy123';

    // LOGIN PAGE
    if(isLogin){
        const form=document.getElementById('admin-login-form');
        const err = document.getElementById('admin-error');
        form.addEventListener('submit', e=>{
            e.preventDefault();
            const email=document.getElementById('admin-email').value.trim();
            const pass =document.getElementById('admin-pass').value.trim();
            if(email===ADMIN_EMAIL && pass===ADMIN_PASS){
                localStorage.setItem('adminToken','mock-token');
                location.href='admin-dashboard.html';
            }else{
                err.textContent='Invalid credentials';
            }
        });
        return;
    }

    // DASHBOARD PAGE
    if(isDash){
        if(!localStorage.getItem('adminToken')){ location.href='admin-login.html'; return; }

        // logout
        document.getElementById('logout-btn').onclick=()=>{
            localStorage.removeItem('adminToken');
            location.href='admin-login.html';
        };

        // CSV upload
        document.getElementById('upload-btn').onclick=()=>{
            const file=document.getElementById('csv-input').files[0];
            if(!file){showNotification('Select CSV first','error');return;}
            const reader=new FileReader();
            reader.onload=e=>{
                const lines=e.target.result.trim().split(/\r?\n/).slice(1); // skip header
                const clean=lines.map(l=>l.trim().toUpperCase()).filter(l=>l);
                localStorage.setItem('allowedUSN',JSON.stringify(clean));
                document.getElementById('upload-msg').textContent=`Uploaded ${clean.length} USNs`;
                showNotification('USN list saved','success');
            };
            reader.readAsText(file);
        };

        // render registrations (mock from localStorage)
        const tbody=document.querySelector('#reg-table tbody');
        const regs = JSON.parse(localStorage.getItem('allRegs')||'[]');
        regs.forEach(r=>{
            const tr=document.createElement('tr');
            tr.innerHTML=`<td>${r.fullName}</td><td>${r.usn}</td><td>${r.category}</td><td>${r.event.replace(/-/g,' ')}</td>`;
            tbody.appendChild(tr);
        });
    }
}

/* =================== SAVE EACH PARTICIPANT/AUDIENCE REG =================== */
function pushToMasterList(obj){
    const arr=JSON.parse(localStorage.getItem('allRegs')||'[]');
    arr.push(obj);
    localStorage.setItem('allRegs',JSON.stringify(arr));
}

/* hook into existing success function */
const _oldGenerateETicket=generateETicket;
generateETicket=function(data){
    pushToMasterList(data);
    _oldGenerateETicket(data);
};

// Main initialization function
document.addEventListener('DOMContentLoaded', function() {
    initializeCarousel();
    initializeEventCards();
    initializeRegistrationForm();
    initializeSuccessPage();
    initializePaymentPage();
    initAudienceForm();
    initAdminPages();
});
