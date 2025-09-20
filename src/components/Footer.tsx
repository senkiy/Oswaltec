
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-earth-brown text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-4">OSWALTEC</h3>
              <p className="text-warm-beige text-lg mb-6">
                Segurança – Qualidade – Produção – Manutenção e Serviços
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Especialistas em serviços industriais, 
                oferecendo soluções completas com foco na excelência e segurança.
              </p>
              
              {/* Social Media */}
              {/* <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-rust-orange rounded-full flex items-center justify-center hover:bg-terracotta transition-colors"
                >
                  <Facebook className="h-5 w-5 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-rust-orange rounded-full flex items-center justify-center hover:bg-terracotta transition-colors"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-rust-orange rounded-full flex items-center justify-center hover:bg-terracotta transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-white" />
                </a>
              </div> */}
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-6">Contato</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-rust-orange mr-3 flex-shrink-0" />
                  <span className="text-gray-300">(71) 99108-6042</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-rust-orange mr-3 flex-shrink-0" />
                  <span className="text-gray-300">oswaltecservicos@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-rust-orange mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Dias D'Ávila - BA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Osvaltec. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
