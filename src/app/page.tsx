import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter} from 'lucide-react';
function App() {
  return (
    <div className="bg-gray-30 font-sans antialiased text-gray-800">
      {/* Header Section */}
      <header className="bg-gray shadow-sm sticky top-0 z-50 bg-background/80 backdrop-blur-md border-border/50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 ">
            <Image src="/logo.png" alt="Logo" width={80} height={80} className="rounded-full" />
            <h1 className="text-2xl font-bold text-green-600">BootCamp Donation</h1>
          </div>
          <div className="hidden md:flex space-x-8 text-lg font-medium">
            <Link href="/" className="hover:text-emerald-600 transition-colors duration-200">Home</Link>
            <Link href="/donation" className="hover:text-emerald-600 transition-colors duration-200">Donation</Link>
            <Link href="/about" className="hover:text-emerald-600 transition-colors duration-200">About</Link>
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

      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center p-4">
        <Image src="/group-children-lying-reading-grass-field.jpg" alt="Hero Background" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover opacity-50" />
          <div className="relative z-10 text-white text-center w-full max-w-4xl px-4">
            <div className="flex justify-center mb-6">
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-md">
              Welcome to our donation platform, where compassion meets action.
            </h2>
            <p className="text-base md:text-xl font-medium mb-8 drop-shadow-md">
              Join us in making a difference, donate now and help change a life today.
            </p>
            <Link href="/donation" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105">
              Donate Now
            </Link>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-emerald-100 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-200">
                <p className="text-4xl font-bold text-emerald-600">10M</p>
                <p className="mt-2 text-lg text-gray-600">people die from cancer each year</p>
              </div>
              <div className="bg-emerald-100 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-200">
                <p className="text-4xl font-bold text-emerald-600">260M</p>
                <p className="mt-2 text-lg text-gray-600">drop out of school because financial problem</p>
              </div>
              <div className="bg-emerald-100 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-200">
                <p className="mt-2 text-4xl font-bold text-emerald-600">828M</p>
                <p className="mt-2 text-lg text-gray-600">people go hungry or undernourished each year</p>
              </div>
            </div>
          </div>
        </section>
                <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-12">Your donation changes lives</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Cause Card 1 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-200">
                <Image
                  src="/superhero.webp"
                  alt="A child with boxing gloves"
                  width={400}
                  height={240}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">Together for Eric</h3>
                </div>
              </div>
              {/* Cause Card 2 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-200">
                <Image
                  src="/Rauth.jpg"
                  alt="Three students smiling"
                  width={400}
                  height={240}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">Help Cambodia Education</h3>
                </div>
              </div>
              {/* Cause Card 3 */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-200">
                <Image
                  src="/givenfood.jpg"
                  alt="People receiving food"
                  width={400}
                  height={240}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">Help peoples with food problem</h3>
                </div>
              </div>
            </div>
            <div>
              <br/>
                <Link href="/donation" className="mt-12 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-200">
                  See more
                </Link>
              </div>
          </div>
        </section>
      </main>
      {/* Footer Section */}
      <footer className="bg-emerald-100 text-black-300 py-12">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div className="md:col-span-1">
                          <div className="flex items-center space-x-2 mb-4">
                            <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-full text-emerald-500" />
                            <h1 className="text-2xl font-bold text-black">BootCamp Donation</h1>
                          </div>
                          <p className="text-sm">
                            Making a difference, one donation at a time.
                          </p>
                        </div>
                        <div className="md:col-span-1">
                          <h4 className="font-semibold text-black mb-4">Navigation</h4>
                          <ul className="space-y-2"> 
                            <li><Link href="/" className="hover:text-emerald-500 transition-colors duration-200">Home</Link></li>
                            <li><Link href="/donation" className="hover:text-emerald-500 transition-colors duration-200">Donation</Link></li>
                            <li><Link href="/about" className="hover:text-emerald-500 transition-colors duration-200">About</Link></li>
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
