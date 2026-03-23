import React from 'react';
import { contactpics } from '../../assets/ContactPictures';
import Button from '../../components/Button';
import { FiMail, FiPhone, FiMapPin, FiSend, FiMessageCircle } from 'react-icons/fi';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <section 
        className="relative py-24 lg:py-32 bg-cover bg-center overflow-hidden" 
        style={{ backgroundImage: `url(${contactpics.background})` }}
      >
        <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-sm"></div>
        <div className="container-custom relative z-10 text-center text-white space-y-8">
          <span className="bg-blue-500/30 text-blue-100 px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase">Get in Touch</span>
          <h1 className="text-5xl lg:text-7xl font-black leading-tight">We're here to help</h1>
          <p className="text-blue-100 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Have a question or feedback? We'd love to hear from you. Reach out to our team whenever you need.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-custom -mt-16 lg:-mt-24 relative z-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-blue-50 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-gray-900">Contact Details</h3>
                <p className="text-gray-500 text-sm">Fill out the form and our team will get back to you within 24 hours.</p>
              </div>

              <div className="space-y-6 pt-4">
                {[
                  { icon: <FiPhone />, label: "Call Us", value: "0300 1234567" },
                  { icon: <FiMail />, label: "Email Us", value: "support@electronics.com" },
                  { icon: <FiMapPin />, label: "Visit Us", value: "Electronics Plaza, Tech City, Pakistan" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm mb-1">{item.label}</h4>
                      <p className="text-gray-500 text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-gray-100">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full hover:bg-blue-50 transition-colors"></div>
                  <div className="w-10 h-10 bg-gray-100 rounded-full hover:bg-blue-50 transition-colors"></div>
                  <div className="w-10 h-10 bg-gray-100 rounded-full hover:bg-blue-50 transition-colors"></div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 p-8 rounded-[2.5rem] shadow-xl text-white space-y-4">
                <FiMessageCircle size={40} className="mb-4" />
                <h3 className="text-2xl font-black">Live Chat</h3>
                <p className="text-blue-100 text-sm leading-relaxed">Need instant help? Our live chat support is available 9am - 6pm PKT.</p>
                <button className="w-full py-4 bg-white text-blue-600 font-black rounded-2xl hover:bg-blue-50 transition-colors uppercase tracking-widest text-xs">
                    Start Chat
                </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-10 lg:p-16 rounded-[3rem] shadow-2xl border border-gray-100">
            <h2 className="text-3xl font-black text-gray-900 mb-10">Send a Message</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                />
              </div>
              <div className="space-y-4">
                <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                />
              </div>
              <div className="space-y-4 md:col-span-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                <select className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all appearance-none cursor-pointer">
                    <option>Product Support</option>
                    <option>Order Inquiry</option>
                    <option>Business Partnership</option>
                    <option>Other</option>
                </select>
              </div>
              <div className="space-y-4 md:col-span-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Your Message</label>
                <textarea 
                  rows="6" 
                  placeholder="How can we help you today?"
                  className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-4">
                <Button variant="primary" className="w-full md:w-fit px-12 py-4 text-lg">
                  Submit Message <FiSend className="ml-2" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
