import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Features() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4">
      <div className="max-w-4xl w-full text-center py-[10px]">
        {/* Main Content */}
        <div className="space-y-8">
          {/* Icon/Emoji */}
          <div className="flex justify-center">
            <div className="bg-yellow-100 p-6 rounded-full">
              <span className="text-6xl">🚧</span>
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              Under Construction
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
              We're working hard to bring you something amazing!
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center py-8">
            <div className="relative w-full max-w-2xl aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/under-construction.jpg"
                alt="Under Construction"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6 max-w-2xl mx-auto">
            <p className="text-lg text-gray-700">
              Our team is currently building exciting new features to enhance your experience.
              This page will be available soon with powerful tools and insights.
            </p>

            {/* Features Coming Soon */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-semibold text-gray-900 mb-2">Analytics</h3>
                <p className="text-sm text-gray-600">Detailed insights and statistics</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-semibold text-gray-900 mb-2">Performance</h3>
                <p className="text-sm text-gray-600">Lightning-fast operations</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-semibold text-gray-900 mb-2">Features</h3>
                <p className="text-sm text-gray-600">Advanced functionality</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="pt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span>← Back to Home</span>
            </Link>
          </div>

          {/* Footer Note */}
          <div className="pt-8 text-sm text-gray-500">
            Expected launch: <span className="font-semibold text-gray-700">Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  )
}
