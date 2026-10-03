import { useTranslation } from 'react-i18next'
import Section from '../components/Section'

const jobs = [
    { key: 'cecyteh', url: 'https://cecyteh.edu.mx' },
    { key: 'enapsys', url: 'https://enapsys.com' },
    { key: 'appy', url: 'https://appy.la' },
]

function Experience() {
    const { t } = useTranslation()

    return (
        <Section id="experiencia" title={t('sections.experience')}>
            <ol className="relative ml-3 border-l border-white/15 space-y-14">
                {jobs.map(({ key, url }, index) => {
                    const base = `experience.items.${key}`
                    const bullets = t(`${base}.bullets`, { returnObjects: true })

                    return (
                        <li key={key} className="relative pl-8">
                            <span
                                className={`absolute -left-1.5 top-2 h-3 w-3 rounded-full ring-4 ring-fondo ${index === 0 ? 'bg-turquesa' : 'bg-gradient-to-r from-rosa to-naranja'
                                    }`}
                            />
                            <p className="text-sm text-turquesa">{t(`${base}.period`)}</p>
                            <h3 className="mt-1 font-display text-3xl uppercase tracking-wide">
                                {t(`${base}.role`)}
                            </h3>
                            <p className="mt-1 text-texto/70">
                                {t(`${base}.company`)} · {t(`${base}.location`)}
                            </p>
                            <ul className="mt-5 space-y-3 text-texto/80 leading-relaxed">
                                {bullets.map((item, i) => (
                                    <li key={i} className="flex gap-3">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-naranja" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={url}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-5 inline-block text-sm text-rosa hover:text-naranja transition-colors"
                            >
                                {t('experience.visit')} →
                            </a>
                        </li>
                    )
                })}
            </ol>
        </Section>
    )
}

export default Experience