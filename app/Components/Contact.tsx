import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Me</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Send a Message</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Write your message here"
                  className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              Feel free to reach out via email or phone. I'd love to hear from you!
            </p>
            <ul className="text-gray-700 space-y-3">
              <li>
                <span className="font-medium">Email:</span>{' '}
                <a href="mailto:your.email@example.com" className="text-blue-500 hover:underline">
                  your.email@example.com
                </a>
              </li>
              <li>
                <span className="font-medium">Phone:</span>{' '}
                <a href="tel:+1234567890" className="text-blue-500 hover:underline">
                  +123 456 7890
                </a>
              </li>
              <li>
                <span className="font-medium">Location:</span> Your City, Your Country
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
