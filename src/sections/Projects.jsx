import { useTranslation } from 'react-i18next'
import Section from '../components/Section'
import { projects } from '../data/projects'

function Preview({ project, title, className }) {
    if (project.image) {
        return (
            <img
                src={project.image}
                alt={title}
                loading="lazy"
                className={`w-full object-cover object-top ${className}`}
            />
        )
    }
    const domain = new URL(project.url).hostname
    return (
        <div
            className={`flex items-center justify-center bg-gradient-to-br from-violeta/60 via-rosa/40 to-naranja/50 font-display text-2xl tracking-wide text-texto/90 px-4 text-center ${className}`}
        >
            {domain}
        </div>
    )
}

function TechChips({ tech }) {
    if (!tech.length) return null
    return (
        <ul className="flex flex-wrap gap-2 mt-4">
            {tech.map((item) => (
                <li key={item} className="px-3 py-1 rounded-full border border-turquesa/40 text-turquesa text-xs">
                    {item}
                </li>
            ))}
        </ul>
    )
}

function Projects() {
    const { t } = useTranslation()
    const featured = projects.find((p) => p.featured)
    const others = projects.filter((p) => !p.featured)

    return (
        <Section id="proyectos" title={t('sections.projects')}>
            {featured && (
                <article className="grid gap-8 lg:grid-cols-2 rounded-3xl border border-white/10 bg-fondo-claro/60 p-6 md:p-8 mb-16">
                    <Preview
                        project={featured}
                        title={t(`projects.items.${featured.key}.title`)}
                        className="rounded-2xl h-64 lg:h-full"
                    />
                    <div className="flex flex-col justify-center">
                        <p className="text-sm uppercase tracking-widest text-turquesa">{t('projects.featured')}</p>
                        <h3 className="mt-2 font-display text-4xl uppercase tracking-wide">
                            {t(`projects.items.${featured.key}.title`)}
                        </h3>
                        <p className="mt-4 text-texto/80 leading-relaxed">
                            {t(`projects.items.${featured.key}.description`)}
                        </p>
                        <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <dt className="text-texto/50">{t('projects.role')}</dt>
                                <dd className="mt-1">{t(`projects.items.${featured.key}.role`)}</dd>
                            </div>
                            <div>
                                <dt className="text-texto/50">{t('projects.impact')}</dt>
                                <dd className="mt-1 text-naranja font-semibold">
                                    {t(`projects.items.${featured.key}.impact`)}
                                </dd>
                            </div>
                        </dl>
                        <TechChips tech={featured.tech} />
                        <a
                            href={featured.url}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-6 self-start px-6 py-3 rounded-full bg-gradient-to-r from-rosa to-naranja font-semibold text-fondo hover:opacity-90 transition-opacity"
                        >
                            {t('projects.visit')} →
                        </a>
                    </div>
                </article>
            )}

            <h3 className="font-display text-2xl uppercase tracking-wide mb-6 text-texto/80">
                {t('projects.more')}
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {others.map((project) => (
                    <article
                        key={project.key}
                        className="rounded-2xl border border-white/10 bg-fondo-claro/60 overflow-hidden flex flex-col"
                    >
                        <Preview
                            project={project}
                            title={t(`projects.items.${project.key}.title`)}
                            className="h-44"
                        />
                        <div className="p-6 flex flex-col flex-1">
                            <h4 className="font-display text-2xl uppercase tracking-wide">
                                {t(`projects.items.${project.key}.title`)}
                            </h4>
                            <p className="mt-3 text-sm text-texto/70 leading-relaxed flex-1">
                                {t(`projects.items.${project.key}.description`)}
                            </p>
                            <TechChips tech={project.tech} />
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-5 text-sm text-rosa hover:text-naranja transition-colors"
                            >
                                {t('projects.visit')} →
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    )
}

export default Projects