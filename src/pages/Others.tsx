import React from 'react';
import { PageHeader, Section } from '../components/Shared';
import { BLOG_POSTS, FAQ_ITEMS } from '../constants';
import { ChevronDown } from 'lucide-react';

// --- PROJECTS PAGE ---
export const Projects: React.FC = () => (
  <>
    <PageHeader title="Progetti" subtitle="Le nostre iniziative a lungo termine." />
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          <img src="https://picsum.photos/800/400?random=50" alt="Festival" className="w-full h-48 object-cover"/>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-vci-green mb-2">Festival del Camminare</h3>
            <p className="text-gray-600 mb-4">Un evento annuale di tre giorni con talk, escursioni e musica per celebrare la cultura del cammino.</p>
            <span className="text-amber-500 text-sm font-bold uppercase tracking-wider">In corso</span>
          </div>
        </div>
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          <img src="https://picsum.photos/800/400?random=51" alt="Scuole" className="w-full h-48 object-cover"/>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-vci-green mb-2">VCI nelle Scuole</h3>
            <p className="text-gray-600 mb-4">Portiamo l'educazione ambientale e la pratica del cammino nelle scuole primarie del Veneto.</p>
            <span className="text-vci-blue text-sm font-bold uppercase tracking-wider">Pianificazione</span>
          </div>
        </div>
      </div>
    </Section>
  </>
);

// --- BLOG PAGE ---
export const Blog: React.FC = () => (
  <>
    <PageHeader title="Diario Itinerante" subtitle="Racconti, pensieri e voci dalla strada." />
    <Section bg="beige">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_POSTS.map(post => (
          <div key={post.id} className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
            <div className="h-48 overflow-hidden">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
            </div>
            <div className="p-6 flex-grow">
                <div className="flex justify-between items-center text-xs text-gray-400 mb-3">
                    <span>{post.date}</span>
                    <span className="text-vci-green font-medium">{post.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <button className="text-vci-green font-bold text-sm hover:underline">Leggi tutto</button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  </>
);

// --- MEDIA PAGE ---
export const Media: React.FC = () => (
  <>
    <PageHeader title="Media" subtitle="I nostri scatti migliori e risorse per la stampa." />
    <Section>
      <h2 className="text-2xl font-bold mb-6">Galleria</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[...Array(8)].map((_, i) => (
            <img key={i} src={`https://picsum.photos/400/300?random=${100+i}`} className="rounded-xl w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer" alt="Gallery"/>
        ))}
      </div>
      <div className="bg-vci-blue/10 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between">
          <div>
              <h3 className="text-xl font-bold text-vci-darkBlue">Press Kit</h3>
              <p className="text-gray-600 text-sm">Scarica loghi, comunicati stampa e foto ufficiali.</p>
          </div>
          <button className="mt-4 md:mt-0 bg-white text-vci-darkBlue font-bold py-2 px-6 rounded-lg shadow-sm border border-vci-darkBlue/20 hover:bg-vci-darkBlue hover:text-white transition-colors">
              Scarica .zip (12MB)
          </button>
      </div>
    </Section>
  </>
);

// --- INFO PAGE ---
export const Info: React.FC = () => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);

    return (
    <>
        <PageHeader title="Info Pratiche" subtitle="Tutto quello che devi sapere." />
        <Section className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Domande Frequenti (FAQ)</h2>
            <div className="space-y-4">
                {FAQ_ITEMS.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                        <button 
                            className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 text-left font-semibold text-gray-800 focus:outline-none"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            {item.question}
                            <ChevronDown size={20} className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}/>
                        </button>
                        {openIndex === index && (
                            <div className="p-5 bg-gray-50 border-t border-gray-100 text-gray-600 text-sm leading-relaxed">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            
            <div className="mt-16 text-center">
                <h3 className="text-xl font-bold mb-4">Hai altre domande?</h3>
                <p className="text-gray-600 mb-6">Scrivici su WhatsApp o via email.</p>
                <div className="flex justify-center gap-4">
                    <button className="bg-green-600 text-white px-6 py-2 rounded-full font-bold hover:bg-green-700">WhatsApp</button>
                    <button className="bg-gray-800 text-white px-6 py-2 rounded-full font-bold hover:bg-gray-900">Email</button>
                </div>
            </div>
        </Section>
    </>
    );
};