import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface ButtonProps {
  text?: string;
  subtext?: string;
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  text = "Agendar Primeira Consulta Gratuita", 
  subtext = "Resposta rápida • Sem compromisso",
  className = "",
  fullWidth = false
}) => {
  return (
    <div className={`flex flex-col items-center ${fullWidth ? 'w-full' : ''}`}>
      <a 
        href={CONTACT_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          flex items-center justify-center gap-2 
          bg-whatsapp hover:bg-green-600 transition-all duration-300
          text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1
          uppercase tracking-wide text-sm md:text-base
          ${fullWidth ? 'w-full' : 'w-auto'}
          ${className}
        `}
      >
        <MessageCircle className="w-6 h-6" />
        {text}
      </a>
      {subtext && (
        <span className="text-xs text-gray-500 mt-2 font-medium">
          {subtext}
        </span>
      )}
    </div>
  );
};

export default Button;