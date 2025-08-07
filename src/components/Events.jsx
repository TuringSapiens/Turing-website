import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import './Events.css'

const eventData = [
    {
        id: 1,
        title: 'MUJ UniWay',
        date: '2025-08-07',
        venue: 'Hybrid Mode',
        description: 'MUJ UniWay is a project-based talent hunt focused on building a real-time campus navigation app and website for Manipal University Jaipur.',
        image: '/assets/Uniway_Poster.png',
        link: 'https://www.instagram.com/turingsapiensmuj/'

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
            className="w-full h-[650px] bg-black rounded-xl
                 shadow-[0_0_15px_rgba(0,255,0,0.3)] 
                 border border-green-500/30
                 transition-all duration-300 
                 hover:shadow-[0_0_20px_rgba(0,255,0,0.4)]
                 hover:transform hover:scale-105
                 group"
        >
            <div className="h-[400px] overflow-hidden rounded-t-xl bg-neutral-900">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full w-auto mx-auto opacity-50 
                     group-hover:opacity-70 transition-opacity"
                />
            </div>
            <div className="p-4 space-y-2 h-[36%] flex flex-col">
                <h3 className="text-1g font-semibold text-white group-hover:text-green-400 
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

