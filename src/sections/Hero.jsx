import { useTranslation } from 'react-i18next'

function Hero() {
    const { t } = useTranslation()

    return (
        <section id="inicio" className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center">
            <h1 className="font-display text-7xl md:text-9xl uppercase tracking-wide bg-gradient-to-r from-rosa to-naranja bg-clip-text text-transparent">
                Luis Lugo
            </h1>
            <p className="text-xl text-texto/80">{t('hero.role')}</p>
            <span className="px-4 py-2 rounded-full border border-turquesa text-turquesa text-sm">
                {t('hero.available')}
            </span>
        </section>
    )
}

export default Hero