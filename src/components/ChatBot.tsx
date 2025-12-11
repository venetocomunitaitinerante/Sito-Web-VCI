import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Context for the AI to understand the website content
const VCI_SYSTEM_INSTRUCTION = `
Sei l'assistente virtuale ufficiale di VCI - Veneto Comunità Itinerante.
Il tuo obiettivo è accogliere i visitatori, spiegare cos'è l'associazione e aiutarli a partecipare.

INFORMAZIONI SU VCI:
- Missione: Camminiamo per unire comunità, territori e persone del Veneto. Non è solo trekking, ma un modo per costruire relazioni e riscoprire la lentezza.
- Origine: Nata nel 2018 come esperimento sociale.
- Valori: Accoglienza, Sostenibilità, Ascolto, Partecipazione attiva.
- Organizzazione: Basata su Team (Settimanali, Mensili, Annuali) e Facilitatori (non capi).

COME PARTECIPARE:
1. Partecipare a un cammino: Consultando la pagina 'Cammini'.
2. Unirsi a un team: Diventando volontario (Team Comunicazione, Logistica, Strategia).
3. Proporre un progetto: Idee per il territorio.

TONO DI VOCE:
- Amichevole, caldo, accogliente (dai del "tu").
- Sintetico ma esaustivo.
- Ispirato alla natura e al cammino.

Se ti chiedono info specifiche su eventi (date/luoghi) che non conosci, invita a visitare la pagina 'Cammini' o a scrivere a info@vci-veneto.it.
`;

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: 'Ciao! Benvenuto in VCI. Sono qui per aiutarti a scoprire i nostri cammini e come unirti alla comunità. Come posso esserti utile oggi?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  
  // Ref for auto-scrolling
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize Chat Session
  useEffect(() => {
    const initChat = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const chat = ai.chats.create({
          model: 'gemini-3-pro-preview',
          config: {
            systemInstruction: VCI_SYSTEM_INSTRUCTION,
            temperature: 0.7,
          },
        });
        setChatSession(chat);
      } catch (error) {
        console.error("Failed to initialize AI chat", error);
      }
    };
    initChat();
  }, []);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || !chatSession) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const resultStream = await chatSession.sendMessageStream({ message: userMessage });
      
      let fullResponse = "";
      setMessages(prev => [...prev, { role: 'model', text: "" }]);

      for await (const chunk of resultStream) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
          fullResponse += c.text;
          // Update the last message with the accumulating text
          setMessages(prev => {
            const newHistory = [...prev];
            newHistory[newHistory.length - 1] = { role: 'model', text: fullResponse };
            return newHistory;
          });
        }
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Mi dispiace, ho avuto un piccolo problema di connessione. Riprova tra un attimo!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${
          isOpen ? 'bg-gray-800 rotate-90' : 'bg-vci-green hover:bg-vci-lightGreen'
        }`}
        aria-label="Chat Assistant"
      >
        {isOpen ? <X className="text-white" /> : <MessageCircle className="text-white" />}
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-24 right-6 w-[90vw] md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col transition-all duration-300 origin-bottom-right z-50 overflow-hidden ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10 pointer-events-none'
        }`}
        style={{ maxHeight: 'calc(100vh - 120px)', height: '500px' }}
      >
        {/* Header */}
        <div className="bg-vci-green p-4 flex items-center gap-3 shadow-md">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Sparkles className="text-vci-sand w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-white text-lg leading-tight">Assistente VCI</h3>
            <p className="text-vci-sand text-xs opacity-90">Sempre in cammino con te</p>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-vci-beige/30">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${
                  msg.role === 'user' 
                    ? 'bg-vci-green text-white rounded-tr-none' 
                    : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm">
                <Loader2 className="w-5 h-5 text-vci-green animate-spin" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Chiedi qualcosa..."
            className="flex-grow px-4 py-2 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-vci-green focus:ring-1 focus:ring-vci-green/50 transition-all text-sm"
          />
          <button 
            type="submit" 
            disabled={isLoading || !input.trim()}
            className="p-2 bg-vci-green text-white rounded-full hover:bg-vci-lightGreen disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </>
  );
};