import Image from "next/image";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import ArrowRightIcon from "./components/ArrowRightIcon";
import SocialLink from "./components/SocialLink";

const basePath = process.env.NODE_ENV === "production" ? "/gfbs3-portfolio-demo" : "";

export default function Home() {
  return (
    <div className="min-h-screen bg-shadow-gray text-cyan-50 font-mono selection:bg-fuchsia-500/30 selection:text-fuchsia-200 overflow-x-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-linear-to-t from-granite/20 to-transparent opacity-30" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-graphite/80 backdrop-blur-md border-b border-cyan-900/30">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link 
            href="/" 
            className="text-lg font-bold tracking-widest text-transparent bg-clip-text bg-linear-to-r from-rose to-deep-teal hover:to-deep-teal transition-all duration-300"
          >
            KARINA PARGA
          </Link>
          <div className="flex gap-8 text-xs font-bold tracking-widest uppercase text-deep-teal/80">
            <Link href="#work" className="hover:text-tropical-teal hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">PROJECTS</Link>
            <Link href="#philosophy" className="hover:text-rose hover:drop-shadow-[0_0_5px_rgba(232,121,249,0.8)] transition-all">ABOUT</Link>
            <Link href="#contact" className="hover:text-blush hover:drop-shadow-[0_0_5px_rgba(250,204,21,0.8)] transition-all">CONTACT</Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 space-y-8 relative">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1] drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              HI! <br />
              MY NAME IS <br />
              <span className=" font-mono text-transparent bg-clip-text bg-linear-to-r from-rose to-deep-teal animate-gradient-x">KARINA PARGA</span> <br />

            </h1>
          </div>
          <p className="text-lg md:text-xl text-cyan-100/70 max-w-2xl leading-relaxed font-light border-l-2 border-rose pl-6">
            I'm a software engineer, with big love for frontend and user experience.
          </p>
          <div className="pt-8 flex gap-6">
            <Link 
              href="#work" 
              className="group relative px-8 py-3 bg-graphite border border-deep-teal text-tropical-teal font-bold tracking-widest uppercase text-sm overflow-hidden hover:bg-cyan-900/50 transition-all hover:shadow-[0_0_20px_rgba(250,235,235,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                See more about me <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-deep-teal/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </Link>
          </div>
        </section>

        {/* Selected Work */}
        <section id="work" className="py-20 space-y-12">
          <div className="flex items-end justify-between border-b border-cyan-900/30 pb-4">
            <h2 className="text-2xl font-bold tracking-widest text-rose drop-shadow-[0_0_8px_rgba(232,121,249,0.6)]">
              // PROJECTS
            </h2>
            <span className="text-xs font-mono text-deep-teal">Things I've worked on lately</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <ProjectCard 
              title="Internal Framework Landing Page"
              description="A webpage meant to showcase the Data&AI Ops in-house framework capabilities in a simple way for business and management level."
              tags={["NEXTJS", "TAILWIND"]}
              color="teal"
              href="#"
            />
            {/* Project 2 */}
            <ProjectCard 
              title="Extra Fuel"
              description="A web app tasked with displaying current fuel load and communication with dispatch for corrections, based on machine learning models."
              tags={["NEXTJS", "SOCKETS", "ANT DESIGN"]}
              color="rose"
              href="#"
            />
            {/* Project 3 */}
            <ProjectCard 
              title="Captured Value"
              description="A webpage focused on visualizing the impact of data products on the company."
              tags={["NEXTJS", "ANT DESIGN", "API"]}
              color="teal"
              href="#"
            />
            {/* Project 4 */}
            <ProjectCard 
              title="Unstabilized Approach"
              description="A web app for visualizing landing data in various airports, where the goal was to identify outliers and potential risks."
              tags={["PYTHON", "PLOTLY"]}
              color="rose"
              href="#"
            />
          </div>
        </section>

        {/* Philosophy / Approach */}
        <section id="philosophy" className="py-20 grid md:grid-cols-12 gap-12 border-t border-cyan-900/30">
          <div className="md:col-span-4 space-y-8">
            <h2 className="text-2xl font-bold tracking-widest text-tropical-teal drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
              {"// ABOUT_ME"}
            </h2>
            
            {/* Profile Image - Replace src with your image in /public */}
            <div className="relative w-full aspect-4/5 border border-cyan-500/30 rounded-sm overflow-hidden bg-cyan-950/30 group">
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(5,5,16,0.8)_100%)] z-10" />
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-size-[100%_4px] z-20 pointer-events-none" />
              
              <Image 
                src={`${basePath}/me.png`}
                alt="Profile"
                fill
                className="object-cover z-0 opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
              />
            </div>
          </div>
          <div className="md:col-span-8 space-y-8 text-cyan-100/80 leading-relaxed font-light">
            <p>
              I’m a Software Engineer with 5 years of experience specialized in Frontend with an UX/UI approach. I want to collaborate with anyone that shares my passion for learning, ethical technology and the belief that people should be at the center of the design process.
            </p>
            <div className="p-6 bg-graphite border border-cyan-500/20 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r bg-dull-rose" />
              <div className="grid grid-cols-2 gap-8 font-mono text-sm">
                <div>
                  <h3 className="text-tropical-teal mb-4 tracking-widest uppercase text-xs border-b border-cyan-800 pb-2">STACK_TRACE</h3>
                  <ul className="space-y-2 text-cyan-200/70">
                    <li className="flex items-center gap-2"><span className="text-rose">›</span> TypeScript / Python / Arduino</li>
                    <li className="flex items-center gap-2"><span className="text-rose">›</span> React / Next.js / Node.js</li>
                    <li className="flex items-center gap-2"><span className="text-rose">›</span> Git / GitHub / VS Code</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-tropical-teal mb-4 tracking-widest uppercase text-xs border-b border-cyan-800 pb-2">CORE_BELIEFS</h3>
                  <ul className="space-y-2 text-cyan-200/70">
                    <li className="flex items-center gap-2"><span className="text-rose">›</span> Always learning</li>
                    <li className="flex items-center gap-2"><span className="text-rose">›</span> Love collaborating</li>
                    <li className="flex items-center gap-2"><span className="text-rose">›</span> Enjoy teaching</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 border-t border-cyan-900/30">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-blush drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              LET'S  <span className="text-transparent bg-clip-text bg-linear-to-r from-blush via-tropical-teal to-deep-teal">TALK</span>
            </h2>
            <p className="text-cyan-200/60 text-lg">
              Any fun idea? Just <a href="mailto:karina.parga94@gmail.com" className="font-bold text-rose">send me an email</a> and tell me about it. I'll gladly come back to you with something.
            </p>
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-8 pt-4">
                <SocialLink href="https://github.com/kparga" label="GITHUB" />
                <SocialLink href="https://www.linkedin.com/in/karina-parga-99566315b/" label="LINKEDIN" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 text-center text-xs font-mono text-cyan-900/50 border-t border-cyan-900/20">
        <p>Base made with ❤️ by <a href="https://gh.io/gfb" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:text-deep-teal hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">GitHub for Beginners</a> and <a href="https://gh.io/gfb-copilot" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:text-deep-teal hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">GitHub Copilot</a></p>
      </footer>
    </div>
  );
}



