"use client";

export default function Home() {
  return (
    <>
      {/* Demo Banner */}
      <div className="demo-banner">
        ✨ This is a free redesign mockup created by Byldr — <a href="https://ryancwynar.github.io">Learn More</a>
      </div>

      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <a href="#" className="logo">Atlas Roofing</a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="tel:9544225544" className="nav-cta">Call Now</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">47+ Years of Excellence</span>
          <h1>South Florida&apos;s Trusted Roofing Experts</h1>
          <p>Established in 1978. Licensed, insured, and dedicated to protecting your property with quality craftsmanship.</p>
          <div className="hero-buttons">
            <a href="tel:9544225544" className="btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              (954) 422-5544
            </a>
            <a href="#contact" className="btn-secondary">Free Estimate</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-placeholder">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            <span>Quality Roofing Since 1978</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat">
          <span className="stat-number">47+</span>
          <span className="stat-label">Years Experience</span>
        </div>
        <div className="stat">
          <span className="stat-number">5,000+</span>
          <span className="stat-label">Projects Completed</span>
        </div>
        <div className="stat">
          <span className="stat-number">100%</span>
          <span className="stat-label">Licensed & Insured</span>
        </div>
        <div className="stat">
          <span className="stat-number">A+</span>
          <span className="stat-label">BBB Rating</span>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="section-header">
          <span className="section-badge">Our Services</span>
          <h2>Comprehensive Roofing Solutions</h2>
          <p>From residential to commercial, we handle all your roofing needs with expert precision.</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </div>
            <h3>Shingle Roofing</h3>
            <p>Quality shingle installation and replacement with manufacturer warranties. Perfect for Florida homes.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
            </div>
            <h3>Tile Roofing</h3>
            <p>Clay and concrete tile roofing including barrel tiles. Built to withstand Florida&apos;s hurricanes.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
            </div>
            <h3>Metal Roofing</h3>
            <p>Durable metal panel systems for residential and commercial properties. Long-lasting protection.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
            </div>
            <h3>Flat Roofing</h3>
            <p>Modified and built-up roofing systems for commercial buildings and plaza decks.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
            </div>
            <h3>Roof Repairs</h3>
            <p>Expert leak repairs and maintenance to extend the life of your existing roof system.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            </div>
            <h3>Green Roofing</h3>
            <p>Eco-friendly roofing solutions that reduce energy costs and environmental impact.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-content">
          <span className="section-badge">About Us</span>
          <h2>Trusted by South Florida Since 1978</h2>
          <p>Atlas Roofing has been providing top-quality residential and commercial roofing services to Deerfield Beach, Fort Lauderdale, Boca Raton, and all of South Florida for over four decades.</p>
          <p>We stay up to date on all the latest developments regarding existing codes and technologies in the roofing industry. Our comprehensive approach includes roof evaluations, detailed specifications, and on-site project management throughout every phase.</p>
          <div className="about-features">
            <div className="feature">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>State Licensed: CCC057924 & CBC057963</span>
            </div>
            <div className="feature">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>BBB Accredited Business</span>
            </div>
            <div className="feature">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Free On-Site Estimates</span>
            </div>
            <div className="feature">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Project Documentation & Photos</span>
            </div>
          </div>
        </div>
        <div className="about-image">
          <div className="about-image-placeholder">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            <span>47 Years of Trust</span>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="areas">
        <div className="section-header">
          <span className="section-badge">Service Areas</span>
          <h2>Proudly Serving South Florida</h2>
        </div>
        <div className="areas-grid">
          <span className="area-tag">Deerfield Beach</span>
          <span className="area-tag">Fort Lauderdale</span>
          <span className="area-tag">Boca Raton</span>
          <span className="area-tag">Pompano Beach</span>
          <span className="area-tag">Coral Springs</span>
          <span className="area-tag">Lighthouse Point</span>
          <span className="area-tag">Coconut Creek</span>
          <span className="area-tag">Delray Beach</span>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Protect Your Property?</h2>
        <p>Get a free, no-obligation quote from our experienced team. We&apos;ll visit your property and provide a detailed written estimate with no hidden costs.</p>
        <div className="cta-buttons">
          <a href="tel:9544225544" className="btn-primary btn-large">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            (954) 422-5544
          </a>
          <a href="mailto:Pete@atlasroofingfl.com" className="btn-secondary btn-large">Email Us</a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-info">
          <h2>Contact Atlas Roofing</h2>
          <div className="contact-details">
            <div className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <div>
                <strong>Address</strong>
                <p>851 South Deerfield Avenue<br />Deerfield Beach, FL 33441</p>
              </div>
            </div>
            <div className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <div>
                <strong>Phone</strong>
                <p><a href="tel:9544225544">(954) 422-5544</a></p>
              </div>
            </div>
            <div className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <div>
                <strong>Email</strong>
                <p><a href="mailto:Pete@atlasroofingfl.com">Pete@atlasroofingfl.com</a></p>
              </div>
            </div>
            <div className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              <div>
                <strong>License #</strong>
                <p>CCC057924 | CBC057963</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-brand">
            <span className="logo">Atlas Roofing</span>
            <p>South Florida&apos;s trusted roofing contractor since 1978.</p>
          </div>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-contact">
            <a href="tel:9544225544">(954) 422-5544</a>
            <span>Deerfield Beach, FL</span>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Atlas Roofing. All rights reserved. | Licensed & Insured</p>
        </div>
      </footer>

      {/* Tracking Pixel */}
      <script dangerouslySetInnerHTML={{
        __html: `
          (function() {
            const params = new URLSearchParams(window.location.search);
            const ref = params.get('ref');
            if (ref) {
              const img = new Image();
              img.src = 'https://convex-actions.byldr.co/track?ref=' + encodeURIComponent(ref) + '&url=' + encodeURIComponent(window.location.href);
            }
          })();
        `
      }} />

      <style jsx>{`
        /* Demo Banner */
        .demo-banner {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: #f59e0b;
          color: white;
          text-align: center;
          padding: 0.5rem 1rem;
          font-size: 0.85rem;
          font-weight: 500;
          z-index: 1001;
        }
        .demo-banner a { color: white; text-decoration: underline; }

        /* Navigation */
        nav {
          position: fixed;
          top: 36px;
          left: 0;
          right: 0;
          background: white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          z-index: 1000;
          padding: 1rem 2rem;
        }
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e3a5f;
          text-decoration: none;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-links a {
          color: #334155;
          text-decoration: none;
          font-weight: 500;
        }
        .nav-links a:hover {
          color: #1e3a5f;
        }
        .nav-cta {
          background: #1e3a5f;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
        }
        .nav-cta:hover {
          background: #2d4a6f;
        }

        /* Hero Section */
        .hero {
          padding: 10rem 2rem 5rem;
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .hero-content {
          flex: 1;
        }
        .hero-badge {
          display: inline-block;
          background: #fef3c7;
          color: #92400e;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .hero h1 {
          font-size: 3rem;
          font-weight: 800;
          color: #1e293b;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }
        .hero p {
          font-size: 1.25rem;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #1e3a5f;
          color: white;
          padding: 1rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.125rem;
        }
        .btn-primary:hover {
          background: #2d4a6f;
        }
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: white;
          color: #1e3a5f;
          padding: 1rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.125rem;
          border: 2px solid #1e3a5f;
        }
        .btn-secondary:hover {
          background: #f1f5f9;
        }
        .hero-image {
          flex: 1;
        }
        .hero-image-placeholder {
          background: linear-gradient(135deg, #1e3a5f 0%, #3b82f6 100%);
          border-radius: 16px;
          height: 400px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          gap: 1rem;
        }
        .hero-image-placeholder span {
          font-size: 1.25rem;
          font-weight: 600;
        }

        /* Stats Section */
        .stats {
          background: #1e3a5f;
          padding: 4rem 2rem;
          display: flex;
          justify-content: center;
          gap: 4rem;
          flex-wrap: wrap;
        }
        .stat {
          text-align: center;
          color: white;
        }
        .stat-number {
          display: block;
          font-size: 3rem;
          font-weight: 800;
        }
        .stat-label {
          font-size: 1rem;
          opacity: 0.9;
        }

        /* Services Section */
        .services {
          padding: 6rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .section-badge {
          display: inline-block;
          background: #dbeafe;
          color: #1e40af;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 1rem;
        }
        .section-header p {
          font-size: 1.125rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .service-card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 2rem;
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .service-card:hover {
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          transform: translateY(-4px);
        }
        .service-icon {
          width: 60px;
          height: 60px;
          background: #dbeafe;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1e3a5f;
          margin-bottom: 1.5rem;
        }
        .service-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.75rem;
        }
        .service-card p {
          color: #64748b;
          line-height: 1.6;
        }

        /* About Section */
        .about {
          background: #f8fafc;
          padding: 6rem 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4rem;
        }
        .about-content {
          flex: 1;
          max-width: 600px;
        }
        .about-content h2 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 1.5rem;
        }
        .about-content > p {
          color: #64748b;
          line-height: 1.8;
          margin-bottom: 1rem;
        }
        .about-features {
          margin-top: 2rem;
          display: grid;
          gap: 1rem;
        }
        .feature {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #1e293b;
          font-weight: 500;
        }
        .feature svg {
          color: #22c55e;
        }
        .about-image {
          flex: 1;
          max-width: 400px;
        }
        .about-image-placeholder {
          background: linear-gradient(135deg, #1e3a5f 0%, #3b82f6 100%);
          border-radius: 16px;
          height: 350px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          gap: 1rem;
        }
        .about-image-placeholder span {
          font-size: 1.25rem;
          font-weight: 600;
        }

        /* Service Areas */
        .areas {
          padding: 6rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .areas-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }
        .area-tag {
          background: #f1f5f9;
          color: #334155;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          font-weight: 500;
        }

        /* CTA Section */
        .cta {
          background: linear-gradient(135deg, #1e3a5f 0%, #3b82f6 100%);
          padding: 6rem 2rem;
          text-align: center;
          color: white;
        }
        .cta h2 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }
        .cta p {
          font-size: 1.25rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto 2rem;
        }
        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn-large {
          padding: 1.25rem 2.5rem;
          font-size: 1.25rem;
        }
        .cta .btn-primary {
          background: white;
          color: #1e3a5f;
        }
        .cta .btn-primary:hover {
          background: #f1f5f9;
        }
        .cta .btn-secondary {
          background: transparent;
          color: white;
          border-color: white;
        }
        .cta .btn-secondary:hover {
          background: rgba(255,255,255,0.1);
        }

        /* Contact Section */
        .contact {
          padding: 6rem 2rem;
          max-width: 800px;
          margin: 0 auto;
        }
        .contact h2 {
          font-size: 2rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 2rem;
          text-align: center;
        }
        .contact-details {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        .contact-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        .contact-item svg {
          color: #1e3a5f;
          flex-shrink: 0;
        }
        .contact-item strong {
          display: block;
          color: #1e293b;
          margin-bottom: 0.25rem;
        }
        .contact-item p {
          color: #64748b;
          margin: 0;
        }
        .contact-item a {
          color: #1e3a5f;
          text-decoration: none;
        }
        .contact-item a:hover {
          text-decoration: underline;
        }

        /* Footer */
        footer {
          background: #1e293b;
          color: white;
          padding: 4rem 2rem 2rem;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 2rem;
          margin-bottom: 3rem;
        }
        .footer-brand .logo {
          color: white;
          display: block;
          margin-bottom: 0.5rem;
        }
        .footer-brand p {
          opacity: 0.7;
        }
        .footer-links {
          display: flex;
          gap: 2rem;
        }
        .footer-links a {
          color: white;
          text-decoration: none;
          opacity: 0.8;
        }
        .footer-links a:hover {
          opacity: 1;
        }
        .footer-contact {
          text-align: right;
        }
        .footer-contact a {
          color: white;
          text-decoration: none;
          font-size: 1.25rem;
          font-weight: 600;
          display: block;
        }
        .footer-contact span {
          opacity: 0.7;
        }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 2rem;
          text-align: center;
        }
        .footer-bottom p {
          opacity: 0.6;
          font-size: 0.875rem;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .demo-banner {
            font-size: 0.7rem;
            padding: 0.4rem 0.75rem;
          }
          nav {
            top: 28px;
            padding: 0.75rem 1rem;
          }
          .logo {
            font-size: 1.1rem;
          }
          .nav-links {
            display: none;
          }
          .nav-cta {
            padding: 0.5rem 1rem;
            font-size: 0.85rem;
          }
          .hero {
            flex-direction: column;
            padding: 8rem 1.5rem 3rem;
            min-height: auto;
            gap: 2rem;
          }
          .hero h1 {
            font-size: 2rem;
          }
          .hero p {
            font-size: 1rem;
          }
          .hero-buttons {
            flex-direction: column;
          }
          .btn-primary, .btn-secondary {
            width: 100%;
            justify-content: center;
          }
          .hero-image-placeholder {
            height: 250px;
          }
          .stats {
            gap: 2rem;
            padding: 3rem 1rem;
          }
          .stat-number {
            font-size: 2rem;
          }
          .services {
            padding: 4rem 1.5rem;
          }
          .section-header h2 {
            font-size: 1.75rem;
          }
          .services-grid {
            grid-template-columns: 1fr;
          }
          .about {
            flex-direction: column;
            padding: 4rem 1.5rem;
          }
          .about-content h2 {
            font-size: 1.75rem;
          }
          .about-image-placeholder {
            height: 200px;
          }
          .areas {
            padding: 4rem 1.5rem;
          }
          .cta {
            padding: 4rem 1.5rem;
          }
          .cta h2 {
            font-size: 1.75rem;
          }
          .cta p {
            font-size: 1rem;
          }
          .cta-buttons {
            flex-direction: column;
          }
          .btn-large {
            padding: 1rem 2rem;
            font-size: 1rem;
          }
          .contact {
            padding: 4rem 1.5rem;
          }
          .contact-details {
            grid-template-columns: 1fr;
          }
          .footer-content {
            flex-direction: column;
            text-align: center;
          }
          .footer-links {
            justify-content: center;
          }
          .footer-contact {
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
