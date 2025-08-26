"use client";
import React, { useState } from 'react';
import { Search, Facebook, Instagram, Twitter, ChevronRight } from 'lucide-react';

// The DonationForm component
const DonationForm = () => {
  // State to manage form inputs and selected amount
  const [fullName, setFullName] = useState('');
  const [message, setMessage] = useState('');
  const [donationAmount, setDonationAmount] = useState(0);
  const [customAmount, setCustomAmount] = useState('');
  const [shareMessage, setShareMessage] = useState('');
  
  // Pre-defined donation amounts
  const amounts = [10, 25, 50, 100];

  // Handler for selecting a pre-defined amount
  const handleAmountSelect = (amount: number) => {
    setDonationAmount(amount);
    setCustomAmount(''); // Clear custom amount if a pre-defined one is selected
    console.log(`Donation amount selected: $${amount}`);
  };

  // Handler for custom amount input
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers and a single decimal point
    if (/^\d*\.?\d*$/.test(value) || value === '') {
      setCustomAmount(value);
      setDonationAmount(parseFloat(value) || 0); // Update donation amount from custom input
    }
  };

  // Handler for form submission (simulated)
  const handlePayNow = () => {
    if (donationAmount > 0 && fullName) {
      // Replaced alert with a custom message since alert() is blocked in some environments
      // You can implement a proper modal or message box here
      window.alert(`Thank you, ${fullName}! You are donating $${donationAmount}.`);
      console.log('Form Submitted!', {
        fullName,
        message,
        donationAmount,
      });
      // Here you would integrate with a payment gateway like Stripe or PayPal.
    } else {
      window.alert('Please enter your full name and select or enter a donation amount.');
    }
  };

  // Handler for the "Share Now" button to copy the link
  const handleShareNow = () => {
    const tempInput = document.createElement('input');
    tempInput.value = window.location.href;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      setShareMessage('Link copied!');
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setShareMessage('Failed to copy link.');
    }
    document.body.removeChild(tempInput);
    setTimeout(() => setShareMessage(''), 3000); // Hide the message after 3 seconds
  };

  return (
    <div className="flex justify-center items-center py-10 px-4 font-['Inter']">
      <div className="w-full max-w-2xl p-8 bg-lime-50 rounded-3xl shadow-xl flex flex-col items-center space-y-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800">
          Donation
        </h1>
        
        {/* Donation Header Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-8 w-full">
          {/* Image */}
          <div className="w-32 h-32 flex-shrink-0 rounded-2xl overflow-hidden shadow-md">
            <img 
              src="/Rauth.jpg" 
              alt="rauth" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          {/* Text Content */}
          <div className="flex flex-col text-center sm:text-left">
            <h2 className="text-lg font-semibold text-gray-800">
              Help Cambodia
            </h2>
            <h3 className="text-xl font-bold text-gray-900">
              Education
            </h3>
          </div>
        </div>
        
        {/* Donation Amount Selection */}
        <div className="w-full space-y-4">
          <label htmlFor="amount" className="block text-md font-medium text-gray-700">
            Select Amount
          </label>
          <div className="flex flex-wrap gap-4">
            {amounts.map((amount) => (
              <button
                key={amount}
                onClick={() => handleAmountSelect(amount)}
                className={`flex-1 min-w-[80px] py-2 px-4 rounded-xl border-2 transition-colors duration-200 
                  ${donationAmount === amount ? 'bg-emerald-500 text-white border-emerald-500 shadow-md' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
              >
                ${amount}
              </button>
            ))}
            <input
              type="text"
              inputMode="decimal"
              placeholder="Custom"
              value={customAmount}
              onChange={handleCustomAmountChange}
              onFocus={() => handleAmountSelect(0)} // Deselect pre-defined amounts on focus
              className={`flex-1 min-w-[80px] py-2 px-4 rounded-xl border-2 transition-colors duration-200 text-center
                ${customAmount ? 'bg-emerald-500 text-white border-emerald-500 shadow-md' : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500'}`}
            />
          </div>
        </div>
        
        {/* Full Name Input */}
        <div className="w-full">
          <label htmlFor="fullName" className="block text-md font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your fullname"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-1 block w-full px-4 py-3 rounded-2xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
          />
        </div>
        
        {/* Message Input */}
        <div className="w-full">
          <label htmlFor="message" className="block text-md font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder=""
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 block w-full px-4 py-3 rounded-2xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
          ></textarea>
        </div>
        
        {/* Action Buttons Container */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 w-full">
          {/* Pay Now Button */}
          <button
            onClick={handlePayNow}
            className="flex-1 px-8 py-4 bg-emerald-500 text-white text-lg font-semibold rounded-2xl shadow-lg hover:bg-emerald-600 transition-colors duration-300"
          >
            Pay Now
          </button>
          
          {/* Share Now Button */}
          <button
            onClick={handleShareNow}
            className="flex-1 px-8 py-4 bg-gray-500 text-white text-lg font-semibold rounded-2xl shadow-lg hover:bg-gray-600 transition-colors duration-300"
          >
            Share Now
          </button>
        </div>
        
        {/* Share Message */}
        {shareMessage && (
          <div className="mt-4 text-center text-sm font-medium text-green-700 transition-opacity duration-500">
            {shareMessage}
          </div>
        )}
      </div>
    </div>
  );
};

// Main App component combining the header, footer, and donation form
function App() {
  return (
    <div className="bg-gray-30 font-sans antialiased text-gray-800">
      {/* Header Section */}
      <header className="bg-gray shadow-sm sticky top-0 z-50 bg-background/80 backdrop-blur-md border-border/50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 ">
            {/* Using a placeholder for the logo */}
            <img src="/Logo.png" alt="Logo" className="h-20 w-20 rounded-full" />
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

      {/* Main Content Section */}
      <main>
        {/* The DonationForm component is added here */}
        <DonationForm />
      </main>

      {/* Footer Section */}
      <footer className="bg-emerald-100 text-black-300 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                {/* Using a placeholder for the logo */}
                <img src="/Logo.png" alt="Logo" className="h-10 w-10 rounded-full text-emerald-500" />
                <h1 className="text-2xl font-bold text-black">BootCamp Donation</h1>
              </div>
              <p className="text-sm">
                Making a difference, one donation at a time.
              </p>
            </div>
            <div className="md:col-span-1">
              <h4 className="font-semibold text-black mb-4">Navigation</h4>
              <ul className="space-y-2"> 
                <li><a href="/" className="hover:text-emerald-500 transition-colors duration-200">Home</a></li>
                <li><a href="/donation" className="hover:text-emerald-500 transition-colors duration-200">Donation</a></li>
                <li><a href="/about" className="hover:text-emerald-500 transition-colors duration-200">About</a></li>
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
