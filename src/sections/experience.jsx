import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        period: "Jan 2025 - Present",
        role: "Junior Web Developer (Project-Based)",
        company: "Academic Project Work",
        location: "Project Work",
        description: "Developed small web applications using HTML, CSS, and JavaScript. Practiced building user-friendly pages and organizing project structure. Learned how to handle user inputs, simple storage, and dynamic functionality while working independently to improve logic and problem-solving skills.",
        skills: ["HTML", "CSS", "JavaScript", "Dynamic UI", "Problem-Solving"]
    },

    {
        period: "2024 - 2025",
        role: "Programming Practice",
        company: "Independent Learning & Skill Development",
        location: "Self-Study",
        description: "Gained experience solving coding problems using Java, C, and JavaScript. Practiced basic debugging, structure, and clean code habits. Explored UI layout design and flow for small applications.",
        skills: ["Java", "C", "JavaScript", "Debugging", "Clean Code", "UI Flow"]

    }
];

export const Experience = () => {
    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
                    <span className="text-primary text-sm font-medium tracking-wider uppercase">
                        Experience
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 text-foreground">
                        Practical <span className="font-serif italic font-normal text-white">Experience</span>
                    </h2>
                    <p className="text-muted-foreground mt-4">
                        Academic project work and web development practice.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto relative">
                    <div className="space-y-12">
                        {experiences.map((item, idx) => (
                            <div key={idx} className="relative flex flex-col items-center">
                                <div className="w-full">
                                    <div className="glass p-8 rounded-2xl glow-border hover:border-primary/50 transition-all duration-300">
                                        <div className="flex items-center gap-2 text-xs font-semibold text-primary mb-3">
                                            <Calendar className="w-4 h-4" />
                                            <span>{item.period}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground mb-1">
                                            {item.role}
                                        </h3>
                                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                                            <span className="flex items-center gap-1 font-medium text-foreground">
                                                <Briefcase className="w-4 h-4 text-primary" />
                                                {item.company}
                                            </span>
                                            <span>•</span>
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-3.5 h-3.5" />
                                                {item.location}
                                            </span>
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                            {item.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {item.skills.map((skill, sIdx) => (
                                                <span
                                                    key={sIdx}
                                                    className="px-3 py-1 text-xs rounded-full glass text-primary font-medium border border-primary/20"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};