import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import dayjs from 'dayjs';

const EventCard = ({ event }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="w-full sm:w-80 bg-black rounded-xl 
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

const Events = () => {
  const [activeTab, setActiveTab] = useState('active');

  const Uniway = [
    {
      id: 1,
      title: 'MUJ UniWay',
      date: '2025-08-05',
      venue: 'Hybrid Mode',
      description:
        'MUJ UniWay is a project-based event focused on building a real-time campus navigation app and website for Manipal University Jaipur.',
      image: '/assets/Uniway_Poster.png',
      link: '/assets/uniway_ps.pdf',
    },
  ];

  const tabMap = {
    active: Uniway,
    upcoming: [],
    past: [],
  };

  return (
    <div className="min-h-screen bg-[#09070b] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl mt-7 font-bold text-center text-white mb-10 tracking-wide">
          Events
        </h2>

        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {['active', 'upcoming', 'past'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                ${
                  activeTab === tab
                    ? 'bg-gray-500 text-white'
                    : 'bg-transparent text-gray-400 hover:text-white'
                }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Events
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {tabMap[activeTab].length > 0 ? (
            tabMap[activeTab].map(event => (
              <EventCard key={event.id} event={event} />
            ))
          ) : (
            <p className="text-center text-gray-400 col-span-full">
              No {activeTab} events found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
