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

import pet from '../assets/pet.jpg';
import idr from '../assets/idr.jpeg';

import canal_do_leite from '../assets/canal_do_leite.png';
import cotrijal from '../assets/cotrijal.jpeg';
import delaval from '../assets/delaval.jpeg';
import gaio from '../assets/gaio.jpeg';
import rural_leite from '../assets/rural_leite.jpeg';
import sicredi from '../assets/sicredi.jpeg';
import tortuga from '../assets/tortuga.jpeg';
import utfpr from '../assets/utfpr.jpeg';
import zootecnia from '../assets/zootecnia.jpeg';
import dois_vizinhos from '../assets/dois-vizinhos.png';
import timac from '../assets/timac.png';
import itaipu from '../assets/itaipu.png';
import caap from '../assets/caap.jpeg';
import faep from '../assets/faep.jpeg';
import inpasa from '../assets/inpasa.jpeg';

import altair from '../assets/altair.jpeg';
import ayrton from '../assets/ayrton.jpeg';
import luis_gustavo from '../assets/luis_gustavo.jpeg';
import renne from '../assets/renne.jpeg';
import marcelo_cecim from '../assets/marcelo_cecim.jpg';
import rasiel_restelatto from '../assets/rasiel_restelatto.jpg';
import ScrollToTopButton from './Home/components/ScrollToTopButton';

const organizers = [
    { text: '', image: pet, url: 'https://www.instagram.com/petproducaoleiteira' },
    { text: '', image: idr, url: 'https://www.idrparana.pr.gov.br/' },
];

const supporters = [
    { text: '', image: caap, url: 'https://www.facebook.com/cazap.br/' },
    { text: '', image: faep, url: 'https://www.sistemafaep.org.br/' },
    { text: '', image: canal_do_leite, url: 'https://canaldoleite.com/' },
    { text: '', image: utfpr, url: 'http://portal.utfpr.edu.br/campus/doisvizinhos' },
    { text: '', image: zootecnia, url: 'https://www.instagram.com/zootecniautfprdv_oficial/' },
];

const sponsors = [
    { text: '', image: timac, url: 'https://www.timacagro.com.br/' },
    { text: '', image: itaipu, url: 'https://www.itaipu.gov.br/' },
    { text: '', image: cotrijal, url: 'https://www.cotrijal.com.br/' },
    { text: '', image: delaval, url: 'https://www.delaval.com/pt-br/' },
    { text: '', image: gaio, url: 'https://gaioagro.com.br/' },
    { text: '', image: rural_leite, url: '#' },
    { text: '', image: sicredi, url: 'https://www.sicredi.com.br/home/' },
    { text: '', image: tortuga, url: 'https://www.dsm.com/tortuga/pt_BR/home.html' },
    { text: '', image: dois_vizinhos, url: 'https://www.doisvizinhos.pr.gov.br/' },
    { text: '', image: inpasa, url: 'https://www.inpasa.com.br/' },
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
    {
        id: 5,
        name: 'Marcelo da Silva Cecim',
        title: 'Sobre vacas e pessoas: Do monitoramento remoto por inteligência artificial à psicologia bovina" Marcelo Cecim - COWMED',
        about: 'Marcelo Cecim possui graduação em Medicina Veterinária pela Universidade Federal de Santa Maria (UFSM, 1985); Mestrado em Produção Animal com ênfase em Etologia pela Escola de Agricultura da Southern Illinois University (SIU, 1989); PhD em Endocrinologia pela Escola de Medicina da Southern Illinois University (1994). É professor de medicina interna de ruminantes na UFSM desde 1996.',
        imageUrl: marcelo_cecim,
    },
    {
        id: 6,
        name: 'Rasiel Restelatto',
        title: 'Tema a definir',
        about: 'Bacharel em Zootecnia, possui Mestrado em Produção Animal na área de produção e adubação de forragens e Doutorado na área de concentração de produção e conservação de forragens pela Universidade Tecnológica Federal do Paraná (UTFPR) - Campus Dois Vizinhos. Atualmente é Supervisor comercial de DDGS da Inpasa na região sul do Brasil.',
        imageUrl: rasiel_restelatto,
    },
];

