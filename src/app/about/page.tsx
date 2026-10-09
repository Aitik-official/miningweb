"use client";

import React from 'react';
import Header from '@/components/layout/Header';
import { motion } from '@/lib/motion';
import { Award, Globe, Heart, Shield, Users, Zap, Youtube, Twitter, Facebook, Instagram, Pickaxe, Compass, HardHat } from 'lucide-react';
import Link from 'next/link';

const leadershipTeam = [
  {
    name: 'Dr. Alistair Vance',
    role: 'Editor-in-Chief & Geologist',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Sarah Chen, P.Eng',
    role: 'Lead Automation & Robotics Analyst',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Marcus Thorne',
    role: 'Commodities & Critical Minerals Desk',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Elena Rostova',
    role: 'ESG & Decarbonization Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white pb-32">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-[160px] px-8 max-w-[1440px] mx-auto text-center">
         <motion.span 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-tagdiv-gold text-[12px] font-black uppercase tracking-[0.4em] mb-6 block"
         >
           Global Resource & Technology Authority
         </motion.span>
         <motion.h1 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="text-4xl sm:text-6xl md:text-7xl font-black text-dark tracking-tighter leading-[1.05] mb-12"
         >
           Mining Magazine: Pioneering Modern <span className="text-tagdiv-gold">Extraction & ESG.</span>
         </motion.h1>
         <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.4 }}
           className="relative aspect-video max-w-5xl mx-auto rounded-[32px] overflow-hidden shadow-2xl border-4 border-white"
         >
           <img src="https://images.unsplash.com/photo-1523848309072-c199db53f137?q=80&w=2070&auto=format&fit=crop" alt="Open-Pit Mining Operation" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent flex items-end p-8 sm:p-12">
              <div className="text-left">
                <span className="bg-tagdiv-gold text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-sm mb-3 inline-block">Global Field Bureau</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">Delivering Deep Technical Insight Across 6 Continents</h3>
              </div>
           </div>
         </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-8 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
         <div className="space-y-8">
            <h2 className="text-3xl sm:text-5xl font-black text-dark tracking-tighter leading-tight">Geotechnical Rigor, Powered by <span className="text-tagdiv-gold italic">Field Expertise.</span></h2>
            <p className="text-gray-600 font-medium text-base sm:text-lg leading-relaxed">Mining Magazine delivers comprehensive intelligence on critical minerals, heavy haulage electrification, autonomous drilling, underground safety, and zero-emission processing for industry leaders and geotechnical engineers.</p>
            <div className="pt-6 grid grid-cols-2 gap-8 border-t border-gray-100">
               <div>
                  <h4 className="text-3xl sm:text-4xl font-black text-tagdiv-gold mb-1">180K+</h4>
                  <p className="text-[11px] font-black uppercase tracking-wider text-gray-500">Industry Subscribers</p>
               </div>
               <div>
                  <h4 className="text-3xl sm:text-4xl font-black text-tagdiv-gold mb-1">45+</h4>
                  <p className="text-[11px] font-black uppercase tracking-wider text-gray-500">Active Mining Basins Covered</p>
               </div>
            </div>
         </div>
         <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6 mt-8">
               <div className="bg-tagdiv-bg p-8 rounded-2xl border border-tagdiv-border hover:shadow-xl hover:-translate-y-1 transition-all group">
                  <Shield size={28} className="text-tagdiv-gold mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-black text-dark mb-2">Technical Integrity</h3>
                  <p className="text-gray-500 text-xs font-semibold leading-relaxed">Peer-verified engineering reviews and factual mineral assays.</p>
               </div>
               <div className="bg-tagdiv-bg p-8 rounded-2xl border border-tagdiv-border hover:shadow-xl hover:-translate-y-1 transition-all group">
                  <Globe size={28} className="text-tagdiv-blue mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-black text-dark mb-2">Global Operations</h3>
                  <p className="text-gray-500 text-xs font-semibold leading-relaxed">From Pilbara iron ore to Chilean copper and Canadian lithium.</p>
               </div>
            </div>
            <div className="space-y-6">
               <div className="bg-tagdiv-bg p-8 rounded-2xl border border-tagdiv-border hover:shadow-xl hover:-translate-y-1 transition-all group">
                  <Zap size={28} className="text-emerald-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-black text-dark mb-2">Decarbonization</h3>
                  <p className="text-gray-500 text-xs font-semibold leading-relaxed">Tracking mine electrification and net-zero tailings tech.</p>
               </div>
               <div className="bg-tagdiv-bg p-8 rounded-2xl border border-tagdiv-border hover:shadow-xl hover:-translate-y-1 transition-all group">
                  <Award size={28} className="text-tagdiv-gold mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-black text-dark mb-2">Industry Leadership</h3>
                  <p className="text-gray-500 text-xs font-semibold leading-relaxed">The premier journal for mining executives and investors.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-dark rounded-3xl mx-4 sm:mx-8 px-8 sm:px-16 text-white overflow-hidden relative">
         <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <span className="text-tagdiv-gold text-xs font-black uppercase tracking-[0.3em] mb-3">Editorial Board</span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">Mining Editorial Directors</h2>
            <p className="text-white/60 text-sm sm:text-base font-medium leading-relaxed">Seasoned mining engineers, geologists, and market analysts guiding our global industrial coverage.</p>
         </div>
         
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {leadershipTeam.map((member) => (
               <div key={member.name} className="group cursor-pointer">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-5 border-2 border-white/10 group-hover:border-tagdiv-gold transition-all">
                     <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                  </div>
                  <h4 className="text-xl font-black mb-1 tracking-tight text-white">{member.name}</h4>
                  <p className="text-tagdiv-gold text-xs font-black uppercase tracking-wider">{member.role}</p>
               </div>
            ))}
         </div>
      </section>
    </div>
  );
}

