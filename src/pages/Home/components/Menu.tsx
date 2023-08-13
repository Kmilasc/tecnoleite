/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import logo from '../../../assets/logo.jpg';

export const navigation = [
    { name: 'Inicio', href: '#event-banner' },
    { name: 'Sobre', href: '#about-section' },
    { name: 'Programação', href: '#cronogram' },
    { name: 'Equipe', href: '#team' },
    { name: 'Inscrição', href: 'https://www.even3.com.br/tecnoleite-353585/', special: true },
];

export function Menu() {
    return (
        <Popover className="relative bg-white">
            <div className="w-full">
                <div className="flex justify-between items-center md:justify-start md:space-x-10 mb-2 mt-5">
                    <div className="flex justify-start flex-1">
                        <a href="#">
                            <span className="sr-only">Workflow</span>
                            <img className="place-items-center h-16 md:h-24 ml-12 p-1" src={logo} alt="" />
                        </a>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <nav className="hidden md:flex space-x-10 items-center ml-auto pr-4">
                        {navigation.map(({ href, name, special }) => (
                            <a
                                key={name}
                                href={href}
                                target={href[0] === '#' ? undefined : '_blank'}
                                className="text-base font-medium text-c2 hover:text-main-600"
                                rel="noreferrer"
                            >
                                {special ? (
                                    <button
                                        type="button"
                                        className="text-white bg-gradient-to-r from-main-400 via-main-500 to-main-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-main-300 dark:focus:ring-main-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    >
                                        {name}
                                    </button>
                                ) : (
                                    name
                                )}
                            </a>
                        ))}
                    </nav>
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
                            <div className="space-y-1">
                                {navigation.map(({ name, href, special }) => (
                                    <a
                                        target={href[0] === '#' ? undefined : '_blank'}
                                        data-special={special}
                                        key={name}
                                        href={href}
                                        className="block data-[special=true]:text-center py-2 rounded-md text-base font-medium text-c2 hover:text-main-600"
                                        rel="noreferrer"
                                    >
                                        {special ? (
                                            <button
                                                type="button"
                                                className="text-white bg-gradient-to-r from-main-400 via-main-500 to-main-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-main-300 dark:focus:ring-main-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                            >
                                                {name}
                                            </button>
                                        ) : (
                                            name
                                        )}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}
