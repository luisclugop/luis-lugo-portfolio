import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Section from '../components/Section'
import { profile } from '../data/profile'
import Reveal from '../components/Reveal'

function Contact() {
    const { t } = useTranslation()
    const [copied, setCopied] = useState(false)

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(profile.email)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch {
            window.location.href = `mailto:${profile.email}`
        }
    }

    return (
        <Section id="contacto" title={t('sections.contact')}>
            <Reveal>
                <h3 className="font-display text-4xl md:text-6xl uppercase tracking-wide">
                    {t('contact.heading')}
                </h3>
                <p className="mt-6 text-lg text-texto/70 leading-relaxed">{t('contact.text')}</p>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    <Reveal className="rounded-2xl border border-white/10 bg-fondo-claro/60 p-6">
                        <p className="text-sm uppercase tracking-widest text-turquesa">{t('contact.email')}</p>
                        <p className="mt-3 break-all text-lg">{profile.email}</p>
                        <div className="mt-5 flex flex-wrap gap-3">
                            <a
                                href={`mailto:${profile.email}`}
                                className="px-5 py-2 rounded-full bg-gradient-to-r from-rosa to-naranja font-semibold text-fondo hover:opacity-90 transition-opacity"
                            >
                                {t('contact.send')}
                            </a>
                            <button
                                onClick={copyEmail}
                                className="px-5 py-2 rounded-full border border-white/30 hover:border-turquesa hover:text-turquesa transition-colors"
                            >
                                <span aria-live="polite">{copied ? t('contact.copied') : t('contact.copy')}</span>
                            </button>
                        </div>
                    </Reveal>

                    <Reveal className="rounded-2xl border border-white/10 bg-fondo-claro/60 p-6">
                        <p className="text-sm uppercase tracking-widest text-turquesa">{t('contact.linkedin')}</p>
                        <p className="mt-3 text-lg">Luis Carlos Lugo</p>
                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-5 inline-block px-5 py-2 rounded-full border border-white/30 hover:border-turquesa hover:text-turquesa transition-colors"
                        >
                            {t('contact.viewProfile')} →
                        </a>
                    </Reveal>
                </div>

                <p className="mt-8 text-sm text-texto/50">{t('contact.location')}</p>
            </Reveal>
        </Section>
    )
}

export default Contact