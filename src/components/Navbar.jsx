const links = [
    { href: '#sobre-mi', label: 'Sobre mí' },
    { href: '#experiencia', label: 'Experiencia' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#skills', label: 'Skills' },
    { href: '#contacto', label: 'Contacto' },
]

function Navbar() {
    return (
        <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-fondo/60 border-b border-white/10">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
                <a href="#inicio" className="font-display text-2xl tracking-wide text-rosa">
                    LL
                </a>
                <ul className="hidden md:flex gap-8 text-sm">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="text-texto/70 hover:text-turquesa transition-colors">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar