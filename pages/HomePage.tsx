
import React from 'react';
import { Link } from 'react-router-dom';
// Header is now part of MainLayout, so not imported here directly for rendering
import { PromotionItem, StoreItem, CouponItem } from '../types';
// import { RoutePaths, APP_NAME } from '../constants';

const mockPromotions: PromotionItem[] = [
  { id: 'p1', name: 'Promoção Especial TV', imageUrl: 'https://picsum.photos/seed/promo1/300/200', discount: '30% OFF' },
  { id: 'p2', name: 'Celulares em Oferta', imageUrl: 'https://picsum.photos/seed/promo2/300/200' },
  { id: 'p3', name: 'Eletrodomésticos', imageUrl: 'https://picsum.photos/seed/promo3/300/200', discount: 'Até 50%' },
  { id: 'p4', name: 'Moda Verão', imageUrl: 'https://picsum.photos/seed/promo4/300/200' },
];

const mockStores: StoreItem[] = [
  { id: 's1', name: 'Loja do Zé', imageUrl: 'https://picsum.photos/seed/store1/150/100', distance: '500m' },
  { id: 's2', name: 'Mercado Central', imageUrl: 'https://picsum.photos/seed/store2/150/100', distance: '1.2km' },
  { id: 's3', name: 'Magazine Top', imageUrl: 'https://picsum.photos/seed/store3/150/100', distance: '2km' },
  { id: 's4', name: 'Padaria Delícia', imageUrl: 'https://picsum.photos/seed/store4/150/100', distance: '800m' },
];

const mockCoupons: CouponItem[] = [
  { id: 'c1', title: 'R$20 OFF em Compras', description: 'Acima de R$100 no Supermercado X', imageUrl: 'https://picsum.photos/seed/coupon1/100/100' },
  { id: 'c2', title: 'Frete Grátis', description: 'Para eletrônicos selecionados', imageUrl: 'https://picsum.photos/seed/coupon2/100/100' },
  { id: 'c3', title: '15% Pizzaria Bella', description: 'Em qualquer pizza grande', imageUrl: 'https://picsum.photos/seed/coupon3/100/100' },
];

interface SectionProps {
  title: string;
  children: React.ReactNode;
  viewAllLink?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, viewAllLink }) => (
  <section className="mb-8">
    <div className="flex justify-between items-center mb-4 px-4 sm:px-0">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">{title}</h2>
      {viewAllLink && (
        <Link to={viewAllLink} className="text-sm text-violet-600 hover:text-violet-800 font-medium">
          Ver todas
        </Link>
      )}
    </div>
    {children}
  </section>
);

const PromotionCard: React.FC<{ item: PromotionItem }> = ({ item }) => (
  <div className="flex-shrink-0 w-72 sm:w-80 mr-4 bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
    <img src={item.imageUrl} alt={item.name} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="font-semibold text-gray-800 truncate">{item.name}</h3>
      {item.discount && <p className="text-sm text-red-600 font-bold">{item.discount}</p>}
    </div>
  </div>
);

const StoreCard: React.FC<{ item: StoreItem }> = ({ item }) => (
  <div className="flex-shrink-0 w-40 sm:w-48 mr-4 bg-white rounded-lg shadow-md overflow-hidden text-center p-3 hover:shadow-xl transition-shadow">
    <img src={item.imageUrl} alt={item.name} className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full mx-auto mb-2 border-2 border-violet-200" />
    <h3 className="text-sm font-medium text-gray-700 truncate">{item.name}</h3>
    {item.distance && <p className="text-xs text-gray-500">{item.distance}</p>}
  </div>
);

const CouponCard: React.FC<{ item: CouponItem }> = ({ item }) => (
 <div className="bg-white rounded-lg shadow-lg p-4 flex items-start space-x-3 hover:shadow-xl transition-shadow duration-200 border border-violet-100">
    <img src={item.imageUrl} alt={item.title} className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md flex-shrink-0" />
    <div className="flex-grow">
      <h3 className="font-semibold text-violet-700 text-sm sm:text-base">{item.title}</h3>
      <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{item.description}</p>
      <button className="mt-2 text-xs bg-yellow-400 hover:bg-yellow-500 text-violet-800 font-semibold py-1 px-3 rounded-full transition-colors">
        Pegar Cupom
      </button>
    </div>
  </div>
);


export const HomePage: React.FC = () => {
  return (
    // The min-h-screen and bg-gray-100 are now handled by MainLayout
    // Header is also handled by MainLayout
    <div className="py-6 container mx-auto"> {/* container for better layout on larger screens */}
      {/* Banner "Promoções do dia" */}
      <Section title="Promoções do Dia" viewAllLink="#">
        <div className="px-4 sm:px-0 overflow-x-auto pb-4 flex">
          {mockPromotions.map(promo => <PromotionCard key={promo.id} item={promo} />)}
        </div>
      </Section>

      {/* Lojas próximas de você */}
      <Section title="Lojas Próximas de Você" viewAllLink="#">
        <div className="px-4 sm:px-0 overflow-x-auto pb-4 flex">
          {mockStores.map(store => <StoreCard key={store.id} item={store} />)}
        </div>
      </Section>

      {/* Cupons disponíveis */}
      <Section title="Cupons Disponíveis" viewAllLink="#">
        <div className="px-4 sm:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockCoupons.map(coupon => <CouponCard key={coupon.id} item={coupon} />)}
        </div>
      </Section>
    </div>
    // Footer removed, main navigation is now via BottomNavigationBar
    // Logout functionality will be on ProfilePage
  );
};