import React from 'react';
import { FAQ_ITEMS } from '../constants';

const FAQ: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h1>
        <div className="space-y-6">
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.question}</h3>
              <p className="text-slate-600 leading-relaxed">{item.answer}</p>
            </div>
          ))}
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
             <h3 className="text-xl font-bold text-slate-900 mb-3">Is there a free trial?</h3>
             <p className="text-slate-600 leading-relaxed">
               Yes! You can sign up for free and generate 1 image with 3 regenerations at no cost. No credit card is required until you decide to upgrade for more credits and high-resolution downloads.
             </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">Still have questions?</p>
          <a href="#" className="text-indigo-600 font-bold hover:underline">Contact our support team</a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;