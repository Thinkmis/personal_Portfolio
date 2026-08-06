import { Mail, Send, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const GithubIcon = (props) => (
    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus({ type: null, message: "" });

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setSubmitStatus({
                type: "error",
                message: "Email service is not configured yet.",
            });
            setIsLoading(false);
            return;
        }

        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                publicKey
            );

            setSubmitStatus({
                type: "success",
                message: "Message sent successfully!",
            });
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            console.error("EmailJS error:", error);
            setSubmitStatus({
                type: "error",
                message: "Failed to send message. Please try again later.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden bg-surface/30">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
                    <span className="text-primary text-sm font-medium tracking-wider uppercase">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 text-foreground">
                        Contact <span className="font-serif italic font-normal text-white">Information</span>
                    </h2>
                    <p className="text-muted-foreground mt-4">
                        Feel free to reach out for academic projects, software development roles, or collaboration!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8 glass p-8 rounded-2xl glow-border">
                        <h3 className="text-2xl font-bold text-foreground">Reach Out Directly</h3>
                        <p className="text-muted-foreground">
                            I am eager to connect, collaborate on projects, and explore new learning opportunities.
                        </p>

                        <div className="space-y-6 pt-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Email</div>
                                    <a href="mailto:hoque241-35-221@diu.edu.bd" className="text-foreground font-medium hover:text-primary transition-colors">
                                        hoque241-35-221@diu.edu.bd
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Phone</div>
                                    <a href="tel:01533526244" className="text-foreground font-medium hover:text-primary transition-colors">
                                        +880 1533-526244
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <GithubIcon className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider">GitHub</div>
                                    <a href="https://github.com/Thinkmis" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-primary transition-colors">
                                        github.com/Thinkmis
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Address</div>
                                    <div className="text-foreground font-medium">DSC, Ashulia, Dhaka, Bangladesh</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="glass p-8 rounded-2xl glow-border space-y-6"
                    >
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-muted-foreground mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl glass border border-border focus:border-primary focus:outline-none text-foreground"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-muted-foreground mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl glass border border-border focus:border-primary focus:outline-none text-foreground"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                placeholder="Subject of message"
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl glass border border-border focus:border-primary focus:outline-none text-foreground"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-2">
                                Message
                            </label>
                            <textarea
                                rows={4}
                                placeholder="Write your message here..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl glass border border-border focus:border-primary focus:outline-none text-foreground resize-none"
                            />
                        </div>

                        <Button size="lg" className="w-full" type="submit" disabled={isLoading}>
                            {isLoading ? "Sending..." : "Send Message"}
                            <Send className="w-4 h-4 ml-2" />
                        </Button>

                        {submitStatus.type && (
                            <div
                                className={`flex items-center gap-3 p-4 rounded-xl ${submitStatus.type === "success"
                                    ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                    : "bg-red-500/10 border border-red-500/20 text-red-400"
                                    }`}
                            >
                                <span>{submitStatus.message}</span>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};