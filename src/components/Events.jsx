import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import './Events.css'
import EventsPage from './components/EventsPage';
import EventCard from './Event_card';

const eventData = [
    {
        id: 1,
        title: 'MUJ UniWay',
        date: '2025-08-07',
        venue: 'Hybrid Mode',
        description: 'MUJ UniWay is a project-based talent hunt focused on building a real-time campus navigation app and website for Manipal University Jaipur.',
        image: '/assets/Uniway_Poster.png',
        link: '/events/uniway' 

    }
];
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


