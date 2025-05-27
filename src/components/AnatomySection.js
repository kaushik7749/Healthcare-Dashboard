import React from 'react';
import { Heart } from 'lucide-react';

const AnatomySection = () => {
  return (
    <div className="bg-white rounded-xl p-6 relative">
      <div className="flex items-center justify-center relative">
        {/* Anatomical Figure */}
        <div className="relative">
          <img 
            src="https://media.istockphoto.com/id/182043494/photo/human-heart-and-vascular-system.jpg?s=612x612&w=0&k=20&c=-NsTOa3vT0JLXvAeS7hwb0xYoeRUsBxHVruKFUh-icM=" 
            alt="Human Anatomy"
            className="w-72 h-96 object-cover rounded-lg opacity-90"
          />
          
          {/* Health Indicators */}
          <div className="absolute top-16 left-12 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-2">
            <Heart className="w-4 h-4 fill-current" />
            <span>Healthy Heart</span>
          </div>
          
          <div className="absolute bottom-32 -left-8 bg-cyan-400 text-white px-3 py-1 rounded-full text-sm font-medium">
            Healthy Leg
          </div>
          
          {/* <div className="absolute top-8 right-8 text-gray-600 text-sm">
            Lungs
          </div>
          
          <div className="absolute top-20 right-12 text-gray-600 text-sm">
            Teeth
          </div>
          
          <div className="absolute bottom-16 right-4 text-gray-600 text-sm">
            Bone
          </div> */}
        </div>
        
        {/* Zoom Control */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gray-200 rounded-full px-4 py-2 slider">
            <div className="w-32 h-1 bg-gray-300 rounded-full relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-gray-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;