import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-sky-900 to-teal-900 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sky-100">
            © 2026 URL Shortener. Built with Next.js & Tailwind CSS
          </p>
          <div className="flex items-center justify-center gap-6 mt-4">
            <a
              href="#"
              className="text-sky-200 hover:text-white transition-colors"
            >
              Privacy
            </a>
            <span className="text-sky-400">•</span>
            <a
              href="#"
              className="text-sky-200 hover:text-white transition-colors"
            >
              Terms
            </a>
            <span className="text-sky-400">•</span>
            <a
              href="#"
              className="text-sky-200 hover:text-white transition-colors"
            >
              API Docs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
