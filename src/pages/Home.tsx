import bgHome from '../assets/bgHome.png';

import sobre from '../assets/sobre.png';
import 'react-vertical-timeline-component/style.min.css';
import { EventBanner } from './Home/components/EventBanner';
import { AboutSection } from './Home/components/AboutSection';
import { Menu } from './Home/components/Menu';
import { Footer } from './Home/components/Footer';
import { TimelineSection } from './Home/components/TimelineSection';
import { TeamSection } from './Home/components/TeamSection/index';
import { LogoWithDescriptionSection } from './Home/components/LogoWithDescriptionSection';
import { MapSection } from './Home/components/MapSection';

import canal_do_leite from '../assets/canal_do_leite.png';
import corijal from '../assets/cotrijal.jpeg';
import delaval from '../assets/delaval.jpeg';
import gaio from '../assets/gaio.jpeg';
import idr from '../assets/idr.jpeg';
import rural_leite from '../assets/rural_leite.jpeg';
import sicredi from '../assets/sicredi.jpeg';
import tortuga from '../assets/tortuga.jpeg';
import utfpr from '../assets/utfpr.jpeg';
import zootecnia from '../assets/zootecnia.jpeg';

import altair from '../assets/altair.jpeg';
import ayrton from '../assets/ayrton.jpeg';
import luis_gustavo from '../assets/luis_gustavo.jpeg';
import renne from '../assets/renne.jpeg';

const supporters = [
    { text: '', image: canal_do_leite },
    { text: '', image: idr },
    { text: '', image: utfpr },
    { text: '', image: zootecnia },
];

const sponsors = [
    { text: '', image: corijal },
    { text: '', image: delaval },
    { text: '', image: gaio },
    { text: '', image: rural_leite },
    { text: '', image: sicredi },
    { text: '', image: tortuga },
];

const events = [
    { id: 1, date: 'Day 1', text: 'Text bla bla bla bla' },
    { id: 2, date: 'Day 2', text: 'Bla bla bla bla' },
];

const speakers = [
    {
        id: 1,
        name: 'Renne Granato',
        title: 'A pecuária 4.0 para melhorar o bem-estar animal, a eficiência econômica e para trazer competitividade a pecuária leiteira',
        about: 'Bacharel em Zootecnia pela Universidade Federal de Lavras, Pós-Graduação em Nutrição de Ruminantes Leiteiros pela Rehagro, Mestrado em Administração de Negócios e Pós-MBA em Inteligência Empresarial pela Fundação Getúlio Vargas. Atualmente ocupa o cargo de Superintendente de Novos Negócios & Produção Animal, Cotrijal – RS.',
        imageUrl: renne,
    },
    {
        id: 2,
        name: 'Luis Gustavo Ribeiro Pereira',
        title: 'Estratégias nutricionais para reduzir a emissão de metano',
        about: 'Possui graduação em Medicina Veterinária (1999) e doutorado em Ciência Animal (2003) pela Universidade Federal de Minas Gerais. Tem experiência na área de Zootecnia, com ênfase em Nutrição de Ruminantes, Sustentabilidade Pecuária e Manejo de Precisão, atuando principalmente nos temas: nutrição de ruminantes, leite baixo carbono e pecuária leiteira de precisão. Atualmente é Pesquisador da Embrapa Gado de Leite e Cientista Visitante da Universidade de Wisconsin-Madison.',
        imageUrl: luis_gustavo,
    },
    {
        id: 3,
        name: 'Altair Antonio Valloto',
        title: 'Aspectos da vaca ideal, para alta vida produtiva com rentabilidade',
        about: 'Formação em Medicina Veterinária pela Universidade (UFPR), Especializações em: Bovinocultura (UEM), Pecuária Leiteira (UEL), Produção Leiteira (REHAGRO), Mestrado em Zootecnia-Melhoramento Genético, pela Universidade (UFPR), Atualmente é Superintendente Técnico e Administrativo da Associação Paranaense de Criadores de Bovinos da Raça Holandesa. Curso Cochran Fellowship em Genética de Vacas Leiterias, Madison, Wisconsin, EUA. Curso de Pecuária Leiteira Universidade Madison-Wisconsin, EUA. Classificador e Jurado Oficial Nacional das Raças Holandesa e Jersey, coordenador pela APCBRH, da elaboração dos Planos de Melhoramento Genético dos rebanhos leiteiros dos Cooperados da Coop. Frísia-Carambeí-PR, Membro do Conselho Deliberativo Técnico da Associação Brasileira e Paranaense da Raça Holandesa.',
        imageUrl: altair,
    },
    {
        id: 4,
        name: 'Ayrton Kunz',
        title: 'O que devo levar em conta para escolher a tecnologia de geração e uso de Biogás?',
        about: 'Graduação em Química Industrial pela Universidade Federal de Santa Maria, Mestrado e Doutorado em Química pela Universidade Estadual de Campinas, Estágio de pós-doutorado na Texas A & M University (2012) e no USDA/ARS (2012).  Pesquisador da Embrapa na unidade de Concórdia/SC atuando nas áreas digestão anaeróbia, remoção de nitrogênio (via processo Anammox, nitrificação e desnitrificação), remoção de fósforo e reúso de efluentes',
        imageUrl: ayrton,
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
                <main className="w-full flex flex-col px-16 gap-y-32">
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
                    <LogoWithDescriptionSection title="PATROCINADORES" items={sponsors} />
                    <LogoWithDescriptionSection title="APOIADORES" items={supporters} />
                    <TimelineSection events={events} lineColor="#308E96" />
                    <TeamSection speakers={speakers} />
                    <MapSection />
                </main>
                <Footer />
            </div>
        </div>
    );
}
