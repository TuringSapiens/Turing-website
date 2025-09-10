import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import dayjs from 'dayjs';
import EventCard from '../components/Event_card';

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
    {
    id: 2,
    title: 'MOVE Workshop',
    date: '2025-09-05',
    venue: 'MUJ Campus, Jaipur',
    description:
      'A three-day hands-on workshop covering MOVE fundamentals, demos, and mini-projects.',
    image: '/assets/Move.jpeg', 
    link: null, 
  },
  ];

  const tabMap = {
    past: Uniway,
    active: [],
  };

  return (
    <div className="min-h-screen bg-[#09070b] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl mt-7 font-bold text-center text-white mb-10 tracking-wide">
          Events
        </h2>

        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {['past', 'active'].map(tab => (
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