import React from "react";

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
            name="number"
            id="contact-user-email"
            className="form-input"
            placeholder="Enter your contact number"
            required
          />
          <span className="input-focus" aria-hidden="true" />
        </p>
        <p className="form-row">
          <label className="form-label" htmlFor="contact-user-email">
            Charter Destination
          </label>
          <select
            name="destination"
            multiple
            style={{ height: "100px" }}
            required
          >
            <option value="Maldives">Maldives</option>
            <option value="Mentawai">Mentawai</option>
            <option value="other">Other(Mention in Message)</option>
          </select>

          <span className="input-focus" aria-hidden="true" />
        </p>
        <p className="form-row">
          <label className="form-label" htmlFor="contact-user-email">
            Number of Travelers
          </label>
          <input
            type="text"
            name="pax"
            id="contact-user-email"
            className="form-input"
            placeholder="Enter number of travelers"
            required
          />
          <span className="input-focus" aria-hidden="true" />
        </p>
        <p className="form-row">
          <label className="form-label" htmlFor="contact-user-email">
            Preffered Departure Date
          </label>
          <br></br>
          <input
            type="date"
            name="departure_date"
            id="contact-user-email"
            className="form-input"
            placeholder=""
            required
          />
          <span className="input-focus" aria-hidden="true" />
        </p>
        <p className="form-row">
          <label className="form-label" htmlFor="contact-user-email">
            Preffered Arrival Date{" "}
          </label>
          <br></br>
          <input
            type="date"
            name="arrival_date"
            id="contact-user-email"
            className="form-input"
            placeholder=""
            required
          />
          <span className="input-focus" aria-hidden="true" />
        </p>
        <p className="form-row">
          <label className="form-label" htmlFor="contact-user-email">
            Are your Travel Dates Flexible?{" "}
          </label>
          <select name="travel_dates" required>
            <option value="Yesy">Yes</option>
            <option value="No">No</option>
            <option value="No">No, my flights are already booked</option>
          </select>
          <span className="input-focus" aria-hidden="true" />
        </p>
        <p className="form-row">
          <label className="form-label" htmlFor="budget">
            Your budget{" "}
          </label>
          <input
            type="text"
            name="budget"
            id="contact-user-email"
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
