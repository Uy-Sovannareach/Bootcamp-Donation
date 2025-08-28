import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter } from 'lucide-react';

function App() {
  const fundraisers = [
    {
      href: 'Campaign/togetherForEric',
      title: "Together for Eric",
      image: "superhero.webp",
    },
    {
      href: 'Campaign/helpCambodiaEducation',
      title: "Help Cambodia Education",
      image: "Rauth.jpg",
    },
    {
      href: 'Campaign/helpPeopleWithFoodProblem',
      title: "Help people with food problem",
      image: "givenfood.jpg",
    },
    {
      href: 'Campaign/supportPeopleAffectedByTheConflict',
      title: "Support people affected by the conflict between Thailand and Cambodia",
      image: "warpeople.webp",
    },  
    {
      href: 'Campaign/preahVihearTemple',
      title: "Support the Restoration of Preah Vihear Temple",
      image: "Crumbling-Preah-Vihear-structure.webp",
    },
    {
      href: 'Campaign/supportKanthaBopha',
      title: "Support Kantha Bopha Hospital with a Donation",
      image: "kanhabopha.webp",
    },
    {
      href: 'Campaign/peopleWithDisabilities',
      title: "Donate to Improve the Lives of People with Disabilities",
      image: "disabilitiespeople.webp",
    },
    {
      href: 'Campaign/coconutSchool',
      title: "Fundraising for Coconut School, Kirirom",
      image: "coconutschool.webp",
    },
  ];

  return (
    <div className="bg-gray-50 font-sans antialiased text-gray-800">
      {/* Header Section */}
      <header className="bg-white shadow-sm sticky top-0 z-50 bg-background/80 backdrop-blur-md border-border/50">
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

            <button className="text-gray-600 hover:text-emerald-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* Fundraisers Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
              Discover fundraisers inspired by what you care about
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {fundraisers.map((fundraiser, index) => (
                // Wrapping the card in an anchor tag to make it a link
                <Link key={index} href={fundraiser.href} className="block">
                  <div className="bg-gray-100 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-200 group">
                    <Image
                      src={`/${fundraiser.image}`}
                      alt={fundraiser.title}
                      width={400}
                      height={240}
                      className="w-full h-48 object-cover rounded-t-2xl group-hover:opacity-80 transition-opacity duration-200"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors duration-200">{fundraiser.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
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
