import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { profile } from '../data/profile'

const HeroScene = lazy(() => import('../components/three/HeroScene'))

const delay = (ms) => ({ animationDelay: `${ms}ms` })

function Hero() {
    const { t } = useTranslation()
    const ref = useRef(null)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting))
        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={ref}
            id="inicio"
            className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 text-center bg-gradient-to-b from-fondo via-violeta/40 to-rosa/30"
        >
            <div className="absolute inset-0">
                <Suspense fallback={null}>
                    <HeroScene active={visible} />
                </Suspense>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-6 pointer-events-none">
                <p className="animate-fade-up text-turquesa tracking-widest uppercase text-sm" style={delay(100)}>
                    {t('hero.greeting')}
                </p>
                <h1
                    className="animate-fade-up font-display text-7xl md:text-9xl uppercase tracking-wide text-texto [text-shadow:4px_4px_0_#ff2e93,0_0_40px_rgba(255,46,147,0.6)]"
                    style={delay(250)}
                >
                    {profile.name}
                </h1>
                <p className="animate-fade-up font-display text-2xl md:text-3xl uppercase tracking-wide" style={delay(400)}>
                    {t('hero.role')}
                </p>
                <p className="animate-fade-up max-w-xl text-texto/80 [text-shadow:0_2px_12px_#120a1f]" style={delay(550)}>
                    {t('hero.tagline')}
                </p>
                <span className="animate-fade-up px-4 py-2 rounded-full border border-turquesa text-turquesa text-sm" style={delay(700)}>
                    {t('hero.available')}
                </span>
                <div className="animate-fade-up flex flex-wrap justify-center gap-4 mt-2 pointer-events-auto" style={delay(850)}>
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