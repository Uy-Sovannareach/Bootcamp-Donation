"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getTotalRaised, getDonorCount, getRecentDonations, getDonorsByAmount } from '../../../action/paymentdisabilities';
import { Facebook, Instagram, Twitter} from 'lucide-react';

interface Donation {
  full_name: string;
  amount: number;
  message?: string;
  created_at?: string;
}

export default function App() {
  const [totalRaised, setTotalRaised] = useState(0);
  const [donorCount, setDonorCount] = useState(0);
  const [recentDonations, setRecentDonations] = useState<Donation[]>([]);
  const [donorsByAmount, setDonorsByAmount] = useState<Donation[]>([]);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [total, donors, recent, topDonors] = await Promise.all([
        getTotalRaised(),
        getDonorCount(),
        getRecentDonations(),
        getDonorsByAmount(),
      ]);
      setTotalRaised(total);
      setDonorCount(donors);
      setRecentDonations(recent);
      setDonorsByAmount(topDonors);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

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

      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Donate to Improve the Lives of People with Disabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Main Image and Description Section */}
            <div className="md:col-span-2">
              <Image
                src="/disabilitiespeople.webp"
                alt="People with Disabilities"
                width={800}
                height={600}
                className="w-full h-auto rounded-xl shadow-lg mb-8"
              />
              <p className="text-base text-gray-700 leading-relaxed">
                People with disabilities often face significant barriers to accessing essential services and opportunities. Your support can help provide vital resources, including medical care, education, and vocational training, to empower individuals with disabilities and improve their quality of life. By donating to this cause, you are making a meaningful impact on the lives of those who need it most. Join us in our mission to create a more inclusive and equitable society for all.
              </p>
            </div>

            {/* Donation Summary and Actions Section */}
            <div className="bg-emerald-50 rounded-xl p-6 shadow-lg">
              <div className="text-center mb-8">
                <p className="text-4xl font-bold text-emerald-600">${totalRaised.toLocaleString()} <span className="text-lg font-normal text-gray-600">raised</span></p>
                <p className="text-lg text-gray-600">goals $10K</p>
              </div>
              <div className="space-y-4">
                <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-200">
                  Share
                </button>
                <a href='/payment/peopleWithDisabilities' className="w-full bg-white border border-emerald-500 text-emerald-500 hover:bg-emerald-100 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-200 text-center block">
                  Donated now
                </a>
              </div>
              <div className="mt-8 text-center">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">amount of people that donated</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{donorCount}</p>
              </div>
              <div className="mt-8 text-center">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">top donors</p>
                <div className="text-base text-gray-700 mt-2">
                  {donorsByAmount.length > 0 ? (
                    donorsByAmount.slice(0, 3).map((donor, index) => (
                      <div key={index} className="flex justify-between items-center py-1">
                        <span className="font-bold">{donor.full_name}:</span>
                        <span>${donor.amount}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">No donations yet</p>
                  )}
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">recently donated</p>
                <div className="text-base text-gray-700 mt-2">
                  {recentDonations.length > 0 ? (
                    recentDonations.slice(0, 3).map((donation, index) => (
                      <div key={index} className="flex justify-between items-center py-1">
                        <span className="font-bold">{donation.full_name}:</span>
                        <span>${donation.amount}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">No donations yet</p>
                  )}
                </div>
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
