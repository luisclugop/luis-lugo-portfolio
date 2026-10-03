import { useTranslation } from 'react-i18next'
import Section from '../components/Section'

function About() {
    const { t } = useTranslation()

    return (
        <Section id="sobre-mi" title={t('sections.about')}>
            <p className="text-texto/70">{t('common.comingSoon')}</p>
        </Section>
    )
}

export default About