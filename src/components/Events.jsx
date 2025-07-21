import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import './Events.css'

const eventData = [
    {
        title: "Rebrand This",
        description: "Join us for an exciting rebranding challenge where creativity meets strategy. Transform existing brands with innovative design thinking and fresh perspectives.",
        date: "July 2024",
        venue: "Online mode",
        image: "https://placehold.co/600x400/000000/2F2F2F"
    }
];

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
            className="w-full h-[400px] bg-black rounded-xl 
                 shadow-[0_0_15px_rgba(0,255,0,0.3)] 
                 border border-green-500/30
                 transition-all duration-300 
                 hover:shadow-[0_0_20px_rgba(0,255,0,0.4)]
                 hover:transform hover:scale-105
                 group"
        >
            <div className="h-[40%] overflow-hidden rounded-t-xl bg-neutral-900">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover opacity-50 
                     group-hover:opacity-70 transition-opacity"
                />
            </div>
            <div className="p-6 space-y-3 h-[60%] flex flex-col">
                <h3 className="text-xl font-bold text-white group-hover:text-green-400 
                       transition-colors">{event.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-2 flex-grow">
                    {event.description}
                </p>
                <div className="space-y-2">
                    <div className="flex items-center text-green-500 gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-green-500 gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{event.venue}</span>
                    </div>
                </div>
                <button 
                    onClick={handleRegistration}
                    className="w-full py-2 bg-green-500/10 text-green-500 
                              rounded-lg border border-green-500/30
                              hover:bg-green-500/20 transition-colors
                              font-medium mt-auto"
                >
                    Register Now
                </button>
            </div>
        </motion.div>
    );
};

const Events = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
            {eventData.map((event, index) => (
                <EventCard key={index} event={event} />
            ))}
        </div>
    );
};

export default Events;
