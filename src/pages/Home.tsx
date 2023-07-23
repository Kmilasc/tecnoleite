/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ClockIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.js';

import logo from '../assets/logo.png';
import bgHome from '../assets/bgHome.png';
import sobre from '../assets/sobre.png';
import { SpeakerPresentation } from '../components/SpeakerPresentation';
import 'react-vertical-timeline-component/style.min.css';

const fullConfig = resolveConfig(tailwindConfig);

const navigation = [
    { name: 'Inicio', href: '#' },
    { name: 'Sobre', href: '#' },
    { name: 'Programação', href: '#' },
    { name: 'Equipe', href: '#' },
];

const events = [
    { date: 'Day 1', text: 'Text bla bla bla bla' },
    { date: 'Day 2', text: 'Bla bla bla bla' },
    // Add more events here...
];

export default function Home() {
    return (
        <div className="w-full">
            <div className="min-h-full flex flex-col">
                <Popover className="relative bg-white">
                    <div className="w-full">
                        <div className="flex justify-between items-center md:justify-start md:space-x-10 mb-2 mt-5">
                            <div className="flex justify-start lg:w-0 lg:flex-1">
                                <a href="#">
                                    <span className="sr-only">Workflow</span>
                                    <img className="place-items-center h-20 w-20 ml-5" src={logo} alt="" />
                                </a>
                            </div>
                            <div className="-mr-2 -my-2 md:hidden">
                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open menu</span>
                                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                            <nav className="hidden md:flex space-x-10">
                                {navigation.map((item, itemIdx) => (
                                    <a
                                        key={itemIdx}
                                        href={item.href}
                                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </nav>
                            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0" />
                        </div>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="absolute top-0 inset-x-0 p-2 transition transform origin-top z-10 md:hidden"
                        >
                            <div className="p-4 rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="pt-4 flex items-center justify-between">
                                    <div>
                                        <img className="h-8 w-auto" src={logo} alt="" />
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                                            <span className="sr-only">Close menu</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="pt-5 pb-6">
                                    <div className=" space-y-1">
                                        {navigation.map(item => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="block  py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
                <main className=" w-full flex flex-col">
                    <div className="relative">
                        <div>
                            <img className="brightness-50 w-full pr-0 mb-14 mr-0" src={bgHome} alt="" />
                            <div className="w-full text-2xl xs:text-4xl sm:text-6xl text-center font-conforter absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-extrabold border-spacing-1  p-4">
                                3º Tecnoleite
                                <br />
                                <div className=" text-xs xs:text-lg  sm:text-3xl font-bold">
                                    Produção de leite com tecnologia e sustentabilidade
                                    <br />1 e 2 de Setembro
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex-1 ml-28 mr-4  w-full text-2xl xs:text-4xl sm:text-6xl font-conforter text-black font-bold border-spacing-1">
                            <span className="border-b-4 border-green-600 ">SOBRE</span>
                            <p className="text-xl font-normal mt-8 flex-1" style={{ height: 500, width: 500 }}>
                                Texto texto texto texto texo texto texto texto texto texto texto texo texto texto texto
                                texto texto texto texo texto texto texto texto texto texto texto texo texto texto texto
                                texto texto texto texo texto texto texto texto texto texo texto texto texto texto texto
                                texto texo texto texto texto texto texto texto texo texto texto texto Texto texto texto
                                texto texo texto texto texto texto texto texto texo texto texto texto texto texto texto
                                texo texto texto texto texto texto texto texto texo texto texto texto texto texto texto
                                texo texto texto texto texto texto texo texto texto texto texto texto texto texo texto
                                texto texto texto texto texto
                            </p>
                        </div>
                        <img className="flex-1 float-right mr-28 ml-4 w-96 h-96 drop-shadow-lg" src={sobre} alt="" />
                    </div>
                    <div className="flex flex-col">
                        <div className="self-center pb-8">
                            <span className="text-2xl xs:text-4xl sm:text-6xl font-conforter text-black font-bold border-spacing-1 border-b-4 border-green-600 ">
                                CRONOGRAMA
                            </span>
                        </div>
                        <div className="flex flex-row gap-x-4 mx-8">
                            <VerticalTimeline lineColor={fullConfig.theme.colors.green['500']}>
                                {events.map((event, index) => (
                                    <VerticalTimelineElement
                                        key={index}
                                        className="vertical-timeline-element--work"
                                        date={event.date}
                                        iconStyle={{
                                            background: fullConfig.theme.colors.green['500'],
                                            color: fullConfig.theme.colors.white,
                                        }}
                                        icon={<ClockIcon />}
                                        contentStyle={{ background: fullConfig.theme.colors.gray['100'] }}
                                    >
                                        <h3 className="vertical-timeline-element-title">{event.date}</h3>
                                        <p>{event.text}</p>
                                    </VerticalTimelineElement>
                                ))}
                            </VerticalTimeline>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="self-center pb-8">
                            <span className="text-2xl xs:text-4xl sm:text-6xl font-conforter text-black font-bold border-spacing-1 border-b-4 border-green-600 ">
                                EQUIPE
                            </span>
                        </div>
                        <div className="flex flex-row gap-x-4 mx-8">
                            <SpeakerPresentation />
                            <SpeakerPresentation />
                            <SpeakerPresentation />
                            <SpeakerPresentation />
                        </div>
                    </div>
                </main>
                <footer className="bg-gray-50 mt-12" aria-labelledby="footer-heading">
                    <div className="w-full">
                        <div className="border-t border-gray-200 py-8">
                            <nav className="flex space-x-5 justify-center">
                                {navigation.map((item, itemIdx) => (
                                    <a
                                        key={itemIdx}
                                        href={item.href}
                                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
