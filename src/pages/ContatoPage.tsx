
import React from 'react';
import SEOHead from '@/components/SEOHead';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import WebPageSchema from '@/components/seo/WebPageSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import SectionTitle from '@/components/SectionTitle';
import CallToAction from '@/components/CallToAction';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageSquare,
  Users,
  Headphones,
  Building
} from 'lucide-react';
import emailjs from '@emailjs/browser';


const formSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Assunto deve ter pelo menos 5 caracteres'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

type FormData = z.infer<typeof formSchema>;

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Endereço",
    content: "Rua Salvador Simões, 801 - 12º Andar - Cj. 1201/1210",
    subcontent: "Alto do Ipiranga - São Paulo/SP - CEP: 04276-000"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Telefone",
    content: "(11) 5194-2223",
    subcontent: "Segunda a sexta, 9h às 18h"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    content: "sos@operadora.legal",
    subcontent: "Resposta em até 24h"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Horário de Atendimento",
    content: "Segunda a Sexta: 8h às 20h",
    subcontent: "Sábado: 8h às 14h"
  }
];

const supportOptions = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Suporte Técnico",
    description: "Ajuda com produtos e serviços LEGAL",
    contact: "suporte@operadora.legal"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Vendas",
    description: "Informações sobre produtos e orçamentos",
    contact: "vendas@operadora.legal"
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: "Parcerias",
    description: "Oportunidades de parceria e negócios",
    contact: "parcerias@operadora.legal"
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Atendimento Geral",
    description: "Dúvidas gerais e informações",
    contact: "sos@operadora.legal"
  }
];

