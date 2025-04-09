'use client'
import { useState, useEffect } from 'react';
import Button from '../components/Button';

function ContactSection() {
  
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  
  const [isMounted, setIsMounted] = useState(false); // Track client-side mounting
  // Ensure that client-side code only runs after the initial render
  useEffect(() => {
    setIsMounted(true); // Update state once the component is mounted on the client
  }, []);
  //  Only render the form once the client-side is fully mounted
  if (!isMounted) {
    return null; // return a loading spinner or placeholder here
  }
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Validate email and message before submitting
    if ( !message) {
      setStatus('Please fill out both fields.');
      return;
    }
    try {
      const response = await fetch('/api/sendEmail', {  // Ensure the correct API endpoint is used
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();
      if (response.status === 200) {
        setStatus('Email sent successfully!');
      } else {
        setStatus('Failed to send email.');
      }
    } catch (error) {
      // console.error('Error sending email:', error);
      setStatus('An error occurred while sending the email.');
    }
  };
  return (
    <section id="contact" className="max-w-6xl mx-auto my-[3rem] md:my-[6rem]">
      <h2 className="mb-4 text-3xl font-bold text-center lg:mb-8">
        Let's Design Together
      </h2>
      <p className="mb-4 lg:mb-8 text-center mx-auto max-w-[36rem] text-black/60">
        I am here to bring your concept to life. Let's create something amazing together.
      </p>
      <form className="flex flex-col items-center justify-center gap-6 mt-6 md:flex-row" onSubmit={handleSubmit}>
        
        <textarea
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="px-4 py-2 border border-gray-400 rounded-lg"
        />
        <Button type="submit" className="text-white bg-[#10adad] hover:bg-[#0B7474]">
          Contact me
        </Button>
      </form>
      {status && <p className="text-center mt-4 text-lg">{status}</p>}
    </section>
  );
}
export default ContactSection;