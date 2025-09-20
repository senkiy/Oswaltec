
const Portfolio = () => {
  const projects = [
    {
      image: "/1.jpeg",
      title: "Tratamento e Pintura dos Tanques, Área Wanfertil",
      type: "Tratamento e Pintura",
      location: "Dias d'Ávila - BA"
    },
    {
      image: "/2.jpeg",
      title: "Pintura Cibra Fertil",
      type: "Serviços de Pintura",
      location: "Camaçari - BA"
    },
    {
      image: "/3.jpeg",
      title: "Serviço de Funilaria, Área Peroxy",
      type: "Serviço de Funilaria",
      location: "Camaçari - BA"
    },
    {
      image: "/4.jpeg",
      title: "Montagem de Estrutura da Passarela do TRE",
      type: "Serviço de Solda e Caldeiraria",
      location: "Salvador - BA"
    },
    {
      image: "/5.jpeg",
      title: "Estrutura Metálica Industrial TRE",
      type: "Soldagem e Metalurgia",
      location: "Salvador - BA"
    },
    {
      image: "/6.jpeg",
      title: "Montagem de Estrutura da Passarela do TRE",
      type: "Serviço de Solda e Caldeiraria",
      location: "Salvador - BA"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-earth-brown mb-6">
              Portfólio de Projetos
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Conheça alguns dos projetos que executamos com excelência, demonstrando 
              nossa expertise em serviços industriais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-rust-orange transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-warm-beige mb-1 font-medium">
                    {project.type}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {project.location}
                  </p>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="bg-rust-orange text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Concluído
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
