import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>   
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Project 1 - Flutter QRIS */}
                    <RevealOnScroll>
                        <div className="p-6 border border-white/10 rounded-xl hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold text-white mb-2">
                                Membuat Flutter Project seperti QRIS
                            </h3>
                            <p className="text-gray-300">
                                Flutter project dengan inspirasi dari aplikasi GoPay dan QRIS.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {["React", "Vue", "TailwindCSS", "Flutter"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    View Project
                                </a>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Project 2 - Scraping Webtoon di Figma */}
                    <RevealOnScroll>
                        <div className="p-6 border border-white/10 rounded-xl hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold text-white mb-2">
                                Scraping Webtoon di Figma
                            </h3>
                            <p className="text-gray-300">
                                Proyek scraping data Webtoon dan mendesain ulang UI di Figma.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {["Python", "BeautifulSoup", "Figma", "TailwindCSS"].map((tech, key) => (
                                    <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="#" className="text-green-400 hover:text-green-300 transition-colors my-4">
                                    View Project
                                </a>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};
