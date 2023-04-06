import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import Link from 'next/link'

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import ExpandableImage from '../components/ExpandableImage';

import curriculo from '../assets/curriculo.jpg';
// import omnistack from '../assets/certificado_omnistack.pdf';
import estudosReact_1 from './assets/estudosReact_1.png';
import estudosReact_2 from './assets/estudosReact_2.jpg';
import estudosReact_3 from './assets/estudosReact_3.jpg';
import mockup from './assets/code-mockup.png';

import ScrollReveal from 'scrollreveal';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  useEffect(() => {
    ScrollReveal().reveal('.header',
      {
        delay: 600,
        distance: '200px',
        origin: 'left',
        // rotate: { x: 20, z: 20 } 
      }
    );
    ScrollReveal().reveal('.publication, .footer', { delay: 200, distance: '200px' });
    ScrollReveal().reveal('.curriculo', { delay: 1000, distance: '200px', origin: 'right', rotate: { x: 20, z: 20 } });
  }, []);


  const [count, setCount] = useState(0)

  const [showImage, setShowImage] = useState(false);

  const handleShowImage = () => {
    setShowImage(true);
  };

  const handleCloseImage = () => {
    setShowImage(false);
  };

  return (
    <>
      <script>ScrollReveal().reveal('.headline');</script>

      <div>

        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">

          {/* Titulos */}
          <div className="max-w-[1100px] w-full flex items-center justify-between mt-20 mx-auto">
            <div className='header'>
              <div className="max-w-[640px]">

                <h1 className="mt-8 text-[2.5rem] leading-tight">
                  Landing Page - Gabriel Welter
                </h1>
                <p className="mt-4 text-gray-200 leading-relaxed">
                  Procuro oportunidade de trabalho meio turno com Frontend. <br />
                  Destaca-se no conhecimento em HTML, CSS, Tailwind, GitHub, Unity, C#.
                </p>
                <p className="mt-4 text-gray-200 leading-relaxed">
                  Este site foi desenvolvido com HTML, CSS, Tailwindcss, ReactJS, TS, Vite e a hospedagem foi feita utilizando o serviço da Vercel.
                </p>
                <h1 className="mt-8 text-[2.5rem] leading-tight italic">
                  <strong className="text-blue-500">Em construção...</strong>
                </h1>
                <p className="mt-4 text-gray-200 leading-relaxed">
                  Os links para todos os sites e projetos no git ainda serão adicionados.
                </p>
              </div></div></div>
          {/* <p className="mt-4 text-gray-200 leading-relaxed">
        Quero fazer um "gráfico" com meus conhecimentos. <br />

        Usei pouco - 1 Estrela <br />
        Sei o básico, me viro bem - 2 Estrelas <br />
        Uso geralmente - 3 Estrelas <br />
        Estou confortável - 4 Estrelas <br />
      </p>
      <p className="mt-4 text-gray-200 leading-relaxed">
        Unity e C# - 4 <br />
        HTML - 4 <br />
        GitHub - 4 <br />
        CSS - 3 <br />
        TailwindCSS - 2 <br />
        Pyton - 2 <br />
        C e C++ - 2 <br />
        JS - 1 <br />
        TS - 1 <br />
        ReactJS - 1 <br />
        Unreal - 1 <br />
      </p>

      <p>
        Talvez um gráfico de personalidade aqui?
        Com coisas boas de cada lado do gráfico, cada item algo é bom mas outro é ruim
      
        
            
          </div> */}

          {/* Publicacoes */}
          <div className="publication max-w-[1100px] w-full flex flex-col justify-between mt-20 mx-auto"> {/* items-center  */}
            <div className="max-w-[640px] postagem">
              <h1 className="mt-8 text-[2.5rem] leading-tight">
                <strong className="text-blue-500">Site Rocketseat</strong>
              </h1>
              <p className="mt-4 text-gray-200 leading-relaxed">
                06/2022 <br />
                Essa semana estou participando do evento Ignite Lab da Rocketseat.
                O evento tem como objetivo o desenvolvimento de uma aplicação com foco em React. <br />
                O que mais gostei de aprender no evento até aqui foi conhecer e usar várias ferramentas: Vite, Tailwind, Graphcms, Apollo. <br />
                #reactjs #rocketseat
              </p>
            </div>
          </div>

          <div className="publication max-w-[1100px] w-full flex flex-col justify-between mt-20 mx-auto">
            <div className="max-w-[640px] postagem">
              <h1 className="mt-8 text-[2.5rem] leading-tight">
                <strong className="text-blue-500">Site InverseVR</strong>
              </h1>
              <p className="mt-4 text-gray-200 leading-relaxed">
                05/2022 <br />
                Desenvolvimento do site da InverseVR LTDA usando HTML e CSS. <br />
                <a href="https://inversevr.com.br/" target="_blank">💻 https://inversevr.com.br/</a><br />
                #html #css #bootstrap #frontend
              </p>
            </div>
          </div>

          <div className="publication max-w-[1100px] w-full flex flex-col justify-between mt-20 mx-auto">
            <div className="max-w-[640px] postagem">
              <h1 className="mt-8 text-[2.5rem] leading-tight">
                <strong className="text-blue-500">Estudos em React Danki Code e Rocketseat</strong>
              </h1>
              <p className="mt-4 text-gray-200 leading-relaxed">
                04/2022 <br />
                Iniciando os estudos em React por meio dos conteúdos da Danki Code e Rocketseat.
                React é uma biblioteca JavaScript para construção de interfaces de usuário. <br />
                #javascript #react #frontend
              </p>
              <div className='flex justify-between mt-5'>
                <ExpandableImage
                  smallImageSrc={estudosReact_1}
                  largeImageSrc={estudosReact_1}
                />
                <ExpandableImage
                  smallImageSrc={estudosReact_2}
                  largeImageSrc={estudosReact_2}
                />
                <ExpandableImage
                  smallImageSrc={estudosReact_3}
                  largeImageSrc={estudosReact_3}
                />
              </div>
              <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"></script>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css" />

            </div>
          </div>

          <div className="publication max-w-[1100px] w-full flex flex-col justify-between mt-20 mx-auto">
            <div className="max-w-[640px] postagem">
              <h1 className="mt-8 text-[2.5rem] leading-tight">
                <strong className="text-blue-500">Carteira de Investimentos</strong>
              </h1>
              <p className="mt-4 text-gray-200 leading-relaxed">
                Site para organizar investimentos realizado como trabalho final da disciplina de Programação Web da UFSM.
                Foi desenvolvido com HTML, CSS, Taiwindcss, PHP.
                Bernardo Gatto foi responsável pelo Backend em PHP.
              </p>
            </div>
          </div>
          <div className="publication max-w-[1100px] w-full flex flex-col justify-between mt-20 mx-auto">
            <div className="max-w-[640px] postagem">
              <h1 className="mt-8 text-[2.5rem] leading-tight">
                <strong className="text-blue-500">OmniStack 11 - Rocketseat</strong>
              </h1>
              <p className="mt-4 text-gray-200 leading-relaxed">
                03/2020 <br />
                Participei da semana de desenvolvimento prático da Rocketseat e tive uma introdução a Node.js, ReactJS e React Native. <br />
                <a href={omnistack} target="_blank">Certificado OmniStack 11</a>
              </p>
            </div>
          </div>

          <div className='footer'>
            <img src={mockup} className="mt-10 headline" alt="" />
          </div>

        </div>



      </div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className='bg-green-800'>Test</h1>


        <Link href="/sobre">Ir para pagina Sobre</Link>
      </main>
    </>
  )
}
