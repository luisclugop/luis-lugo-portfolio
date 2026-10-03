import { useTranslation } from 'react-i18next'
import Section from '../components/Section'

const stats = ['years', 'visitors', 'languages', 'remote']

function About() {
    const { t } = useTranslation()

    return (
        <Section id="sobre-mi" title={t('sections.about')}>
            <div className="grid gap-12 lg:grid-cols-2">
                <div className="space-y-5 text-lg text-texto/80 leading-relaxed">
                    <p>{t('about.p1')}</p>
                    <p>{t('about.p2')}</p>
                    <p>{t('about.p3')}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 content-start">
                    {stats.map((key) => (
                        <div key={key} className="rounded-2xl border border-white/10 bg-fondo-claro/60 p-6">
                            <p className="font-display text-4xl text-naranja">{t(`about.stats.${key}.value`)}</p>
                            <p className="mt-2 text-sm text-texto/60">{t(`about.stats.${key}.label`)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default About