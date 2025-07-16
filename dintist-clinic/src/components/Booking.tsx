import React, { useState } from 'react';

const Booking = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', time: '', service: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="alert alert-success mt-5 text-center">
        <h4>Thank you for booking!</h4>
        <p>We look forward to seeing you, {form.name}.</p>
      </div>
    );
  }

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-7 col-lg-6">
        <div className="bg-light rounded shadow p-4">
          <h2 className="mb-3 text-primary text-center">Book an Appointment</h2>
          <p className="text-center mb-4">Fill out the form below and our team will contact you to confirm your appointment.</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" name="name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input type="tel" className="form-control" name="phone" value={form.phone} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Date</label>
              <input type="date" className="form-control" name="date" value={form.date} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Time</label>
              <input type="time" className="form-control" name="time" value={form.time} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Service</label>
              <select className="form-select" name="service" value={form.service} onChange={handleChange} required>
                <option value="">Select a service</option>
                <option>Teeth Cleaning</option>
                <option>Dental Checkup</option>
                <option>Tooth Extraction</option>
                <option>Braces & Orthodontics</option>
                <option>Teeth Whitening</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-100">Book Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking; 