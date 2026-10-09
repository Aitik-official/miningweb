"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Pickaxe, Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      router.push('/admin/dashboard');
    }, 600);
  };

  return (
    <div className="min-h-screen bg-tagdiv-bg flex flex-col justify-center items-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-tagdiv-border">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-4">
            <img src="/logo.png" alt="Mining Magazine Logo" className="h-12 w-auto mx-auto object-contain" />
          </Link>
          <h2 className="text-xl font-black text-dark tracking-tight">Editorial & Dispatch Portal</h2>
          <p className="text-xs text-gray-500 mt-1 font-medium">Authorized newsroom staff & editorial desk sign in</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-[11px] font-black uppercase tracking-wider text-gray-500 mb-2">Editorial Email</label>
            <div className="relative">
              <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="editor@mining-magazine.com"
                required
                className="w-full pl-11 pr-4 py-3 bg-tagdiv-bg border border-gray-200 rounded-xl text-sm font-semibold outline-none focus:border-tagdiv-gold transition-colors"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-[11px] font-black uppercase tracking-wider text-gray-500">Security Key / Password</label>
              <a href="#" className="text-[11px] font-bold text-tagdiv-gold hover:underline">Forgot?</a>
            </div>
            <div className="relative">
              <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                required
                className="w-full pl-11 pr-4 py-3 bg-tagdiv-bg border border-gray-200 rounded-xl text-sm font-semibold outline-none focus:border-tagdiv-gold transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 bg-tagdiv-gold text-white font-black uppercase tracking-wider text-xs rounded-xl flex items-center justify-center gap-2 hover:bg-dark transition-all shadow-md active:scale-95 disabled:opacity-70"
          >
            {isLoading ? 'Authenticating...' : 'Sign In to Portal'}
            <ArrowRight size={16} />
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-center gap-2 text-gray-400 text-xs font-semibold">
          <ShieldCheck size={16} className="text-emerald-600" />
          <span>256-Bit Encrypted Newsroom Access</span>
        </div>
      </div>

      <p className="mt-6 text-xs text-gray-500 font-bold">
        <Link href="/" className="hover:text-tagdiv-gold transition-colors">← Return to Mining Magazine Homepage</Link>
      </p>
    </div>
  );
}
