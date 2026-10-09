"use client";

import React from 'react';
import Header from '@/components/layout/Header';
import { motion } from '@/lib/motion';
import { MapPin, Phone, Mail, Send, HardHat, Pickaxe, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pb-32">
      <Header />
      
      {/* Hero Header */}
      <section className="pt-[160px] px-8 max-w-[1440px] mx-auto text-center space-y-6">
         <motion.span 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-tagdiv-gold text-[12px] font-black uppercase tracking-[0.4em] block"
         >
           Global Mining Newsroom & Editorial
         </motion.span>
         <motion.h1 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="text-4xl sm:text-6xl md:text-7xl font-black text-dark tracking-tighter leading-none"
         >
           Contact Mining <span className="text-tagdiv-gold underline decoration-tagdiv-gold/30">Magazine.</span>
         </motion.h1>
         <motion.p 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4 }}
           className="text-gray-600 font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
         >
           Submit confidential exploration tips, geotechnical papers, press releases, or inquire about sponsored machinery benchmarks and media kits.
         </motion.p>
      </section>

      {/* Contact Grid */}
      <section className="py-20 px-8 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
         
         {/* Contact Form */}
         <div className="lg:col-span-7 bg-tagdiv-bg p-8 sm:p-12 rounded-3xl border border-tagdiv-border">
            <h2 className="text-2xl sm:text-3xl font-black text-dark mb-8 tracking-tight">Send a Newsroom Dispatch</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-[11px] font-black uppercase tracking-wider text-gray-500">Full Name</label>
                     <input type="text" placeholder="Dr. Johnathan Ward" className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-xl outline-none focus:border-tagdiv-gold text-sm font-semibold" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[11px] font-black uppercase tracking-wider text-gray-500">Corporate Email</label>
                     <input type="email" placeholder="j.ward@mining-corp.com" className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-xl outline-none focus:border-tagdiv-gold text-sm font-semibold" />
                  </div>
               </div>
               
               <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-wider text-gray-500">Inquiry Desk</label>
                  <select className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-xl outline-none focus:border-tagdiv-gold text-sm font-semibold">
                     <option value="story">Exploration & Discovery News Tip</option>
                     <option value="equipment">Heavy Machinery & Automation Review</option>
                     <option value="esg">Green Mining & ESG Case Study</option>
                     <option value="ads">Media Kit & Sponsored Advertising</option>
                     <option value="support">Subscription & Site License Support</option>
                  </select>
               </div>
               
               <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-wider text-gray-500">Message / Tip Details</label>
                  <textarea rows={5} placeholder="Provide details, basin location, drill assays, or inquiry specifics..." className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-xl outline-none focus:border-tagdiv-gold text-sm font-semibold resize-none"></textarea>
               </div>
               
               <button className="px-8 py-4 bg-tagdiv-gold text-white font-black uppercase tracking-widest text-xs rounded-xl flex items-center justify-center gap-3 hover:bg-dark transition-all shadow-md active:scale-95">
                  Send Dispatch <Send size={16} />
               </button>
            </form>
         </div>

         {/* Contact Info Sidebar */}
         <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
               <div className="flex gap-6 bg-tagdiv-bg p-6 rounded-2xl border border-tagdiv-border">
                  <div className="w-12 h-12 bg-amber-100 text-tagdiv-gold rounded-xl flex items-center justify-center shrink-0"><MapPin size={22} /></div>
                  <div>
                     <h4 className="text-base font-black text-dark">Global Newsroom</h4>
                     <p className="text-gray-500 text-xs font-semibold leading-relaxed mt-1">Mining Journal Tower, St Georges Terrace, Perth WA 6000, Australia</p>
                  </div>
               </div>
               <div className="flex gap-6 bg-tagdiv-bg p-6 rounded-2xl border border-tagdiv-border">
                  <div className="w-12 h-12 bg-blue-100 text-tagdiv-blue rounded-xl flex items-center justify-center shrink-0"><Phone size={22} /></div>
                  <div>
                     <h4 className="text-base font-black text-dark">News Desk Hotline</h4>
                     <p className="text-gray-500 text-xs font-semibold leading-relaxed mt-1">+61 (8) 9200-4500 <br />Mon-Fri 08:00 - 18:00 AWST</p>
                  </div>
               </div>
               <div className="flex gap-6 bg-tagdiv-bg p-6 rounded-2xl border border-tagdiv-border">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center shrink-0"><Mail size={22} /></div>
                  <div>
                     <h4 className="text-base font-black text-dark">Editorial Inbox</h4>
                     <p className="text-gray-500 text-xs font-semibold leading-relaxed mt-1">editor@mining-magazine.com <br />press@mining-magazine.com</p>
                  </div>
               </div>
            </div>

            <div className="bg-dark rounded-3xl p-8 text-white relative overflow-hidden">
               <div className="relative z-10 space-y-4">
                  <span className="bg-tagdiv-gold text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-sm inline-block">Industry Careers</span>
                  <h3 className="text-xl font-black leading-tight text-white">Join the Global Mining Editorial Team</h3>
                  <p className="text-white/70 text-xs font-medium leading-relaxed">We are actively seeking resource geologists, mining engineers, and commodity financial journalists.</p>
                  <Link href="/about" className="text-xs font-black uppercase tracking-wider text-tagdiv-gold flex items-center gap-2 hover:underline">Editorial Openings <ChevronRight size={14} /></Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}

