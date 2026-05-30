import React from 'react';
import { motion } from 'framer-motion';
const baseUrl = import.meta.env.BASE_URL || "/";
const profileImg = `${baseUrl}optimized/profile.webp`;

const ProfileCard = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative z-10 w-full max-w-[320px] mx-auto h-[480px] rounded-[32px] overflow-hidden shadow-2xl transition-all duration-500"
      style={{
        background: 'linear-gradient(180deg, #1c1c28 0%, #0a0a0f 100%)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
      }}
    >
      {/* Subtle background pattern/texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M0 0h2v2H0V0zm4 4h2v2H4V4zm4 4h2v2H8V8zm4 4h2v2h-2v-2zm4 4h2v2h-2v-2z%22 fill=%22%23ffffff%22 fill-rule=%22evenodd%22/%3E%3C/svg%3E')]"></div>

      <div className="relative z-10 flex flex-col h-full w-full">
        
        {/* Top Content: Large Image */}
        <div className="w-full h-[75%] relative">
          <img 
            src={profileImg} 
            alt="Ajay Lakhara" 
            className="w-full h-full object-cover object-top opacity-95"
            loading="eager"
            fetchpriority="high"
            width="320"
            height="360"
            style={{
              maskImage: 'linear-gradient(to top, transparent 0%, black 20%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 20%, black 100%)'
            }}
          />
        </div>

        {/* Bottom Content: Name and Role */}
        <div className="flex-1 flex flex-col items-center justify-start pt-2 pb-6">
          <h3 className="text-white text-3xl font-semibold tracking-tight mb-1 drop-shadow-md">
            Ajay Lakhara
          </h3>
          <p className="text-primary text-sm font-medium tracking-wide uppercase">
            UI/UX Designer
          </p>
        </div>

      </div>
    </motion.div>
  );
};

export default ProfileCard;
