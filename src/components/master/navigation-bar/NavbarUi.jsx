"use client";
import { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Avatar,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { ShoppingCartSimple, UserCircle } from "@phosphor-icons/react";
import {
    ChevronDownIcon,
    PowerIcon,
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import mecLogoTitle from "/public/brands/mec-nav-logo.png";

export default function NavbarUi({ user, categories, totalCartOrders }) {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            maxWidth="2xl"
            className="xl:px-6"
        >
            <NavbarContent className="md:hidden" justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                />
            </NavbarContent>
            <NavbarContent className="md:hidden pr-3" justify="center">
                <NavbarBrand className=" text-blue-600">
                    <Link href="/">
                        <Image
                            src={mecLogoTitle}
                            width={150}
                            height={150}
                            className=" object-cover"
                            alt="Mec-trade-Logo"
                        />
                    </Link>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden md:flex gap-4" justify="center">
                <NavbarBrand className=" text-blue-600">
                    <Link href="/">
                        <Image
                            src={mecLogoTitle}
                            width={200}
                            height={200}
                            className=" object-cover mr-10"
                            alt="Mec-trade-Logo"
                        />
                    </Link>
                </NavbarBrand>
                <NavbarItem>
                    <Link
                        className={
                            pathname === "/"
                                ? "text-blue-600 font-medium hover:text-blue-700 inline-block relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:rounded-full before:opacity-100 before:bg-gradient-to-l before:from-amber-500 before:to-blue-500"
                                : "text-current font-medium hover:text-blue-700 inline-block relative transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-l before:from-amber-500 before:to-blue-500 hover:before:w-full hover:before:opacity-100 "
                        }
                        href="/"
                    >
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        className={
                            pathname === "/about"
                                ? "text-blue-600 font-medium hover:text-blue-700 inline-block relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:rounded-full before:opacity-100 before:bg-gradient-to-l before:from-amber-500 before:to-blue-500"
                                : "text-current font-medium hover:text-blue-700 inline-block relative transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-l before:from-amber-500 before:to-blue-500 hover:before:w-full hover:before:opacity-100 "
                        }
                        href="/about"
                    >
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        className={
                            pathname === "/services"
                                ? "text-blue-600 font-medium hover:text-blue-700 inline-block relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:rounded-full before:opacity-100 before:bg-gradient-to-l before:from-amber-500 before:to-blue-500"
                                : "text-current font-medium hover:text-blue-700 inline-block relative transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-l before:from-amber-500 before:to-blue-500 hover:before:w-full hover:before:opacity-100 "
                        }
                        href="/services"
                    >
                        Services
                    </Link>
                </NavbarItem>

                <NavbarItem>
                    <Link
                        className={
                            pathname === "/contact"
                                ? "text-blue-600 font-medium hover:text-blue-700 inline-block relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:rounded-full before:opacity-100 before:bg-gradient-to-l before:from-amber-500 before:to-blue-500"
                                : "text-current font-medium hover:text-blue-700 inline-block relative transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-l before:from-amber-500 before:to-blue-500 hover:before:w-full hover:before:opacity-100 "
                        }
                        href="/contact"
                    >
                        Contact
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                <NavbarMenuItem>
                    <Link
                        className={
                            pathname === "/"
                                ? "text-blue-600 font-medium hover:text-blue-700"
                                : "text-current font-medium hover:text-blue-700"
                        }
                        href="/"
                    >
                        Home
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link
                        className={
                            pathname === "/about"
                                ? "text-blue-600 font-medium hover:text-blue-700"
                                : "text-current font-medium hover:text-blue-700"
                        }
                        href="/about"
                    >
                        About
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link
                        className={
                            pathname === "/services"
                                ? "text-blue-600 font-medium hover:text-blue-700"
                                : "text-current font-medium hover:text-blue-700"
                        }
                        href="/services"
                    >
                        Services
                    </Link>
                </NavbarMenuItem>
                <Dropdown showArrow className=" rounded-md">
                    <NavbarMenuItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className={
                                    pathname === "/products/1"
                                        ? "p-0 bg-transparent data-[hover=true]:bg-transparent text-base font-medium text-blue-600"
                                        : pathname === "/products/2"
                                        ? "p-0 bg-transparent data-[hover=true]:bg-transparent text-base font-medium text-blue-600"
                                        : pathname === "/products/3"
                                        ? "p-0 bg-transparent data-[hover=true]:bg-transparent text-base font-medium text-blue-600"
                                        : "p-0 bg-transparent data-[hover=true]:bg-transparent text-base font-medium text-content hover:text-blue-700"
                                }
                                endContent={
                                    <ChevronDownIcon className=" w-4 h-4" />
                                }
                                radius="sm"
                                variant="light"
                            >
                                Products
                            </Button>
                        </DropdownTrigger>
                    </NavbarMenuItem>
                    <DropdownMenu
                        itemClasses={{
                            base: [
                                "rounded-md",
                                "text-default-500",
                                "transition-opacity",
                                "data-[hover=true]:text-blue-700",
                                "data-[hover=true]:bg-default-100",
                                "dark:data-[hover=true]:bg-default-50",
                                "data-[selectable=true]:focus:bg-default-50",
                                "data-[pressed=true]:opacity-70",
                                "data-[focus-visible=true]:ring-default-500",
                            ],
                        }}
                    >
                        <DropdownItem>
                            <Link
                                href="/products/1"
                                className={
                                    pathname === "/products/1"
                                        ? "text-blue-600 w-full text-sm hover:font-medium"
                                        : "text-curren w-fullt text-sm hover:font-medium"
                                }
                            >
                                Medical Equipments
                            </Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link
                                href="/products/2"
                                className={
                                    pathname === "/products/2"
                                        ? "text-blue-600 w-full text-sm hover:font-medium"
                                        : "text-current w-full text-sm hover:font-medium"
                                }
                            >
                                Gynee Equipments
                            </Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link
                                href="/products/3"
                                className={
                                    pathname === "/products/3"
                                        ? "text-blue-600 w-full text-sm hover:font-medium"
                                        : "text-current w-full text-sm hover:font-medium"
                                }
                            >
                                Physio Equipments
                            </Link>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavbarMenuItem>
                    <Link
                        className={
                            pathname === "/contact"
                                ? "text-blue-600 font-medium hover:text-blue-700"
                                : "text-current font-medium hover:text-blue-700"
                        }
                        href="/contact"
                    >
                        Contact
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}
