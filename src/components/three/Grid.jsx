import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  varying vec2 vUv;
  uniform float uTime;

  void main() {
    // Repetir la cuadrícula y desplazarla con el tiempo
    vec2 uv = vUv * 50.0;
    uv.y += uTime * 2.0;

    // Líneas de grosor constante
    vec2 grid = abs(fract(uv - 0.5) - 0.5) / fwidth(uv);
    float line = 1.0 - min(min(grid.x, grid.y), 1.0);

    // Se desvanece a lo lejos
    float fade = pow(1.0 - vUv.y, 1.5);

    vec3 neon = vec3(1.0, 0.18, 0.58);
    vec3 base = vec3(0.07, 0.04, 0.12);

    gl_FragColor = vec4(mix(base, neon, line * fade), 1.0);
  }
`

function Grid() {
    const material = useRef()
    const uniforms = useMemo(() => ({ uTime: { value: 0 } }), [])

    useFrame((state) => {
        material.current.uniforms.uTime.value = state.clock.elapsedTime
    })

    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, -45]}>
            <planeGeometry args={[100, 100]} />
            <shaderMaterial
                ref={material}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
            />
        </mesh>
    )
}

export default Grid