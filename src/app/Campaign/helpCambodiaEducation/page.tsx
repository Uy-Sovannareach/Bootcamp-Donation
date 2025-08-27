import React from 'react';
import { Search, Facebook, Instagram, Twitter} from 'lucide-react';
function App() {
  return (
    <div className="bg-gray-30 font-sans antialiased text-gray-800">
      {/* Header Section */}
      <header className="bg-gray shadow-sm sticky top-0 z-50 bg-background/80 backdrop-blur-md border-border/50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 ">
            <img src="/logo.png" alt="Logo" className="h-20 w-20 rounded-full" />
            <h1 className="text-2xl font-bold text-green-600">BootCamp Donation</h1>
          </div>
          <div className="hidden md:flex space-x-8 text-lg font-medium">
            <a href="/" className="hover:text-emerald-600 transition-colors duration-200">Home</a>
            <a href="/donation" className="hover:text-emerald-600 transition-colors duration-200">Donation</a>
            <a href="/about" className="hover:text-emerald-600 transition-colors duration-200">About</a>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button can go here */}
            <button className="text-gray-600 hover:text-emerald-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

<main className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Help Cambodia Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Main Image and Description Section */}
            <div className="md:col-span-2">
              <img
                src="/Rauth.jpg"
                alt="Help Cambodia Education"
                className="w-full h-auto rounded-xl shadow-lg mb-8"
              />
              <p className="text-base text-gray-700 leading-relaxed">
                Education is the key to Cambodia’s future, yet many children in rural areas still face barriers such as limited schools, lack of resources, and financial struggles. Without support, they risk being trapped in poverty for generations. By helping provide classrooms, books, and opportunities, we give children hope and the tools to transform their lives. Together, we can build a brighter future for Cambodia—one child, one classroom, one community at a time.
              </p>
            </div>

            {/* Donation Summary and Actions Section */}
            <div className="bg-emerald-50 rounded-xl p-6 shadow-lg">
              <div className="text-center mb-8">
                <p className="text-4xl font-bold text-emerald-600">$1,609 <span className="text-lg font-normal text-gray-600">raised</span></p>
                <p className="text-lg text-gray-600">goals $10K</p>
              </div>
              <div className="space-y-4">
                <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-200">
                  Share
                </button>
                <a href='/payment/helpCambodiaEducation' className="w-full bg-white border border-emerald-500 text-emerald-500 hover:bg-emerald-100 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-200 text-center block">
                  Donated now
                </a>
              </div>
              <div className="mt-8 text-center">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">amount of people that donated</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">1,532</p>
              </div>
              <div className="mt-8 text-center">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">recently donated</p>
                <p className="text-base text-gray-700 mt-2">
                  <span className="font-bold">John Doe:</span> $50<br/>
                  <span className="font-bold">Jane Smith:</span> $20<br/>
                  <span className="font-bold">Anonymous:</span> $10
                </p>
              </div>
              <div className="flex justify-center space-x-4 mt-8">
                <button className="flex items-center space-x-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-full transition-all duration-200">
                  <span className="text-lg">⭐</span><span>See top</span>
                </button>
                <button className="flex items-center space-x-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-full transition-all duration-200">
                  <span className="text-lg">💬</span><span>Message</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-emerald-100 text-black-300 py-12">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div className="md:col-span-1">
                          <div className="flex items-center space-x-2 mb-4">
                            <img src="logo.png" alt="Logo" className="h-10 w-10 rounded-full text-emerald-500" />
                            <h1 className="text-2xl font-bold text-black">BootCamp Donation</h1>
                          </div>
                          <p className="text-sm">
                            Making a difference, one donation at a time.
                          </p>
                        </div>
                        <div className="md:col-span-1">
                          <h4 className="font-semibold text-black mb-4">Navigation</h4>
                          <ul className="space-y-2"> 
                            <li><a href="#" className="hover:text-emerald-500 transition-colors duration-200">Home</a></li>
                            <li><a href="#" className="hover:text-emerald-500 transition-colors duration-200">Donation</a></li>
                            <li><a href="#" className="hover:text-emerald-500 transition-colors duration-200">About</a></li>
                          </ul>
                        </div>
                        <div className="md:col-span-1">
                          <h4 className="font-semibold text-black mb-4">Social Media</h4>
                          <ul className="space-y-2">
                            <li><a href="#" className="flex items-center space-x-2 hover:text-emerald-500 transition-colors duration-200"><Facebook size={20} /><span>Facebook</span></a></li>
                            <li><a href="#" className="flex items-center space-x-2 hover:text-emerald-500 transition-colors duration-200"><Instagram size={20} /><span>Instagram</span></a></li>
                            <li><a href="#" className="flex items-center space-x-2 hover:text-emerald-500 transition-colors duration-200"><Twitter size={20} /><span>X/Twitter</span></a></li>
                          </ul>
                        </div>
                        <div className="md:col-span-1">
                          <h4 className="font-semibold text-black mb-4">Legal</h4>
                          <ul className="space-y-2">
                            <li><a href="#" className="hover:text-emerald-500 transition-colors duration-200">Policy privacy</a></li>
                            <li><a href="#" className="hover:text-emerald-500 transition-colors duration-200">Term of service</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="text-center text-sm mt-8 pt-8 border-t border-gray-700">
                        © 2024 BootCamp Donation. All rights reserved.
                      </div>
                    </div>
                  </footer>
    </div>
  );
}

export default App;
