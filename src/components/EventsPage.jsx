// src/pages/Events.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

// Import photos
import eventPhoto1 from "../assets/events/event1.jpg";
import eventPhoto2 from "../assets/events/event2.jpg";
import eventPhoto3 from "../assets/events/event3.jpg";

// Data driven sections
const eventPhotos = [
  { src: eventPhoto1, alt: "Campus Coding Competition" },
  { src: eventPhoto2, alt: "Tech Talk & Networking" },
  { src: eventPhoto3, alt: "Hackathon Team Collaboration" },
];

const timelineEvents = [
  { title: "Registration Opens", date: "July 1st, 2025" },
  { title: "Workshops & Pre-Events", date: "July 10th - 15th, 2025" },
  { title: "Main Hackathon", date: "July 20th - 22nd, 2025" },
  { title: "Final Presentations & Awards", date: "July 23rd, 2025" },
];

const evaluationCriteria = [
  { title: "Innovation & Creativity", desc: "Originality of the idea and unique approach to solving problems." },
  { title: "Technical Execution", desc: "Code quality, use of tools/tech, and overall functionality." },
  { title: "Design & Usability", desc: "User experience, interface, and accessibility." },
  { title: "Impact & Presentation", desc: "Practicality, relevance, and clarity in final presentation." },
];

const keyFeatures = [
  { title: "💡 Workshops", desc: "Learn from industry experts in AI, Web, and more." },
  { title: "🤝 Networking", desc: "Connect with like-minded peers and mentors." },
  { title: "🏆 Competitions", desc: "Win exciting prizes across multiple tracks." },
  { title: "🚀 Mentorship", desc: "Get guided by professionals throughout the event." },
];

const EventsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % eventPhotos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <section className="text-center py-16 px-6 bg-hero-gradient">
        <h1 className="text-5xl font-bold mb-6">🚀 Upcoming Tech Events</h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
          Join us for an exciting lineup of hackathons, workshops, and tech talks!
        </p>
        <Link to="/events/register">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Register Now
          </Button>
        </Link>
      </section>

      {/* Event Photo Carousel */}
      <section className="relative max-w-4xl mx-auto py-12">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src={eventPhotos[currentSlide].src}
            alt={eventPhotos[currentSlide].alt}
            className="w-full h-[400px] object-cover transition-all duration-700"
          />
        </div>
        {/* Carousel Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {eventPhotos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">📅 Event Timeline</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {timelineEvents.map((item, idx) => (
            <Card key={idx} className="bg-card-gradient text-center p-6">
              <CardContent>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-slate-400">{item.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Evaluation Criteria */}
      <section className="bg-slate-900 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">📊 Evaluation Criteria</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {evaluationCriteria.map((item, idx) => (
            <Card key={idx} className="bg-glassmorphism">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">✨ Why Join?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyFeatures.map((item, idx) => (
            <Card key={idx} className="bg-card-gradient text-center">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-hero-gradient">
        <h2 className="text-4xl font-bold mb-6">Ready to Compete?</h2>
        <p className="text-slate-300 max-w-xl mx-auto mb-8">
          Don’t miss out on the ultimate tech showdown of the year.
        </p>
        <Link to="/events/more-details">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            More Details
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default EventsPage;
