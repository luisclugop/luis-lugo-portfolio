import { useTranslation } from 'react-i18next'
import Section from '../components/Section'

function Projects() {
    const { t } = useTranslation()

    return (
        <Section id="proyectos" title={t('sections.projects')}>
            <p className="text-texto/70">{t('common.comingSoon')}</p>
        </Section>
    )
}

export default Projects