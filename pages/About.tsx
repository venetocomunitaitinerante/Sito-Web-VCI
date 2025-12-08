import React from 'react';
import { PageHeader, Section, TeamCard } from '../components/Shared';
import { TEAMS } from '../constants';
import { Target, Eye, HeartHandshake, Compass } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Chi Siamo" 
        subtitle="Origini, evoluzione e le persone che muovono VCI."
        bgImage="https://picsum.photos/1920/600?random=99"
      />

      {/* --- STORY & EVOLUTION --- */}
      <Section>
        <div className="max-w-4xl mx-auto space-y-8 text-lg text-gray-600 leading-relaxed">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">La nostra Storia</h2>
          <p>
            VCI – Veneto Comunità Itinerante nasce come un esperimento sociale: mettere in cammino persone sconosciute per riscoprire il senso di comunità. 
            Quello che è iniziato come un piccolo gruppo di appassionati è diventato un movimento regionale che coinvolge centinaia di persone e decine di associazioni.
          </p>
          <p>
            Oggi VCI non è solo trekking. È un incubatore di idee, un facilitatore di relazioni e uno strumento per leggere il territorio veneto con occhi nuovi, 
            lontani dalla frenesia produttiva e vicini ai ritmi della natura.
          </p>
        </div>
      </Section>

      {/* --- MISSION, VISION, VALUES --- */}
      <Section bg="beige">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <Target className="w-12 h-12 text-vci-green mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Missione</h3>
            <p className="text-gray-600 text-sm">Creare connessioni autentiche tra le persone e il territorio veneto attraverso l'esperienza condivisa del cammino.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <Eye className="w-12 h-12 text-vci-blue mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Visione</h3>
            <p className="text-gray-600 text-sm">Un Veneto dove la lentezza è un valore e dove le comunità locali collaborano attivamente per il bene comune.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <HeartHandshake className="w-12 h-12 text-amber-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Valori</h3>
            <p className="text-gray-600 text-sm">Accoglienza, Sostenibilità, Ascolto, Partecipazione attiva e Rispetto per la natura.</p>
          </div>
        </div>
      </Section>

      {/* --- ORGANIZATIONAL MODEL --- */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-800">Come siamo organizzati</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            La nostra struttura è orizzontale e dinamica. Crediamo nella responsabilità condivisa e nel contributo di tutti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAMS.map(team => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>

        <div className="mt-16 bg-vci-green/5 p-8 rounded-3xl flex flex-col md:flex-row items-center gap-8 border border-vci-green/20">
          <div className="bg-white p-4 rounded-full shadow-md">
            <Compass size={40} className="text-vci-green" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Il Ruolo del Facilitatore</h3>
            <p className="text-gray-600">
              In VCI non ci sono "capi", ma Facilitatori. Figure chiave che aiutano i team a lavorare bene insieme, 
              gestiscono i conflitti e si assicurano che la voce di tutti venga ascoltata. È un ruolo a rotazione che permette a tutti di crescere.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};