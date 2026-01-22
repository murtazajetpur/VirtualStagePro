import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Plus } from 'lucide-react';
import { PLANS } from '../constants';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Simple, transparent pricing</h1>
          <p className="text-xl text-slate-600 mb-10">
            Pay a fraction of the cost of traditional staging. No hidden fees. Cancel anytime.
          </p>
          
          {/* Toggle */}
          <div className="inline-flex items-center p-1 bg-slate-100 rounded-xl">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                billingCycle === 'monthly' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                billingCycle === 'yearly' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Yearly <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full uppercase tracking-wide">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {PLANS.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative rounded-2xl p-8 border-2 flex flex-col ${plan.color} ${plan.isPopular ? 'shadow-2xl scale-105 z-10' : 'shadow-xl'}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.id === 'business' ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                   <span className={`text-4xl font-bold ${plan.id === 'business' ? 'text-white' : 'text-slate-900'}`}>
                     ${billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly}
                   </span>
                   <span className={`text-sm ${plan.id === 'business' ? 'text-slate-400' : 'text-slate-500'}`}>/month</span>
                </div>
                {billingCycle === 'yearly' && (
                  <p className={`text-xs mt-1 ${plan.id === 'business' ? 'text-slate-400' : 'text-slate-500'}`}>
                    Billed ${plan.priceYearly * 12} yearly
                  </p>
                )}
              </div>
              
              <div className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check size={18} className={`mt-0.5 flex-shrink-0 ${plan.id === 'business' ? 'text-indigo-400' : 'text-indigo-600'}`} />
                    <span className={`text-sm ${plan.id === 'business' ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/auth?mode=signup"
                className={`w-full py-3 rounded-xl font-bold text-center transition-colors ${
                  plan.id === 'business' 
                    ? 'bg-white text-slate-900 hover:bg-slate-100' 
                    : plan.isPopular 
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                Choose {plan.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl p-8 border border-slate-200">
           <div className="flex flex-col md:flex-row items-center justify-between gap-6">
             <div>
               <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                 <Plus className="bg-indigo-100 text-indigo-600 p-1 rounded-md" size={24} />
                 Need more credits?
               </h3>
               <p className="text-slate-600">Pro & Business users can top up image credits instantly. Credits never expire.</p>
             </div>
             <div className="flex gap-4">
                <div className="text-center px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                  <p className="text-lg font-bold text-slate-900">50</p>
                  <p className="text-xs text-slate-500">imgs for $25</p>
                </div>
                <div className="text-center px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                  <p className="text-lg font-bold text-slate-900">100</p>
                  <p className="text-xs text-slate-500">imgs for $45</p>
                </div>
                <div className="text-center px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-lg shadow-sm">
                  <p className="text-lg font-bold text-indigo-700">250</p>
                  <p className="text-xs text-indigo-600">imgs for $99</p>
                </div>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Pricing;