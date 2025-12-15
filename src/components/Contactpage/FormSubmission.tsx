// export default function FormSubmission() {
//     return (
//         <>
//             <div className="contact-right">

//             </div>
//         </>
//     );
// }

'use client';

import { useState } from 'react';

export default function FormSubmission() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: 'success',
          message: data.message || 'Thank you! We’ll contact you shortly.'
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          organization: '',
          message: ''
        });
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-right">
    <form className="contact-form" onSubmit={handleSubmit}>
      {status.message && (
        <div
          className={`p-4 rounded mb-4 ${
            status.type === "success"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {status.message}
        </div>
      )}


        <div className="row-2">
            <input name="name" className="site-radius-10 text-rg h6 text-grey" type="text" placeholder="Full Name" required value={formData.name} onChange={handleChange} />

            <input name="email" className="site-radius-10 text-rg h6 text-grey" type="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} />
        </div>

        <input name="organization" className='site-radius-10 text-rg h6 text-grey form-organization' type="text" placeholder="Organization Name" required value={formData.organization} onChange={handleChange} />

        <textarea name="message" className='site-radius-10 text-rg h6 text-grey form-message' placeholder="Your Message" value={formData.message} onChange={handleChange} ></textarea>
        
        <button className='btn-padding text-rg h6 text-grey site-radius-100' type="submit" disabled={isSubmitting} >
            {isSubmitting ? "Sending..." : "Send message"}
        </button>

    </form>
    </div>
  );
}