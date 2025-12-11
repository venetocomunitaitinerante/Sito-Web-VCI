import React from 'react';
import { PageHeader, Section, EventCard } from '../components/Shared';
import { NEXT_EVENTS } from '../constants';
import { ShieldCheck, Backpack, Sun } from 'lucide-react';

export const Walks: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Calendario Cammini" 
        subtitle="Scopri i prossimi passi insieme a noi."
        bgImage="https://picsum.photos/1920/600?random=88"
      />

      {/* --- UPCOMING EVENTS --- */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEXT_EVENTS.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Section>

      {/* --- SAFETY & TIPS --- */}
      <Section bg="beige">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Prima di partire</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-vci-green shadow-sm mb-4">
                <ShieldCheck size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Sicurezza</h3>
              <p className="text-sm text-gray-600">
                Seguiamo sempre i sentieri tracciati. I nostri referenti sono formati per gestire il gruppo, ma la prudenza è responsabilità di tutti.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-vci-green shadow-sm mb-4">
                <Backpack size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Equipaggiamento</h3>
              <p className="text-sm text-gray-600">
                Scarpe da trekking obbligatorie. Porta sempre acqua, k-way e un cambio. I bastoncini sono consigliati per i percorsi collinari.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-vci-green shadow-sm mb-4">
                <Sun size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Meteo</h3>
              <p className="text-sm text-gray-600">
                In caso di maltempo grave, l'evento viene annullato o rinviato. Controlla sempre i canali social o la mail la sera prima.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* --- ARCHIVE (Visual placeholder) --- */}
      <Section>
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-serif font-bold">Archivio Cammini</h2>
          <button className="text-vci-green font-semibold hover:underline">Vedi tutto l'archivio</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-70 hover:opacity-100 transition-opacity">
           {[1,2,3,4].map(i => (
             <div key={i} className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group">
               <img src={`https://picsum.photos/400/400?random=${i+20}`} alt="Old event" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
               <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <span className="text-white font-bold text-sm">Vedi foto</span>
               </div>
             </div>
           ))}
        </div>
      </Section>
    </>
  );
};