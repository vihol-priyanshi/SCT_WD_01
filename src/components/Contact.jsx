import React, { useState } from 'react';
import "./Contact.css";
import Footer from "../components/Footer";
import { FaEnvelope, FaGamepad, FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import villager from '../Images/OtherImg/villager2.png'

const Contact = ({ playerName }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${playerName || "Chief"}, your message has reached the Clan Castle! ⚔️`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Let’s Connect</h1>
        <p>
          ~ We’d love to hear from you,{" "}
          <span style={{ color: "#ff4500" }}>{playerName || "Chief"}</span>!
          Send us your message through the form below.
        </p>
      </header>

      <div className="form-and-img">
        <img src={villager} alt="villager" className="contactVillager" />
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

