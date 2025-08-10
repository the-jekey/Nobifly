// components/WorkCard.jsx
import React from 'react';
import TextReveal from './TextReveal';

const WorkCard = ({ title, year, image }) => {
       return (
              <div className="w-full h-[30vh] lg:h-[60vh]">
                     <div className="w-full h-[95%] overflow-hidden relative rounded-sm">
                            <img
                                   className="w-full h-full object-cover"
                                   src={image}
                                   alt={title}
                            />
                     </div>
                     <div className="flex items-center justify-between text-[12px] mt-1">
                            <TextReveal><h1>{title}</h1></TextReveal>
                            <TextReveal><h1>{year}</h1></TextReveal>
                     </div>
              </div>
       );
};

export default WorkCard;
