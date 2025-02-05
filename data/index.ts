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
    title: "Priorizo a colaboração com o cliente, promovendo a comunicação aberta ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Sou muito flexível com comunicações de fuso horário",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Minha pilha de tecnologia",
    description: "Eu constantemente tento melhorar",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Entusiasta da tecnologia com paixão pelo desenvolvimento.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Atualmente desenvolvendo aplicativo e jogos.",
    description: "",
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
    img: "/p1.jpeg",
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
    desc: "Auxiliou no desenvolvimento de uma plataforma baseada na web usando React.js, aprimorando a interatividade.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev",
    desc: "Projetei e desenvolvi um aplicativo móvel para plataformas iOS e Android usando React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
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
