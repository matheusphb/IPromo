import React from 'react';
import { Link } from 'react-router-dom';
import { PromotionItem, CouponItem } from '../types'; // Assuming types can be reused
import { QrCodeIcon } from '../components/icons/QrCodeIcon';
import { ChevronLeftIcon } from '../components/icons/ChevronLeftIcon';

// Mock data for this specific supermarket view
const supermarketName = "Supermercado Exemplo";

const mockSupermarketPromotions: PromotionItem[] = [
  { id: 'sp1', name: 'Arroz Parboilizado Tipo 1 - 5kg', imageUrl: '/images/promo_arroz.jpeg', discount: 'Leve 3 Pague 2' },
  { id: 'sp2', name: 'Refrigerante Guaraná 2L', imageUrl: '/images/promo_refri.jpeg', discount: 'R$ 5,99' },
  { id: 'sp3', name: 'Sabão em Pó Limpeza Total 1kg', imageUrl: '/images/promo_sabao.jpeg', discount: '20% OFF' },
  { id: 'sp4', name: 'Oferta de Hortifruti do Dia', imageUrl: '/images/promo_horti.jpeg' },
];

const mockSupermarketCoupons: CouponItem[] = [
  { id: 'sc1', title: 'R$10 Desconto Carnes', description: 'Acima de R$50 em carnes bovinas.', imageUrl: '/images/coupon_carne.jpeg' },
  { id: 'sc2', title: 'Pão Francês Grátis', description: 'Na compra de 1kg de mortadela.', imageUrl: '/images/coupon_pao.jpeg' },
];

// Re-using card components from HomePage for consistency, ideally they would be more generic
const PromotionCard: React.FC<{ item: PromotionItem }> = ({ item }) => (
  <div className="flex-shrink-0 w-64 sm:w-72 mr-4 bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
    <img src={item.imageUrl} alt={item.name} className="w-full h-36 object-cover" />
    <div className="p-3">
      <h3 className="font-semibold text-gray-800 truncate text-sm">{item.name}</h3>
      {item.discount && <p className="text-sm text-red-600 font-bold">{item.discount}</p>}
       <button className="mt-2 text-xs bg-violet-500 hover:bg-violet-600 text-white font-semibold py-1 px-3 rounded-full transition-colors w-full">
        Ver Detalhes
      </button>
    </div>
  </div>
);

const CouponCard: React.FC<{ item: CouponItem }> = ({ item }) => (
 <div className="bg-white rounded-lg shadow-lg p-3 flex items-start space-x-3 hover:shadow-xl transition-shadow duration-200 border border-violet-100">
    <img src={item.imageUrl} alt={item.title} className="w-16 h-16 object-cover rounded-md flex-shrink-0" />
    <div className="flex-grow">
      <h3 className="font-semibold text-violet-700 text-sm">{item.title}</h3>
      <p className="text-xs text-gray-600 line-clamp-2">{item.description}</p>
      <button className="mt-2 text-xs bg-yellow-400 hover:bg-yellow-500 text-violet-800 font-semibold py-1 px-3 rounded-full transition-colors">
        Usar Cupom
      </button>
    </div>
  </div>
);

interface SectionProps {
  title: string;
  children: React.ReactNode;
  viewAllLink?: string; // Optional link for "view all"
}

const Section: React.FC<SectionProps> = ({ title, children, viewAllLink }) => (
  <section className="mb-6">
    <div className="flex justify-between items-center mb-3">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-700">{title}</h2>
      {viewAllLink && (
        <Link to={viewAllLink} className="text-xs text-violet-600 hover:text-violet-800 font-medium">
          Ver todas
        </Link>
      )}
    </div>
    {children}
  </section>
);


export const SupermarketModePage: React.FC = () => {
  const handleScanQRCode = () => {
    // Placeholder for QR code scanning functionality
    alert('Funcionalidade de Scan QR Code Ativada (Simulado)');
  };

  return (
    <div className="p-4 pb-20 container mx-auto bg-gray-50"> {/* Added bg-gray-50 for slight differentiation */}
      <div className="mb-6 text-left">
        <h1 className="text-2xl sm:text-3xl font-bold text-violet-700">Bem-vindo ao {supermarketName}!</h1>
        <p className="text-gray-600 text-sm sm:text-base">Seu assistente de compras inteligente na loja.</p>
      </div>

      <div className="mb-6">
        <button
          onClick={handleScanQRCode}
          className="w-full flex items-center justify-center py-3.5 px-4 bg-yellow-400 hover:bg-yellow-500 text-violet-800 font-bold rounded-lg shadow-md transition-colors duration-200 text-base sm:text-lg"
          aria-label="Escanear Produto ou QR Code"
        >
          <QrCodeIcon className="w-6 h-6 mr-3" />
          Escanear Produto / QR Code
        </button>
      </div>

      <Section title="Ofertas Especiais de Hoje">
        <div className="overflow-x-auto pb-4 flex -mx-2 px-2"> {/* Negative margin to allow full bleed cards */}
          {mockSupermarketPromotions.map(promo => <PromotionCard key={promo.id} item={promo} />)}
        </div>
      </Section>

      <Section title="Seus Cupons Ativos Aqui" viewAllLink="#">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {mockSupermarketCoupons.map(coupon => <CouponCard key={coupon.id} item={coupon} />)}
           {mockSupermarketCoupons.length === 0 && <p className="text-sm text-gray-500">Você não possui cupons ativos para esta loja no momento.</p>}
        </div>
      </Section>
      
      <Section title="Lista de Compras Inteligente">
        <div className="bg-white p-4 rounded-lg shadow text-center text-gray-500">
          <p className="font-semibold mb-2">Em breve!</p>
          <p className="text-sm">Crie sua lista e veja ofertas dos seus produtos favoritos.</p>
        </div>
      </Section>

       <Section title="Localizador de Produtos">
        <div className="bg-white p-4 rounded-lg shadow text-center text-gray-500">
           <p className="font-semibold mb-2">Em breve!</p>
          <p className="text-sm">Não sabe onde encontrar um item? Te ajudaremos!</p>
        </div>
      </Section>

    </div>
  );
};