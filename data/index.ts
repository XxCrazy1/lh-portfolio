import { links } from "@/config";

export const navItems = [
  { name: "Sobre", link: "#about" },
  { name: "Projetos", link: "#projects" },
  { name: "Testemunhas", link: "#testimonials" },
  { name: "Contato", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "Promovendo Comunicação Aberta",
    description: "Valorizo a parceria com o cliente, garantindo um fluxo de comunicação claro e constante para resultados excepcionais.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Comunicação Facilitada",
    description: "Adapto-me aos diferentes fusos horários, garantindo uma comunicação contínua e sem barreiras para o sucesso do seu projeto.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Ferramentas Modernas e Eficientes",
    description: "Utilizo as tecnologias mais recentes e eficazes para desenvolver soluções inovadoras e de alta performance, garantindo o sucesso do seu projeto.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Paixão pelo Desenvolvimento.",
    description: "Amo explorar novas tecnologias e aplicar meu conhecimento em desenvolvimento para criar soluções inovadoras e impactantes.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Inovação em Cada Projeto",
    description: "Atualmente, estou focado no desenvolvimento de aplicativos e jogos, trazendo criatividade e inovação para cada projeto que realizo.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Você quer começar um projeto ou designer?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Indentidade visual - Pastelaria Hoffman's",
    des: "Indentidade visual para a pastelaria, com plaeta de cores",
    img: "/p1.png",
    iconLists: ["/ps.png"],
    link: "https://www.instagram.com/hoffmanspastel/",
    sourceCode: "https://www.instagram.com/hoffmanspastel/",
  },
] as const;

export const testimonials = [
  {
    quote: `Colaborando com 'Leandro' foi um prazer absoluto. Seu profissionalismo, prontidão e dedicação em entregar resultados excepcionais ficaram evidentes em todo o nosso projeto. Leandro O entusiasmo por todas as facetas do designer realmente se destaca. Se você está procurando elevar sua marca, Leandro é o parceiro ideal.`,
    name: "Pastelaria Hoffman's",
    title: "..................",
  },
  {
    quote: `Trabalhar com a equipe foi uma experiência incrível. Sua criatividade e atenção aos detalhes fizeram toda a diferença.`,
    name: "Empresa XYZ",
    title: "CEO",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer",
    desc: "Desenvolverei interfaces dinâmicas e interativas com excelência e inovação, criando experiências de usuário atraentes e eficientes que destacam a presença digital do seu negócio.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev",
    desc: "Transformarei suas ideias em aplicativos funcionais e inovadores, criando soluções personalizadas que atendem às suas necessidades e elevam sua presença no mundo digital.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Desginer Gráfico",
    desc: "Transformarei suas ideias em arte visual com estilo e precisão, criando designs únicos e impactantes que destacam o seu negócio..",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Estrategista digital",
    desc: "Conquistarei sua presença online com estratégia e inovação, ajudando seu negócio a se destacar e crescer no ambiente digital com soluções criativas e eficazes.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "Instagram",
    img: "/insta.png",
    link: "https://www.instagram.com/leh_hoffman/",
  },
  {
    name: "WhatsApp",
    img: "/whts.png",
    link: "https://api.whatsapp.com/send?phone=5521996972349&text=Oi%2C%20Leandro!%20",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "Typescript"],
  stack2: ["Vue.js", "AWS", "MongoDB"],
} as const;
