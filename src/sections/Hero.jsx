import { useTranslation } from 'react-i18next'
import { profile } from '../data/profile'
import HeroScene from '../components/three/HeroScene'

function Hero() {
    const { t } = useTranslation()

    return (
        <section
            id="inicio"
            className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 text-center bg-gradient-to-b from-fondo via-violeta/40 to-rosa/30"
        >
            <div className="absolute inset-0">
                <HeroScene />
            </div>

            <div className="relative z-10 flex flex-col items-center gap-6 pointer-events-none">
                <p className="text-turquesa tracking-widest uppercase text-sm">{t('hero.greeting')}</p>
                <h1 className="font-display text-7xl md:text-9xl uppercase tracking-wide text-texto [text-shadow:4px_4px_0_#ff2e93,0_0_40px_rgba(255,46,147,0.6)]">
                    {profile.name}
                </h1>
                <p className="font-display text-2xl md:text-3xl uppercase tracking-wide">{t('hero.role')}</p>
                <p className="max-w-xl text-texto/80 [text-shadow:0_2px_12px_#120a1f]">{t('hero.tagline')}</p>
                <span className="px-4 py-2 rounded-full border border-turquesa text-turquesa text-sm">
                    {t('hero.available')}
                </span>
                <div className="flex flex-wrap justify-center gap-4 mt-2 pointer-events-auto">
                    <a href="#proyectos" className="px-6 py-3 rounded-full bg-gradient-to-r from-rosa to-naranja font-semibold text-fondo hover:opacity-90 transition-opacity">
                        {t('hero.ctaProjects')}
                    </a>
                    <a href="#contacto" className="px-6 py-3 rounded-full border border-white/30 hover:border-turquesa hover:text-turquesa transition-colors">
                        {t('hero.ctaContact')}
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero