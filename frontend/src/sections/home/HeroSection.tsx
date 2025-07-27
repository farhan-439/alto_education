import React from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const HeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="h-screen bg-gradient-to-br from-stone-100 via-amber-50 to-stone-200 flex flex-col">
      {/* Navigation */}
      <nav className="relative z-50 bg-white/90 backdrop-blur-sm border-b border-stone-200 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-xl font-bold">
                <span className="text-stone-800">ALTO</span>
                <span className="text-lime-600 ml-2">EDUCATION</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-center space-x-6">
                <a href="#" className="text-stone-700 hover:text-lime-600 px-2 py-1 text-sm font-medium transition-colors">Home</a>
                <a href="#" className="text-stone-600 hover:text-lime-600 px-2 py-1 text-sm font-medium transition-colors">About</a>
                <a href="#" className="text-stone-600 hover:text-lime-600 px-2 py-1 text-sm font-medium transition-colors">Services</a>
                <a href="#" className="text-stone-600 hover:text-lime-600 px-2 py-1 text-sm font-medium transition-colors">Results</a>
                <a href="#" className="text-stone-600 hover:text-lime-600 px-2 py-1 text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <button className="bg-lime-600 hover:bg-lime-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-lg">
                Schedule Consultation
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-stone-600 hover:text-stone-900 p-2"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-stone-200 shadow-lg">
            <div className="px-4 py-4 space-y-2">
              <a href="#" className="block text-stone-700 hover:text-lime-600 py-1 text-sm font-medium">Home</a>
              <a href="#" className="block text-stone-600 hover:text-lime-600 py-1 text-sm font-medium">About</a>
              <a href="#" className="block text-stone-600 hover:text-lime-600 py-1 text-sm font-medium">Services</a>
              <a href="#" className="block text-stone-600 hover:text-lime-600 py-1 text-sm font-medium">Results</a>
              <a href="#" className="block text-stone-600 hover:text-lime-600 py-1 text-sm font-medium">Contact</a>
              <button className="w-full bg-lime-600 hover:bg-lime-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-lg mt-2">
                Schedule Consultation
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content - Takes remaining viewport height */}
      <div className="flex-1 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-start pt-8 lg:pt-26">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Column - Text Content */}
            <div>
              <div className="mb-4">
                <span className="inline-block bg-lime-100 text-lime-800 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
                  BANGLADESH'S PREMIUM EDUCATION CONSULTANCY
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-5xl font-bold text-stone-800 leading-tight mb-6">
                Gain a Headstart to an
                <span className="block text-lime-600 mt-1">Ivy League Education</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-stone-600 leading-relaxed mb-8 max-w-xl">
                Expert guidance for boarding school admissions and college counseling with personalized mentorship.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="group bg-lime-600 hover:bg-lime-700 text-white px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-stone-300 hover:border-lime-600 text-stone-700 hover:text-lime-600 bg-white/80 hover:bg-white px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 shadow-lg">
                  Learn More
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-lime-600 mb-1">89%</div>
                  <div className="text-xs font-medium text-stone-600 uppercase tracking-wide">Ivy+ Success</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-lime-600 mb-1">500+</div>
                  <div className="text-xs font-medium text-stone-600 uppercase tracking-wide">Students</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-lime-600 mb-1">15+</div>
                  <div className="text-xs font-medium text-stone-600 uppercase tracking-wide">Years</div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Content */}
            <div className="relative">
              {/* Main Card */}
              <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-stone-200">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-stone-800 mb-1">Free Consultation</h3>
                  <p className="text-stone-600 text-sm">Discover your path to educational excellence</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-lime-500 rounded-full mr-3"></div>
                    <span className="text-stone-700 text-sm">Personalized assessment</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-lime-500 rounded-full mr-3"></div>
                    <span className="text-stone-700 text-sm">Strategic planning session</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-lime-500 rounded-full mr-3"></div>
                    <span className="text-stone-700 text-sm">Expert recommendations</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-lime-600 to-green-600 hover:from-lime-700 hover:to-green-700 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm">
                  Schedule Your Free Session
                </button>

                <div className="mt-4 text-center">
                  <p className="text-xs text-stone-500">
                    ★★★★★ Trusted by 500+ families worldwide
                  </p>
                </div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-lime-200 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-200 rounded-full opacity-15 blur-2xl"></div>
              
              {/* Floating Achievement Cards */}
              <div className="absolute -top-2 -left-2 bg-white rounded-xl p-3 shadow-xl border border-stone-100 z-20">
                <div className="text-center">
                  <div className="text-lg font-bold text-lime-600">95%</div>
                  <div className="text-xs text-stone-600 font-medium">Boarding Success</div>
                </div>
              </div>
              
              <div className="absolute -bottom-2 -right-2 bg-white rounded-xl p-3 shadow-xl border border-stone-100 z-20">
                <div className="text-center">
                  <div className="text-sm font-bold text-green-600">Top 10</div>
                  <div className="text-xs text-stone-600 font-medium">Universities</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators - Bottom of viewport */}
        <div className="absolute bottom-6 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-4">
              <p className="text-stone-500 font-medium uppercase tracking-wide text-xs">
                Trusted by families seeking admission to
              </p>
            </div>
            <div className="flex justify-center space-x-8 opacity-60">
              {['Harvard', 'Yale', 'Princeton', 'Stanford', 'MIT'].map((school, index) => (
                <div key={index} className="bg-white/80 rounded-lg px-3 py-1 shadow-sm border border-stone-100">
                  <span className="text-stone-700 font-semibold text-xs">{school}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;