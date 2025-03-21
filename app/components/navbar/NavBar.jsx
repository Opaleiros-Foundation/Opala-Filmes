'use client'
import {Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react'
import {Bars3Icon, BellIcon, XMarkIcon} from '@heroicons/react/24/outline'
import Image from "next/image";
import Logo from '@/public/logo.png'
import Link from "next/link";
import {FaLongArrowAltLeft} from "react-icons/fa";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export const NavBar = ({navigation, onClick, isHome}) => {
    return (
        <Disclosure as="nav" className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton
                            className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                            <span className="absolute -inset-0.5"/>
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden"/>
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block"/>
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <Link href="/">
                                <Image
                                    alt="Opaleiros"
                                    src={Logo}
                                    className="h-8 w-auto"
                                />
                            </Link>
                        </div>
                        {isHome ? (
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <div key={item.name}>
                                            <button className={classNames(
                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'rounded-md px-3 py-2 text-sm font-medium cursor-pointer',
                                            )}
                                                    onClick={() => item.onClick(item.name)}
                                            >{item.name}
                                            </button>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        ): (
                            <Link href={'/'}>
                                <button
                                    className="flex items-center justify-center px-4 py-2 text-white bg-blue-600 hover:bg-blue-500 rounded-md shadow-md transition duration-200 cursor-pointer ml-6"
                                >
                                    <span className="text-lg mr-2"><FaLongArrowAltLeft/></span>
                                    <span>Voltar</span>
                                </button>
                            </Link>
                        )}

                    </div>
                    {isHome && (
                        <button
                            className="flex items-center justify-center px-4 py-2 text-white bg-blue-600 hover:bg-blue-500 rounded-md shadow-md transition duration-200 cursor-pointer"
                            onClick={onClick}
                        >
                            <span className="text-lg mr-2">+</span>
                            <span>Adicionar</span>
                        </button>
                    )}

                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}