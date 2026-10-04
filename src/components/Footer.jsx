import { useTranslation } from 'react-i18next'
import { profile } from '../data/profile'

function Footer() {
    const { t } = useTranslation()

    return (
        <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-texto/50">
            © {new Date().getFullYear()} {profile.name}. {t('footer.rights')}
        </footer>
    )
}

export default Footer