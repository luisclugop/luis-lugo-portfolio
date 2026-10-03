import { useTranslation } from 'react-i18next'

const links = [
    { href: '#sobre-mi', key: 'nav.about' },
    { href: '#experiencia', key: 'nav.experience' },
    { href: '#proyectos', key: 'nav.projects' },
    { href: '#skills', key: 'nav.skills' },
    { href: '#contacto', key: 'nav.contact' },
]

function Navbar() {
    const { t, i18n } = useTranslation()
    const current = i18n.resolvedLanguage
    const toggleLanguage = () => i18n.changeLanguage(current === 'es' ? 'en' : 'es')

    return (
        <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-fondo/60 border-b border-white/10">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
                <a href="#inicio" className="font-display text-2xl tracking-wide text-rosa">
                    LL
                </a>
                <div className="flex items-center gap-8">
                    <ul className="hidden md:flex gap-8 text-sm">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="text-texto/70 hover:text-turquesa transition-colors">
                                    {t(link.key)}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={toggleLanguage}
                        className="px-3 py-1 rounded-full border border-turquesa text-turquesa text-xs font-semibold hover:bg-turquesa hover:text-fondo transition-colors"
                        aria-label="Change language"
                    >
                        {current === 'es' ? 'EN' : 'ES'}
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar