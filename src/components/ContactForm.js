import React from "react";
import "./style.css";

export default class ContactForm extends React.Component {
  render() {
    return (
      <form
        name="contactForm"
        method="POST"
        netlifyHoneypot="bot-field"
        data-netlify="true"
        id="contact-form"
        className="contact-form"
      >
        <p className="screen-reader-text">
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <input type="hidden" name="form-name" value="contactForm" />

        <p className="form-row">
          <label className="form-label" htmlFor="contact-user-name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="contact-user-name"
            className="form-input"
            placeholder="Enter your name"
            required
          />
          <span className="input-focus" aria-hidden="true" />
        </p>
        <p className="form-row">
          <label className="form-label" htmlFor="contact-user-email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="contact-user-email"
            className="form-input"
            placeholder="Enter your email address"
            required
          />
          <span className="input-focus" aria-hidden="true" />
        </p>
        <p className="form-row">
          <label className="form-label" htmlFor="contact-user-email">
            Contact Number with Country Code
          </label>
          <input
            type="text"
            name="phonenumber"
            id="contact-user-number"
            className="form-input"
            placeholder="Enter your contact number"
            required
          />
          <span className="input-focus" aria-hidden="true" />
        </p>
        <p className="form-row">
          <label className="form-label" htmlFor="destination">
            Charter Destination
          </label>
          <select name="destination" id="destination" class="drop" required>
            <option value="Maldives">Maldives</option>
            <option value="Mentawai">Mentawai</option>
            <option value="other">Other(Mention in Message)</option>
          </select>

          <span className="input-focus" aria-hidden="true" />
        </p>
        <p className="form-row">
          <label className="form-label" htmlFor="num-pax">
            Number of Travelers
          </label>
          <br></br>
          <input
            type="number"
            name="passengers"
            id="num-pax"
            className="form-input traveler"
            placeholder=""
            required
          />
          <span className="input-focus" aria-hidden="true" />
        </p>
        <p className="form-row">
          <label className="form-label" htmlFor="contact-departure-date">
            Preffered Departure Date
          </label>
          <br></br>
          <input
            type="date"
            name="departure_date"
            id="contact-departure-date"
            className="form-input"
            placeholder=""
            required
          />
          <span className="input-focus" aria-hidden="true" />
        </p>
        <p className="form-row">
          <label className="form-label" htmlFor="contact-arrival-date">
            Preffered Arrival Date
          </label>
          <br></br>
          <input
            type="date"
            name="arrival_date"
            id="contact-arrival-date"
            className="form-input"
            placeholder=""
            required
          />
          <span className="input-focus" aria-hidden="true" />
        </p>
        <p className="form-row">
          <label className="form-label" htmlFor="contact-travel-dates">
            Are your Travel Dates Flexible?{" "}
          </label>
          <select
            name="travel_dates"
            id="contact-travel-dates"
            class="drop"
            required
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="No">No, my flights are already booked</option>
          </select>
          <span className="input-focus" aria-hidden="true" />
        </p>
        <p className="form-row">
          <label className="form-label" htmlFor="contact-user-budget">
            Your budget{" "}
          </label>
          <input
            type="text"
            name="budget"
            id="contact-user-budget"
            className="form-input"
            placeholder="Enter your budget"
            required
          />
          <span className="input-focus" aria-hidden="true" />
        </p>
        <p className="form-row">
          <label className="form-label" htmlFor="contact-message">
            Message
          </label>
          <textarea
            name="message"
            id="contact-message"
            className="form-textarea"
            rows="5"
            placeholder="Enter your message"
            required
          />
          <span className="input-focus" aria-hidden="true" />
        </p>
        <input type="hidden" name="form-name" value="contactForm" />
        <p className="form-row form-submit">
          <button type="submit" className="button">
            Send Message
          </button>
        </p>
      </form>
    );
  }
}
