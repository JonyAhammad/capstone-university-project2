import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PaymentForm } from '../components/PaymentForm';
import { Heart, DollarSign, Package, PiggyBank, Globe, MapPin, Repeat } from 'lucide-react';
export function BecomeDonor() {
  const [donationStep, setDonationStep] = useState(1);
  const [donationType, setDonationType] = useState('');
  const [donationAmount, setDonationAmount] = useState('50');
  const [customAmount, setCustomAmount] = useState('');
  const [donationFrequency, setDonationFrequency] = useState('one-time');
  const [region, setRegion] = useState('any');
  const handleContinue = () => {
    setDonationStep(2);
    window.scrollTo(0, 0);
  };
  const handleDonationComplete = () => {
    setDonationStep(3);
    window.scrollTo(0, 0);
  };
  return <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="bg-teal-600 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
              Become a Donor
            </h1>
            <p className="text-teal-100 text-center mt-4 max-w-3xl mx-auto">
              Your generosity can change a child's life. Choose how you want to
              contribute and make a direct impact on children's nutrition and
              well-being worldwide.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {donationStep === 3 ? <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart size={40} className="text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Thank You for Your Generosity!
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Your donation will make a real difference in the lives of
                  children in need. We've sent a confirmation to your email with
                  details of your contribution.
                </p>
                <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Your Impact
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Your donation of{' '}
                    <span className="font-semibold">
                      $
                      {donationAmount === 'custom' ? customAmount : donationAmount}
                    </span>{' '}
                    can provide:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                    <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
                      <p className="font-medium text-gray-800">
                        Nutritious meals for up to 20 children
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
                      <p className="font-medium text-gray-800">
                        Essential vitamins and supplements
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
                      <p className="font-medium text-gray-800">
                        Fresh fruits and vegetables for a week
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button onClick={() => {
                setDonationStep(1);
                setDonationType('');
                setDonationAmount('50');
                setCustomAmount('');
              }} className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors">
                    Make Another Donation
                  </button>
                  <button onClick={() => window.location.href = '/'} className="bg-gray-100 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-200 transition-colors">
                    Return to Homepage
                  </button>
                </div>
              </div> : donationStep === 2 ? <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-teal-50 p-6">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Complete Your Donation
                  </h2>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-gray-600">
                        Donation Type:{' '}
                        <span className="font-medium text-gray-800">
                          {donationType === 'food' ? 'Food Support' : donationType === 'medicine' ? 'Medicine Support' : 'Financial Support'}
                        </span>
                      </p>
                      <p className="text-gray-600">
                        Amount:{' '}
                        <span className="font-medium text-gray-800">
                          $
                          {donationAmount === 'custom' ? customAmount : donationAmount}
                        </span>
                      </p>
                      <p className="text-gray-600">
                        Frequency:{' '}
                        <span className="font-medium text-gray-800">
                          {donationFrequency === 'one-time' ? 'One-time donation' : donationFrequency === 'monthly' ? 'Monthly donation' : 'Quarterly donation'}
                        </span>
                      </p>
                    </div>
                    <button onClick={() => setDonationStep(1)} className="text-teal-600 hover:text-teal-700 font-medium">
                      Edit
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <PaymentForm onComplete={handleDonationComplete} />
                </div>
              </div> : <>
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                      Choose Your Donation Type
                    </h2>
                    <p className="text-gray-600">
                      Select how you would like to contribute to helping
                      children in need.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className={`border rounded-lg p-6 cursor-pointer transition-all ${donationType === 'food' ? 'border-teal-500 bg-teal-50 transform scale-105' : 'border-gray-200 hover:border-teal-300'}`} onClick={() => setDonationType('food')}>
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                          <Package size={32} className="text-teal-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          Food Support
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Provide nutritious meals and food packages to children
                          in need worldwide.
                        </p>
                      </div>
                    </div>
                    <div className={`border rounded-lg p-6 cursor-pointer transition-all ${donationType === 'medicine' ? 'border-teal-500 bg-teal-50 transform scale-105' : 'border-gray-200 hover:border-teal-300'}`} onClick={() => setDonationType('medicine')}>
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          Medicine Support
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Fund essential medications and healthcare for children
                          with medical needs.
                        </p>
                      </div>
                    </div>
                    <div className={`border rounded-lg p-6 cursor-pointer transition-all ${donationType === 'financial' ? 'border-teal-500 bg-teal-50 transform scale-105' : 'border-gray-200 hover:border-teal-300'}`} onClick={() => setDonationType('financial')}>
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                          <DollarSign size={32} className="text-teal-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          Financial Support
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Provide direct financial assistance to help with
                          various children's needs.
                        </p>
                      </div>
                    </div>
                  </div>
                  {donationType && <>
                      <div className="mb-8">
                        <h3 className="text-lg font-medium text-gray-800 mb-4">
                          Choose Donation Amount
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {['25', '50', '100', '250'].map(amount => <button key={amount} type="button" className={`py-3 px-4 border rounded-md ${donationAmount === amount ? 'bg-teal-600 text-white border-teal-600' : 'bg-white text-gray-800 border-gray-300 hover:border-teal-500'}`} onClick={() => {
                      setDonationAmount(amount);
                      setCustomAmount('');
                    }}>
                              ${amount}
                            </button>)}
                        </div>
                        <div className="mt-4">
                          <label htmlFor="customAmount" className="block text-gray-700 mb-2">
                            Custom Amount
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <span className="text-gray-500">$</span>
                            </div>
                            <input type="number" id="customAmount" value={customAmount} onChange={e => {
                        setCustomAmount(e.target.value);
                        setDonationAmount('custom');
                      }} className="pl-7 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Enter custom amount" />
                          </div>
                        </div>
                      </div>
                      <div className="mb-8">
                        <h3 className="text-lg font-medium text-gray-800 mb-4">
                          Donation Frequency
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className={`border rounded-lg p-4 cursor-pointer ${donationFrequency === 'one-time' ? 'border-teal-500 bg-teal-50' : 'border-gray-200'}`} onClick={() => setDonationFrequency('one-time')}>
                            <div className="flex items-center">
                              <input type="radio" id="one-time" name="frequency" checked={donationFrequency === 'one-time'} onChange={() => setDonationFrequency('one-time')} className="sr-only" />
                              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                                <Heart size={20} className="text-teal-600" />
                              </div>
                              <label htmlFor="one-time" className="cursor-pointer">
                                <span className="block font-medium text-gray-800">
                                  One-time
                                </span>
                                <span className="block text-sm text-gray-600">
                                  Single donation
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className={`border rounded-lg p-4 cursor-pointer ${donationFrequency === 'monthly' ? 'border-teal-500 bg-teal-50' : 'border-gray-200'}`} onClick={() => setDonationFrequency('monthly')}>
                            <div className="flex items-center">
                              <input type="radio" id="monthly" name="frequency" checked={donationFrequency === 'monthly'} onChange={() => setDonationFrequency('monthly')} className="sr-only" />
                              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                                <Repeat size={20} className="text-teal-600" />
                              </div>
                              <label htmlFor="monthly" className="cursor-pointer">
                                <span className="block font-medium text-gray-800">
                                  Monthly
                                </span>
                                <span className="block text-sm text-gray-600">
                                  Recurring donation
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className={`border rounded-lg p-4 cursor-pointer ${donationFrequency === 'quarterly' ? 'border-teal-500 bg-teal-50' : 'border-gray-200'}`} onClick={() => setDonationFrequency('quarterly')}>
                            <div className="flex items-center">
                              <input type="radio" id="quarterly" name="frequency" checked={donationFrequency === 'quarterly'} onChange={() => setDonationFrequency('quarterly')} className="sr-only" />
                              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                                <PiggyBank size={20} className="text-teal-600" />
                              </div>
                              <label htmlFor="quarterly" className="cursor-pointer">
                                <span className="block font-medium text-gray-800">
                                  Quarterly
                                </span>
                                <span className="block text-sm text-gray-600">
                                  Every 3 months
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-8">
                        <h3 className="text-lg font-medium text-gray-800 mb-4">
                          Choose Region (Optional)
                        </h3>
                        <p className="text-gray-600 mb-4">
                          You can choose to direct your donation to a specific
                          region, or let us allocate it to where it's needed
                          most.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className={`border rounded-lg p-4 cursor-pointer ${region === 'any' ? 'border-teal-500 bg-teal-50' : 'border-gray-200'}`} onClick={() => setRegion('any')}>
                            <div className="flex items-center">
                              <input type="radio" id="any" name="region" checked={region === 'any'} onChange={() => setRegion('any')} className="sr-only" />
                              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                                <Globe size={20} className="text-teal-600" />
                              </div>
                              <label htmlFor="any" className="cursor-pointer">
                                <span className="block font-medium text-gray-800">
                                  Any Region
                                </span>
                                <span className="block text-sm text-gray-600">
                                  Allocate where needed most
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className={`border rounded-lg p-4 cursor-pointer ${region === 'specific' ? 'border-teal-500 bg-teal-50' : 'border-gray-200'}`} onClick={() => setRegion('specific')}>
                            <div className="flex items-center">
                              <input type="radio" id="specific" name="region" checked={region === 'specific'} onChange={() => setRegion('specific')} className="sr-only" />
                              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                                <MapPin size={20} className="text-teal-600" />
                              </div>
                              <label htmlFor="specific" className="cursor-pointer">
                                <span className="block font-medium text-gray-800">
                                  Specific Region
                                </span>
                                <span className="block text-sm text-gray-600">
                                  Choose a target region
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                        {region === 'specific' && <div className="mt-4">
                            <label htmlFor="specificRegion" className="block text-gray-700 mb-2">
                              Select Region
                            </label>
                            <select id="specificRegion" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500">
                              <option value="">Select a region</option>
                              <option value="africa">Africa</option>
                              <option value="asia">Asia</option>
                              <option value="europe">Europe</option>
                              <option value="north-america">
                                North America
                              </option>
                              <option value="south-america">
                                South America
                              </option>
                              <option value="oceania">Oceania</option>
                            </select>
                          </div>}
                      </div>
                      <div className="flex justify-end">
                        <button onClick={handleContinue} disabled={!donationType || donationAmount === 'custom' && !customAmount} className={`px-6 py-3 rounded-md font-medium ${!donationType || donationAmount === 'custom' && !customAmount ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-teal-600 text-white hover:bg-teal-700 transition-colors'}`}>
                          Continue to Payment
                        </button>
                      </div>
                    </>}
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-blue-800 mb-3">
                    Why Donate with NourishNet?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-blue-800 mb-2">
                        100% Transparency
                      </h4>
                      <p className="text-blue-700 text-sm">
                        Track exactly how your donation is used and see the
                        direct impact on children's lives.
                      </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-blue-800 mb-2">
                        Direct Impact
                      </h4>
                      <p className="text-blue-700 text-sm">
                        Your donation goes directly to fulfilling specific
                        requests from children in need.
                      </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="font-medium text-blue-800 mb-2">
                        Global Reach
                      </h4>
                      <p className="text-blue-700 text-sm">
                        Help children worldwide with our international network
                        of verified food providers.
                      </p>
                    </div>
                  </div>
                </div>
              </>}
          </div>
        </div>
      </main>
      <Footer />
    </div>;
}