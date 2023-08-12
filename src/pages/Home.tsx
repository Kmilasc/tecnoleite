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
import cotrijal from '../assets/cotrijal.jpeg';
import delaval from '../assets/delaval.jpeg';
import gaio from '../assets/gaio.jpeg';
import idr from '../assets/idr.jpeg';
import rural_leite from '../assets/rural_leite.jpeg';
import sicredi from '../assets/sicredi.jpeg';
import tortuga from '../assets/tortuga.jpeg';
import utfpr from '../assets/utfpr.jpeg';
import zootecnia from '../assets/zootecnia.jpeg';
import dois_vizinhos from '../assets/dois_vizinhos.png';

import altair from '../assets/altair.jpeg';
import ayrton from '../assets/ayrton.jpeg';
import luis_gustavo from '../assets/luis_gustavo.jpeg';
import renne from '../assets/renne.jpeg';

const supporters = [
    { text: '', image: canal_do_leite, url: 'https://canaldoleite.com/' },
    { text: '', image: idr, url: 'https://www.idrparana.pr.gov.br/' },
    { text: '', image: utfpr, url: 'http://portal.utfpr.edu.br/campus/doisvizinhos' },
    { text: '', image: zootecnia, url: '' },
];

const sponsors = [
    { text: '', image: cotrijal, url: 'https://www.cotrijal.com.br/' },
    { text: '', image: delaval, url: 'https://www.delaval.com/pt-br/' },
    { text: '', image: gaio, url: 'https://gaioagro.com.br/' },
    { text: '', image: rural_leite, url: '' },
    { text: '', image: sicredi, url: 'https://www.sicredi.com.br/home/' },
    { text: '', image: tortuga, url: 'https://www.dsm.com/tortuga/pt_BR/home.html' },
    { text: '', image: dois_vizinhos, url: 'https://www.doisvizinhos.pr.gov.br/' },
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

const events = [
    { id: 1, date: 'Dia 21/09', text: '7:30 horas - Credenciamento' },
    { id: 2, date: 'Dia 21/09', text: '8:30 horas – Mesa de abertura' },
    {
        id: 3,
        date: 'Dia 21/09',
        text: '9:30 horas - A pecuária 4.0 para melhorar o bem-estar animal, a eficiência econômica e para trazer competitividade ao produtor familiar, Renne Granato – Cotrijal – RS',
        link: '#speaker-1',
    },
    { id: 4, date: 'Dia 21/09', text: '10:20 horas – Milk break' },
    { id: 5, date: 'Dia 21/09', text: '10:40 horas – A confirmar' },
    { id: 6, date: 'Dia 21/09', text: '11:30 horas – Mesa redonda' },
    { id: 7, date: 'Dia 21/09', text: '12:00 horas – Intervalo para almoço' },
    {
        id: 8,
        date: 'Dia 21/09',
        text: '13:30 horas – “Aspectos da vaca ideal, para alta vida produtiva com rentabilidade” Altair Antonio Valloto - Associação Paranaense de Criadores de Bovinos da Raça Holandesa',
        link: '#speaker-3',
    },
    { id: 9, date: 'Dia 21/09', text: '14:20 horas – A confirmar' },
    { id: 10, date: 'Dia 21/09', text: '15:10 horas – Mesa Redonda' },
    { id: 11, date: 'Dia 21/09', text: '15:40 – Milk Break' },
    { id: 12, date: 'Dia 22/09', text: '09:00 horas – Rasiel Restelatto', link: '#speaker-' },
    { id: 13, date: 'Dia 22/09', text: '09:50 horas – Milk Break' },
    { id: 14, date: 'Dia 22/09', text: '10:20 horas – Marcelo Cecim - A confirmar', link: '#speaker-' },
    { id: 15, date: 'Dia 22/09', text: '11:10 horas - Mesa Redonda' },
    { id: 16, date: 'Dia 22/09', text: '11:40 – Almoço' },
    {
        id: 17,
        date: 'Dia 22/09',
        text: '13:30 - O que devo levar em conta para escolher a tecnologia de geração e uso de Biogás? Ayrton Kunz – Embrapa Concórdia',
    },
    {
        id: 18,
        date: 'Dia 22/09',
        text: '14:20 horas – Estratégias nutricionais para reduzir a emissão de metano Luis Gustavo Ribeiro Pereira - Pesquisador da Embrapa Gado de Leite',
    },
    { id: 19, date: 'Dia 22/09', text: '15:10 - Mesa Redonda' },
    { id: 20, date: 'Dia 22/09', text: '15:40 – Milk Break' },
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
                        subtitle={`Produção de leite com tecnologia e sustentabilidade ${'\n'} 21 e 22 de Setembro`}
                    />
                </header>
                <main className="w-full flex flex-col px-8 md:px-16 gap-y-8 md:gap-y-32">
                    <TimelineSection events={events} lineColor="#308E96" />
                    <AboutSection
                        title="SOBRE"
                        text="O TECNOLEITE é um evento técnico de caráter extensionista, idealizado, organizado e realizado pelo grupo PET Produção Leiteira da UTFPR - Campus Dois Vizinhos, em parceria com a Universidade Tecnológica Federal do Paraná, o IDRPR e outras organizações público e privadas atuantes na cadeia produtiva do leite. 
                        É evento bianual que tem como objetivo divulgar conhecimento científico, técnico e tecnológico a acadêmicos, pesquisadores, professores, produtores e profissionais que atuam direta ou indiretamente na produção de leite, com o intuito de contribuir para o aumento da produtividade, de forma sustentável e economicamente viável e, dessa forma, promover a formação continuada do público que atua em todos os extratos da cadeia produtiva do leite."
                        imageUrl={sobre}
                    />
                    {/* Organizadores */}
                    <LogoWithDescriptionSection title="APOIADORES" items={supporters} />
                    <LogoWithDescriptionSection title="PATROCINADORES" items={sponsors} />
                    <TeamSection speakers={speakers} />
                    <div className="mt-4 sm:mt-0">
                        <MapSection />
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
}
