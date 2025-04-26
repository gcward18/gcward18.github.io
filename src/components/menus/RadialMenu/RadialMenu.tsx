import "./RadialMenu.css"; // We'll define this next
import {
    Home,
    User,
    Palette,
    Phone,
    Github,
    Linkedin,
    ScrollText,
    NotebookText,
} from "lucide-react";

const menuItems = [
    { label: "Home", href: "/", icon: <Home />, x: -20, y: 0 },
    { label: "About", href: "/about", icon: <User />, x: -14, y: -14 },
    { label: "Projects", href: "/projects", icon: <Palette />, x: 0, y: -20 },
    { label: "Contact", href: "/contact", icon: <Phone />, x: 14, y: -14 },
    { label: "Github", href: "https://github.com/gcward18", icon: <Github />, x: 20, y: 0, external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/georgecward/", icon: <Linkedin />, x: 14, y: 14, external: true },
    { label: "Blog Coming Soon", href: "#", icon: <ScrollText />, x: 0, y: 20, external: true },
    { label: "Resume", href: "/George_Ward_Resume.pdf", icon: <NotebookText />, x: -14, y: 14, external: true },
];

export default function RadialMenu() {
    const radius = 15; // tailwind spacing units (2rem = 8 * 0.5rem)

    return (
        <>
            <div className="hidden md:flex fixed w-full h-screen items-center justify-center ">
                <div className="relative w-[280px] h-[280px] animate-spin-slow">
                    {menuItems.map((item, index) => {
                        const angle = (index / menuItems.length) * 2 * Math.PI;
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;

                        return (
                            <a
                                key={item.label}
                                href={item.href}
                                className="absolute icon-wrapper w-16 h-16 rounded-full bg-white p-2 flex items-center justify-center shadow-lg animate-spin-slow-reverse custom-bg"
                                style={{
                                    top: `calc(50% + ${y}rem - 1.75rem)`,
                                    left: `calc(50% + ${x}rem - 1.75rem)`,
                                }}
                            >
                                <span className="sr-only">{item.label}</span>
                                {item.icon}
                            </a>
                        );
                    })}
                </div>
            </div>

            {/* Mobile: Fixed left/right split */}
            <div className="md:hidden fixed inset-0 flex items-center justify-between px-4 pointer-events-none z-50">
                <div className="flex flex-col space-y-4 pointer-events-auto">
                    {menuItems.slice(0, menuItems.length / 2).map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            style={{margin: '10px'}}
                            className="w-14 h-14 bg-white icon-wrapper rounded-full flex items-center justify-center shadow-md  m-[10px]"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>
                <div className="flex flex-col space-y-4 pointer-events-auto">
                    {menuItems.slice(menuItems.length / 2).map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            style={{margin: '10px'}}
                            className="w-14 h-14 bg-white icon-wrapper rounded-full flex items-center justify-center shadow-md m-[10px]"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}
