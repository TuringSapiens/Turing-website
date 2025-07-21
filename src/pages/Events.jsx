import React from 'react';
import '../styles/Events.css';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const EventCard = ({ event }) => {
    const handleRegistration = () => {
        // Registration logic will be added here
        console.log("Registration clicked for:", event.title);
    };
  
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-[350px] h-[450px] bg-black rounded-xl 
                       shadow-[0_0_15px_rgba(0,255,0,0.3)] 
                       border border-green-500/30
                       transition-all duration-300 
                       hover:shadow-[0_0_20px_rgba(0,255,0,0.4)]
                       hover:transform hover:scale-105
                       overflow-hidden"
        >
            <div className="relative h-48 overflow-hidden rounded-t-xl">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white">{event.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-3">{event.description}</p>
                <div className="flex items-center text-green-500 gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center text-green-500 gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{event.venue}</span>
                </div>
                <button 
                    onClick={handleRegistration}
                    className="w-full py-2 mt-4 bg-green-500/10 text-green-500 
                                      rounded-lg border border-green-500/30
                                      hover:bg-green-500/20 transition-colors
                                      font-medium"
                >
                    Register Now
                </button>
            </div>
        </motion.div>
    );
};

const Events = () => {
    // Updated event data with only "Rebrand This" event
    const events = [
        {
            id: 1,
            title: 'Rebrand This',
            date: 'July 2024',
            venue: 'TBD',
            description: 'Join us for an exciting rebranding challenge where creativity meets strategy. Transform existing brands with innovative design thinking and fresh perspectives.',
            image: 'https://placehold.co/400x300'
        }
    ];

    return (
        <div className="min-h-screen bg-[#09070b] py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-white mb-12">
                    Events
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <EventCard key={index} event={event} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Events;
  
  
