import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-mono)]">
      <div className="items-center justify-center gap-8">
        <h1 className="text-4xl font-bold text-center font-[family-name:var(--font-gentium-plus)] mt-40">
          Hailey Lin
        </h1>
        <p className="text-lg text-center">
          hglin[at]mit[dot]edu
        </p>
      </div>
  <div className="items-center justify-center gap-8 pt-20 pb-20 px-16 sm:px-32">
        <p className="text-lg text-center">
          Hi! My name is Hailey and I am studying{" "}
          <a
            className="highlighted-text"
            href="https://catalog.mit.edu/degree-charts/mathematics-course-18/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Math (18)
          </a>{" "}
          and{" "}
          <a
            className="highlighted-text"
            href="https://catalog.mit.edu/degree-charts/computer-science-engineering-course-6-3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CS (6-3)
          </a>{" "}
          at {" "}
          <a
            className="highlighted-text"
            target="_blank"
            rel="noopener noreferrer"
          >
            MIT.{" "}
          </a>
          </p>
        </div>
    <div className="items-center justify-center gap-8 pt-10 pb-10 px-4 sm:px-16">
          <hr/>
          <p className="text-lg text-center mt-10 mb-5">
            Coursework:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-10">
            <div className="text-lg text-center">
              <ul className="list-disc list-inside text-lg text-center">
            <li>
                6.1200 Mathematics for Computer Science
            </li>
            <li>
                6.1210 Introduction to Algorithms
            </li>
            <li>
                6.1010 Fundamentals of Programming
            </li>
          </ul>
          <ul className="list-disc list-inside text-lg text-center">
            <li>
                6.3900 Introduction to Machine Learning
            </li>
            </ul>
          </div>
          <div className="text-lg text-center">
            <ul className="list-disc list-inside text-lg text-center">
              <li>
                  18.022 Multivariable Calculus
              </li>
              <li>
                  18.06 Linear Algebra
              </li>
              <li>
                  18.600 Introduction to Probability and Statistics
              </li>
              <li>
                  18.100B Real Analysis
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="items-center justify-center gap-8 pt-10 pb-10">
          <p className="text-lg text-center">
            Experience:
          </p>
          <div className="text-lg text-center">
            <ul className="list-disc list-inside text-lg text-center">
              <li>
                <a
                  className="highlighted-text"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Incoming Trading Intern @ Five Rings
                </a>
              </li>
              <li>
                <a
                  className="highlighted-text"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Software Developer (STEP) Intern @ Google Cloud
                </a>
              </li>
              <li>
                <a
                  className="highlighted-text"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Research Assistant @ MIT Media Lab's Camera Culture Group
                </a>
              </li>
              <li>
                <a
                  className="highlighted-text"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Teaching Assistant @ LIVE by Po Shen Loh
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr/>
        <div className="items-center justify-center gap-8 pt-10">
          <p className="text-lg text-center">
            Fun things:
          </p>
          <div className="text-lg text-center">
            <ul className="list-disc list-inside text-lg text-center">
              <a href="/projects" className="highlighted-text mr-6">Projects{" "}</a>
              <a href="/thoughts" className="highlighted-text mr-6">Thoughts{" "}</a>
              <a href="/contact" className="highlighted-text">Contact Me{" "}</a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
