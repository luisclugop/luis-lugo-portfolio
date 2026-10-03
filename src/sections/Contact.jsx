import { useTranslation } from 'react-i18next'
import Section from '../components/Section'

function Contact() {
    const { t } = useTranslation()

    return (
        <Section id="contacto" title={t('sections.contact')}>
            <p className="text-texto/70">{t('common.comingSoon')}</p>
        </Section>
    )
}

export default Contact