import React from "react";

export default function ContactPage() {
    return (
      <div className="min-h-screen px-16 pb-20 gap-16 sm:px-64 pt-8 font-[family-name:var(--font-geist-mono)] flex flex-col items-center justify-center">
        <h1 className="text-4xl mt-10 mb-6 font-serif">Contact Me</h1>
        <p className="text-lg mb-6 text-gray-700 text-center max-w-xl">
          I'd love to hear from you! Feel free to reach out using the form below or via email.
        </p>
        <div className="mt-8 text-gray-600 text-center">
          Email me at <a href="mailto:hglin@mit.edu" className="text-blue-600 underline">hglin[at]mit[dot]edu</a>
        </div>
        <div className="text-lg text-center mt-10">
          <ul className="list-disc list-inside text-lg text-center">
            <a href="/" className="highlighted-text mr-6">Home{" "}</a>
            <a href="/projects" className="highlighted-text mr-6">Projects{" "}</a>
            <a href="/thoughts" className="highlighted-text mr-6">Thoughts{" "}</a>
          </ul>
        </div>
      </div>
    );
}