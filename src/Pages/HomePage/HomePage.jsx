import React from 'react';
import { Link } from 'react-router-dom';
import { HomePictures, products, pictures } from '../../assets/HomePictures';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { FiArrowRight, FiZap, FiVolume2, FiMic, FiTrendingUp } from 'react-icons/fi';

const HomePage = () => {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 lg:pt-24">
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-bold animate-bounce">
                <FiZap />
                <span>In the spotlight</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1]">
                Your sound best for your <span className="text-blue-600">life</span>
              </h1>
              <p className="text-gray-500 text-lg lg:text-xl max-w-2xl leading-relaxed mx-auto lg:mx-0">
                These have large ear cups that encompass the ears, providing good sound isolation and often better sound quality.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button variant="primary" className="w-full sm:w-auto text-lg px-10 py-4">
                  Shop Now <FiArrowRight className="ml-2" />
                </Button>
                <Button variant="outline" className="w-full sm:w-auto text-lg px-10 py-4">
                  View Features
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-3xl opacity-50 animate-pulse"></div>
              <img 
                src={HomePictures.headphone} 
                alt="Premium Headphones" 
                className="w-full max-w-lg mx-auto drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-900 py-24 -mt-10 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none text-white font-black text-[20vw] select-none leading-none">
          HEADPHONES
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl text-white font-black">Amazing Features</h2>
            <p className="text-gray-400">Experience the cutting-edge technology in every beat.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-600/20 rounded-3xl blur-2xl group-hover:bg-blue-600/30 transition-all"></div>
              <img 
                src={HomePictures.hdphone} 
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl" 
                alt="Feature Highlight"
              />
            </div>
            <div className="space-y-10">
              {[
                { icon: <FiZap />, title: "Touch Controls", desc: "Some headphones have touch-sensitive surfaces for controlling playback." },
                { icon: <FiVolume2 />, title: "Sound Quality", desc: "This includes considerations like bass response, clarity, and overall audio fidelity." },
                { icon: <FiMic />, title: "Microphone", desc: "Built-in microphones enable hands-free calling and voice commands." }
              ].map((f, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-wide">{f.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container-custom">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-black text-gray-900">Explore Categories</h2>
          <p className="text-gray-500">Find the perfect tech for your needs</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { img: HomePictures.iphone, label: "iPhone" },
            { img: HomePictures.speaker, label: "Speakers" },
            { img: HomePictures.tablet, label: "Tablets" },
            { img: HomePictures.laptop, label: "Laptops" },
            { img: HomePictures.hdphone, label: "Headphones" }
          ].map((cat, i) => (
            <div key={i} className="group cursor-pointer space-y-4 text-center">
              <div className="aspect-square bg-gray-50 rounded-3xl p-8 flex items-center justify-center border border-transparent group-hover:border-blue-100 group-hover:bg-white group-hover:shadow-xl transition-all duration-300">
                <img src={cat.img} alt={cat.label} className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
              </div>
              <p className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{cat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Banners */}
      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 lg:p-14 text-white flex flex-col justify-center">
            <div className="relative z-10 space-y-6 max-w-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Limited Offer</span>
              <h3 className="text-5xl font-black">25% OFF</h3>
              <p className="text-blue-50 text-xl leading-relaxed font-medium">Catch the <span className="underline decoration-blue-300">hottest deals</span> in Cameras category</p>
              <Button variant="outline" className="!bg-white !text-blue-600 border-none w-fit hover:!bg-blue-50">
                Shop Now <FiArrowRight className="ml-2" />
              </Button>
            </div>
            <img src={HomePictures.camera} className="absolute -right-10 -bottom-10 w-2/3 opacity-20 lg:opacity-100 lg:w-1/2 rotate-12" alt="Camera Promo" />
          </div>
          <div className="relative overflow-hidden bg-slate-100 rounded-3xl p-10 lg:p-14 text-gray-900 flex flex-col justify-center">
            <div className="relative z-10 space-y-6 max-w-sm">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">New Arrival</span>
              <h3 className="text-5xl font-black">From $799</h3>
              <p className="text-gray-500 text-xl leading-relaxed font-medium">Tablets, smartphones and <span className="text-blue-600 font-bold">much more</span></p>
              <Button variant="primary" className="w-fit">View Store</Button>
            </div>
            <img src={HomePictures.tablet2} className="absolute -right-10 -bottom-10 w-2/3 lg:w-1/2 -rotate-12 translate-y-10 group-hover:translate-y-0 transition-transform" alt="Tablet Promo" />
          </div>
        </div>
      </section>

      {/* Top Rated Products */}
      <section className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl font-black text-gray-900">Top Rated Products</h2>
            <p className="text-gray-500">Quality products trusted by thousands</p>
          </div>
          <Button variant="secondary">View All Products</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <Card 
              key={p.id}
              title={p.name}
              price={p.price}
              image={p.image}
              badge="Top Rated"
              description="Premium quality electronic device with advanced features."
            />
          ))}
        </div>
      </section>

      {/* Stats Section with Image */}
      <section className="container-custom py-12">
        <div className="bg-blue-600 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          <div className="flex-1 p-12 lg:p-20 text-white space-y-12">
            <div className="space-y-4">
              <span className="text-blue-200 uppercase tracking-widest text-sm font-bold">Global Community</span>
              <h2 className="text-5xl font-black leading-tight">A new style in <br /> your ear</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-12">
              {[
                { count: "4M+", label: "Users" },
                { count: "153k", label: "Orders" },
                { count: "53k", label: "Gallery" },
                { count: "2M+", label: "Feedback" }
              ].map((s, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-4xl font-black">{s.count}</div>
                  <div className="text-blue-200 text-sm font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-2/5 p-4">
            <img src={HomePictures.promo} className="h-full w-full object-cover rounded-[2.5rem]" alt="Happy Customer" />
          </div>
        </div>
      </section>

      {/* New Arrivals with Category Layout */}
      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main New Arrival Grid */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-gray-900">New Arrivals</h2>
              <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {pictures.map((p) => (
                <Card 
                  key={p.id}
                  title={p.name}
                  price={p.price}
                  image={p.image}
                  description="Newest addition to our premium collection with modern aesthetics."
                  onAddToCart={() => alert('Added to cart!')}
                />
              ))}
            </div>
          </div>

          {/* Sub Categories / Side Cards */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-900 rounded-3xl p-8 relative overflow-hidden group">
              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl font-bold text-white">Awesome AirPods</h3>
                <p className="text-gray-400 text-sm italic">Pure sound, no limits.</p>
                <Button variant="outline" className="!text-white border-white/20 hover:!bg-white animate-pulse">Shop Now</Button>
              </div>
              <img src={HomePictures.earspod} className="absolute -right-8 -bottom-8 w-1/2 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Airpods" />
            </div>
            <div className="bg-blue-50 rounded-3xl p-8 flex items-center justify-between group overflow-hidden">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Smart Watches</h3>
                <Link to="/electronics" className="text-blue-600 font-bold flex items-center group-hover:translate-x-2 transition-transform">
                  Browse Store <FiArrowRight className="ml-2" />
                </Link>
              </div>
              <img src={HomePictures.watch} className="w-1/3 group-hover:scale-110 transition-transform" alt="Watch" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
