import BeachSideVideo from '/assets/project/beachside.mp4';
import devLogVideo from '/assets/project/devlog.mp4';
import menteligent from '/assets/project/menteligent.mp4';
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
        title: 'Menteligent',
        description: 'An AI mentorship platform for enterprises',
        video: menteligent,
        link: 'https://menteligent.com',
    },
    {
        id: 2,
        title: 'Beachside Bakery',
        description: 'A bakery website for a local business',
        video: BeachSideVideo,
        link: 'https://beachside-bakery.netlify.app/',
    },
    {
        id: 3,
        title: 'DevLog',
        description: 'AI powered daily log productivity app for developers',
        video: devLogVideo,
        link: 'https://devlogfront.onrender.com/',
    },
];

const RecentWork = () => {
    return (
        <section className="py-16" id="projects">
            <div className="container mx-auto max-w-6xl px-4 text-center">
                <h2 className="mb-16 text-center text-5xl font-bold">Projects.</h2>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-md">
                            <video className="h-56 w-full object-cover" autoPlay loop muted controls={false}>
                                <source src={project.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 p-4 text-white opacity-0 transition duration-300 group-hover:opacity-100">
                                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                                <p className="mb-4 text-sm">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg bg-white px-4 py-2 text-black transition hover:bg-black hover:text-white"
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
