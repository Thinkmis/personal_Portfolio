import { Code2, Globe, HeartHandshake, Lightbulb, MessageSquare, ShieldCheck, Users } from "lucide-react";

const softSkills = [
    {
        icon: Code2,
        title: "Problem-Solving",
        description: "Analytical thinking and practice in debugging, algorithms, and clean logic.",
    },
    {
        icon: Users,
        title: "Teamwork & Collaboration",
        description: "Eager to contribute, communicate effectively, and support collaborative projects.",
    },
    {
        icon: Lightbulb,
        title: "Continuous Learning",
        description: "Driven to explore new technologies, UI design flows, and software development practices.",
    },
    {
        icon: HeartHandshake,
        title: "Adaptable & Responsible",
        description: "Positive attitude, time management, presentation skills, and strong work ethic.",
    },
];

const languages = ["English (Professional)", "Bangla (Native)"];

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-primary text-sm font-medium tracking-wider uppercase">
                                About Me
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-foreground">
                            Passionate about technology,{" "}
                            <span className="font-serif italic font-normal text-white">
                                learning & innovation.
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 leading-relaxed">
                            <p>
                                I am a Software Engineering student with a strong interest in technology, software development, and continuous learning. I am responsible, adaptable, and eager to contribute in collaborative environments.
                            </p>
                            <p>
                                Through my academic studies and project work, I have developed problem-solving, communication, and teamwork skills. As a Student Associate, I aim to apply my technical knowledge, organizational abilities, and positive attitude to support students, contribute to events, and gain valuable professional experience while continuing to grow personally and professionally.
                            </p>
                        </div>

                        {/* Languages */}
                        <div className="pt-2 animate-fade-in animation-delay-300">
                            <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3 flex items-center gap-2">
                                <Globe className="w-4 h-4 text-primary" /> Languages
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {languages.map((lang, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 rounded-xl glass text-foreground text-sm font-medium border border-primary/20"
                                    >
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-base font-medium italic text-foreground">
                                "Aiming to apply technical knowledge, organizational abilities, and a positive attitude to contribute to impactful software projects."
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Highlights / Soft Skills */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {softSkills.map((item, idx) => (
                            <div
                                key={idx}
                                className="glass p-6 rounded-2xl animate-fade-in glow-border hover:border-primary/50 transition-all duration-300"
                                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};