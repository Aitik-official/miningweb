"use client";

import React from 'react';
import Header from '@/components/layout/Header';
import { motion } from '@/lib/motion';
import { BookOpen, Calendar, ChevronRight, Layout, Star, TrendingUp, Zap, Pickaxe, HardHat, FileText, Download } from 'lucide-react';
import Link from 'next/link';

const miningEditions = [
  {
    id: '1',
    month: 'Q4 2026',
    title: 'The Autonomous Haulage Revolution',
    subtitle: 'Inside the 400-ton battery-electric and hydrogen haulers transforming Pilbara and Atacama.',
    image: 'https://images.unsplash.com/photo-1523848309072-c199db53f137?q=80&w=2070&auto=format&fit=crop',
    featured: true,
  },
  {
    id: '2',
    month: 'Q3 2026',
    title: 'Deep Vein Geotechnical Breakthroughs',
    subtitle: 'Robotic seismic mapping and sub-level caving in ultra-deep copper and gold mines.',
    image: 'https://images.unsplash.com/photo-1709489662983-3674d790b224?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '3',
    month: 'Q2 2026',
    title: 'Critical Minerals & The Battery Supply Chain',
    subtitle: 'Geopolitical race for lithium, cobalt, nickel, and heavy rare earth deposits.',
    image: 'https://images.unsplash.com/photo-1680463990599-9d318aaecf71?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '4',
    month: 'Q1 2026',
    title: 'Zero-Emission Mineral Processing & ESG',
    subtitle: 'Electrified beneficiation, dry-stack tailings, and solar-powered extraction sites.',
    image: 'https://images.unsplash.com/photo-1559774944-4e6c033af2fb?q=80&w=2070&auto=format&fit=crop',
  },
];

export default function MagazinePage() {
  return (
    <div className="bg-white min-h-screen pb-32">
      <Header />
      
      {/* Hero Banner */}
      <section className="pt-[160px] px-8 max-w-[1440px] mx-auto">
         <div className="flex flex-col xl:flex-row items-end justify-between gap-10 mb-12 pb-12 border-b border-gray-200">
            <div className="max-w-3xl">
               <span className="text-tagdiv-gold text-[12px] font-black uppercase tracking-[0.4em] mb-4 block">Mining Quarterly Digital Edition</span>
               <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black text-dark tracking-tighter leading-none mb-6">Technical <span className="text-tagdiv-gold underline decoration-tagdiv-gold/30">Journals.</span></h1>
               <p className="text-gray-600 font-medium text-base sm:text-lg leading-relaxed">In-depth quarterly engineering reports, mineral assay breakdowns, and global machinery teardowns curated for mining executives, geotechnical teams, and field engineers.</p>
            </div>
            
            <div className="flex items-center gap-4 w-full xl:w-auto">
               <button className="flex-1 xl:w-[240px] py-4 bg-dark text-white rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all hover:bg-tagdiv-gold shadow-md active:scale-95 leading-none">
                  <BookOpen size={18} /> View Current Issue
               </button>
               <button className="p-4 bg-tagdiv-bg text-gray-500 hover:text-tagdiv-gold rounded-xl transition-all border border-tagdiv-border">
                  <Download size={20} />
               </button>
            </div>
         </div>
      </section>

      {/* Hero Issue */}
      <section className="px-8 max-w-[1440px] mx-auto mb-20">
         <div className="relative group rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-video shadow-2xl bg-dark">
            <img src={miningEditions[0].image} className="w-full h-full object-cover transition-transform duration-[12s] ease-linear group-hover:scale-105 opacity-70" alt="Issue Cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent"></div>
            
            <div className="absolute inset-0 p-8 sm:p-16 flex flex-col justify-end">
               <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                  <span className="px-4 py-1.5 bg-tagdiv-gold text-white text-[11px] font-black uppercase tracking-widest rounded-sm shadow-md w-fit">Current Technical Issue</span>
                  <div className="flex items-center gap-2 text-white/70 text-xs font-black uppercase tracking-wider">
                     <Calendar size={16} className="text-tagdiv-gold" /> {miningEditions[0].month} Journal
                  </div>
               </div>
               <h2 className="text-3xl sm:text-6xl font-black text-white leading-tight tracking-tight mb-4 max-w-4xl">{miningEditions[0].title}</h2>
               <p className="text-gray-300 text-sm sm:text-base max-w-2xl mb-8 leading-relaxed font-medium">{miningEditions[0].subtitle}</p>
               <div className="flex flex-wrap gap-6 items-center">
                  <button className="px-8 py-4 bg-white text-dark font-black uppercase tracking-widest text-xs rounded-xl hover:bg-tagdiv-gold hover:text-white transition-all shadow-xl active:scale-95">Read Digital Edition</button>
                  <button className="text-white hover:text-tagdiv-gold font-black uppercase tracking-widest text-xs tracking-wider flex items-center gap-2 transition-colors">Download Technical PDF (48MB) <ChevronRight size={16} /></button>
               </div>
            </div>
         </div>
      </section>

      {/* Archive Grid */}
      <section className="px-8 max-w-[1440px] mx-auto">
         <div className="flex items-center justify-between mb-10 px-2">
            <div className="flex items-center gap-3">
               <div className="w-3 h-3 bg-tagdiv-gold"></div>
               <h3 className="text-2xl sm:text-3xl font-black text-dark tracking-tight">Quarterly Archive Editions</h3>
            </div>
            <button className="text-xs font-black uppercase tracking-widest text-tagdiv-gold hover:underline flex items-center gap-1">All Volumes <ChevronRight size={14} /></button>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {miningEditions.slice(1).map((ed, i) => (
               <motion.div 
                 key={ed.id} 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="group cursor-pointer flex flex-col h-full bg-tagdiv-bg rounded-2xl p-6 border border-tagdiv-border hover:shadow-xl transition-all"
               >
                  <div className="aspect-[16/10] relative rounded-xl overflow-hidden mb-6 bg-gray-200">
                     <img src={ed.image} alt={ed.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                     <div className="absolute top-3 left-3 bg-dark/80 text-tagdiv-gold text-[10px] font-black uppercase px-2.5 py-1 rounded-sm">
                        {ed.month}
                     </div>
                  </div>
                  <div className="flex flex-col flex-1">
                     <h4 className="text-xl font-black text-dark tracking-tight mb-3 leading-snug group-hover:text-tagdiv-gold transition-colors">{ed.title}</h4>
                     <p className="text-gray-500 text-xs font-medium leading-relaxed mb-6 flex-1">{ed.subtitle}</p>
                     <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <span className="text-xs font-bold text-gray-500">Vol. 42 / Issue {ed.id}</span>
                        <button className="px-4 py-2 bg-white text-dark text-[10px] font-black uppercase tracking-wider rounded-lg border border-gray-200 group-hover:bg-tagdiv-gold group-hover:text-white transition-all">Read Journal</button>
                     </div>
                  </div>
               </motion.div>
            ))}
         </div>
      </section>
    </div>
  );
}

