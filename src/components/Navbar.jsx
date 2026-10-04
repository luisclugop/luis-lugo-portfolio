import { useEffect, useState } from 'react'
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
    const [open, setOpen] = useState(false)
    const current = i18n.resolvedLanguage
    const toggleLanguage = () => i18n.changeLanguage(current === 'es' ? 'en' : 'es')

    useEffect(() => {
        if (!open) return
        const onKeyDown = (e) => e.key === 'Escape' && setOpen(false)
        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [open])

    return (
        <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-fondo/60 border-b border-white/10">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
                <a href="#inicio" className="font-display text-2xl tracking-wide text-rosa">
                    LL
                </a>

                <div className="flex items-center gap-4 md:gap-8">
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

                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden p-2 -mr-2 text-texto"
                        aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            {open ? (
                                <path d="M6 6l12 12M18 6L6 18" />
                            ) : (
                                <path d="M4 7h16M4 12h16M4 17h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {open && (
                <ul id="mobile-menu" className="md:hidden border-t border-white/10 bg-fondo/95 px-6 py-3">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="block py-3 text-lg text-texto/80 hover:text-turquesa transition-colors"
                            >
                                {t(link.key)}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    )
}

export default Navbar