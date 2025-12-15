import React from 'react';
import { ArrowRight, Map, Users, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section, EventCard } from '../components/Shared';
import { NEXT_EVENTS } from '../constants';

export const Home: React.FC = () => {
  const nextEvent = NEXT_EVENTS[0];

  return (
    <>
      {/* --- HERO SECTION --- */}
      <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Paesaggio Veneto" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-vci-green/60 to-vci-green/80 mix-blend-multiply" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs md:text-sm tracking-widest uppercase mb-6 animate-fade-in">
            Benvenuti in VCI
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight animate-fade-in-up">
            Camminiamo per unire <br/>
            <span className="text-vci-sand italic">comunità</span>, <span className="text-vci-blue italic">territori</span> <br/>
            e <span className="text-vci-sand italic">persone</span>.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light animate-fade-in-up delay-100">
            Un'associazione che riscopre il Veneto a passo lento, tessendo relazioni e valorizzando la bellezza locale, creando una rete di comunicazione tra le realtà locali.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <Link 
              to="/partecipa" 
              className="px-8 py-4 bg-white text-vci-green rounded-full font-bold hover:bg-vci-sand transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2"
            >
              Partecipa al prossimo cammino <ArrowRight size={20} />
            </Link>
            <Link 
              to="/chi-siamo" 
              className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all flex items-center justify-center"
            >
              Scopri chi siamo
            </Link>
          </div>
        </div>

        {/* Decorative Wave at bottom */}
        <div className="absolute bottom-0 left-0 w-full leading-none">
          <svg className="w-full h-12 md:h-24 text-vci-beige" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="currentColor" fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,208C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* --- CORE ACTIVITIES (Cards) --- */}
      <Section bg="beige" className="-mt-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20 -mt-24 md:-mt-32">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-vci-green/10 rounded-2xl flex items-center justify-center text-vci-green mb-6">
              <Map size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-gray-800 mb-3">Cammini</h3>
            <p className="text-gray-600 mb-6">Esploriamo il Veneto attraverso percorsi lenti, riscoprendo sentieri dimenticati e paesaggi nascosti.</p>
            <Link to="/cammini" className="text-vci-green font-semibold hover:underline decoration-2 underline-offset-4">Scopri il calendario</Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-vci-blue/10 rounded-2xl flex items-center justify-center text-vci-blue mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-gray-800 mb-3">Comunità & Associazioni</h3>
            <p className="text-gray-600 mb-6">Non camminiamo soli. Creiamo reti tra associazioni locali per un impatto sociale concreto.</p>
            <Link to="/associazioni" className="text-vci-blue font-semibold hover:underline decoration-2 underline-offset-4">Vedi la mappa</Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-6">
              <Heart size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-gray-800 mb-3">Progetti Annuali</h3>
            <p className="text-gray-600 mb-6">Dai festival culturali ai progetti di rigenerazione urbana. Il cammino è solo l'inizio.</p>
            <Link to="/progetti" className="text-amber-600 font-semibold hover:underline decoration-2 underline-offset-4">I nostri progetti</Link>
          </div>
        </div>
      </Section>

      {/* --- WHO WE ARE TEASER --- */}
      <Section>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/800/800?random=20" 
              alt="Gruppo in cammino" 
              className="rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500" 
            />
          </div>
          <div className="md:w-1/2">
            <span className="text-vci-green font-bold tracking-widest uppercase text-sm mb-2 block">Chi siamo</span>
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-6">Molto più di un gruppo di trekking.</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              VCI nasce dall'idea che il territorio non sia solo un luogo fisico, ma un tessuto di storie e relazioni. 
              Dal 2018, uniamo passi e pensieri per costruire un Veneto più consapevole e connesso.
            </p>
            <Link to="/chi-siamo" className="inline-flex items-center text-vci-green font-bold hover:gap-2 transition-all">
              Leggi la nostra storia <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </Section>

      {/* --- NEXT EVENT HIGHLIGHT --- */}
      <Section bg="blue" className="relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-800">Prossimo Appuntamento</h2>
              <p className="text-gray-600 mt-2">Allaccia le scarpe, si parte!</p>
            </div>
            <Link to="/cammini" className="hidden md:block px-6 py-3 border border-vci-darkBlue text-vci-darkBlue rounded-full hover:bg-vci-darkBlue hover:text-white transition-colors">
              Vedi tutti gli eventi
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
             <EventCard event={nextEvent} />
          </div>

          <div className="mt-8 text-center md:hidden">
             <Link to="/cammini" className="inline-block px-6 py-3 border border-vci-darkBlue text-vci-darkBlue rounded-full">
              Vedi tutti gli eventi
            </Link>
          </div>
        </div>
      </Section>

      {/* --- FINAL CTA --- */}
      <Section bg="green" className="text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Pronto a fare il primo passo?</h2>
        <p className="text-vci-sand text-lg mb-10 max-w-2xl mx-auto">
          Che tu voglia camminare, aiutare nell'organizzazione o proporre un'idea, c'è spazio per te in VCI.
        </p>
        <Link 
          to="/partecipa" 
          className="inline-block bg-white text-vci-green px-10 py-4 rounded-full font-bold text-lg hover:bg-vci-sand transition-colors shadow-lg"
        >
          Unisciti alla Community
        </Link>
      </Section>
    </>
  );
};