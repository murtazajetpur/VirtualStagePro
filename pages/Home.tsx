import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, DollarSign, Image as ImageIcon, ShieldCheck } from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium mb-6 animate-fade-in-up">
            ✨ Now with Multi-View Consistency
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-tight">
            Instant Virtual Staging <br className="hidden md:block"/> in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Seconds</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Stage empty or furnished rooms using AI — at a fraction of the cost of top interior designers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <Link 
              to="/dashboard" 
              className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold text-lg shadow-xl shadow-indigo-200 hover:shadow-2xl hover:shadow-indigo-300 transition-all transform hover:-translate-y-1"
            >
              Upload Your First Image Free
            </Link>
            <Link 
              to="/gallery" 
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center gap-2"
            >
              View Examples <ArrowRight size={18} />
            </Link>
          </div>

          {/* Hero Slider */}
          <div className="max-w-5xl mx-auto shadow-2xl rounded-2xl border border-slate-200 p-2 bg-white">
            <BeforeAfterSlider 
              beforeImage="https://picsum.photos/seed/emptyroom/1200/800" 
              afterImage="https://picsum.photos/seed/livingroom/1200/800"
              aspectRatio="aspect-video"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Virtual Stage Pro?</h2>
            <p className="text-slate-600 max-w-xl mx-auto">We combine cutting-edge computer vision with interior design principles to deliver results that sell homes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Clock className="text-indigo-600" size={32} />}
              title="Fast"
              description="Get fully staged images in under 30 seconds. No more waiting days for designers."
            />
            <FeatureCard 
              icon={<DollarSign className="text-indigo-600" size={32} />}
              title="Affordable"
              description="Start for free. Paid plans cost 90% less than traditional virtual staging."
            />
            <FeatureCard 
              icon={<ImageIcon className="text-indigo-600" size={32} />}
              title="Photorealistic"
              description="Our AI understands lighting, shadows, and perspective for indistinguishable results."
            />
            <FeatureCard 
              icon={<ShieldCheck className="text-indigo-600" size={32} />}
              title="MLS-Friendly"
              description="Safe for marketing. Optional 'Virtually Staged' watermarks available."
            />
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 space-y-8">
              <h2 className="text-3xl font-bold text-slate-900">How It Works</h2>
              <Step 
                number={1} 
                title="Upload Photo" 
                description="Drag and drop your property photo. Works with empty or furnished rooms."
              />
              <Step 
                number={2} 
                title="AI Magic" 
                description="Select a room type and style. Our AI analyzes the geometry and lighting to insert furniture."
              />
              <Step 
                number={3} 
                title="Download" 
                description="Review the before/after comparison and download your high-resolution image."
              />
            </div>
            <div className="w-full md:w-1/2">
               <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                 <img src="https://picsum.photos/seed/workspace/800/600" alt="Workspace" className="w-full h-auto" />
                 <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-4 rounded-lg flex items-center justify-between shadow-lg">
                   <div>
                     <p className="text-xs text-slate-500 uppercase font-bold">Processing</p>
                     <p className="text-sm font-medium text-slate-900">Modern Living Room</p>
                   </div>
                   <div className="h-2 w-24 bg-slate-200 rounded-full overflow-hidden">
                     <div className="h-full bg-indigo-600 w-3/4 animate-pulse"></div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Styles Preview */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Any Style You Can Imagine</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StylePreview name="Modern" img="https://picsum.photos/seed/modern/400/300" />
            <StylePreview name="Scandinavian" img="https://picsum.photos/seed/scandi/400/300" />
            <StylePreview name="Industrial" img="https://picsum.photos/seed/industrial/400/300" />
            <StylePreview name="Luxury" img="https://picsum.photos/seed/luxury/400/300" />
          </div>
          <div className="mt-12">
            <Link to="/gallery" className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-2">
              See all styles <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">Trusted by Professionals</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {TESTIMONIALS.map((t, i) => (
               <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                 <div className="flex items-center gap-4 mb-6">
                   <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                   <div>
                     <p className="font-bold text-slate-900">{t.name}</p>
                     <p className="text-sm text-slate-500">{t.role}</p>
                   </div>
                 </div>
                 <p className="text-slate-600 italic">"{t.text}"</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-indigo-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to transform your listings?</h2>
          <p className="text-indigo-100 text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of agents selling homes faster with Virtual Stage Pro.
          </p>
          <Link 
            to="/auth?mode=signup" 
            className="inline-block px-10 py-5 bg-white text-indigo-600 rounded-xl font-bold text-lg shadow-xl hover:bg-slate-50 transition-colors"
          >
            Start For Free
          </Link>
          <p className="mt-4 text-sm text-indigo-200">No credit card required • 1 free image</p>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="mb-4 bg-indigo-50 w-16 h-16 rounded-xl flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const Step: React.FC<{ number: number; title: string; description: string }> = ({ number, title, description }) => (
  <div className="flex gap-6">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xl">
      {number}
    </div>
    <div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const StylePreview: React.FC<{ name: string; img: string }> = ({ name, img }) => (
  <div className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer">
    <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <span className="text-white font-bold text-lg">{name}</span>
    </div>
  </div>
);

export default Home;