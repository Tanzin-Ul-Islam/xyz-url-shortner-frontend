import React from "react";

export default function Header() {
  return (
    <header className="pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            </div>
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-sky-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
              URL Shortener
            </h1>
          </div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Transform long URLs into short, shareable links in seconds
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
              Free Forever
            </span>
            <span className="px-4 py-1.5 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold">
              No Signup Required
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