const dates = [
    {
        date: 'Dia 21/09',
        events: [
            { id: 1, text: '7:30 - Credenciamento' },
            { id: 2, text: '8:30 – Abertura do evento' },
            {
                id: 3,
                text: (
                    <>
                        9:30 - A pecuária 4.0 para melhorar o bem-estar animal, a eficiência econômica e para trazer
                        competitividade ao produtor familiar, <b className="text-black">Renne Granato</b> – Cotrijal –
                        RS
                    </>
                ),
                link: '#speaker-1',
            },
            { id: 4, text: '10:20 – Milk break' },
            { id: 5, text: '10:40 – A confirmar' },
            { id: 6, text: '11:30 – Mesa redonda' },
            { id: 7, text: '12:00 – Intervalo para almoço' },
            {
                id: 8,
                text: (
                    <>
                        13:30 – “Aspectos da vaca ideal, para longa vida produtiva com rentabilidade”{' '}
                        <b className="text-black">Altair Antonio Valloto</b> - Associação Paranaense de Criadores de
                        Bovinos da Raça Holandesa
                    </>
                ),
                link: '#speaker-3',
            },
            { id: 9, text: '14:20 – A confirmar' },
            { id: 10, text: '15:10 – Mesa Redonda' },
            { id: 11, text: '15:40 – Milk Break' },
        ],
    },
    {
        date: 'Dia 22/09',
        events: [
            {
                id: 1,
                text: (
                    <>
                        09:00 – <b className="text-black">Rasiel Restelatto</b>
                    </>
                ),
                link: '#speaker-6',
            },
            { id: 2, text: '09:50 – Milk Break' },
            {
                id: 3,
                text: (
                    <>
                        10:20 – ‘’Sobre vacas e pessoas: Do monitoramento remoto por inteligência artificial à
                        psicologia bovina’’ <b className="text-black">Marcelo Cecim</b> – COWMED
                    </>
                ),
                link: '#speaker-5',
            },
            {
                id: 4,
                text: (
                    <>
                        11:10 - Mesa Redonda <br /> Mediador - Professor Doutor{' '}
                        <b className="text-black">Fernando Kuss</b>
                    </>
                ),
            },
            { id: 5, text: '12:00 – Intervalo para almoço' },
            {
                id: 6,
                text: (
                    <>
                        13:30 - O que devo levar em conta para escolher a tecnologia de geração e uso de Biogás?{' '}
                        <b className="text-black">Ayrton Kunz</b> – Embrapa Concórdia
                    </>
                ),
                link: '#speaker-4',
            },
            {
                id: 7,
                text: (
                    <>
                        14:20 – Estratégias nutricionais para reduzir a emissão de metano{' '}
                        <b className="text-black">Luis Gustavo Ribeiro Pereira</b> - Pesquisador da Embrapa Gado de
                        Leite
                    </>
                ),
                link: '#speaker-2',
            },
            {
                id: 8,
                text: (
                    <>
                        15:10 - Mesa Redonda <br /> Mediadora - Professora Doutora{' '}
                        <b className="text-black">Magali Floriano da Silveira</b>
                    </>
                ),
            },
            { id: 9, text: '15:40 – Milk Break' },
        ],
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
                        title="3º TECNOLEITE"
                        subtitle={`Produção de Leite com Tecnologia e Sustentabilidade ${'\n'} 21 e 22 de Setembro`}
                    />
                </header>
                <main className="w-full flex flex-col px-8 md:px-16 gap-y-8 md:gap-y-32">
                    <TimelineSection dates={dates} lineColor="#308E96" />
                    <AboutSection
                        title="SOBRE"
                        text="O TECNOLEITE é um evento técnico de caráter extensionista, idealizado, organizado e realizado pelo grupo PET Produção Leiteira da UTFPR - Campus Dois Vizinhos, em parceria com a Universidade Tecnológica Federal do Paraná, o IDRPR e outras organizações público e privadas atuantes na cadeia produtiva do leite. 
                        É evento bianual que tem como objetivo divulgar conhecimento científico, técnico e tecnológico a acadêmicos, pesquisadores, professores, produtores e profissionais que atuam direta ou indiretamente na produção de leite, com o intuito de contribuir para o aumento da produtividade, de forma sustentável e economicamente viável e, dessa forma, promover a formação continuada do público que atua em todos os extratos da cadeia produtiva do leite."
                        imageUrl={sobre}
                    />
                    <LogoWithDescriptionSection col={2} title="ORGANIZADORES" items={organizers} />
                    <LogoWithDescriptionSection title="APOIADORES" items={supporters} />
                    <LogoWithDescriptionSection title="PATROCINADORES" items={sponsors} />
                    <TeamSection speakers={speakers} />
                    <div className="mt-4 sm:mt-0">
                        <MapSection />
                    </div>
                </main>
                <ScrollToTopButton />
                <Footer />
            </div>
        </div>
    );
}
