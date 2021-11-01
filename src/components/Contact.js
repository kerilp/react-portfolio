import React, { useState } from 'react';

function Contact() {
  const [formState, setFormState] = useState(
    {
      name: "",
      email: "",
      message: ""
    }
  );
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    if(event.target.name === "name") {
      if(!event.target.value.length) {
        setErrorMessage("Your name is a required field");
      } else {
        setErrorMessage("");
      }
    } else if (event.target.name === "email") {
      if(/^[^@]+@[^@]+\.[^@]+$/.test(event.target.value)) {
        setErrorMessage("");
      } else {
        setErrorMessage("Invalid email address");
      }
    } else if (event.target.name === "message") {
      if(!event.target.value.length) {
        setErrorMessage("Your message is a required field");
      } else {
        setErrorMessage("");
      }
    }

    if(!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value});
    }
  }

  return (
    <article id="contact">
      <h2 className="display-4 headers">Contact Me</h2>
      <form>
        <div>
          <input type="text" name="name" onChange={handleChange} placeholder="Your Name" />
        </div>
        <div>
          <input type="email" name="email" onChange={handleChange} placeholder="Your Email" />
        </div>
        <div>
          <textarea name="message" onChange={handleChange} placeholder="Your Message" />
        </div>
        {errorMessage && <div>{errorMessage}</div>}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </article>
  );
};

export default Contact;