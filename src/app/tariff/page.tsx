"use client";

import React from 'react';
import Header from '@/components/layout/Header';
import { motion } from '@/lib/motion';
import { Check, ShieldCheck, Zap, Star, BookOpen, Clock, Download, Share2, HardHat, Pickaxe } from 'lucide-react';
import Link from 'next/link';

const tiers = [
  {
    name: 'Field Reader',
    price: 'Free',
    description: 'Essential daily headlines and mineral price snapshot dispatch.',
    features: ['Daily commodity price updates', 'Standard morning newsletter', 'Web access to breaking news', 'Field report summaries'],
    icon: Pickaxe,
    color: 'bg-gray-100 text-gray-700'
  },
  {
    name: 'Mining Executive',
    price: '$29.00',
    description: 'Deep technical reports, equipment reviews, and ESG intelligence.',
    features: ['Everything in Field Reader', 'Ad-free magazine reading', 'Quarterly Mining Digital Edition', 'Technical equipment benchmarking', 'Early access to Webinar panels', 'Critical metals market forecasts'],
    icon: Star,
    color: 'bg-tagdiv-gold text-white',
    popular: true
  },
  {
    name: 'Corporate Site License',
    price: '$99.00',
    description: 'Full team access, geological database, and global mining reports.',
    features: ['Everything in Executive', 'Team seats (up to 15 users)', 'Full technical archive access', 'Custom commodity data export', 'VIP invitations to Mining Summits', 'Geotechnical whitepaper downloads'],
    icon: HardHat,
    color: 'bg-dark text-white'
  }
];

export default function TariffPage() {
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
           Industrial Subscriptions & Intelligence
         </motion.span>
         <motion.h1 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="text-4xl sm:text-6xl md:text-7xl font-black text-dark tracking-tighter leading-none"
         >
           Choose Your Mining <span className="text-tagdiv-gold underline decoration-tagdiv-gold/30">Access Level.</span>
         </motion.h1>
         <motion.p 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4 }}
           className="text-gray-600 font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
         >
           Subscribe to Mining Magazine for independent technical journalism, deep geotechnical analysis, and global mineral market intelligence.
         </motion.p>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 px-8 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
         {tiers.map((tier, i) => (
           <motion.div 
             key={tier.name}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: i * 0.1 }}
             className={`relative p-8 sm:p-10 rounded-3xl flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] group ${tier.popular ? 'border-2 border-tagdiv-gold ring-4 ring-tagdiv-gold/10 bg-white' : 'border border-gray-200 bg-tagdiv-bg'}`}
           >
              {tier.popular && (
                <div className="absolute top-6 right-6 px-3 py-1 bg-tagdiv-gold text-white text-[10px] font-black uppercase tracking-widest rounded-sm shadow-md z-10">
                   Most Popular
                </div>
              )}
              
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 shadow-md ${tier.color}`}>
                 <tier.icon size={26} />
              </div>

              <h3 className="text-2xl font-black text-dark mb-2 tracking-tight">{tier.name}</h3>
              <div className="flex items-baseline gap-2 mb-4">
                 <span className="text-4xl font-black text-dark tracking-tighter">{tier.price}</span>
                 {tier.price !== 'Free' && <span className="text-gray-500 font-bold text-sm">/month</span>}
              </div>
              <p className="text-gray-500 font-medium text-xs leading-relaxed mb-8">{tier.description}</p>
              
              <div className="space-y-4 flex-1">
                 {tier.features.map(feat => (
                    <div key={feat} className="flex items-center gap-3 text-xs font-bold text-gray-700">
                       <Check size={16} className="text-tagdiv-gold shrink-0" />
                       <span>{feat}</span>
                    </div>
                 ))}
              </div>

              <button className={`w-full mt-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all shadow-md active:scale-95 ${tier.popular ? 'bg-tagdiv-gold text-white hover:bg-dark' : 'bg-white text-dark hover:bg-tagdiv-gold hover:text-white border border-gray-200'}`}>
                 Subscribe Now
              </button>
           </motion.div>
         ))}
      </section>

      {/* FAQ Mini Section */}
      <section className="py-16 px-8 max-w-[1440px] mx-auto text-center border-t border-gray-100">
         <h2 className="text-2xl sm:text-3xl font-black text-dark mb-12 tracking-tight">Frequently Asked Questions</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { q: 'Can I cancel anytime?', a: 'Yes, no long-term lock-in contracts.', icon: Clock },
              { q: 'Is there a print edition?', a: 'Corporate tier includes quarterly print delivery.', icon: BookOpen },
              { q: 'Team & Basin licenses?', a: 'Custom invoicing available for large mining operations.', icon: Share2 },
              { q: 'Offline technical PDFs?', a: 'Download comprehensive whitepapers and spec sheets.', icon: Download }
            ].map((faq, i) => (
              <div key={i} className="space-y-3 bg-tagdiv-bg p-6 rounded-2xl border border-tagdiv-border">
                 <div className="w-10 h-10 bg-white rounded-xl mx-auto flex items-center justify-center text-tagdiv-gold border border-gray-100 shadow-sm"><faq.icon size={18} /></div>
                 <h4 className="text-base font-black text-dark">{faq.q}</h4>
                 <p className="text-gray-500 text-xs font-medium">{faq.a}</p>
              </div>
            ))}
         </div>
      </section>
    </div>
  );
}

