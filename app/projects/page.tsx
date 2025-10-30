export default function ProjectsPage() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-mono)]">
      <div className="items-center justify-center gap-8 pt-10 pb-10">
        <h1 className="text-4xl font-bold text-center font-[family-name:var(--font-gentium-plus)]">
          My Projects
        </h1>
        </div>
        <hr />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 pb-6">
          <a href="https://xenocrypts.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-64 h-40 bg-gray-200 rounded-lg flex items-center justify-center shadow-md overflow-hidden group">
            <img src="/interviewprep.png" alt="Project preview" className="w-full h-full object-cover rounded transition duration-300 group-hover:brightness-75" />
          </a>
          <div className="flex flex-col gap-2 max-w-xl justify-center">
            <a className="text-lg font-semibold" href="https://github.com/saltyquackerd/interview_prep_app">
              <span className="highlighted-text inline-block">InterviewPrep</span>
            </a>
            <p className="text-sm font-sans">
              This project is a web app to help users gain confidence in speaking professionally in interviews and meetings by providing AI-generated feedback on their responses to common interview questions, with context-aware questions from their resumes. A speedrun of AI API calls!
            </p>
            <p className="text-sm italic font-sans">
              Built with React/Next.js, Tailwind CSS, FastAPI, Whisper, Llama3, and ChromaDB.
            </p>
          </div>
        </div>
  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 pb-6">
          <a href="https://xenocrypts.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-64 h-40 bg-gray-200 rounded-lg flex items-center justify-center shadow-md overflow-hidden group">
            <img src="/xenocrypts.png" alt="Project preview" className="w-full h-full object-cover rounded transition duration-300 group-hover:brightness-75" />
          </a>
          <div className="flex flex-col gap-2 max-w-xl justify-center">
            <a className="text-lg font-semibold" href="https://xenocrypts.vercel.app/">
              <span className="highlighted-text inline-block">Xenocrypts</span>
            </a>
            <p className="text-sm font-sans">
              This project is a web app for a cryptography game where players solve Spanish Aristocrats as fast as possible!
            </p>
            <p className="text-sm italic font-sans">
              Built with Next.js, Tailwind CSS, and Gemini.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 pb-6">
          <a href="https://github.com/saltyquackerd/nlos-object-detection-localization/tree/main" target="_blank" rel="noopener noreferrer" className="w-64 h-40 bg-gray-200 rounded-lg flex items-center justify-center shadow-md overflow-hidden group">
            <img src="/nlos_object_detection.png" alt="Project preview" className="w-full h-full object-cover rounded transition duration-300 group-hover:brightness-75" />
          </a>
          <div className="flex flex-col gap-2 max-w-xl justify-center">
            <a className="text-lg font-semibold" href="https://github.com/saltyquackerd/nlos-object-detection-localization/tree/main">
              <span className="highlighted-text inline-block">NLOS Object Detection</span>
            </a>
            <p className="text-sm font-sans">
              This project focuses on developing machine learning algorithms for the localization and classification of non-line-of-sight (NLOS) objects.
            </p>
            <p className="text-sm italic font-sans">
              Built with PyTorch @ The Camera Culture Group.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 pb-6">
          <a href="https://picventure.onrender.com" target="_blank" rel="noopener noreferrer" className="w-64 h-40 bg-gray-200 rounded-lg flex items-center justify-center shadow-md overflow-hidden group">
            <img src="/picventure.png" alt="Project preview" className="w-full h-full object-cover rounded transition duration-300 group-hover:brightness-75" />
          </a>
          <div className="flex flex-col gap-2 max-w-xl justify-center">
            <a className="text-lg font-semibold" href="https://picventure.onrender.com">
              <span className="highlighted-text inline-block">PicVenture</span>
            </a>
            <p className="text-sm font-sans">
              This project focuses on developing a web application for connecting individuals through sharing photos based on daily photo challenges.
            </p>
            <p className="text-sm italic font-sans">
              Built with Javascript, HTML/CSS, MongoDB, and OP Friends.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 pb-6">
          <div className="w-64 h-40 bg-gray-200 rounded-lg shadow-md group overflow-hidden relative flex items-center justify-center">
            <img
              src="/hailey_3d_light.png"
              alt="3D Portfolio"
              className="w-full h-full object-cover rounded transition-opacity duration-300 group-hover:opacity-0 absolute top-0 left-0"
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
            <img
              src="/hailey_3d_dark.png"
              alt="3D Portfolio Hover"
              className="w-full h-full object-cover rounded transition-opacity duration-300 group-hover:opacity-100 opacity-0 absolute top-0 left-0"
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
          </div>
          <div className="flex flex-col gap-2 max-w-xl justify-center">
            <a className="text-lg font-semibold" href="https://hailey-portfolio-andrew-woan-bokoko33.vercel.app/">
              <span className="highlighted-text inline-block">3D Portfolio</span>
            </a>
            <p className="text-sm font-sans">
              This is my 3D portfolio created using Three.js. More of my 3D work can be found on my <a href="https://www.instagram.com/blenderduck" className="text-blue-500 underline">Instagram</a>.
            </p>
            <p className="text-sm italic font-sans">Built with Three.js and Blender.</p>
          </div>
        </div>
        <hr />
        <div className="text-lg text-center">
            <ul className="list-disc list-inside text-lg text-center">
              <a href="/" className="highlighted-text mr-6">Home{" "}</a>
              <a href="/thoughts" className="highlighted-text mr-6">Thoughts{" "}</a>
              <a href="/contact" className="highlighted-text">Contact Me{" "}</a>
            </ul>
          </div>
    </div>
  );
}
