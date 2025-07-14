"use client";

import { motion } from "framer-motion";
import {
  Award,
  Battery,
  CheckCircle,
  Clock,
  Zap as Lightning,
  MapPin,
  MessageCircle,
  Phone,
  Settings,
  Shield,
  Smartphone,
  Star,
  Truck,
  Wrench,
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

  const services = [
    {
      icon: Settings,
      title: "Troca de Tela",
      description: "Telas originais e de qualidade",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Battery,
      title: "Troca de Bateria",
      description: "Baterias com garantia",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Lightning,
      title: "Conector de Carga",
      description: "Reparo rápido e eficiente",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Wrench,
      title: "Conserto Geral",
      description: "Todos os modelos de celular",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const features = [
    { icon: Clock, text: "Atendimento Rápido" },
    { icon: Shield, text: "Garantia de 90 Dias" },
    { icon: Star, text: "Melhores Preços" },
    { icon: CheckCircle, text: "Orçamento Grátis" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header com gradiente */}
      <div className="hero-gradient text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-float">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg">
              SEU CELULAR
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg">
              QUEBROU?
            </h2>
            <p className="text-xl md:text-2xl font-light opacity-90">
              Técnico especializado em manutenção de smartphones
            </p>
          </motion.div>
        </div>
      </div>

      {/* Card principal */}
      <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-effect rounded-3xl p-8 shadow-2xl drop-shadow-custom"
        >
          {/* Informações de contato destacadas */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-4 shadow-lg"
            >
              <Phone className="w-8 h-8 text-white" />
            </motion.div>
            <button
              onClick={handlePhoneClick}
              className="text-3xl md:text-4xl font-bold gradient-text mb-2 hover:scale-105 transition-transform"
            >
              (38) 9918-8516
            </button>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              VALDEIR MOTA
            </h3>
            <p className="text-gray-600 font-medium">
              Especialista em Conserto de Celulares
            </p>
          </div>

          {/* Serviços */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="service-card group"
              >
                <div
                  className={`icon-container bg-gradient-to-br ${service.color} mr-4 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Destaque especial */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="tech-gradient p-6 rounded-2xl mb-8 text-center text-white shadow-xl"
          >
            <div className="flex items-center justify-center mb-3">
              <Truck className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-bold">BUSCO E ENTREGO EM CASA!</h3>
            </div>
            <p className="text-lg opacity-90">Comodidade total para você</p>
          </motion.div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-2">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Botão WhatsApp */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            onClick={handleWhatsAppClick}
            className="btn-success w-full text-lg py-4 flex items-center justify-center space-x-3"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Falar no WhatsApp</span>
          </motion.button>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-center mt-8 pt-6 border-t border-gray-200"
          >
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-1" />
                <span>Profissional Certificado</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                <span>Atendimento Local</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decorativo */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div
          className="absolute top-0 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </div>
  );
}
