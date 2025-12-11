import React, { useState } from 'react';
import { PageHeader, Section } from '../components/Shared';
import { PARTNERS } from '../constants';
import type { Partner } from '../types';
import { MapPin, ExternalLink } from 'lucide-react';

const VenetoMap: React.FC<{ 
  partners: Partner[], 
  selectedId: string | null, 
  onSelect: (id: string) => void 
}> = ({ partners, selectedId, onSelect }) => {
  return (
    <div className="relative w-full aspect-[4/3] bg-blue-50/30 rounded-3xl border border-blue-100 overflow-hidden shadow-inner">
      {/* Abstract Shape of Veneto (Simplified Polygon) */}
      <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0">
         <defs>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
         </defs>
         {/* Very rough approximation of Veneto borders */}
         <path 
           d="M30,10 L60,5 L85,20 L95,50 L80,85 L50,95 L20,80 L5,50 L15,25 Z" 
           className="fill-white stroke-vci-green stroke-[0.5]"
           filter="url(#glow)"
         />
         
         {/* Pins */}
         {partners.map(p => (
           <g 
             key={p.id} 
             onClick={() => onSelect(p.id)}
             className="cursor-pointer group"
           >
             <circle 
               cx={p.location.x} 
               cy={p.location.y} 
               r={selectedId === p.id ? 4 : 2} 
               className={`transition-all duration-300 ${selectedId === p.id ? 'fill-vci-green' : 'fill-vci-blue group-hover:fill-vci-green'}`} 
             />
             <text 
                x={p.location.x} 
                y={p.location.y + 5} 
                textAnchor="middle" 
                className="text-[3px] fill-gray-600 font-sans pointer-events-none uppercase tracking-wider"
             >
               {p.location.label}
             </text>
           </g>
         ))}
      </svg>
      <div className="absolute bottom-4 left-4 text-xs text-gray-400 bg-white/80 p-2 rounded">
        Mappa interattiva
      </div>
    </div>
  );
};

export const Partners: React.FC = () => {
  const [selectedPartnerId, setSelectedPartnerId] = useState<string | null>(null);

  const activePartner = selectedPartnerId ? PARTNERS.find(p => p.id === selectedPartnerId) : null;

  return (
    <>
      <PageHeader 
        title="Rete Associativa" 
        subtitle="Le realtà con cui collaboriamo per rendere il Veneto più vivo." 
      />

      <Section>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* MAP */}
          <div className="lg:w-1/2">
             <VenetoMap 
                partners={PARTNERS} 
                selectedId={selectedPartnerId} 
                onSelect={setSelectedPartnerId} 
             />
          </div>

          {/* LIST / DETAIL */}
          <div className="lg:w-1/2 flex flex-col">
            <h2 className="text-2xl font-bold mb-6 font-serif">Associazioni Partner</h2>
            
            {activePartner ? (
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-vci-green/20 animate-fade-in-up">
                <button 
                  onClick={() => setSelectedPartnerId(null)}
                  className="text-xs text-gray-400 hover:text-gray-600 mb-4 underline"
                >
                  Torna alla lista
                </button>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl">🤝</div>
                  <div>
                    <h3 className="text-xl font-bold text-vci-green">{activePartner.name}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1"><MapPin size={12}/> {activePartner.location.label}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{activePartner.description}</p>
                <button className="flex items-center gap-2 text-vci-blue font-bold hover:underline">
                  Visita il sito <ExternalLink size={16} />
                </button>
              </div>
            ) : (
              <div className="bg-vci-beige rounded-2xl p-4 max-h-[500px] overflow-y-auto">
                <p className="text-sm text-gray-500 mb-4 italic">Seleziona un punto sulla mappa o clicca qui sotto:</p>
                <div className="space-y-3">
                  {PARTNERS.map(p => (
                    <div 
                      key={p.id} 
                      onClick={() => setSelectedPartnerId(p.id)}
                      className="bg-white p-4 rounded-xl cursor-pointer hover:shadow-md transition-shadow flex items-center justify-between group"
                    >
                      <span className="font-semibold text-gray-800 group-hover:text-vci-green transition-colors">{p.name}</span>
                      <span className="text-xs text-gray-400">{p.location.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mt-8 p-6 bg-vci-blue/10 rounded-2xl border border-vci-blue/20">
              <h3 className="font-bold text-vci-darkBlue mb-2">Diventa Partner</h3>
              <p className="text-sm text-gray-600 mb-4">Sei un'associazione e vuoi collaborare con VCI? Scrivici per costruire un progetto insieme.</p>
              <button className="text-xs font-bold bg-vci-darkBlue text-white px-4 py-2 rounded-lg">Contattaci</button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};