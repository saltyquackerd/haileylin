import React from "react";


const deepThoughts = [
  `In the vast tapestry of existence, every moment is both fleeting and eternal. We are but travelers on the edge of infinity, searching for meaning in the echoes of our own consciousness. To ponder the nature of reality is to confront the paradox of being: that we are simultaneously insignificant and immeasurably unique. The universe, indifferent yet wondrous, invites us to reflect on the interconnectedness of all things. Perhaps the greatest wisdom lies not in answers, but in the humility to ask, and the courage to wonder.`,
  `Consciousness is the silent witness to the dance of atoms and ideas. In the stillness between thoughts, we glimpse the infinite—a space where the boundaries of self dissolve and the world becomes a mirror for our own becoming.`,
  `Time is not a river, but a mosaic of moments, each colored by memory and anticipation. To live fully is to embrace the ambiguity of now, to find beauty in the unfinished and meaning in the uncertain.`,
  `Every question we ask is a doorway to a deeper mystery. The pursuit of truth is not a straight path, but a spiral—each revolution bringing us closer to understanding, yet revealing new layers of complexity.`,
  `The mind is both architect and explorer, building worlds from fragments of experience and wandering through landscapes shaped by imagination. Wisdom is the ability to hold contradiction without fear, to see unity in diversity.`,
  `To love is to risk the pain of loss, yet in that vulnerability we discover the strength to transcend ourselves. Compassion is the bridge between isolation and belonging, a reminder that our stories are woven together by invisible threads.`
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