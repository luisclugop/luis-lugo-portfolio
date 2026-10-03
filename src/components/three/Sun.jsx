import { useMemo, useRef } from 'react'

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  varying vec2 vUv;
  void main() {
    // Recortar un círculo
    float d = length(vUv - 0.5);
    if (d > 0.5) discard;

    // Degradado: rosa abajo, naranja arriba
    vec3 pink = vec3(1.0, 0.18, 0.58);
    vec3 orange = vec3(1.0, 0.48, 0.24);
    vec3 color = mix(pink, orange, vUv.y);

    // Franjas en la mitad inferior, más gruesas hacia abajo
    float y = vUv.y;
    if (y < 0.5) {
      float thickness = (0.5 - y) * 2.0;
      if (fract(y * 18.0) < thickness * 0.6) discard;
    }

    gl_FragColor = vec4(color, 1.0);
  }
`

function Sun() {
    return (
        <mesh position={[0, 7, -90]}>
            <planeGeometry args={[30, 30]} />
            <shaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} />
        </mesh>
    )
}

export default Sun