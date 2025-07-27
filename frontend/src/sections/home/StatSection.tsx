import React from 'react';
import { TrendingUp, Award, Users, Globe } from 'lucide-react';

const SuccessSnapshot = () => {
  const boardingSchools = [
    { name: "Phillips Exeter", logo: "PE" },
    { name: "Phillips Andover", logo: "PA" },
    { name: "Choate Rosemary Hall", logo: "CH" },
    { name: "Deerfield Academy", logo: "DA" },
    { name: "Lawrenceville", logo: "LS" },
    { name: "Hotchkiss", logo: "HS" },
    { name: "St. Paul's", logo: "SP" },
    { name: "Groton", logo: "GS" }
  ];

  return (
    <section className="h-screen bg-gradient-to-b from-stone-100 to-stone-50 relative flex items-center border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-lime-600 text-sm font-semibold tracking-wide uppercase mb-2 block">
            SUCCESS SNAPSHOT
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-3">
            Proven Results
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Consistent placements at America's most prestigious boarding schools through personalized guidance and strategic planning.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-stone-900 mb-1">95%</div>
            <div className="text-sm text-stone-600">Boarding School Acceptance</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-stone-900 mb-1">89%</div>
            <div className="text-sm text-stone-600">Ivy+ University Placement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-stone-900 mb-1">100+</div>
            <div className="text-sm text-stone-600">Students Placed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-stone-900 mb-1">$500K+</div>
            <div className="text-sm text-stone-600">Scholarships Secured</div>
          </div>
        </div>

        {/* School Placements */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* Boarding Schools */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-stone-900 mb-3">
              Elite Boarding School Placements
            </h3>
            <p className="text-stone-600 mb-4 text-sm">
              Our students gain admission to America's most competitive preparatory schools with acceptance rates below 15%.
            </p>
            
            <div className="grid grid-cols-4 gap-4">
              {boardingSchools.map((school, index) => (
                <div
                  key={index}
                  className="text-center p-3 hover:-translate-y-1 transition-transform duration-200"
                >
                  <div className="w-12 h-12 bg-stone-900 text-white rounded-lg flex items-center justify-center text-xs font-bold mx-auto mb-2">
                    {school.logo}
                  </div>
                  <div className="text-xs text-stone-700 font-medium">
                    {school.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Results & CTA */}
          <div>
            <div className="border border-stone-200 rounded-lg p-4 mb-4">
              <h4 className="font-bold text-stone-900 mb-3">Recent Results</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-stone-600">Top Boarding Schools</span>
                  <span className="font-bold text-stone-900">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-stone-600">Scholarships Won</span>
                  <span className="font-bold text-stone-900">$180K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-stone-600">First-Choice Rate</span>
                  <span className="font-bold text-stone-900">85%</span>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-bold text-stone-900 mb-2">Our Process</h4>
              <p className="text-xs text-stone-600">
                Comprehensive assessment, strategic school selection, application support, and interview preparation.
              </p>
            </div>

            <button className="w-full bg-lime-600 hover:bg-lime-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
              Schedule Consultation
              <TrendingUp className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessSnapshot;