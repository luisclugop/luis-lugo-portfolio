import Reveal from '../components/Reveal'

function Section({ id, title, children }) {
    return (
        <section id={id} className="min-h-screen px-6 py-24 max-w-6xl mx-auto scroll-mt-16">
            {title && (
                <Reveal>
                    <h2 className="font-display text-5xl uppercase tracking-wide mb-12 bg-gradient-to-r from-rosa to-naranja bg-clip-text text-transparent">
                        {title}
                    </h2>
                </Reveal>
            )}
            {children}
        </section>
    )
}

export default Section