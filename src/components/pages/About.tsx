import { Home } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export type LeetCodeStats = {
  totalSolved: number
  acceptanceRate: number
  easySolved: number
  mediumSolved: number
  hardSolved: number
  lastSolved: string
  lastSolvedDate: string
};


export default function About() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const leetCodeStatsUrl = 'https://leetcode-stats-api.herokuapp.com/gcward18';

  useEffect( () => {
    async function fetchLeetCodeStats() {
      const res = await fetch(leetCodeStatsUrl);
      const data = await res.json();
      const { totalSolved, acceptanceRate, easySolved, mediumSolved, hardSolved, lastSolved, lastSolvedDate } = data;
      setStats({
        totalSolved,
        acceptanceRate,
        easySolved,
        mediumSolved,
        hardSolved,
        lastSolved,
        lastSolvedDate
      });
    };
    fetchLeetCodeStats()
  }, []);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 xs:px-16 lg:px-32 py-20">
      <Link 
        to="/"
        className="text-foreground rounded-full flex items-center justify-center custom-bg fixed top-4 left-4 w-fit self-start z-50"
        aria-label="home"
      >
        <span className="relative w-14 h-14 p-4 hover:text-accent">
          <Home className="w-full h-auto" />
          <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"></span>
          <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
            Home
          </span>
        </span>
        <span className="sr-only">Go to Home Page</span>
      </Link>
      <img src="/mars.jpg" className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50" />

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="text-3xl sm:text-8xl lg:text-9xl text-accent font-bold">
            George Ward
          </h1>
          <p className="font-light text-foreground lg:text-xl xs:text-md">
            {/* Add your tagline here */}
            Turning ideas into impact, one commit at a time.
          </p>
        </div>
      </div>

      <section className="py-20 w-full">
        <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
            {/* Main content area */}
            <div className="custom-bg p-6 sm:p-8 rounded-xl flex justify-center space-y-8 col-span-full lg:col-span-10 row-span-3 flex-col items-start">
            {/* Add your README.md content here */}
            <h2 className="text-4xl font-bold mb-6">👋 About Me</h2>
            <p className="text-lg leading-relaxed mb-4">
                Hi, I’m <span className="font-semibold">George Ward</span> — a full-stack
                developer by trade, and a builder at heart.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                With over 4 years of experience in software engineering, I’ve led teams, shipped
                products in high-pressure environments, and architected solutions that support
                mission-critical applications — including LMS/CMS systems used in military pilot
                training.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                My background combines frontend finesse with backend rigor. I’m fluent in
                TypeScript, Python, C#, and SQL, and have built robust applications using React,
                Flask, Angular, and .NET. I’m also skilled with Docker, CI/CD pipelines, and cloud
                platforms like Azure and GCP.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                Recently, I’ve been exploring AI/LLM integrations, vector databases, and building
                tools that merge personalization with scalable systems. I believe in clean,
                maintainable code and designing systems that grow with user needs.
            </p>
            <p className="text-lg leading-relaxed mb-4">
                Outside of tech, I train as a professional bodybuilder — a pursuit that’s taught
                me discipline, consistency, and focus. Whether it's lifting or coding, there’s no
                shortcut — just reps and refinement.
            </p>

            <div className="mt-6">
                <h3 className="text-2xl font-semibold mb-2">🔧 Tech I’ve Worked With Recently</h3>
                <ul className="list-disc list-inside text-lg space-y-1">
                <li><strong>Frontend:</strong> React, Vite, Angular, TailwindCSS</li>
                <li><strong>Backend:</strong> Python (Flask, FastAPI), C#, .NET</li>
                <li><strong>Infrastructure:</strong> Docker, GitHub Actions, Azure, GCP</li>
                <li><strong>Data & AI:</strong> PostgreSQL, Redis, MinIO, LLaMA3, GroqCloud, Vector DBs</li>
                <li><strong>Tools:</strong> VS Code, Postman, Figma, UXPilot</li>
                </ul>
            </div>

            <p className="text-lg leading-relaxed mt-6">
                I’m currently building mobile-native experiences, experimenting with real-time
                updates via pub/sub and SSEs, and always on the lookout for meaningful tech
                problems to solve.
            </p>
            </div>

            {/* Profile image */}
            <div className="custom-bg p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8 col-span-full row-span-3 xs:col-span-4 lg:col-span-2 text-accent">
            {/* Add your profile image here */}
            <img
                className="w-full h-auto rounded-full"
                src="/michigan_state.jpg"
                alt="Personal Photo"
                loading="lazy"
            ></img>
            </div>

            {/* GitHub stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 col-span-full">
                {/* Top Languages Box */}
                <div className="custom-bg p-4 sm:p-6 rounded-xl flex flex-col items-center text-sm md:text-base leading-normal md:col-span-1">    
                  <img
                    className="w-full max-w-sm h-auto"
                    alt="Top Languages"
                    loading="lazy"
                    src="https://github-readme-stats.vercel.app/api/top-langs?username=gcward18&theme=transparent&hide_border=true&title_color=00ffff&text_color=FFFFFF&icon_color=00ffff&text_bold=false"
                  />
                </div>

                {/* GitHub Stats Box */}
                <div className="custom-bg p-4 sm:p-6 rounded-xl flex flex-col items-center text-sm md:text-base leading-normal md:col-span-2">
                  <img
                    className="w-full h-auto"
                    alt="GitHub Stats"
                    loading="lazy"
                    src="https://github-readme-stats.vercel.app/api?username=gcward18&theme=transparent&hide_border=true&title_color=00ffff&text_color=FFFFFF&icon_color=00ffff&text_bold=false"
                  />
                </div>
            </div>

            {/* Skills icons and leetcode stats */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 col-span-full '>
              
            <div className="custom-bg p-4 sm:p-6 rounded-xl flex flex-col items-center text-sm md:text-base leading-normal md:col-span-2">    
                <img
                  className="w-full h-auto"
                  src="https://skillicons.dev/icons?i=react,ts,js,html,css,tailwind,nodejs,git,python,flask,fastapi,postgresql,docker,azure,gcp,redis,githubactions,vite,angular,cs,dotnet,figma,github,idea,linux,md,postman,pycharm,rabbitmq,sass,svg,visualstudio,vscode,webstorm,windows,yarn&perline=10"
                  alt="Skills"
                  loading="lazy"
                />
              </div>

              {/* LeetCode Stats Box */}
              <div className="custom-bg p-6 rounded-xl flex flex-col items-center justify-center text-center text-sm md:text-base leading-normal md:col-span-1">
                <h2 className="text-3xl font-extrabold mb-6" style={{color: 'rgb(0, 186, 255)'}}>💻 LeetCode Stats</h2>
                <div className="flex flex-col items-start">
                  <p className="text-lg leading-relaxed mb-4"> Total Solved: {stats?.totalSolved}</p>
                  <p className="text-lg leading-relaxed mb-4"> Acceptance Rate: {stats?.acceptanceRate}</p>
                  <p className="text-lg leading-relaxed mb-4"> Easy: {stats?.easySolved}</p>
                  <p className="text-lg leading-relaxed mb-4"> Medium: {stats?.mediumSolved}</p>
                  <p className="text-lg leading-relaxed mb-4"> Hard: {stats?.hardSolved}</p>
                </div>g
              </div>
          </div>
        </div>
      </section>
    </main>
  )
}