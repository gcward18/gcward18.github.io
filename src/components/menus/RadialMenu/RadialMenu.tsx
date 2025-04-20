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
    return (
        <div className="radial-container">
            {menuItems.map(({ label, href, icon, x, y, external }) => (
                <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : "_self"}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="radial-item"
                    style={{ transform: `translate(${x}vw, ${y}vw)` }}
                >
                    <div className="icon-wrapper">
                        {icon}
                        <span className="tooltip">{label}</span>
                    </div>
                </a>
            ))}
        </div>
    );
}
