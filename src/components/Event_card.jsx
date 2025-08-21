import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import dayjs from 'dayjs';

const EventCard = ({ event }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="w-full sm:w-80 mx-5 sm:mx-20 bg-black rounded-xl 
               shadow-[0_0_15px_rgba(0,255,0,0.3)] 
               border border-green-500/30
               transition-all duration-300"
  >
    <div className="h-[450px] sm:h-[500px] overflow-hidden rounded-t-xl bg-neutral-900">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover object-[center_10%]"
        loading="lazy"
      />
    </div>
    <div className="p-4 space-y-2 flex flex-col">
      <h3 className="text-lg sm:text-xl font-bold text-white">{event.title}</h3>
      <p className="text-gray-400 text-sm flex-grow">
        {event.description}
      </p>
      <div className="flex items-center text-green-500 gap-2">
        <Calendar className="w-4 h-4" />
        <span className="text-sm">
          {dayjs(event.date).format("MMMM D, YYYY")}
        </span>
      </div>
      <div className="flex items-center text-green-500 gap-2">
        <MapPin className="w-4 h-4" />
        <span className="text-sm">{event.venue}</span>
      </div>
      <a
        href={event.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full block text-center py-2 bg-green-500/10 text-green-500 
                   rounded-lg border border-green-500/30
                   hover:bg-green-500/20 transition-colors
                   font-medium mt-auto"
      >
        Learn More
      </a>
    </div>
  </motion.div>
);

export default EventCard;