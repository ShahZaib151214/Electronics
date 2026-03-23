import React from 'react';
import { Loginpics } from '../../assets/LoginPicture';
import Button from '../../components/Button';
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const LoginPage = () => {
  return (
    <div 
      className="min-h-[90vh] flex items-center justify-center bg-cover bg-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundImage: `url(${Loginpics.background})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px]"></div>

      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10">
        {/* Left Side - Form */}
        <div className="p-10 lg:p-16 flex flex-col justify-center space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-black text-gray-900">Welcome Back</h2>
            <p className="text-gray-500 text-sm">Sign in to your account to continue</p>
          </div>

          <div className="flex bg-gray-100 p-1 rounded-2xl w-fit">
            <button className="px-6 py-2 bg-white rounded-xl shadow-sm text-sm font-bold text-blue-600 transition-all">Sign In</button>
            <button className="px-6 py-2 text-sm font-bold text-gray-500 hover:text-gray-700 transition-all">Sign Up</button>
          </div>

          <form className="space-y-6">
            <div className="space-y-4">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
                  <FiMail />
                </div>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-transparent rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                />
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
                  <FiLock />
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-transparent rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-sm font-bold text-blue-600 hover:text-blue-700">Forgot password?</a>
            </div>

            <Button variant="primary" className="w-full py-4 text-lg">
              Sign In <FiArrowRight className="ml-2" />
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
            <div className="relative flex justify-center text-sm uppercase"><span className="px-4 bg-white text-gray-400 font-bold tracking-widest">Or continue with</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 px-4 py-3.5 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-colors">
              <FaGoogle className="text-red-500" />
              <span className="text-sm font-bold text-gray-700">Google</span>
            </button>
            <button className="flex items-center justify-center gap-3 px-4 py-3.5 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-colors">
              <FaFacebook className="text-blue-600" />
              <span className="text-sm font-bold text-gray-700">Facebook</span>
            </button>
          </div>
        </div>

        {/* Right Side - Visual */}
        <div className="hidden lg:flex bg-blue-600 p-12 relative items-center justify-center">
            <div className="absolute inset-0 opacity-10 font-black text-[10vw] flex items-center justify-center select-none overflow-hidden">
                LOGIN LOGIN LOGIN
            </div>
            <div className="relative z-10 text-center space-y-8">
                 <img src={Loginpics.material} alt="Electronics" className="w-full max-w-sm drop-shadow-2xl animate-float" />
                 <div className="text-white space-y-2">
                    <h3 className="text-2xl font-black">Get Access Now</h3>
                    <p className="text-blue-100 text-sm opacity-80">Premium sounds, exclusive deals, and much more.</p>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
