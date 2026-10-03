import { useTranslation } from 'react-i18next'
import { profile } from '../data/profile'

function Hero() {
    const { t } = useTranslation()

    return (
        <section id="inicio" className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center">
            <p className="text-turquesa tracking-widest uppercase text-sm">{t('hero.greeting')}</p>
            <h1 className="font-display text-7xl md:text-9xl uppercase tracking-wide bg-gradient-to-r from-rosa to-naranja bg-clip-text text-transparent">
                {profile.name}
            </h1>
            <p className="font-display text-2xl md:text-3xl uppercase tracking-wide">{t('hero.role')}</p>
            <p className="max-w-xl text-texto/70">{t('hero.tagline')}</p>
            <span className="px-4 py-2 rounded-full border border-turquesa text-turquesa text-sm">
                {t('hero.available')}
            </span>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
                <a href="#proyectos" className="px-6 py-3 rounded-full bg-gradient-to-r from-rosa to-naranja font-semibold text-fondo hover:opacity-90 transition-opacity">
                    {t('hero.ctaProjects')}
                </a>
                <a href="#contacto" className="px-6 py-3 rounded-full border border-white/30 hover:border-turquesa hover:text-turquesa transition-colors">
                    {t('hero.ctaContact')}
                </a>
            </div>
        </section>
    )
}

export default Hero