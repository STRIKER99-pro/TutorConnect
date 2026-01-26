import React from "react";
import "./drt.css";

const TutorPage = () => {
  return (
    <div className="container">
      {/* Main Content */}
      <div className="main movie-content">
        {/* Tutor Card */}
        <div className="tutor-card">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Michael Chen"
            className="tutor-avatar"
          />
          <div className="tutor-info">
            <h3>Michael Chen</h3>
            <div className="tutor-title">Full Stack Developer</div>
            <p className="tutor-bio">
              Full-stack developer specializing in modern web technologies.
              Former lead developer at a Fortune 500 company.
            </p>
            <div className="tutor-stats">
              <span className="rating">4.8 Rating</span>
              <span>6,500 Students</span>
              <span>10 years Experience</span>
            </div>
          </div>
        </div>

        {/* What You'll Learn */}
        <section className="section">
          <h3 className="section-title">
            <i className="fas fa-graduation-cap"></i> What You'll Learn
          </h3>
          <div className="skills-grid">
            <div className="skill-item">
              <i className="fas fa-check-circle"></i> React
            </div>
            <div className="skill-item">
              <i className="fas fa-check-circle"></i> MongoDB
            </div>
            <div className="skill-item">
              <i className="fas fa-check-circle"></i> Node.js
            </div>
            <div className="skill-item">
              <i className="fas fa-check-circle"></i> TypeScript
            </div>
          </div>
        </section>

        {/* Available Time Slots */}
        <section className="section">
          <h3 className="section-title">
            <i className="far fa-calendar-alt"></i> Available Time Slots
          </h3>
          <div className="time-slots">
            <div className="day-group">
              <h4>Monday</h4>
              <div className="slots">
                <div className="slot">9:00 AM - 11:00 AM</div>
                <div className="slot selected">2:00 PM - 4:00 PM</div>
              </div>
            </div>

            <div className="day-group">
              <h4>Tuesday</h4>
              <div className="slots">
                <div className="slot">10:00 AM - 12:00 PM</div>
                <div className="slot">3:00 PM - 5:00 PM</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Sidebar / Checkout */}
      <aside className="sidebar">
        <img
          src="https://images.unsplash.com/photo-1517180107641-2b9b1b62f68f?w=800&auto=format&fit=crop"
          alt="Course Preview"
          className="course-image"
        />

        <div className="price-card">
          <div className="price">
            XAF 25,000 <small>per course</small>
          </div>

          <div className="selected-slot">
            Selected Time Slot:
            <br />
            <strong>Monday, 2:00 PM - 4:00 PM</strong>
          </div>

          <button className="checkout-btn">Continue to Checkout</button>

          <div className="guarantees">
            <div className="guarantee-item">
              <i className="fas fa-infinity"></i> Lifetime access
            </div>
            <div className="guarantee-item">
              <i className="fas fa-certificate"></i> Certificate of completion
            </div>
            <div className="guarantee-item">
              <i className="fas fa-shield-alt"></i> 30-day money-back guarantee
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default TutorPage;