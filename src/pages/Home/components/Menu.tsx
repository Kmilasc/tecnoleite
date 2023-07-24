/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import logo from '../../../assets/logo.jpg';

const navigation = [
    { name: 'Inicio', href: '#' },
    { name: 'Sobre', href: '#' },
    { name: 'Programação', href: '#' },
    { name: 'Equipe', href: '#' },
];

export function Menu() {
    return (
        <Popover className="relative bg-white">
            <div className="w-full">
                <div className="flex justify-between items-center md:justify-start md:space-x-10 mb-2 mt-5">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                            <span className="sr-only">Workflow</span>
                            <img className="place-items-center h-20 w-60 ml-5" src={logo} alt="" />
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
                                className="text-base font-medium text-c2 hover:text-c1"
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
                                        className="block  py-2 rounded-md text-base font-medium text-c2 hover:text-c1"
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
    );
}
