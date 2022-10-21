import React from "react";
import "./Appointment.css";
const Appointment = () => {
  return (
    <>
      <div className="app_container">
        <div className="upper_container_header">
          <i class="fa-solid fa-angles-right"></i>
          <h2>Book a Clinic Appointment</h2>
        </div>
        <div className="upper_container">
          <div className="appointment_booking_section">
            <div className="booking_header">
              <i class="fa-regular fa-clock"></i>
              <span>No Slots Available for Today</span>
            </div>
            <p className="about_info">
              Please book for the next slot available by clicking on book Your
              slot
            </p>
            <hr />
            <div className="booking_container">
              <div className="booking_bottom">
                <h3>Book Clinic Visit</h3>
                <h4>No Booking Fee</h4>
              </div>
              <div className="booking_slot_section">
                <button className="book_slot">Book Your Slot</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;