import React from 'react';
import { CheckCircle } from '@mui/icons-material';

const Timeline = () => {
  const steps = [
    { id: '01', label: 'Preliminary', completed: true },
    { id: '02', label: 'Your Details', completed: true },
    { id: '03', label: 'KYC', completed: true },
    { id: '04', label: 'Parties', completed: false },
    { id: '05', label: 'Claim', completed: false },
    { id: '06', label: 'Review', completed: false },
    { id: '07', label: 'Payment', completed: false },
  ];

  return (
    <div className="w-full">
      {/* Outer container with overflow handling */}
      <div className="relative">
        {/* Scroll indicators for mobile */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent md:hidden z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent md:hidden z-10" />
        
        {/* Scrollable container */}
        <div className="overflow-x-auto pb-4 hide-scrollbar">
          {/* Fixed width container for mobile, auto for larger screens */}
          <div className="min-w-[640px] md:min-w-0 w-full px-4 md:px-0">
            <div className="flex justify-between items-center">
              {steps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center flex-1 relative">
                  {/* Timeline connector */}
                  {index < steps.length - 1 && (
                    <div className={`absolute top-4 left-[50%] w-full h-[2px] 
                      ${step.completed ? 'bg-blue-600' : 'bg-gray-200'}`} 
                    />
                  )}
                  
                  {/* Step circle */}
                  <div className={`relative flex items-center justify-center 
                    w-8 h-8 rounded-full z-10
                    ${step.completed ? 'bg-blue-600' : 'bg-gray-200'}`}
                  >
                    {step.completed ? (
                      <CheckCircle className="w-5 h-5 text-white" />
                    ) : (
                      <span className="text-gray-500 text-xs font-medium">
                        {step.id}
                      </span>
                    )}
                  </div>
                  
                  {/* Labels */}
                  <span className="text-xs md:text-sm mt-2 text-center font-medium">
                    {step.label}
                  </span>
                  <span className="text-[10px] md:text-xs text-gray-500 mt-1">
                    (Approx 5 Min)
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add this CSS to your global styles or as a style tag
const styles = `
  .hide-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;     /* Firefox */
  }
  
  .hide-scrollbar::-webkit-scrollbar {
    display: none;            /* Chrome, Safari and Opera */
  }
`;

export default Timeline;