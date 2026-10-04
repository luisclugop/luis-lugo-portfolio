import { useTranslation } from 'react-i18next'
import Section from '../components/Section'
import { skillCategories, marketingSkills, creativeSkills } from '../data/skills'

function Chip({ children }) {
    return (
        <li className="px-4 py-2 rounded-full border border-white/15 bg-fondo/60 text-sm text-texto/90 transition hover:-translate-y-0.5 hover:border-rosa hover:text-rosa">
            {children}
        </li>
    )
}

function Skills() {
    const { t } = useTranslation()

    return (
        <Section id="skills" title={t('sections.skills')}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {skillCategories.map(({ key, items }) => (
                    <div
                        key={key}
                        className={`rounded-2xl border border-white/10 bg-fondo-claro/60 p-6 ${key === 'frontend' ? 'md:col-span-2 lg:col-span-3' : ''
                            }`}
                    >
                        <h3 className="font-display text-2xl uppercase tracking-wide text-turquesa">
                            {t(`skills.categories.${key}`)}
                        </h3>
                        <ul className="mt-5 flex flex-wrap gap-3">
                            {items.map((item) => (
                                <Chip key={item}>{item}</Chip>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="mt-12 rounded-3xl p-px bg-gradient-to-r from-rosa via-naranja to-violeta">
                <div className="rounded-3xl bg-fondo p-8">
                    <h3 className="font-display text-4xl uppercase tracking-wide bg-gradient-to-r from-rosa to-naranja bg-clip-text text-transparent">
                        {t('skills.beyond.title')}
                    </h3>
                    <p className="mt-3 max-w-2xl text-texto/70 leading-relaxed">
                        {t('skills.beyond.description')}
                    </p>
                    <div className="mt-8 grid gap-8 md:grid-cols-2">
                        <div>
                            <p className="text-sm uppercase tracking-widest text-texto/50">
                                {t('skills.beyond.marketing')}
                            </p>
                            <ul className="mt-4 flex flex-wrap gap-3">
                                {marketingSkills.map((item) => (
                                    <Chip key={item}>{item}</Chip>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="text-sm uppercase tracking-widest text-texto/50">
                                {t('skills.beyond.creative')}
                            </p>
                            <ul className="mt-4 flex flex-wrap gap-3">
                                {creativeSkills.map((item) => (
                                    <Chip key={item}>{item}</Chip>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Skills