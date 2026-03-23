import React from 'react';
import { Aboutpics } from '../../assets/AboutPictures';
import Button from '../../components/Button';
import { FiCheckCircle, FiUsers, FiShoppingBag, FiStar } from 'react-icons/fi';

const AboutPage = () => {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="bg-blue-600 py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none text-white font-black text-[15vw] flex items-center justify-center select-none uppercase">
          About Us
        </div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left space-y-8">
              <span className="bg-blue-500 text-blue-100 px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase">Our Story</span>
              <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight">
                Open a Mobile Accessories Store Online
              </h1>
              <p className="text-blue-100 text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
                We provide the best tips and platform to start your online business with ease and style.
              </p>
              <Button variant="outline" className="!bg-white !text-blue-600 border-none px-10 py-4 hover:!bg-blue-50">
                Explore Shop
              </Button>
            </div>
            <div className="flex-1">
              <img 
                src={Aboutpics.material} 
                alt="Accessories" 
                className="w-full max-w-md mx-auto drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container-custom -mt-32 relative z-20">
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 lg:p-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { count: "870", label: "Shops", icon: <FiShoppingBag className="text-blue-600" /> },
            { count: "20,000+", label: "Users", icon: <FiUsers className="text-blue-600" /> },
            { count: "260k", label: "Subscribers", icon: <FiStar className="text-blue-600" /> },
            { count: "73,990", label: "Active", icon: <FiCheckCircle className="text-blue-600" /> }
          ].map((s, i) => (
            <div key={i} className="text-center space-y-3">
              <div className="text-3xl flex justify-center">{s.icon}</div>
              <div className="text-3xl font-black text-gray-900">{s.count}</div>
              <div className="text-gray-500 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container-custom">
        <div className="text-center mb-16 space-y-4">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Why Choose Us</span>
          <h2 className="text-4xl font-black text-gray-900">Benefits of Buying with Us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Choose Tech", desc: "Access the latest technology and gadgets from top brands worldwide." },
            { title: "24/7 Available", desc: "Our support team is always here to help you with your tech needs." },
            { title: "Premium Quality", desc: "Every product is verified for quality and performance standards." },
            { title: "Affordable Price", desc: "Get the best value for your money with our competitive pricing." }
          ].map((b, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-blue-50 group">
              <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors uppercase tracking-wide">{b.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="space-y-32">
        <div className="container-custom flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative order-2 lg:order-1">
             <div className="absolute -inset-4 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
             <img src={Aboutpics.orderpic} className="relative z-10 rounded-[3rem] shadow-2xl" alt="Buying Experience" />
          </div>
          <div className="flex-1 space-y-8 order-1 lg:order-2">
            <span className="text-blue-600 font-black text-sm uppercase tracking-widest">Customized Tech</span>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">Personalized professional buying on your schedule</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              We understand that every customer is unique. That's why we offer personalized recommendations and a seamless buying process tailored to your specific needs.
            </p>
            <Button variant="primary" className="px-10 py-4">Get Started</Button>
          </div>
        </div>

        <div className="container-custom flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="text-blue-600 font-black text-sm uppercase tracking-widest">Premium Service</span>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">Elevate your digital life with expert guidance</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Our experts are dedicated to helping you find the best electronics that fit your lifestyle perfectly. From headphones to smart home devices, we've got you covered.
            </p>
            <Button variant="primary" className="px-10 py-4">Learn More</Button>
          </div>
          <div className="flex-1 relative">
             <div className="absolute -inset-4 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
             <img src={Aboutpics.about2} className="relative z-10 rounded-[3rem] shadow-2xl" alt="Service Showcase" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-900 py-24 text-white overflow-hidden relative">
        <div className="container-custom relative z-10 text-center space-y-16">
           <div className="space-y-4">
             <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">Testimonials</span>
             <h2 className="text-4xl lg:text-5xl font-black">What our users say</h2>
           </div>
           
           <div className="max-w-4xl mx-auto space-y-12">
             <div className="flex justify-center -space-x-4">
               {[Aboutpics.user1, Aboutpics.user2, Aboutpics.user3].map((u, i) => (
                 <img key={i} src={u} className="w-20 h-20 rounded-full border-4 border-slate-900 object-cover" alt="User" />
               ))}
             </div>
             
             <div className="space-y-6">
               <p className="text-2xl lg:text-3xl italic font-medium leading-relaxed">
                 "This platform has completely transformed how I buy electronics. The quality and service are absolutely top-notch!"
               </p>
               <div className="space-y-1">
                 <h4 className="text-xl font-bold text-blue-400">Monica J.</h4>
                 <p className="text-gray-400 text-sm">Financial Analyst</p>
               </div>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
