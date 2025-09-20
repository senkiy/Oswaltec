
import { Building, Wrench, Zap, Hammer } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Infraestrutura e Edificações",
      description: "Soluções integradas para construção, reforma e manutenção de edificações comerciais e industriais.",
      features: ["Construção Civil", "Pintura Predial"]
    },
    {
      icon: Wrench,
      title: "Construção, Manutenção e Montagem", 
      description: "Serviços essenciais de fabricação, reparo e montagem para garantir a operacionalidade e a segurança das instalações industriais.",
      features: ["Soldagem e Caldeiraria", "Funilaria Industrial", "Montagem de Andaimes"]
    },
    {
      icon: Zap,
      title: "Suporte",
      description: "Oferecemos serviços essenciais para garantir a eficiência, segurança e conservação das instalações.",
      features: ["Isolamento Térmico", "Serviços de Limpeza Técnica e Industrial"]
    },
    {
      icon: Hammer,
      title: "Tratamento e Revestimento de Superfícies",
      description: "Serviços especializados em soldagem e trabalhos com estruturas metálicas.",
      features: ["Jateamento Abrasivo", "Pintura Industrial"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-earth-brown mb-6">
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Oferecemos soluções completas em serviços industriais, 
              com foco na excelência e segurança em cada projeto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-rust-orange text-white rounded-lg">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl text-earth-brown">
                      {service.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-forest-green rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
