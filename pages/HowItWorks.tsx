import React from 'react';
import { Upload, Wand2, Download, Home, Building2, Key } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="py-20 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How Virtual Staging Works</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            From empty shell to dream home in 3 simple steps. No design skills required.
          </p>
        </div>
      </div>

      <div className="py-24 container mx-auto px-4">
        <div className="space-y-32">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 text-center md:text-left">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Upload size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">1. Upload your photo</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Take a photo of any room. Empty rooms work best, but our AI can also declutter furnished spaces automatically. We support JPEG and PNG formats up to 4K resolution.
              </p>
            </div>
            <div className="flex-1">
              <img src="https://picsum.photos/seed/step1/600/400" alt="Upload" className="rounded-2xl shadow-2xl" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="flex-1 text-center md:text-left">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Wand2 size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">2. Customize Style</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Choose from over 15 interior design styles, from Modern to Farmhouse. Select the room type, and let our advanced AI analyze the room's perspective, lighting, and depth to place furniture realistically.
              </p>
            </div>
            <div className="flex-1">
              <img src="https://picsum.photos/seed/step2/600/400" alt="Customize" className="rounded-2xl shadow-2xl" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 text-center md:text-left">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Download size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">3. Download & Sell</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Review your results in seconds. Use the regeneration tool to tweak the furniture arrangement if needed. Download high-resolution images ready for your MLS listing or marketing materials.
              </p>
            </div>
            <div className="flex-1">
              <img src="https://picsum.photos/seed/step3/600/400" alt="Download" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Perfect For Every Scenario</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
               <Home className="text-indigo-600 mb-4" size={32} />
               <h3 className="text-xl font-bold text-slate-900 mb-2">Empty Homes</h3>
               <p className="text-slate-600">Help buyers visualize the potential of vacant properties without renting physical furniture.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
               <Building2 className="text-indigo-600 mb-4" size={32} />
               <h3 className="text-xl font-bold text-slate-900 mb-2">New Developments</h3>
               <p className="text-slate-600">Showcase finished interiors for properties that are still under construction or just drywalled.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
               <Key className="text-indigo-600 mb-4" size={32} />
               <h3 className="text-xl font-bold text-slate-900 mb-2">Rentals</h3>
               <p className="text-slate-600">Attract higher quality tenants by showing a warm, inviting living space.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;