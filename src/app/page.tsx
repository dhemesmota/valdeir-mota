"use client";

import {
  Battery,
  Car,
  CheckCircle,
  MessageCircle,
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f5f8]">
      <div className="w-[370px] bg-white rounded-2xl border-2 border-blue-500 shadow-xl p-6 flex flex-col items-center relative">
        {/* Ícone topo */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md">
          <Wrench
            className="w-10 h-10 text-blue-300 drop-shadow"
            style={{ filter: "drop-shadow(0 2px 8px #a5b4fc)" }}
          />
        </div>
        {/* Título */}
        <div className="mt-8 mb-2 text-center">
          <h1
            className="text-2xl font-extrabold text-blue-600 leading-tight mb-1"
            style={{ textShadow: "0 2px 8px #e0e7ff" }}
          >
            SEU CELULAR
            <br />
            QUEBROU?
          </h1>
          <p className="text-gray-500 text-sm font-medium">
            Técnico especializado em manutenção
          </p>
        </div>
        {/* Lista de serviços */}
        <div className="w-full flex flex-col gap-3 my-4">
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 text-gray-700 text-base">
            <Wrench className="w-5 h-5 text-blue-500" />
            Troca de tela
          </div>
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 text-gray-700 text-base">
            <Battery className="w-5 h-5 text-green-500" />
            Troca de bateria
          </div>
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 text-gray-700 text-base">
            <Zap className="w-5 h-5 text-orange-500" />
            Troca de conector de carga
          </div>
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 text-gray-700 text-base">
            <Smartphone className="w-5 h-5 text-purple-400" />
            Conserto geral de celulares
          </div>
        </div>
        {/* Botão verde */}
        <button
          onClick={handleWhatsAppClick}
          className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg shadow transition mb-3 text-base"
        >
          <Car className="w-5 h-5 mr-1" />
          BUSCO E ENTREGO EM CASA!
        </button>
        {/* Telefone e nome */}
        <div className="w-full text-center border border-blue-300 rounded-xl py-3 mb-2 mt-1">
          <a
            href="tel:+553899188516"
            className="block text-blue-600 text-xl font-bold hover:underline"
          >
            (38) 9918-8516
          </a>
          <div className="text-gray-800 text-lg font-bold tracking-wide mt-1">
            VALDEIR MOTA
          </div>
        </div>
        {/* Rodapé */}
        <div className="w-full flex flex-col items-center gap-1 mt-2">
          <div className="flex items-center text-xs text-gray-500">
            <MessageCircle className="w-4 h-4 mr-1 text-gray-400" />
            Orçamento sem compromisso
          </div>
          <div className="flex items-center text-xs text-green-600 font-semibold">
            <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
            Os melhores preços da cidade!
          </div>
        </div>
      </div>
    </div>
  );
}
