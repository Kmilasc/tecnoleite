import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.js';

import bgHome from '../assets/bgHome.png';
import logoIfood from '../assets/logoIfood.png'
import logoAmazon from '../assets/logoAmazon.png'
import logoNubank from '../assets/logoNubank.jpg'
import sobre from '../assets/sobre.png';
import 'react-vertical-timeline-component/style.min.css';
import { EventBanner } from './Home/components/EventBanner.js';
import { AboutSection } from './Home/components/AboutSection.js';
import { Menu } from './Home/components/Menu.js';
import { Footer } from './Home/components/Footer.js';
import { TimelineSection } from './Home/components/TimelineSection.js';
import { TeamSection } from './Home/components/TeamSection/index.js';

const fullConfig = resolveConfig(tailwindConfig);

const events = [
    { id: 1, date: 'Day 1', text: 'Text bla bla bla bla' },
    { id: 2, date: 'Day 2', text: 'Bla bla bla bla' },
];

const speakers = [
    {
        id: 1,
        name: 'Jack Hendrix',
        title: 'Palestrante 1',
        about: 'Texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto',
        imageUrl: 'https://static1.s123-cdn-static-a.com/uploads/2031/400_5a15a9b2d0271.jpg',
    },
    {
        id: 2,
        name: 'Jack Hendrix',
        title: 'Palestrante 1',
        about: 'Texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto',
        imageUrl: 'https://static1.s123-cdn-static-a.com/uploads/2031/400_5a15a9b2d0271.jpg',
    },
    {
        id: 3,
        name: 'Jack Hendrix',
        title: 'Palestrante 1',
        about: 'Texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto',
        imageUrl: 'https://static1.s123-cdn-static-a.com/uploads/2031/400_5a15a9b2d0271.jpg',
    },
    {
        id: 4,
        name: 'Jack Hendrix',
        title: 'Palestrante 1',
        about: 'Texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto',
        imageUrl: 'https://static1.s123-cdn-static-a.com/uploads/2031/400_5a15a9b2d0271.jpg',
    },
];

export default function Home() {
    return (
        
        <div className="w-full">
            <div className="min-h-full flex flex-col">
                <Menu />
                <header>
                    
                    <EventBanner
                        imageUrl={bgHome}
                        title="3º Tecnoleite"
                        subtitle={`Produção de leite com tecnologia e sustentabilidade ${'\n'} 1 e 2 de Setembro`}
                    />
                    
                </header>
                <main className="w-full flex flex-col px-16 gap-y-12">
                    <AboutSection
                        title="SOBRE"
                        text="Texto texto texto texto texo texto texto texto texto texto texto texo texto texto texto
                        texto texto texto texo texto texto texto texto texto texto texto texo texto texto texto
                        texto texto texto texo texto texto texto texto texto texo texto texto texto texto texto
                        texto texo texto texto texto texto texto texto texo texto texto texto Texto texto texto
                        texto texo texto texto texto texto texto texto texo texto texto texto texto texto texto
                        texo texto texto texto texto texto texto texto texo texto texto texto texto texto texto
                        texo texto texto texto texto texto texo texto texto texto texto texto texto texo texto
                        texto texto texto texto texto"
                        imageUrl={sobre}
                    />
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                        <div className="flex-1 w-full text-2xl xs:text-4xl sm:text-6xl font-conforter text-black font-bold border-spacing-1 text-center xl:text-start xl:self-center">
                            <span className="border-b-4" style={{borderColor: '#308E96' }}>Patrocinadores</span>
                            <div className='relative text-center'>
                                <a href="https://www.ifood.com.br/" target="_blank" style={{ display: "inline-block" }}>
                                    <img className='mt-14 w-40 h-32' src={logoIfood} alt="Logo iFood" />
                                </a>
                                <p className="text-xl font-normal mt-8 flex-1">
                                    Texto texto texto texto texto texto texto texto texto texto texto texto texto texto
                                    texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto
                                    texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto
                                </p>
                            </div>

                            <div className='relative text-center'>
                                <a href="https://www.Amazon.com.br/" target="_blank" style={{ display: "inline-block" }}>
                                    <img className='mt-14 w-40 h-32' src={logoAmazon} alt="Logo Amazon" />
                                </a>
                            </div>
                            <p className="text-xl font-normal mt-8 flex-1 relative text-center">
                                Texto texto texto texto texto texto texto texto texto texto texto texto texto texto
                                texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto
                                texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto
                            </p>
                            <div className='relative text-center'>
                                <a href="https://www.Nubank.com.br/" target="_blank" style={{ display: "inline-block" }}>
                                    <img className='mt-14 w-40 h-32' src={logoNubank} alt="Logo Nubank" />
                                </a>
                            </div>
                            <p className="text-xl font-normal mt-8 flex-1 relative text-center">
                                Texto texto texto texto texto texto texto texto texto texto texto texto texto texto
                                texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto
                                texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto
                            </p>
                        </div> 
                    </div>

                    <TimelineSection events={events} lineColor={"#308E96"} />
                    <TeamSection speakers={speakers} />
                </main>
                <Footer />
                
            </div>
            
        </div>
    );
}
