// src/components/BookingForm.js
import React, { useState } from 'react';
import '../../assets/css/booking.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendees: 1,
    eventDate: '',
    dietaryRestrictions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      attendees: 1,
      eventDate: '',
      dietaryRestrictions: '',
    });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="attendees">Number of Attendees:</label>
        <input
          type="number"
          id="attendees"
          name="attendees"
          value={formData.attendees}
          onChange={handleChange}
          min="1"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="eventDate">Event Date:</label>
        <input
          type="date"
          id="eventDate"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="dietaryRestrictions">Dietary Restrictions:</label>
        <input
          type="text"
          id="dietaryRestrictions"
          name="dietaryRestrictions"
          value={formData.dietaryRestrictions}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Book Event</button>
    </form>
  );
};

export default BookingForm;
