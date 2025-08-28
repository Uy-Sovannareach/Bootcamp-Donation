"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getTotalRaised, getDonorCount, getRecentDonations, getDonorsByAmount } from '../../../action/paymentcoconutschool';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function App() {
  interface Donation {
    full_name: string;
    amount: number;
    message?: string;
    created_at: string;
  }

  const [totalRaised, setTotalRaised] = useState(0);
  const [donorCount, setDonorCount] = useState(0);
  const [recentDonations, setRecentDonations] = useState<Donation[]>([]);
  const [donorsByAmount, setDonorsByAmount] = useState<Donation[]>([]);

  // Fetch total raised and donor count on mount
  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [total, donors, recent, donorsByAmt] = await Promise.all([
        getTotalRaised(),
        getDonorCount(),
        getRecentDonations(5), // get 5 most recent donations
        getDonorsByAmount(), // get all donors sorted by amount
      ]);
      console.log('Fetched data:', { total, donors, recent, donorsByAmt }); // Debug log
      setTotalRaised(total);
      setDonorCount(donors);
      setRecentDonations(recent);
      // Ensure donorsByAmt conforms to the Donation interface
      setDonorsByAmount(donorsByAmt.map(donor => ({ ...donor, created_at: new Date().toISOString() })));
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
            Fundraising for Coconut School, Kirirom
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Main Image and Description Section */}
            <div className="md:col-span-2">
              <Image
                src="/coconutschool.webp"
                alt="Fundraising for Coconut School, Kirirom"
                width={800}
                height={600}
                className="w-full h-auto rounded-xl shadow-lg mb-8"
              />
              <p className="text-base text-gray-700 leading-relaxed">
                Coconut School in Kirirom is dedicated to providing quality education and opportunities for children in rural communities, yet many students still face challenges such as limited learning materials, classrooms, and resources. Your support can make a real difference—helping to build classrooms, provide books, and ensure that every child has the chance to learn, grow, and pursue their dreams. By donating to Coconut School, you are not just supporting education, but investing in the future of Cambodia’s children. Together, we can empower young minds and create brighter opportunities for generations to come.
              </p>
            </div>

            {/* Donation Summary and Actions Section */}
            <div className="bg-emerald-50 rounded-xl p-6 shadow-lg">
              <div className="text-center mb-8">
                {/* Dynamically show total raised */}
                <p className="text-4xl font-bold text-emerald-600">
                  ${totalRaised?.toLocaleString()} <span className="text-lg font-normal text-gray-600">raised</span>
                </p>
                <p className="text-lg text-gray-600">goals $10K</p>
              </div>
              <div className="space-y-4">
                <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-200">
                  Share
                </button>
                <Link href='/payment/coconutSchool' className="w-full bg-white border border-emerald-500 text-emerald-500 hover:bg-emerald-100 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-200 text-center block">
                  Donated now
                </Link>
              </div>
              <div className="mt-8 text-center">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">amount of people that donated</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{donorCount}</p>
              </div>

              {/* Donors Dashboard - Sorted by Amount */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-700 mb-4 text-center">
                  Top Donors ({donorsByAmount.length})
                </h4>
                <div className="max-h-64 overflow-y-auto bg-white rounded-lg border">
                  {donorsByAmount.length === 0 ? (
                    <div className="p-4 text-center text-gray-500">
                      No donations yet - Be the first to donate!
                    </div>
                  ) : (
                    <div className="divide-y divide-gray-200">
                      {donorsByAmount.map((donor, idx) => (
                        <div key={`${donor.full_name}-${idx}`} className="p-3 flex justify-between items-center hover:bg-gray-50">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              {idx + 1}
                            </div>
                            <span className="font-medium text-gray-900">
                              {donor.full_name || 'Anonymous'}
                            </span>
                          </div>
                          <span className="font-bold text-emerald-600">
                            ${typeof donor.amount === 'number' ? donor.amount.toLocaleString() : donor.amount}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Recently Donated Section */}
          <div className="mt-12 bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Recently Donated</h3>
            <ul>
              {recentDonations.length === 0 ? (
                <li className="text-gray-500">None</li>
              ) : (
                recentDonations.map((donation, idx) => (
                  <li key={idx} className="mb-2">
                    <span className="font-bold">{donation.full_name}</span> donated <span className="text-emerald-600">${donation.amount}</span>
                    {donation.message && (
                      <span className="ml-2 text-gray-600">&ldquo;{donation.message}&rdquo;</span>
                    )}
                    <span className="ml-2 text-xs text-gray-400">
                      {new Date(donation.created_at).toLocaleString()}
                    </span>
                  </li>
                ))
              )}
            </ul>
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
                <li><Link href="/" className="hover:text-emerald-500 transition-colors duration-200">Home</Link></li>
                <li><Link href="/donation" className="hover:text-emerald-500 transition-colors duration-200">Donation</Link></li>
                <li><Link href="/about" className="hover:text-emerald-500 transition-colors duration-200">About</Link></li>
              </ul>
            </div>
            <div className="md:col-span-1">
              <h4 className="font-semibold text-black mb-4">Social Media</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="flex items-center space-x-2 hover:text-emerald-500 transition-colors duration-200"><Facebook size={20} /><span>Facebook</span></Link></li>
                <li><Link href="#" className="flex items-center space-x-2 hover:text-emerald-500 transition-colors duration-200"><Instagram size={20} /><span>Instagram</span></Link></li>
                <li><Link href="#" className="flex items-center space-x-2 hover:text-emerald-500 transition-colors duration-200"><Twitter size={20} /><span>X/Twitter</span></Link></li>
              </ul>
            </div>
            <div className="md:col-span-1">
              <h4 className="font-semibold text-black mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-emerald-500 transition-colors duration-200">Policy privacy</Link></li>
                <li><Link href="#" className="hover:text-emerald-500 transition-colors duration-200">Term of service</Link></li>
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
