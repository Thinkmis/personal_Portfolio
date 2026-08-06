import { ExternalLink, FolderGit2 } from "lucide-react";

const projects = [
    {
        title: "Expense Tracker Website",
        description: "A web application designed for students to record, edit, and track daily expenses. Includes user input fields, category options, and simple reporting features.",
        tags: ["HTML", "CSS", "JavaScript", "Dynamic UI"],
        liveUrl: "#",
        githubUrl: "https://github.com/Thinkmis",
        image: "/expense.png"
    },
    {
        title: "Bookshop Management System",
        description: "A simple console-based system built in C programming for adding, viewing, and managing book information. Helps maintain book lists efficiently with file-handling logic.",
        tags: ["C Programming", "File Handling", "CLI", "Algorithms"],
        liveUrl: "#",
        githubUrl: "https://github.com/Thinkmis",
        image: "/book.png"
    },
    {
        title: "Personal Developer Portfolio",
        description: "A sleek, responsive personal portfolio website showcasing academic background, software engineering projects, technical skills, and experience.",
        tags: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
        liveUrl: "#",
        githubUrl: "https://github.com/Thinkmis",
        image: "/portfoliopic.PNG"
    }
];

const GithubIcon = (props) => (
    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
                    <span className="text-primary text-sm font-medium tracking-wider uppercase">
                        Portfolio Highlights
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 text-foreground">
                        Featured <span className="font-serif italic font-normal text-white">Projects</span>
                    </h2>
                    <p className="text-muted-foreground mt-4">
                        Key projects built during my software engineering studies and practical application work.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="glass rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-500 flex flex-col justify-between"
                        >
                            <div>
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors text-foreground">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center gap-3">
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-muted-foreground hover:text-primary transition-colors"
                                                aria-label="GitHub Repository"
                                            >
                                                <GithubIcon />
                                            </a>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 pt-0">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tIdx) => (
                                        <span
                                            key={tIdx}
                                            className="px-3 py-1 text-xs rounded-full glass text-primary font-medium border border-primary/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};