import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

function Reveal({ as: Tag = 'div', delay = 0, className = '', children }) {
    const ref = useRef(null)
    const reduced = useReducedMotion()
    const [shown, setShown] = useState(false)

    useEffect(() => {
        if (reduced) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShown(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
        )
        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [reduced])

    const visible = reduced || shown

    return (
        <Tag
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${className}`}
        >
            {children}
        </Tag>
    )
}

export default Reveal