import dailyScoopImage from "@/assets/images/dailyscoop.png";
import designDevelopImage from "@/assets/images/landing-page.png";
import ecommerceImage from "@/assets/images/ecommerce.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "DailyScoop",
    year: "2025",
    title: "React News, Blog & Weather App",
    results: [
      { title: "Integrated news API from gnews.io" },
      { title: "Implemented weather feature using OpenWeatherMap API" },
      { title: "Added calendar and blog post management functionality" },
    ],
    liveLink: "https://alenburovic/dailyscoop",
    githubLink: "https://github.com/BuliDev/dailyscoop",
    image: dailyScoopImage,
  },
  {
    company: "Design & Develop Templates",
    year: "2025",
    title: "Modern Landing Page with CSS Animations",
    results: [
      { title: "Built a fully responsive design using HTML and CSS" },
      { title: "Implemented video playback with controls" },
      { title: "Created CSS animations for a dynamic user experience" },
    ],
    liveLink: "https://alenburovic.com/ProWebsite/HTML/index.html",
    githubLink: "https://github.com/BuliDev/theme-responsive-website",
    image: designDevelopImage,
  },
  {
    company: "Bella Vogue",
    year: "2024",
    title: "E-Commerce Frontend with Cart & Filters",
    results: [
      { title: "Built responsive frontend for an e-commerce site" },
      { title: "Implemented product filtering by price and category" },
      {
        title:
          "Added cart functionality with automatic price calculation, including tax",
      },
    ],
    liveLink: "https://alenburovic.com/bellavogue/",
    githubLink: "https://github.com/BuliDev/ecommerce-website",
    image: ecommerceImage,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24 scroll-mt-20">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={index}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${index * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mt-8">
                    <a href={project.liveLink}>
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 whitespace-nowrap">
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                    <a href={project.githubLink}>
                      <button className="bg-gray-900 text-white h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 whitespace-nowrap">
                        <span>Visit on GitHub</span>
                        <GitHubIcon className="size-4" />
                      </button>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
