import { useEffect, useState } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

export function useReducedMotion() {
    const [reduced, setReduced] = useState(() => window.matchMedia(QUERY).matches)

    useEffect(() => {
        const media = window.matchMedia(QUERY)
        const onChange = (e) => setReduced(e.matches)
        media.addEventListener('change', onChange)
        return () => media.removeEventListener('change', onChange)
    }, [])

    return reduced
}