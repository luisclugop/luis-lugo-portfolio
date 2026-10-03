import { useTranslation } from 'react-i18next'
import Section from '../components/Section'

function Experience() {
    const { t } = useTranslation()

    return (
        <Section id="experiencia" title={t('sections.experience')}>
            <p className="text-texto/70">{t('common.comingSoon')}</p>
        </Section>
    )
}

export default Experience