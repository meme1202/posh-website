<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Legacy of BCA - Vidya Vikas First Grade College</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <nav class="nav">
            <div class="nav-brand">
            <div class="logo">
                <svg width="40" height="40" viewBox="0 0 40 40">
                    <path d="M5 5 L5 35 L15 35 M15 5 L15 20 L35 20" stroke="#00BFFF" stroke-width="3" fill="none"/>
                    <circle cx="18" cy="8" r="2" fill="#E040FB"/>
                        <circle cx="25" cy="15" r="1.5" fill="#00BFFF"/>
                        <circle cx="32" cy="23" r="1" fill="#E040FB"/>
                    </svg>
                </div>
                <div class="brand-text">
                    <span class="college-name">Vidya Vikas FGC</span>
                    <span class="fest-name">Legacy of BCA</span>
                </div>
            </div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#gallery">Gallery</a></li>
            </ul>
            <!-- REPLACE THE CURRENT social-icons section with this -->
<div class="social-icons">
    <a href="https://instagram.com/legacyofbca" target="_blank" class="social-icon"><i class="fab fa-instagram"></i></a>
    <a href="https://wa.me/919876543210" target="_blank" class="social-icon"><i class="fab fa-whatsapp"></i></a>
    <a href="tel:+919876543210" class="social-icon"><i class="fas fa-phone"></i></a>
    <a href="mailto:info@legacyofbca.com?subject=Legacy%20of%20BCA%20Inquiry&body=Hello,%0D%0A%0D%0AI%20would%20like%20to%20know%20more%20about%20Legacy%20of%20BCA%20fest." class="social-icon"><i class="fas fa-envelope"></i></a>
</div>

        </nav>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-content">
            <h1>Legacy of <span class="gradient-text">BCA</span></h1>
            <p>Experience the future of technology at Mysore's premier tech fest</p>
            <a href="#events" class="cta-button">Explore Events</a>
        </div>
        <div class="carousel-container">
            <div class="carousel">
                <div class="carousel-slide active">
                    <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500" alt="Tech Event 1">
                </div>
                <div class="carousel-slide">
                    <img src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500" alt="Tech Event 2">
                </div>
                <div class="carousel-slide">
                    <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500" alt="Tech Event 3">
                </div>
                <div class="carousel-slide">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500" alt="Tech Event 4">
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <h2>About Legacy of BCA</h2>
            <p>Legacy of BCA is the premier technology festival of Vidya Vikas First Grade College, Mysore. Our mission is to showcase the cutting-edge innovations and foster the next generation of tech leaders.</p>
            <div class="stats">
                <div class="stat">
                    <h3>500+</h3>
                    <p>Participants</p>
                </div>
                <div class="stat">
                    <h3>10+</h3>
                    <p>Events</p>
                </div>
                <div class="stat">
                    <h3>3</h3>
                    <p>Days</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Events Section -->
    <section id="events" class="events">
        <div class="container">
            <h2>Featured Events</h2>
            <div class="events-grid">
                <div class="event-card" data-event="CodeClash-4.0">
                    <div class="event-icon">
                        <i class="fas fa-code"></i>
                    </div>
                    <h3>CodeClash 4.0</h3>
                    <p>Competitive programming challenge</p>
                    <span class="event-tag free">FREE</span>
                    <a href="register.html?event=CodeClash-4.0" class="register-btn">Register Now</a>
                    <a href="audience-register.html" class="aud-btn">Get Audience Pass</a>

                </div>
                <div class="event-card" data-event="TechQuiz-Pro">
                    <div class="event-icon">
                        <i class="fas fa-brain"></i>
                    </div>
                    <h3>TechQuiz Pro</h3>
                    <p>Ultimate technology quiz competition</p>
                    <span class="event-tag free">FREE</span>
                    <a href="register.html?event=TechQuiz-Pro" class="register-btn">Register Now</a>
                    <a href="audience-register.html" class="aud-btn">Get Audience Pass</a>

                </div>
                <div class="event-card" data-event="WebDev-Championship">
                    <div class="event-icon">
                        <i class="fas fa-laptop-code"></i>
                    </div>
                    <h3>WebDev Championship</h3>
                    <p>Build amazing websites in 24 hours</p>
                    <span class="event-tag paid">₹150</span>
                    <a href="register.html?event=WebDev-Championship" class="register-btn">Register Now</a>
                    <a href="audience-register.html" class="aud-btn">Get Audience Pass</a>
                </div>
                <div class="event-card" data-event="AI-ML-Workshop">
                    <div class="event-icon">
                        <i class="fas fa-robot"></i>
                    </div>
                    <h3>AI/ML Workshop</h3>
                    <p>Hands-on machine learning session</p>
                    <span class="event-tag paid">₹200</span>
                    <a href="register.html?event=AI-ML-Workshop" class="register-btn">Register Now</a>
                    <a href="audience-register.html" class="aud-btn">Get Audience Pass</a>

                </div>
                <div class="event-card" data-event="Gaming-Tournament">
                    <div class="event-icon">
                        <i class="fas fa-gamepad"></i>
                    </div>
                    <h3>Gaming Tournament</h3>
                    <p>Epic gaming battles and prizes</p>
                    <span class="event-tag free">FREE</span>
                    <a href="register.html?event=Gaming-Tournament" class="register-btn">Register Now</a>
                    <a href="audience-register.html" class="aud-btn">Get Audience Pass</a>

                </div>
                <div class="event-card" data-event="Cybersecurity-CTF">
                    <div class="event-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3>Cybersecurity CTF</h3>
                    <p>Capture the flag security challenge</p>
                    <span class="event-tag paid">₹100</span>
                    <a href="register.html?event=Cybersecurity-CTF" class="register-btn">Register Now</a>
                    <a href="audience-register.html" class="aud-btn">Get Audience Pass</a>

                </div>
            </div>
        </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="gallery">
        <div class="container">
            <h2>Gallery</h2>
            <div class="gallery-grid">
                <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300" alt="Event Photo 1">
                <img src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=300" alt="Event Photo 2">
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300" alt="Event Photo 3">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300" alt="Event Photo 4">
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>About Legacy of BCA</h3>
                    <p>The premier technology festival celebrating innovation, creativity, and the future of computing at Vidya Vikas First Grade College.</p>
                </div>
                <div class="footer-column">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#events">Events</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Contact</h3>
                    <p><strong>Dr. Rajesh Kumar</strong><br>
                    Event Coordinator<br>
                    Email: rajesh@vvfgc.ac.in<br>
                    Phone: +91 9876543210</p>
                </div>
                <div class="footer-column">
                    <h3>Venue</h3>
                    <p>Vidya Vikas First Grade College<br>
                    Mysore, Karnataka 570017</p>
                    <a href="https://maps.google.com/?q=Vidya+Vikas+First+Grade+College+Mysore" target="_blank" class="maps-btn">
                        <i class="fas fa-map-marker-alt"></i> View on Maps
                    </a>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Legacy of BCA | Designed with ❤️</p>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
