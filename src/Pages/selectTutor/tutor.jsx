import { useEffect } from "react";
import "./tutor.css"


const Tutor = () => {
    
    
  return (

    <div className="container">

    <h2 className="title">Complete Your Booking</h2>
    <p className="subtitle">Review your selection and proceed with payment</p>

    <div className="main">

        <div className="left">

            <div className="card">
                <h3>Booking Details</h3>
                <div className="course-info">
                    <img src="logo.jpg" alt="Course"/>
                    <div>
                        <h4>Web Development</h4>
                        <p>Development  Intermediate</p>
                    </div>
                </div>

                <div className="details">
                    <div className="detail-box">
                        <span className="icon">👤</span>
                        <p><strong>Tutor:</strong> Michael</p>
                    </div>

                    <div className="detail-box">
                        <span className="icon">📅</span>
                        <p><strong>Schedule:</strong> Thursday</p>
                    </div>

                    <div className="detail-box">
                        <span className="icon">⏰</span>
                        <p><strong>Time:</strong> 11:00 AM - 1:00 PM</p>
                    </div>
                </div>
            </div>

            <div className="card">
                <h3>Payment Method</h3>

                <label className="radio1 radio" id="radio1">
                    <input type="radio" name="pay"/>
                    MTN Mobile Money
                </label>

                <label className="radio2 radio" id="radio2">
                    <input ty
                    pe="radio" name="pay"/>
                    Orange Money
                </label>

                
                <div className="card-form">
                    <input type="text" placeholder="Enter phone number"/>

                </div>

                <button className="pay-btn" id="payBtn" type="submit">Complete Payment</button>
            </div>
        </div>

        <div className="right">

            <div className="summary-card">
                <h3>Payment Summary</h3>

                <div className="summary-row">
                    <p>Course Fee</p>
                    <p>4000XAF</p>
                </div>

                <div className="summary-row">
                    <p>Platform Fee</p>
                    <p>1000XAF</p>
                </div>

                <hr/>

                <div className="summary-row total">
                    <p>Total</p>
                    <p>5000XAF</p>
                </div>

                <div className="after-pay">
                    <strong>Payment after completion</strong>
                    <p>You'll only be charged after completing all scheduled classNamees.
                         If you're not satisfied, you can request a refund within 30 days.</p>
                </div>

            </div>

        </div>

    </div>
</div>
  )
}

export default Tutor;
