import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setIsModalOpen(false);
    setIsThankYouModalOpen(true);

    setTimeout(() => {
      setIsThankYouModalOpen(false);
    }, 2000);

    setFormData({ name: "", email: "", message: "" });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-container">
        <button onClick={openModal} className="contact-us-button">
          Contact Us
        </button>

        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-container">
              <form onSubmit={handleSubmit} className="contact-form">
                <button
                  type="button"
                  onClick={closeModal}
                  className="close-modal-button"
                >
                  &times;
                </button>
                <h2>Contact Me</h2>
                <div className="input-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}

        {isThankYouModalOpen && (
          <div className="modal-overlay">
            <div className="modal-container">
              <h2>Thank you for your message!</h2>
              <p>I will get back to you soon.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
