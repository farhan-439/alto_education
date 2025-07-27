import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const IntroSection = () => {
  const services = [
    {
      icon: <GraduationCap className="w-6 h-6 text-lime-600" />,
      title: 'Boarding School Admissions',
      description: 'Expert guidance through the competitive boarding school application process.'
    },
    {
      icon: <Calendar className="w-6 h-6 text-lime-600" />,
      title: 'Educational Planning',
      description: 'Long-term strategic planning to maximize educational opportunities.'
    }
  ];

  return (
    <section className="h-screen bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-2 gap-12 h-full">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center py-8">
            {/* Company Overview */}
            <div className="mb-6">
              <div className="mb-3">
                <span className="inline-block bg-lime-100 text-lime-800 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
                  About Alto Education
                </span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 leading-tight mb-4">
                Your Gateway to 
                <span className="text-lime-600"> Educational Excellence</span>
              </h2>
              
              <p className="text-base lg:text-lg text-stone-600 leading-relaxed mb-4">
                Alto Education specializes in guiding exceptional students through the complex landscape 
                of elite boarding school and university admissions.
              </p>

              <p className="text-sm lg:text-base text-stone-600 leading-relaxed">
                We work with students from diverse backgrounds worldwide, providing culturally sensitive 
                guidance that opens doors to prestigious educational institutions.
              </p>
            </div>

            {/* Services Highlight */}
            <div>
              <h3 className="text-lg lg:text-xl font-bold text-stone-800 mb-4">Our Core Services</h3>
              
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-stone-50 rounded-lg hover:bg-lime-50 transition-colors duration-300">
                    <div className="flex-shrink-0 w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-stone-800 mb-1">{service.title}</h4>
                      <p className="text-xs text-stone-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to action */}
              <div className="mt-6 p-4 bg-gradient-to-r from-lime-600 to-green-600 rounded-lg text-white">
                <div className="text-center">
                  <h4 className="text-base font-bold mb-1">Ready to Begin Your Journey?</h4>
                  <p className="text-lime-100 text-xs mb-3">
                    Join hundreds of students who have achieved their dreams.
                  </p>
                  <button className="bg-white text-lime-600 hover:bg-stone-50 px-4 py-2 rounded-lg text-xs font-semibold transition-colors shadow-lg">
                    Schedule Your Free Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Student Image */}
          <div className="relative h-full flex items-end">
            {/* Success badge positioned absolutely */}


            {/* Student image - bottom aligned, full height available */}
            <div className="relative w-full">
              <img 
                src="/src/assets/images/student3.png" 
                alt="Successful Bangladeshi student"
                className="w-full h-auto object-contain max-h-screen"
              />
              
              {/* Decorative elements behind image */}
              <div className="absolute top-1/3 -left-6 w-20 h-20 bg-lime-200 rounded-full opacity-20 blur-xl -z-10"></div>
              <div className="absolute top-1/2 -right-6 w-24 h-24 bg-green-200 rounded-full opacity-15 blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;