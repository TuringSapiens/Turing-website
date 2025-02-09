import React from 'react';
import '../styles/Events.css';

const Events = () => {
    // Sample event data - this can be replaced with real data later
    const events = [
        {
            id: 1,
            title: 'Tech Workshop',
            date: 'March 15, 2024',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: 'https://placehold.co/400x300'
        },
        {
            id: 2,
            title: 'Coding Competition',
            date: 'April 2, 2024',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: 'https://placehold.co/400x300'
        },
        {
            id: 3,
            title: 'Hackathon 2024',
            date: 'April 20, 2024',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: 'https://placehold.co/400x300'
        },
        {
            id: 4,
            title: 'AI Seminar',
            date: 'May 5, 2024',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: 'https://placehold.co/400x300'
        },
        {
            id: 5,
            title: 'Web Dev Workshop',
            date: 'May 15, 2024',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: 'https://placehold.co/400x300'
        },
        {
            id: 6,
            title: 'Tech Talk',
            date: 'June 1, 2024',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: 'https://placehold.co/400x300'
        }
    ];

    return (
        <div className="min-h-screen bg-[#09070b]">
            <div className="events-container py-20">
                <h1 className="text-5xl text-white font-bold mb-8 text-center">Upcoming Events</h1>
                <div className="events-grid">
                    {events.map((event) => (
                        <div key={event.id} className="event-card bg-gray-800 text-white">
                            <img src={event.image} alt={event.title} className="event-image" />
                            <div className="event-content">
                                <h2 className="text-2xl font-bold">{event.title}</h2>
                                <p className="event-date text-gray-300">{event.date}</p>
                                <p className="event-description text-gray-400">{event.description}</p>
                                <button className="event-button bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Events;