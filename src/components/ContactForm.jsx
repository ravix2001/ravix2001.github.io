import React, { useState } from "react";
import emailjs from "emailjs-com";
import { User, Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react";
import GetInTouch from "./GetInTouch";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setFormSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <section
      id="contact"
      className="section-padding bg-gray-50 dark:bg-gray-900"
    >
      <div className="container-custom">
        <h2 className="text-center text-gray-900 dark:text-white mb-12 animate-fade-in-up">
          Get In Touch
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="animate-fade-in-left">
              <h3 className="text-gray-900 dark:text-white text-xl font-semibold mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I'm always interested in discussing new opportunities,
                collaborating on projects, or simply connecting with fellow
                developers and AI enthusiasts.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:ravipandit.devmail@gmail.com"
                  className="flex items-center"
                >
                  <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300 mr-4" />
                  <span className="text-gray-700 dark:text-gray-300">
                    ravipandit.devmail@gmail.com
                  </span>
                </a>
                <a href="tel:+9779825335399" className="flex items-center">
                  <Phone className="w-6 h-6 text-gray-700 dark:text-gray-300 mr-4" />
                  <span className="text-gray-700 dark:text-gray-300">
                    +977 9825335399
                  </span>
                </a>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-gray-700 dark:text-gray-300 mr-4" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Biratnagar, Nepal
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="animate-fade-in-right">
            {formSubmitted ? (
              <div className="card-dark text-center">
                <Send className="w-12 h-12 mx-auto text-green-600 dark:text-green-400 mb-4" />
                <h3 className="text-xl font-semibold">Message Sent!</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-dark">
                {/* Name */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="Your name"
                      />
                    </div>
                    {formErrors.name && (
                      <p className="text-red-500 text-sm">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    {formErrors.email && (
                      <p className="text-red-500 text-sm">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="What's this about?"
                  />
                  {formErrors.subject && (
                    <p className="text-red-500 text-sm">{formErrors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  {formErrors.message && (
                    <p className="text-red-500 text-sm">{formErrors.message}</p>
                  )}
                </div>

                <button type="submit" className="w-full btn-primary-dark">
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
