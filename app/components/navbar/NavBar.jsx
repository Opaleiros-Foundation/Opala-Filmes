'use client'
import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import Image from "next/image"
import Logo from '@/public/opala-filmes.png'
import Link from "next/link"
import {FaLongArrowAltLeft} from "react-icons/fa"
import {BiCameraMovie} from "react-icons/bi"
import './styles.css'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const NavBar = ({navigation, onClick, isHome}) => {
    return (
        <Disclosure as="nav" className="relative retro-cinema">
            {({open}) => (
                <>
                    <div className="h-4 w-full film-strip"></div>
                    
                    <div className="header-background">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
                            <div className="nav-container">
                                {/* Botão mobile */}
                                <div className="sm:hidden">
                                    <DisclosureButton className="mobile-menu-button">
                                        <span className="sr-only">Abrir menu</span>
                                        {open ? (
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                        )}
                                    </DisclosureButton>
                                </div>

                                {/* Logo */}
                                <div className="nav-logo">
                                    <Link href="/">
                                        <Image
                                            alt="Opaleiros"
                                            src={Logo}
                                            className="h-24 w-auto neon-flicker"
                                            priority
                                        />
                                    </Link>
                                </div>

                                {/* Menu desktop */}
                                {isHome ? (
                                    <div className="hidden sm:block">
                                        <div className="nav-menu">
                                            {navigation.map((item) => (
                                                <button
                                                    key={item.name}
                                                    onClick={() => item.onClick(item.name)}
                                                    className={classNames(
                                                        'nav-menu-link px-5 py-3',
                                                        'uppercase tracking-wider',
                                                        'transition-all duration-300',
                                                        item.current
                                                            ? 'text-[#0BDB72]'
                                                            : 'text-[#EAEFF0] hover:text-[#0BDB72]'
                                                    )}
                                                >
                                                    {item.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link href={'/'}>
                                        <button className="nav-menu-link px-6 py-3 flex items-center space-x-3 text-[#EAEFF0] hover:text-[#0BDB72]">
                                            <FaLongArrowAltLeft className="text-lg" />
                                            <span>Voltar</span>
                                        </button>
                                    </Link>
                                )}

                                {/* Botão Adicionar */}
                                {isHome && (
                                    <button
                                        onClick={onClick}
                                        className="add-movie-button rounded-lg px-6 py-3
                                        text-[#0BDB72] hover:text-[#EAEFF0]
                                        transition-all duration-300 uppercase tracking-wider
                                        flex items-center space-x-2"
                                    >
                                        <span className="icon-wrapper">
                                            <BiCameraMovie className="text-xl neon-flicker" />
                                        </span>
                                        <span>Adicionar Filme</span>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="h-4 w-full film-strip"></div>

                    {/* Menu mobile */}
                    <DisclosurePanel className="sm:hidden">
                        <div className="mobile-menu">
                            {navigation.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as="button"
                                    onClick={() => item.onClick(item.name)}
                                    className={classNames(
                                        'mobile-nav-item',
                                        item.current && 'active'
                                    )}
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    )
}