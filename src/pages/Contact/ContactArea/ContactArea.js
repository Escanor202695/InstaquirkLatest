
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const cors = require("cors");


const ContactArea = () => {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c12ofag",
        "template_j6bk8m8",
        form.current,
        "ujqGp-gYbQpWbuRmI"
      )
      .then(
        (result) => {
          if (result) {
            alert("thanks for your message");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <>
      <section className="contact__area">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-xl-12">
              <div className="contact__map">
                <iframe
                  title="contact"
                  src="https://maps.google.com/maps?hl=en&amp;q=Dhaka+()&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"
                ></iframe>
                <div
                  className="contact__wrapper d-md-flex justify-content-between wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="contact__info mr-100">
                    <h3>Get in touch</h3>
                    <ul>
                      <li>
                        <h4>Address</h4>
                        <p className="text-lg">
                          Dhaka, Bangladesh.
                        </p>
                      </li>
                      <li>
                        <h4>Whatsapp us</h4>
                        <p className="text-lg">
                        +8801538425875
                        </p>
                        <p className="text-lg">
                          +8801517310359
                        </p>
                      </li>
                      <li>
                        <h4>Email Address</h4>
                        <p className="text-lg">
                          <a href="mailto:Info@example.com">support@instaquirk.agency</a>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="contact__form">
                    <form  ref={form}>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name"
                      />
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your Email"
                      />
                      <textarea
                        required
                        placeholder="Your Message"
                        name="message"
                      ></textarea>
                      <button type="submit" onClick={sendEmail} className="z-btn">
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;

