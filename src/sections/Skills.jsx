import { useTranslation } from 'react-i18next'
import Section from '../components/Section'

function Skills() {
    const { t } = useTranslation()

    return (
        <Section id="skills" title={t('sections.skills')}>
            <p className="text-texto/70">{t('common.comingSoon')}</p>
        </Section>
    )
}

export default Skills