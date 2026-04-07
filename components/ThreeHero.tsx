import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeHero() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const w = mount.clientWidth;
    const h = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, w / h, 0.1, 100);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Torus Knot — dense wireframe mesh like the reference
    const knotGeo = new THREE.TorusKnotGeometry(1.5, 0.48, 220, 36, 2, 3);

    const wireMat = new THREE.LineBasicMaterial({
      color: 0xc0c0c0,
      transparent: true,
      opacity: 0.65,
    });
    const wireGeo = new THREE.WireframeGeometry(knotGeo);
    const knot = new THREE.LineSegments(wireGeo, wireMat);

    // Sparse golden dots at mesh vertices
    const dotPositions: number[] = [];
    const pos = knotGeo.attributes.position;
    for (let i = 0; i < pos.count; i += 5) {
      dotPositions.push(pos.getX(i), pos.getY(i), pos.getZ(i));
    }
    const dotGeo = new THREE.BufferGeometry();
    dotGeo.setAttribute('position', new THREE.Float32BufferAttribute(dotPositions, 3));
    const dotMat = new THREE.PointsMaterial({
      color: 0xc8a040,
      size: 0.022,
      transparent: true,
      opacity: 0.85,
    });
    const dots = new THREE.Points(dotGeo, dotMat);

    const group = new THREE.Group();
    group.add(knot, dots);
    scene.add(group);

    // Slow auto-rotation
    let animId: number;
    const targetRotY = { val: 0 };
    const targetRotX = { val: 0 };

    const animate = () => {
      animId = requestAnimationFrame(animate);
      group.rotation.y += 0.0006;
      group.rotation.x += 0.00022;
      renderer.render(scene, camera);
    };
    animate();

    // Subtle mouse parallax
    const onMouse = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 0.5;
      const ny = (e.clientY / window.innerHeight - 0.5) * -0.3;
      targetRotY.val = nx;
      targetRotX.val = ny;
    };
    window.addEventListener('mousemove', onMouse);

    const onResize = () => {
      if (!mount) return;
      const nw = mount.clientWidth;
      const nh = mount.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      knotGeo.dispose();
      wireGeo.dispose();
      dotGeo.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}
