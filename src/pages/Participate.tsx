import React, { useState } from 'react';
import { PageHeader, Section } from '../components/Shared';
import { Footprints, Users2, Lightbulb } from 'lucide-react';

export const Participate: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', type: 'cammino' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Reset after 3 seconds for demo
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <PageHeader 
        title="Partecipa" 
        subtitle="Il cammino si fa insieme. Scegli come vuoi contribuire." 
      />

      <Section>
        {/* --- THREE ACTIONS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 border rounded-3xl hover:border-vci-green hover:bg-green-50 transition-colors cursor-pointer" onClick={() => setFormData({...formData, type: 'cammino'})}>
            <div className="w-20 h-20 bg-vci-green text-white rounded-full mx-auto flex items-center justify-center mb-6">
              <Footprints size={40} />
            </div>
            <h3 className="text-xl font-bold mb-2">Cammina</h3>
            <p className="text-gray-600 text-sm">Partecipa ai nostri eventi come camminatore. Semplice, diretto, essenziale.</p>
          </div>
          
          <div className="text-center p-8 border rounded-3xl hover:border-vci-blue hover:bg-blue-50 transition-colors cursor-pointer" onClick={() => setFormData({...formData, type: 'team'})}>
            <div className="w-20 h-20 bg-vci-blue text-white rounded-full mx-auto flex items-center justify-center mb-6">
              <Users2 size={40} />
            </div>
            <h3 className="text-xl font-bold mb-2">Unisciti al Team</h3>
            <p className="text-gray-600 text-sm">Entra nell'organizzazione. Metti a disposizione le tue competenze.</p>
          </div>

          <div className="text-center p-8 border rounded-3xl hover:border-amber-500 hover:bg-amber-50 transition-colors cursor-pointer" onClick={() => setFormData({...formData, type: 'progetto'})}>
            <div className="w-20 h-20 bg-amber-500 text-white rounded-full mx-auto flex items-center justify-center mb-6">
              <Lightbulb size={40} />
            </div>
            <h3 className="text-xl font-bold mb-2">Proponi</h3>
            <p className="text-gray-600 text-sm">Hai un'idea per un progetto o un nuovo percorso? Parliamone.</p>
          </div>
        </div>

        {/* --- FORM --- */}
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl">
          <h3 className="text-2xl font-serif font-bold text-center mb-8">Compila il modulo</h3>
          
          {submitted ? (
             <div className="text-center py-10 text-green-600 animate-fade-in">
               <h4 className="text-xl font-bold mb-2">Grazie!</h4>
               <p>La tua richiesta è stata ricevuta. Ti contatteremo presto.</p>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nome e Cognome</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-vci-green focus:ring-2 focus:ring-vci-green/20 outline-none transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-vci-green focus:ring-2 focus:ring-vci-green/20 outline-none transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Sono interessato a:</label>
                <select 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-vci-green focus:ring-2 focus:ring-vci-green/20 outline-none transition-all"
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                >
                  <option value="cammino">Partecipare a un cammino</option>
                  <option value="team">Unirmi a un team (Volontariato)</option>
                  <option value="progetto">Proporre un progetto</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="w-full bg-vci-green text-white font-bold py-4 rounded-xl hover:bg-vci-lightGreen transition-colors shadow-md mt-4"
              >
                Invia Richiesta
              </button>
            </form>
          )}
        </div>
      </Section>
    </>
  );
};