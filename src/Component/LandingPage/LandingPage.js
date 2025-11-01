import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (isFormValid) {
      console.log('Form submitted:', formData);
      alert('Appointment request submitted successfully!');
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
      });
    }
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.phone && formData.message;

  return (
    <section 
      className="px-4 md:px-8 py-12 md:py-16 lg:py-24" 
      style={{ backgroundColor: '#EEEEEE' }} 
      id="contactUs"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <div className="mb-4 md:mb-6">
              <span 
                className="text-xs md:text-sm font-semibold uppercase tracking-wider" 
                style={{ color: '#444444' }}
              >
                APPOINTMENT NOW
              </span>
            </div>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 md:mb-8" 
              style={{ color: '#003153' }}
            >
              We're Ready To Talk About Your{' '}
              <span style={{ color: '#fbbf24' }}>Opportunities</span>
            </h2>
            <p 
              className="text-base md:text-lg leading-relaxed max-w-xl" 
              style={{ color: '#4a5568' }}
            >
              Let's discuss how we can help transform your ideas into successful products. 
              Schedule a consultation with our expert team today.
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 
                className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center" 
                style={{ color: '#003153' }}
              >
                Make An Appointment
              </h3>
              <div className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      className="w-full p-3 md:p-4 border border-gray-200 rounded-lg transition-all duration-300 outline-none focus:ring-2 focus:ring-yellow-400"
                      style={{ borderColor: '#e2e8f0' }}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className="w-full p-3 md:p-4 border border-gray-200 rounded-lg transition-all duration-300 outline-none focus:ring-2 focus:ring-yellow-400"
                      style={{ borderColor: '#e2e8f0' }}
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <select
                      name="subject"
                      className="w-full p-3 md:p-4 border border-gray-200 rounded-lg transition-all duration-300 outline-none focus:ring-2 focus:ring-yellow-400"
                      style={{ borderColor: '#e2e8f0', color: formData.subject ? '#003153' : '#718096' }}
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="">Select Subject</option>
                      <option value="consultation">Consultation</option>
                      <option value="support">Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full p-3 md:p-4 border border-gray-200 rounded-lg transition-all duration-300 outline-none focus:ring-2 focus:ring-yellow-400"
                      style={{ borderColor: '#e2e8f0' }}
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Write Your Message"
                    rows={5}
                    className="w-full p-3 md:p-4 border border-gray-200 rounded-lg transition-all duration-300 resize-none outline-none focus:ring-2 focus:ring-yellow-400"
                    style={{ borderColor: '#e2e8f0' }}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={!isFormValid}
                  className="w-full py-3 md:py-4 px-6 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
                  style={{ backgroundColor: '#fbbf24', color: '#444444' }}
                >
                  MAKE AN APPOINTMENT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;