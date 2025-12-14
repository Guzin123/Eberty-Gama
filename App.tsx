import React from 'react';
import { MapPin, Instagram, ChevronRight, Check } from 'lucide-react';
import { CONTACT_INFO, IMAGES, FEATURES, STEPS } from './constants';
import Button from './components/Button';
import Gallery from './components/Gallery';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full bg-primary text-white overflow-hidden pb-12 pt-8 lg:pt-0 lg:pb-0 lg:min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary/90 z-10 lg:bg-gradient-to-r lg:from-primary lg:via-primary lg:to-transparent"></div>
        
        {/* Background Image for Mobile/Tablet - blurred slightly to make text pop */}
        <div className="absolute inset-0 lg:hidden">
            <img 
              src={IMAGES.hero} 
              alt="Dr. Eberty Gama" 
              className="w-full h-full object-cover object-top opacity-40" 
            />
        </div>

        <div className="container max-w-6xl mx-auto px-4 relative z-20 grid lg:grid-cols-2 gap-8 items-center h-full">
          <div className="space-y-6 text-center lg:text-left pt-20 lg:pt-0">
            <div className="inline-block bg-accent/20 border border-accent/40 rounded-full px-4 py-1 mb-2 backdrop-blur-sm">
                <span className="text-accent font-semibold tracking-wider text-xs md:text-sm uppercase">Cirurgião Dentista</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              Eu sou <span className="text-accent">Eberty Gama</span>, seu dentista na Bahia.
            </h1>
            
            <p className="text-gray-200 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 font-light">
              Especialista em devolver a sua confiança através da Reabilitação Oral e Lentes em Resina. Sorria sem medo novamente.
            </p>

            <div className="pt-4">
              <Button />
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-gray-400 pt-4">
               {CONTACT_INFO.locations.map((loc, i) => (
                 <div key={i} className="flex items-center gap-1">
                   <MapPin className="w-4 h-4 text-accent" />
                   {loc}
                 </div>
               ))}
            </div>
          </div>

          {/* Desktop Hero Image */}
          <div className="hidden lg:block h-full relative">
            <img 
              src={IMAGES.hero} 
              alt="Dr. Eberty Gama" 
              className="absolute bottom-0 right-0 max-h-[90vh] object-contain drop-shadow-2xl z-10"
            />
          </div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 bg-accent/20 rounded-2xl rotate-3"></div>
            <img 
              src={IMAGES.about} 
              alt="Dr. Eberty atendendo" 
              className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/5]"
            />
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
              Muito prazer, eu sou o Dr. Eberty
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full"></div>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              Minha missão não é apenas tratar dentes, mas transformar vidas através do sorriso. 
              Como especialista em Reabilitação Oral, entendo que cada paciente traz uma história e um desejo único.
            </p>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              Trabalho com foco total em estética e função, utilizando técnicas modernas como as 
              Lentes em Resina para entregar resultados naturais e duradouros.
            </p>

            <ul className="space-y-3 pt-4">
              {CONTACT_INFO.specialties.map((spec, i) => (
                <li key={i} className="flex items-center gap-3 text-secondary font-medium">
                  <div className="bg-green-100 p-1 rounded-full text-green-600">
                    <Check size={16} />
                  </div>
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. GALERIA (Resultados Reais) */}
      <Gallery />

      {/* 4. POR QUE CONFIAR (Features) */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
              Por que agendar comigo?
            </h2>
            <p className="text-gray-500 mt-2">Diferenciais que garantem sua segurança e satisfação</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-16 px-4 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10 space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            Não deixe para depois o sorriso que você merece hoje.
          </h2>
          <p className="text-gray-300 text-lg">
            A primeira consulta é 100% gratuita para avaliarmos o seu caso com calma e atenção.
          </p>
          <Button />
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-12">
            Como funciona a Primeira Consulta
          </h2>
          
          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>

            <div className="space-y-12">
              {STEPS.map((step, idx) => (
                <div key={idx} className={`flex flex-col md:flex-row gap-6 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 text-center md:text-right">
                     {/* Content wrapper for alignment logic based on odd/even */}
                     <div className={idx % 2 !== 0 ? 'md:text-left' : 'md:text-right'}>
                        <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                     </div>
                  </div>
                  
                  <div className="relative z-10 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xl shadow-lg ring-4 ring-white">
                    {idx + 1}
                  </div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
             <span className="inline-block bg-green-50 text-green-700 px-4 py-2 rounded-lg font-medium text-sm">
                ✨ Gratuita e sem compromisso
             </span>
          </div>
        </div>
      </section>

      {/* 7. MAIS PROVAS (Extra Expert Photo) */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
             <div className="bg-white rounded-3xl overflow-hidden shadow-xl md:flex">
                <div className="md:w-1/2">
                   <img 
                    src={IMAGES.extra} 
                    alt="Dr Eberty nos bastidores" 
                    className="w-full h-full object-cover min-h-[300px]"
                   />
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-slate-900 text-white">
                    <h3 className="text-2xl font-serif font-bold mb-4">
                        Tecnologia e Conforto
                    </h3>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                        Meu consultório está preparado para oferecer o máximo de conforto durante o seu tratamento. 
                        Acredito que ir ao dentista deve ser uma experiência tranquila e positiva.
                    </p>
                    <div>
                        <a 
                            href={CONTACT_INFO.whatsappLink} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-accent font-semibold hover:text-white transition-colors"
                        >
                            Falar diretamente comigo <ChevronRight className="ml-1 w-4 h-4" />
                        </a>
                    </div>
                </div>
             </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-20 px-4 bg-white text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">
            Pronto para transformar seu sorriso?
          </h2>
          <p className="text-xl text-gray-600">
            Clique no botão abaixo e garanta sua avaliação gratuita agora mesmo.
          </p>
          <div className="pt-4">
             <Button fullWidth={false} className="scale-110" />
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-white font-serif text-xl font-bold mb-2">{CONTACT_INFO.name}</h4>
            <p className="text-sm">{CONTACT_INFO.profession}</p>
            <p className="text-sm mt-1">CRO/BA Regularizado</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4">
                <a href={CONTACT_INFO.instagramLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <Instagram />
                </a>
            </div>
            <div className="flex flex-col text-sm text-center md:text-right">
                {CONTACT_INFO.locations.map((loc, i) => (
                    <span key={i}>{loc}</span>
                ))}
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-600">
            &copy; {new Date().getFullYear()} {CONTACT_INFO.name}. Todos os direitos reservados.
        </div>
      </footer>

      {/* Sticky Mobile CTA - Appears only on mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 lg:hidden z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <Button text="Agendar Consulta Grátis" subtext="" fullWidth={true} className="py-3 text-sm" />
      </div>
      <div className="h-20 lg:h-0"></div> {/* Spacer for sticky footer */}
    </div>
  );
};

export default App;