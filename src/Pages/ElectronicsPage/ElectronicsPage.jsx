import React from 'react';
import { products } from '../../assets/HomePictures';
import Card from '../../components/Card';
import { FiFilter, FiSearch, FiChevronDown } from 'react-icons/fi';

const ElectronicsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header Section */}
      <section className="bg-white border-b border-gray-100 pt-12 pb-16">
        <div className="container-custom space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-black text-gray-900">All Electronics</h1>
              <p className="text-gray-500 font-medium">Showing {products.length} premium products</p>
            </div>
            
            {/* Search Bar */}
            <div className="relative max-w-md w-full">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all text-sm"
              />
            </div>
          </div>

          {/* Filters Bar */}
          <div className="flex flex-wrap items-center gap-4">
             <button className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-bold hover:bg-gray-800 transition-colors">
                <FiFilter />
                <span>Filters</span>
             </button>
             <div className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 cursor-pointer hover:border-blue-600 transition-colors">
                <span>Category: All</span>
                <FiChevronDown />
             </div>
             <div className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 cursor-pointer hover:border-blue-600 transition-colors ml-auto text-blue-600">
                <span>Sort by: Newest</span>
                <FiChevronDown />
             </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container-custom mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id}
              title={product.name}
              price={product.price}
              image={product.image}
              badge="Stock Available"
              description="High-performance electronic device designed for the modern lifestyle."
              onAddToCart={() => alert(`Added ${product.name} to cart!`)}
            />
          ))}
        </div>

        {/* Pagination Dummy */}
        <div className="mt-20 flex justify-center items-center gap-3">
            {[1, 2, 3, "...", 12].map((p, i) => (
                <button 
                    key={i} 
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-all ${
                        p === 1 ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-500 hover:bg-blue-50'
                    }`}
                >
                    {p}
                </button>
            ))}
        </div>
      </section>
    </div>
  );
};

export default ElectronicsPage;
