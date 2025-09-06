import React from "react";


const deepThoughts = [
  `I wish I had a lot of these, and I think I do, but I just don't write them down often enough.`,
];

export default function ThoughtsPage() {
    return (
  <div className="min-h-screen px-16 pb-20 gap-16 sm:px-64 pt-8 font-[family-name:var(--font-geist-mono)]">
          <div className="items-center justify-center gap-8 pt-10 pb-10">
            <h1 className="text-4xl mt-10 mb-6 font-serif">Nuanced Deep Thoughts</h1>
          </div>
          <div className="flex justify-center">
            <div className="space-y-8">
              {deepThoughts.map((thought, idx) => (
                <blockquote key={idx} className="leading-relaxed text-gray-700 border-l-4 border-gray-300 pl-4 bg-gray-50 p-4 rounded shadow-sm">
                  {thought}
                </blockquote>
              ))}
            </div>
          </div>
          <div className="text-lg text-center mt-10">
            <ul className="list-disc list-inside text-lg text-center">
              <a href="/" className="highlighted-text mr-6">Home{" "}</a>
              <a href="/projects" className="highlighted-text mr-6">Projects{" "}</a>
              <a href="/contact" className="highlighted-text">Contact Me{" "}</a>
            </ul>
          </div>
        </div>
    );
}