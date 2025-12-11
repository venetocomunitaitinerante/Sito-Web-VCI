import React from 'react';
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react';
import type { Event, Team } from '../types';
import { Link } from 'react-router-dom';

// --- Generic Section Wrapper ---
export const Section: React.FC<{ 
  className?: string; 
  children: React.ReactNode; 
  id?: string;
  bg?: 'white' | 'beige' | 'green' | 'blue';
}> = ({ className = "", children, id, bg = 'white' }) => {
  const bgColors = {
    white: 'bg-white',
    beige: 'bg-vci-beige',
    green: 'bg-vci-green text-white',
    blue: 'bg-vci-blue/10'
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgColors[bg]} ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

// --- Event Card ---
export const EventCard: React.FC<{ event: Event }> = ({ event }) => (
  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full group border border-gray-100">
    <div className="relative h-48 overflow-hidden">
      <img 
        src={event.imageUrl} 
        alt={event.title} 
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
      />
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-vci-green uppercase tracking-wide">
        {event.difficulty}
      </div>
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
        <span className="flex items-center gap-1"><Calendar size={14} className="text-vci-blue" /> {event.date}</span>
        <span className="flex items-center gap-1"><MapPin size={14} className="text-vci-blue" /> {event.distance}</span>
      </div>
      <h3 className="text-xl font-serif font-bold text-gray-800 mb-2 group-hover:text-vci-green transition-colors">{event.title}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
      
      <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
        <span className="text-xs font-medium text-gray-500">
          {event.partnerAssociation ? `con ${event.partnerAssociation}` : 'VCI Event'}
        </span>
        <Link to="/partecipa" className="text-vci-green font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
          Partecipa <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  </div>
);

// --- Team Card ---
export const TeamCard: React.FC<{ team: Team }> = ({ team }) => (
  <div className="bg-vci-beige p-6 rounded-2xl border-l-4 border-vci-green hover:bg-white hover:shadow-lg transition-all duration-300">
    <div className="flex justify-between items-start mb-4">
      <h4 className="font-bold text-lg text-vci-green">{team.name}</h4>
      <span className="px-2 py-1 bg-vci-green/10 text-vci-green text-xs rounded-lg font-medium">{team.type}</span>
    </div>
    <p className="text-gray-600 text-sm mb-4">{team.description}</p>
    <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
      <Users size={14} />
      <span>Ruolo: {team.role}</span>
    </div>
  </div>
);

// --- Page Title ---
export const PageHeader: React.FC<{ title: string; subtitle?: string; bgImage?: string }> = ({ title, subtitle, bgImage }) => (
  <div className="relative py-20 md:py-32 bg-vci-green flex items-center justify-center overflow-hidden">
    {bgImage && (
      <div className="absolute inset-0 z-0">
        <img src={bgImage} alt="background" className="w-full h-full object-cover opacity-20" />
      </div>
    )}
    <div className="relative z-10 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 animate-fade-in-up">{title}</h1>
      {subtitle && <p className="text-lg text-vci-sand max-w-2xl mx-auto font-light">{subtitle}</p>}
    </div>
  </div>
);