const ContatoPage = () => {
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log('Form submitted:', data);

    const CONTACT_EMAIL = 'sos@operadora.legal';
    const EMAILJS_SERVICE_ID = 'service_wi3kvx7';
    const EMAILJS_TEMPLATE_ID = 'template_5l2767r';
    const EMAILJS_USER_ID = 'oLw9xvmdczE218mGh';

    const name = data.name;
    const email = data.email;
    const company = data.company;
    const phone = data.phone;
    const subject = data.subject;
    const message = `
      Nome: ${name},\n
      Email: ${email},\n
      Empresa: ${company},\n
      Telefone: ${phone}\n
      ------------------------------\n
      ${data.message}\n`;

    const templateParams = {
      to_email: CONTACT_EMAIL,
      from_name: name,
      from_email: email,
      company: company,
      phone: phone,
      subject: subject,
      message: message,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );

      toast({
        title: "Mensagem enviada!",
        description: "Recebemos sua mensagem e entraremos em contato em breve.",
      });

      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Mensagem não enviada!",
        description: "Erro ao enviar o email, confira os dados e tente novamente.",
      })
    }
  };

  return (
    <>
      <SEOHead
        title="Contato | Fale com a LEGAL - Especialistas em Smart Events™"
        description="Entre em contato com a LEGAL: telefone (11) 5194-2223, email sos@operadora.legal. Escritório no Alto do Ipiranga - São Paulo. Transforme seus eventos com nossa tecnologia."
        keywords="contato LEGAL, telefone LEGAL, email LEGAL, escritório São Paulo, suporte técnico, vendas LEGAL"
        canonical="https://operadora.legal/contato"
        image="https://operadora.legal/images/contato-legal-2024.jpg"
        type="website"
      />
      
      <LocalBusinessSchema />
      
      <WebPageSchema
        name="Contato - LEGAL"
        description="Entre em contato com a LEGAL e transforme seus eventos com nossa tecnologia"
        url="https://operadora.legal/contato"
        breadcrumb={[
          { name: "Home", url: "https://operadora.legal" },
          { name: "Contato", url: "https://operadora.legal/contato" }
        ]}
      />
      
      <Breadcrumbs />

    <div className="bg-background text-foreground font-unica">
      {/* Hero Section */}
      <section className="py-24 md:py-32 text-center bg-gradient-to-br from-legal to-legal-purple text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <MessageSquare className="absolute top-1/4 left-1/4 w-64 h-64 text-white/10 animate-pulse transform -translate-x-1/2 -translate-y-1/2" />
          <Mail className="absolute bottom-10 right-10 w-32 h-32 text-white/10 animate-ping" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider mb-6 animate-fade-in" style={{ letterSpacing: '0.05em' }}>
            CONTATO
          </h1>
          <p className="text-lg md:text-xl font-light max-w-3xl mx-auto mb-8 animate-fade-in animation-delay-300">
            Vamos transformar suas ideias em realidade. Entre em contato conosco e descubra como a LEGAL pode impulsionar seus eventos e negócios.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <SectionTitle
                title="FALE CONOSCO"
                subtitle="Preencha o formulário abaixo e nossa equipe entrará em contato em breve."
              />
              <Card className="bg-card border-legal/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-legal">Envie sua mensagem</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nome *</FormLabel>
                              <FormControl>
                                <Input placeholder="Seu nome completo" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input placeholder="seu@email.com" type="email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Empresa</FormLabel>
                              <FormControl>
                                <Input placeholder="Nome da empresa" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Telefone</FormLabel>
                              <FormControl>
                                <Input placeholder="(11) 99999-9999" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Assunto *</FormLabel>
                            <FormControl>
                              <Input placeholder="Sobre o que você gostaria de falar?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mensagem *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Conte-nos mais detalhes sobre sua necessidade..."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full bg-legal hover:bg-legal/90 text-white">
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Mensagem
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <SectionTitle
                title="INFORMAÇÕES DE CONTATO"
                subtitle="Diversas formas de entrar em contato conosco."
              />
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-white border-legal/20 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-legal-cyan">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-legal mb-1">{info.title}</h3>
                          <p className="text-foreground font-medium">{info.content}</p>
                          {info.subcontent && (
                            <p className="text-muted-foreground text-sm mt-1">{info.subcontent}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="CANAIS DE ATENDIMENTO"
            subtitle="Encontre o canal ideal para sua necessidade e receba o suporte adequado."
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option, index) => (
              <Card key={index} className="bg-white border-legal/20 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4 text-legal-cyan">
                    {option.icon}
                  </div>
                  <h3 className="text-lg font-bold text-legal mb-2">{option.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{option.description}</p>
                  <a 
                    href={`mailto:${option.contact}`}
                    className="text-legal hover:text-legal-purple transition-colors text-sm font-medium"
                  >
                    {option.contact}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="NOSSA LOCALIZAÇÃO"
            subtitle="Venha nos visitar em nosso escritório no coração de São Paulo."
            center
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-card border-legal/20 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-legal mb-6">Monte Olimpo</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-legal-cyan mt-1" />
                      <div>
                        <p className="font-medium">Rua Salvador Simões, 801</p>
                        <p className="text-muted-foreground">12º Andar - Conjuntos 1201/1210</p>
                        <p className="text-muted-foreground">Alto do Ipiranga - São Paulo/SP</p>
                        <p className="text-muted-foreground">CEP: 04276-000</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-legal-cyan" />
                      <div>
                        <p className="font-medium">Horário de Funcionamento</p>
                        <p className="text-muted-foreground">Segunda a Sexta: 8h às 20h</p>
                        <p className="text-muted-foreground">Sábado: 8h às 14h</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Building className="w-5 h-5 text-legal-cyan" />
                      <div>
                        <p className="font-medium">Dados da Empresa</p>
                        <p className="text-muted-foreground">Operadora LEGAL X Ltda</p>
                        <p className="text-muted-foreground">CNPJ: 54.753.156/0001-72</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.097798291589!2d-46.61569072374822!3d-23.600825289136477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5bbe35b8e57f%3A0x17c6d5f0afcc9044!2sCosmopolitan%20Ipiranga!5e0!3m2!1spt-BR!2sbr!4v1751658808071!5m2!1spt-BR!2sbr" 
                className='h-full w-full rounded-sm border' 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do escritório LEGAL - Cosmopolitan Ipiranga, São Paulo"
                aria-label="Mapa interativo mostrando a localização do escritório da LEGAL no Cosmopolitan Ipiranga"
              ></iframe>
              {/* <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <p className="text-lg font-medium">Mapa Interativo</p>
                <p className="text-sm">Localização do escritório LEGAL</p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction
        title="Pronto para Transformar seus Eventos?"
        subtitle="Entre em contato conosco hoje mesmo e descubra como podemos elevar seus eventos e negócios ao próximo nível."
        buttonText="Falar com Especialista"
        buttonLink="/contato"
        secondaryButtonText="Ver Produtos"
        secondaryButtonLink="/smart-events"
        background="gradient"
      />
    </div>
    </>
  );
};

export default ContatoPage;
