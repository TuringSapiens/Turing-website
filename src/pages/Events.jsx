import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import dayjs from 'dayjs';

const EventCard = ({ event }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="w-full h-[550px] bg-black rounded-xl 
                 shadow-[0_0_15px_rgba(0,255,0,0.3)] 
                 border border-green-500/30
                 transition-all duration-300 
                 hover:shadow-[0_0_20px_rgba(0,255,0,0.4)]
                 hover:transform hover:scale-105
                 group"
  >
    <div className="h-[300px] overflow-hidden rounded-t-xl bg-neutral-900">
      <img src={event.image} alt={event.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity" />
    </div>
    <div className="p-6 space-y-3 h-[45%] flex flex-col">
      <h3 className="text-xl font-bold text-whitetext-xl font-bold text-white group-hover:text-green-400 transition-colors">{event.title}</h3>
      <p className="text-gray-400 text-sm line-clamp-2 flex-grow">{event.description}</p>
      <div className="flex items-center text-green-500 gap-2">
        <Calendar className="w-4 h-4" />
        <span className="text-sm">{event.date}</span>
      </div>
      <div className="flex items-center text-green-500 gap-2">
        <MapPin className="w-4 h-4" />
        <span className="text-sm">{event.venue}</span>
      </div>
      <a
        href="https://www.linkedin.com/company/turing-sapiens/posts/?feedView=all"
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

const categorizeEvents = (events) => {
  const today = dayjs();
  const upcoming = [], past = [], active = [];

  events.forEach(event => {
    const eventDate = dayjs(event.date);
    if (eventDate.isSame(today, 'day')) active.push(event);
    else if (eventDate.isAfter(today)) upcoming.push(event);
    else past.push(event);
  });

  return { active, upcoming, past };
};

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const events = [
    {
      id: 1,
      title: 'Rebrand This',
      date: '2025-08-10',
      venue: 'Online Mode',
      description: 'Transform existing brands with innovative design thinking and fresh perspectives.',
      image: '/assets/POSTER.jpg',
    }
  ];

  const { active, upcoming, past } = categorizeEvents(events);

  const tabMap = {
    active: active,
    upcoming: upcoming,
    past: past,
  };

  return (
    <div className="min-h-screen bg-[#09070b] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center text-sky-500 mb-12 tracking-wide">
          Events
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-6 mb-10">
          {['active', 'upcoming', 'past'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm text-white font-medium transition-all border-transparent border-sky-500/50 
                ${activeTab === tab ? 'bg-sky-500 text-white' : 'text-sky-400 hover:bg-sky-800'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Events
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tabMap[activeTab].length > 0 ? (
            tabMap[activeTab].map((event, index) => (
              <EventCard key={index} event={event} />
            ))
          ) : (
            <p className="text-center text-gray-400 col-span-full">No {activeTab} events found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
  
  
