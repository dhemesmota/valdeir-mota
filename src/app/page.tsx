"use client";

import { motion } from "framer-motion";
import {
  Battery,
  Car,
  Clock,
  MessageCircle,
  Phone,
  Settings,
  Shield,
  Smartphone,
  Wrench,
  Zap,
} from "lucide-react";

export default function Home() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "553899188516";
    const message =
      "Olá! Gostaria de fazer um orçamento para conserto de celular.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handlePhoneClick = () => {
    window.open("tel:+553899188516", "_self");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md"
      >
        <div className="bg-white rounded-3xl p-6 shadow-2xl border-2 border-blue-500 overflow-hidden relative">
          {/* Efeito de brilho */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/20 to-transparent animate-pulse"></div>

          {/* Header */}
          <div className="text-center mb-6 relative z-10">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex justify-center mb-4"
            >
              <div className="bg-blue-500 p-4 rounded-full shadow-lg">
                <Smartphone className="w-12 h-12 text-white" />
              </div>
            </motion.div>
            <h1 className="text-3xl font-bold text-blue-600 mb-1 drop-shadow-sm">
              SEU CELULAR
            </h1>
            <h1 className="text-3xl font-bold text-blue-600 mb-2 drop-shadow-sm">
              QUEBROU?
            </h1>
            <p className="text-sm text-gray-600">
              Técnico especializado em manutenção
            </p>
          </div>

          {/* Serviços */}
          <div className="mb-6 space-y-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <Settings className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-sm font-medium">Troca de tela</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <Battery className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-sm font-medium">Troca de bateria</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <Zap className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-sm font-medium">
                Troca de conector de carga
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <Wrench className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-sm font-medium">
                Conserto geral de celulares
              </span>
            </motion.div>
          </div>

          {/* Destaque */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-2xl mb-6 text-center shadow-lg"
          >
            <div className="flex items-center justify-center text-white font-bold text-lg">
              <Car className="w-6 h-6 mr-2" />
              BUSCO E ENTREGO EM CASA!
            </div>
          </motion.div>

          {/* Informações de contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-2xl border border-blue-500 mb-4 shadow-sm"
          >
            <button
              onClick={handlePhoneClick}
              className="text-2xl font-bold text-blue-600 mb-2 hover:text-blue-700 transition-colors flex items-center justify-center mx-auto"
            >
              <Phone className="w-6 h-6 mr-2" />
              (38) 9918-8516
            </button>
            <div className="text-xl font-bold text-gray-800 mb-3 tracking-wide">
              VALDEIR MOTA
            </div>
            <div className="flex items-center justify-center text-sm text-gray-600">
              <Clock className="w-4 h-4 mr-1" />
              Atendimento rápido e eficiente
            </div>
          </motion.div>

          {/* Botão WhatsApp */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            onClick={handleWhatsAppClick}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Falar no WhatsApp</span>
          </motion.button>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-center mt-6 text-xs text-gray-600"
          >
            <div className="mb-1 flex items-center justify-center">
              <MessageCircle className="w-3 h-3 mr-1" />
              Orçamento sem compromisso
            </div>
            <div className="flex items-center justify-center">
              <Shield className="w-3 h-3 mr-1" />
              Os melhores preços da cidade!
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
