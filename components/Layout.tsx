import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hexagon, ArrowRight } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  const NavLink: React.FC<{ to: string; label: string }> = ({ to, label }) => {
    const isActive = location.pathname === to;
    return (
      <Link 
        to={to} 
        className={`text-sm font-medium transition-colors hover:text-indigo-600 ${isActive ? 'text-indigo-600' : 'text-slate-600'}`}
      >
        {label}
      </Link>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className={`sticky top-0 z-50 w-full border-b backdrop-blur-md bg-white/80 border-slate-200`}>
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-indigo-600 text-white p-1.5 rounded-lg">
              <Hexagon size={24} fill="currentColor" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-indigo-500">
              Virtual Stage Pro
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {!isDashboard && (
              <>
                <NavLink to="/how-it-works" label="How it Works" />
                <NavLink to="/gallery" label="Gallery" />
                <NavLink to="/pricing" label="Pricing" />
                <NavLink to="/faq" label="FAQ" />
              </>
            )}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {!isDashboard ? (
              <>
                <Link to="/auth" className="text-sm font-medium text-slate-600 hover:text-indigo-600">
                  Log in
                </Link>
                <Link 
                  to="/auth?mode=signup" 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm hover:shadow-md flex items-center"
                >
                  Start Free <ArrowRight size={16} className="ml-2" />
                </Link>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <div className="text-xs text-right hidden sm:block">
                  <p className="font-medium text-slate-900">Free Plan</p>
                  <p className="text-slate-500">1 Credit Remaining</p>
                </div>
                <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm border border-indigo-200">
                  JS
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 p-4 space-y-4">
             <Link to="/how-it-works" className="block text-slate-600 font-medium">How it Works</Link>
             <Link to="/gallery" className="block text-slate-600 font-medium">Gallery</Link>
             <Link to="/pricing" className="block text-slate-600 font-medium">Pricing</Link>
             <Link to="/faq" className="block text-slate-600 font-medium">FAQ</Link>
             <div className="pt-4 border-t border-slate-100 space-y-3">
               <Link to="/auth" className="block text-center text-slate-600 font-medium">Log in</Link>
               <Link to="/auth?mode=signup" className="block text-center bg-indigo-600 text-white py-2 rounded-lg font-medium">Start Free</Link>
             </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      {!isDashboard && (
        <footer className="bg-slate-50 border-t border-slate-200 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-1">
                <Link to="/" className="flex items-center space-x-2 mb-4">
                  <div className="bg-slate-900 text-white p-1 rounded-md">
                    <Hexagon size={20} fill="currentColor" />
                  </div>
                  <span className="text-lg font-bold text-slate-900">Virtual Stage Pro</span>
                </Link>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Transforming real estate marketing with state-of-the-art AI technology. Sell faster, stage smarter.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li><Link to="/gallery" className="hover:text-indigo-600">Examples</Link></li>
                  <li><Link to="/pricing" className="hover:text-indigo-600">Pricing</Link></li>
                  <li><Link to="/how-it-works" className="hover:text-indigo-600">How it Works</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li><Link to="/blog" className="hover:text-indigo-600">Blog</Link></li>
                  <li><Link to="#" className="hover:text-indigo-600">Contact</Link></li>
                  <li><Link to="#" className="hover:text-indigo-600">Terms of Service</Link></li>
                  <li><Link to="#" className="hover:text-indigo-600">Privacy Policy</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Connect</h4>
                <div className="flex space-x-4">
                  {/* Social placeholders */}
                  <div className="w-8 h-8 bg-slate-200 rounded-full hover:bg-indigo-600 transition-colors"></div>
                  <div className="w-8 h-8 bg-slate-200 rounded-full hover:bg-indigo-600 transition-colors"></div>
                  <div className="w-8 h-8 bg-slate-200 rounded-full hover:bg-indigo-600 transition-colors"></div>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-200 text-center text-sm text-slate-400">
              © {new Date().getFullYear()} Virtual Stage Pro. All rights reserved.
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;