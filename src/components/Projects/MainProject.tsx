import BeachSideVideo from "/assets/project/beachside.mp4";
import TeslaVideo from "/assets/project/tesla.mp4";
import menteligent from "/assets/project/menteligent.mp4"
type Project = {
  id: number;
  title: string;
  description: string;
  video: string;
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Menteligent",
    description: "An AI mentorship platform for enterprises",
    video: menteligent,
    link: "https://menteligent.com",
  },
  {
    id: 2,
    title: "Beachside Bakery",
    description: "A bakery website for a local business",
    video: BeachSideVideo,
    link: "https://beachside-bakery.netlify.app/",
  },
  {
    id: 3,
    title: "Tesla Website Clone",
    description: "A clone of the Tesla website",
    video: TeslaVideo,
    link: "https://glen-tesla-clone.netlify.app/#",
  },
];

const RecentWork = () => {
  return (
    <section className="py-16 " id="projects">
      <div className="container mx-auto px-4 text-center max-w-6xl">
        <h2 className="font-bold text-5xl mb-16 text-center">Projects.</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden rounded-lg shadow-md"
            >
              <video
                className="w-full h-56 object-cover"
                autoPlay
                loop
                muted
                controls={false}
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-white p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  Visit Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;