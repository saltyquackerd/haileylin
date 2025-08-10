import React from "react";

export default function ContactPage() {
    return (
      <div className="min-h-screen px-16 pb-20 gap-16 sm:px-64 pt-8 font-[family-name:var(--font-geist-mono)] flex flex-col items-center justify-center">
        <h1 className="text-4xl mt-10 mb-6 font-serif">Contact Me</h1>
        <p className="text-lg mb-6 text-gray-700 text-center max-w-xl">
          I'd love to hear from you! Feel free to reach out using the form below or via email.
        </p>
        <form className="w-full max-w-md bg-gray-50 p-8 rounded shadow-md flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8 text-gray-600 text-center">
          Or email me directly at <a href="mailto:hglin@mit.edu" className="text-blue-600 underline">hglin@mit.edu</a>
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