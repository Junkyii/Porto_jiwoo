import { RevealOnScroll } from "../RevealOnScroll";

export const Certificate = () => {
  const certificates = [
    {
      id: 1,
      image: "", 
      alt: "Certificate 1",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/400", 
      alt: "Certificate 2",
    },
  ];

  return (
    <section id="certificate" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Certificates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <RevealOnScroll key={cert.id}>
              <div className="p-4 border border-white/10 rounded-xl hover:-translate-y-1 transition-all">
                <img
                  src={cert.image}
                  alt={cert.alt}
                  className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition"
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
