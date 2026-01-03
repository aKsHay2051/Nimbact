import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { logEvent } from '../utils/analytics';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const whatsappNumber = process.env.REACT_APP_WHATSAPP_NUMBER?.replace(/\D/g, '') || '';

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg }
      });
      setFormState({
        name: '',
        email: '',
        message: ''
      });
      setErrors({});
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg }
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formState.name.trim()) newErrors.name = 'Name is required.';
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!formState.message.trim()) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
    if (errors[name]) setErrors(prevErrors => ({ ...prevErrors, [name]: undefined }));
    if (status.info.msg) setStatus(prevStatus => ({ ...prevStatus, info: { error: false, msg: null }, submitted: false }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) {
      setStatus(prevStatus => ({ ...prevStatus, info: { error: true, msg: 'Please correct the errors in the form.' } }));
      logEvent('Contact', 'Form Validation Failed', 'Contact Form');
      return;
    }

    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
    logEvent('Contact', 'Form Submit', 'Contact Form');

    try {
      const templateParams = {
        from_name: formState.name,
        from_email: formState.email,
        message: formState.message,
        to_name: 'nimbact',
      };
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams
      );
      handleServerResponse(true, "Thanks for reaching out! We'll get back to you within 24 hours.");
    } catch (error) {
      console.error('Failed to send email:', error);
      handleServerResponse(false, error.message || "Oops! Something went wrong. Please try again.");
    }
  };

  const handleWhatsAppClick = () => {
    logEvent('Contact', 'Click', 'WhatsApp Button');
  };

  return (
    <>
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-gray-900 hover:bg-black text-white shadow-lg transition-transform duration-300 hover:scale-110"
        onClick={handleWhatsAppClick}
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      <section id="contact" className="py-20 bg-gray-50 font-inter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
            <p className="mt-4 text-lg text-gray-600">
              Have a project in mind or just want to say hello? I'd love to hear from you.
            </p>
          </div>

          <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formState.name}
                    onChange={handleChange}
                    disabled={status.submitting}
                    className={`block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-gray-800 focus:border-gray-800 sm:text-sm ${errors.name ? 'border-red-500' : ''}`}
                  />
                </div>
                {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                    disabled={status.submitting}
                    className={`block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-gray-800 focus:border-gray-800 sm:text-sm ${errors.email ? 'border-red-500' : ''}`}
                  />
                </div>
                {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <div className="mt-1">
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    value={formState.message}
                    onChange={handleChange}
                    disabled={status.submitting}
                    className={`block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-gray-800 focus:border-gray-800 sm:text-sm resize-none ${errors.message ? 'border-red-500' : ''}`}
                  />
                </div>
                {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
              </div>

              {status.info.msg && (
                <div className={`text-sm text-center px-4 py-3 rounded-md ${status.info.error ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                  {status.info.msg}
                </div>
              )}

              <div className="text-center pt-2">
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full inline-flex items-center justify-center px-8 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-900 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 disabled:bg-gray-400 transition-colors"
                >
                  {status.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
