import React from "react";

interface ServiceProvider {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  distance: string;
  price: string;
  availability: string;
  specialties: string[];
  phone: string;
  verified: boolean;
}

interface ServiceDetailsPanelProps {
  isOpen: boolean;
  serviceName: string;
  onClose: () => void;
}

const ServiceDetailsPanel: React.FC<ServiceDetailsPanelProps> = ({
  isOpen,
  serviceName,
  onClose,
}) => {
  // Mock service providers data - you can replace this with real data
  const getServiceProviders = (service: string): ServiceProvider[] => {
    const providers: ServiceProvider[] = [
      {
        id: "1",
        name: "ABC Professional Services",
        rating: 4.8,
        reviews: 127,
        distance: "2.3 miles",
        price: "$50-80/hr",
        availability: "Available today",
        specialties: ["Emergency Service", "Licensed & Insured"],
        phone: "(555) 123-4567",
        verified: true
      },
      {
        id: "2",
        name: "QuickFix Solutions",
        rating: 4.6,
        reviews: 89,
        distance: "3.1 miles",
        price: "$45-70/hr",
        availability: "Available tomorrow",
        specialties: ["Same Day Service", "Free Estimates"],
        phone: "(555) 234-5678",
        verified: true
      },
      {
        id: "3",
        name: "Elite Service Group",
        rating: 4.9,
        reviews: 156,
        distance: "4.2 miles",
        price: "$60-90/hr",
        availability: "Available this week",
        specialties: ["Premium Service", "Warranty Included"],
        phone: "(555) 345-6789",
        verified: true
      },
      {
        id: "4",
        name: "Neighborhood Helpers",
        rating: 4.5,
        reviews: 73,
        distance: "1.8 miles",
        price: "$40-65/hr",
        availability: "Available today",
        specialties: ["Local Business", "Budget Friendly"],
        phone: "(555) 456-7890",
        verified: false
      },
      {
        id: "5",
        name: "Professional Plus",
        rating: 4.7,
        reviews: 102,
        distance: "5.1 miles",
        price: "$55-85/hr",
        availability: "Available tomorrow",
        specialties: ["24/7 Service", "Expert Technicians"],
        phone: "(555) 567-8901",
        verified: true
      }
    ];
    
    return providers;
  };

  const providers = getServiceProviders(serviceName);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <>
      {/* Full Screen Overlay */}
      <div className={`fixed inset-0 bg-white transform transition-transform duration-300 ease-out z-50 flex flex-col ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      }`}>
        
        {/* Header - Fixed at top */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors mr-3"
                aria-label="Close panel"
              >
                <svg
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
            </div>
            <h1 className="text-xl font-bold text-center flex-1">{serviceName} Providers</h1>
            <div className="w-10"></div> {/* Spacer for centering */}
          </div>
          
          {/* Filter/Sort Bar */}
          <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
            <button className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium whitespace-nowrap">
              All
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 whitespace-nowrap">
              Verified
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 whitespace-nowrap">
              Available Today
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 whitespace-nowrap">
              Nearest
            </button>
          </div>
        </div>
        
        {/* Content - Scrollable with improved layout */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-6 py-4">
            <p className="text-gray-600 mb-6 sticky top-0 bg-white py-2 border-b border-gray-100">
              {providers.length} providers available in your area
            </p>
            
            <div className="space-y-4 pb-8">
              {providers.map((provider) => (
                <div
                  key={provider.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-gray-900">{provider.name}</h3>
                        {provider.verified && (
                          <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1">
                          {renderStars(provider.rating)}
                        </div>
                        <span className="text-sm font-medium text-gray-900">{provider.rating}</span>
                        <span className="text-sm text-gray-500">({provider.reviews} reviews)</span>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">{provider.distance}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {provider.specialties.map((specialty) => (
                          <span
                            key={specialty}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>{provider.price}</span>
                        <span>•</span>
                        <span className="text-green-600 font-medium">{provider.availability}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-4">
                    <button className="flex-1 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                      Book Now
                    </button>
                    <button className="px-6 border border-primary text-primary py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                      Call
                    </button>
                    <button className="px-6 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                      Message
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsPanel;
