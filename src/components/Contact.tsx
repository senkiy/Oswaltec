import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact-section" className="py-16 md:py-20 bg-warm-beige"> {/* Espaçamento vertical reduzido em telas pequenas */}
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            {/* Fontes ajustadas para serem menores em telas pequenas e maiores em telas grandes */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-earth-brown mb-4">
              Entre em Contato
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Pronto para iniciar seu projeto? Nossa equipe está disponível para
              oferecer a melhor solução para suas necessidades.
            </p>
          </div>

          {/* - O layout de grade agora é mobile-first: 1 coluna por padrão, 2 colunas em telas grandes (lg).
            - justify-items-center garante que os cards fiquem centralizados na visualização de 1 coluna.
            - O espaçamento (gap) foi ajustado para ser menor em telas menores.
          */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 justify-items-center">
            
            {/* Card de Informações de Contato */}
            <div className="w-full max-w-lg animate-slide-in-left"> {/* max-w-lg ajuda a controlar a largura em telas intermediárias */}
              {/* Padding interno reduzido em telas pequenas (p-6) e maior em telas médias (sm:p-8) */}
              <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg h-full">
                <h3 className="text-2xl sm:text-3xl font-bold text-earth-brown mb-6">
                  Informações de Contato
                </h3>
                
                <div className="space-y-5">
                  {/* Ícones e texto foram ligeiramente ajustados para melhor espaçamento */}
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-rust-orange rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-earth-brown">Telefone</div>
                      <div className="text-sm sm:text-base text-gray-600">(71) 99108-6042</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-forest-green rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-earth-brown">WhatsApp</div>
                      <div className="text-sm sm:text-base text-gray-600">(71) 99108-6042</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-terracotta rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-earth-brown">E-mail</div>
                      <div className="text-sm sm:text-base text-gray-600">oswaltecservicos@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-earth-brown rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-earth-brown">Endereço</div>
                      <div className="text-sm sm:text-base text-gray-600">Dias D'Ávila - BA</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-rust-orange rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-earth-brown">Horário</div>
                      <div className="text-sm sm:text-base text-gray-600">Segunda a Sexta: 8h às 18h</div>
                      <div className="text-sm sm:text-base text-gray-600">Emergências: 24h</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card de Call to Action (CTA) */}
            <div className="w-full max-w-lg flex flex-col justify-center animate-fade-in">
              <div className="bg-earth-brown text-white rounded-lg p-6 sm:p-8 shadow-lg h-full">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Solicite seu Orçamento Gratuito
                </h3>
                <p className="text-warm-beige mb-6 leading-relaxed text-sm sm:text-base">
                  Nossa equipe de especialistas está pronta para avaliar seu projeto 
                  e oferecer a melhor solução em construção civil e serviços industriais.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm sm:text-base">
                    <div className="w-5 h-5 bg-rust-orange rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <span>Análise técnica gratuita</span>
                  </div>
                  <div className="flex items-center text-sm sm:text-base">
                    <div className="w-5 h-5 bg-rust-orange rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <span>Orçamento detalhado em 24h</span>
                  </div>
                  <div className="flex items-center text-sm sm:text-base">
                    <div className="w-5 h-5 bg-rust-orange rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <span>Atendimento personalizado</span>
                  </div>
                </div>

                <div>
                  <a href="https://wa.me/5571991086042" target="_blank" rel="noopener noreferrer"> {/* Adicionado target e rel para links externos */}
                    {/* - O tamanho do botão e do texto agora são responsivos.
                      - Removido size="lg" para ter controle total com classes do Tailwind.
                    */}
                    <Button 
                      className="w-full bg-rust-orange hover:bg-terracotta text-white h-12 px-6 text-base sm:text-lg font-semibold"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Fale Conosco no WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;