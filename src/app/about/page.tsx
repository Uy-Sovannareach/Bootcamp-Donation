import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter} from 'lucide-react';

export default function App() {
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
        <main>
        {/* About Us Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">About Us</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Learn about our mission, our team, and how we&apos;re making a difference.
              </p>
            </div>
            
            {/* Mission Statement */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  At Bootcamp Donation, our mission is to create a seamless and trustworthy platform that connects compassionate donors with causes that truly matter. We believe in the power of collective action to address some of the world’s most pressing challenges—whether it’s providing children with access to quality education, ensuring healthcare for vulnerable communities, supporting families during times of disaster, or protecting our environment for future generations. By bridging the gap between generosity and need, we aim to make giving easier, more transparent, and more impactful. Together, we can turn kindness into meaningful change and create a brighter future for all.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Our platform ensures full transparency and accountability, giving donors the confidence to see exactly where their contributions are going and the real impact they are making. We believe that every act of giving should not only provide immediate relief but also create long-term positive change. That’s why we are dedicated to empowering individuals and communities with the tools, resources, and opportunities they need to grow stronger and more resilient. By connecting generosity with purpose, we strive to make every donation count and inspire lasting hope where it is needed most.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/childSmile.webp"
                  alt="Our Mission"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Our Story */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
              <div className="md:order-last rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/campeople.webp"
                  alt="Our Story"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">Our Story</h3>
                <p className="text-gray-700 leading-relaxed">
                  Bootcamp Donation was founded with a simple yet powerful idea: to make giving back easy, meaningful, and accessible for everyone. Inspired by the resilience and generosity within our communities, we set out to build a platform that breaks down the barriers to charitable giving. Whether someone wants to start a fundraiser for a loved one, support education, provide healthcare, or respond to urgent crises, our platform makes it possible to act quickly and effectively. By empowering individuals to connect with causes they care about, we aim to turn compassion into action and create lasting change in the world.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Since our inception, we have supported countless individuals and organizations in raising funds for critical projects that make a real difference. Our journey has been guided by community, empathy, and a shared belief that when people come together, meaningful change is possible. Every fundraiser we host and every donation we facilitate represents a step toward a brighter, more equitable world. At Bootcamp Donation, we are committed to fostering a culture of generosity and creating opportunities for people everywhere to make a lasting impact.
                </p>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="text-center mt-16">
              <h3 className="text-3xl font-bold mb-4">Join Our Cause</h3>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Whether you&apos;re looking to start a campaign or contribute to an existing one, your support can change lives.
              </p>
              <a href="donation" className="mt-6 inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-200">
                Start a Fundraiser
              </a>
            </div>
          </div>
        </section>
      </main>
        </main>
      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/logo.png" alt="Logo" width={32} height={32} className="rounded-full text-emerald-500" />
                <h1 className="text-2xl font-bold text-white">BootCamp Donation</h1>
              </div>
              <p className="text-sm">
                Making a difference, one donation at a time.
              </p>
            </div>
            <div className="md:col-span-1">
              <h4 className="font-semibold text-white mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-emerald-500 transition-colors duration-200">Home</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors duration-200">Donation</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors duration-200">About</a></li>
              </ul>
            </div>
            <div className="md:col-span-1">
              <h4 className="font-semibold text-white mb-4">Social Media</h4>
              <ul className="space-y-2">
                <li><a href="#" className="flex items-center space-x-2 hover:text-emerald-500 transition-colors duration-200"><Facebook size={20} /><span>Facebook</span></a></li>
                <li><a href="#" className="flex items-center space-x-2 hover:text-emerald-500 transition-colors duration-200"><Instagram size={20} /><span>Instagram</span></a></li>
                <li><a href="#" className="flex items-center space-x-2 hover:text-emerald-500 transition-colors duration-200"><Twitter size={20} /><span>X/Twitter</span></a></li>
              </ul>
            </div>
            <div className="md:col-span-1">
              <h4 className="font-semibold text-white mb-4">Legal</h4>
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