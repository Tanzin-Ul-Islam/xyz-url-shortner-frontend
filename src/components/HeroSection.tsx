import React from "react";

export default function HeroSection() {
  return (
    <div className="pt-16 pb-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-sky-600 via-blue-600 to-teal-600 bg-clip-text text-transparent mb-6">
            Transform Your URLs
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-6">
            Transform long URLs into short, shareable links in seconds
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Free Forever
            </span>
            <span className="px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              No Signup Required
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Analytics Included
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
