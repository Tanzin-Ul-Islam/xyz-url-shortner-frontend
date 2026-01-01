'use client';

import { useState } from 'react';

interface ShortenedUrlDisplayProps {
  originalUrl?: string;
  shortUrl?: string;
}

export default function ShortenedUrlDisplay({ 
  originalUrl = "https://example.com/very/long/url/that/needs/shortening",
  shortUrl = "short.link/abc123"
}: ShortenedUrlDisplayProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-emerald-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></span>
            Your Shortened URL
          </h3>
          <span className="px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
            Ready
          </span>
        </div>

        <div className="space-y-4">
          {/* Original URL */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-600">Original URL</label>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-slate-700 truncate text-sm">{originalUrl}</p>
            </div>
          </div>

          {/* Shortened URL */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-600">Shortened URL</label>
            <div className="flex gap-2">
              <div className="flex-1 p-4 bg-gradient-to-r from-sky-50 to-teal-50 rounded-lg border-2 border-sky-300">
                <p className="text-sky-700 font-semibold text-lg">{shortUrl}</p>
              </div>
              <button
                onClick={handleCopy}
                className={`px-6 py-4 rounded-lg font-semibold transition-all duration-200 ${
                  copied 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-sky-500 hover:bg-sky-600 text-white shadow-lg hover:shadow-xl'
                }`}
              >
                {copied ? (
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Copied!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6">
          <button className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Share
          </button>
          <button className="flex-1 px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Analytics
          </button>
        </div>
      </div>
    </div>
  );
}
