'use client';

import { useState } from 'react';

export default function UrlShortenerForm() {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle URL shortening logic here
    console.log('Shortening URL:', url);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-sky-50 to-emerald-50 rounded-2xl shadow-2xl p-8 border border-sky-200">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-3">
            <label 
              htmlFor="url-input" 
              className="block text-lg font-semibold text-slate-700"
            >
              Enter your long URL
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                id="url-input"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com/very/long/url..."
                className="flex-1 px-6 py-4 rounded-xl border-2 border-sky-300 focus:border-teal-400 focus:ring-4 focus:ring-teal-100 outline-none transition-all duration-200 text-slate-700 placeholder-slate-400"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Shorten URL
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>Your links are secured and encrypted</span>
          </div>
        </form>
      </div>
    </div>
  );
}
