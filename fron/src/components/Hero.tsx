import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
              Shop
              <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Amazing Products
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed">
              Discover incredible deals on quality products. Fast shipping, secure payments, and unbeatable prices.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link
                to="/products"
                className="group bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-5 px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3 text-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span>Shop Now</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link
                to="/categories"
                className="group border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-5 px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 text-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span>Browse Categories</span>
              </Link>
            </div>

            {/* Features/Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">10K+</div>
                <div className="text-gray-300 text-lg">Products</div>
                <p className="text-gray-400 text-sm mt-2">Wide variety of items</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">24/7</div>
                <div className="text-gray-300 text-lg">Support</div>
                <p className="text-gray-400 text-sm mt-2">Always here to help</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">Fast</div>
                <div className="text-gray-300 text-lg">Delivery</div>
                <p className="text-gray-400 text-sm mt-2">Quick & reliable shipping</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shopping Icons Floating Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-white/20 animate-bounce" style={{ animationDelay: '1s' }}>
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7Z" />
          </svg>
        </div>
        <div className="absolute top-32 right-16 text-white/20 animate-bounce" style={{ animationDelay: '3s' }}>
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
          </svg>
        </div>
        <div className="absolute bottom-32 left-20 text-white/20 animate-bounce" style={{ animationDelay: '5s' }}>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-24 text-white/20 animate-bounce" style={{ animationDelay: '2s' }}>
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 11H7L9 6V4H15V6L13 11H11L13 16V18H9V16L11 11H9Z" />
          </svg>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg className="w-8 h-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
