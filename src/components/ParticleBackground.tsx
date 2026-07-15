import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

const PARTICLE_COUNT = 15000;
const LINE_COUNT = 530;
const SNOW_COUNT = 280;
const INTERACTION_DISTANCE = 20;
const REPULSE_FORCE = 0.04;

export function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1200);
    camera.position.set(0, 0, 120);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.55, 0.08, 1.0);
    bloom.threshold = 1.0;
    bloom.strength = 0.55;
    bloom.radius = 0.08;
    composer.addPass(bloom);

    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(PARTICLE_COUNT * 3);
    const basePositions = new Float32Array(PARTICLE_COUNT * 3);
    const particleColors = new Float32Array(PARTICLE_COUNT * 3);

    const baseColor = new THREE.Color(0x001225);
    const accentColor = new THREE.Color(0xccff00);

    for (let i = 0; i < PARTICLE_COUNT; i += 1) {
      const i3 = i * 3;
      const x = (Math.random() - 0.5) * 360;
      const y = (Math.random() - 0.5) * 240;
      const z = (Math.random() - 0.5) * 420;

      particlePositions[i3] = x;
      particlePositions[i3 + 1] = y;
      particlePositions[i3 + 2] = z;

      basePositions[i3] = x;
      basePositions[i3 + 1] = y;
      basePositions[i3 + 2] = z;

      particleColors[i3] = baseColor.r;
      particleColors[i3 + 1] = baseColor.g;
      particleColors[i3 + 2] = baseColor.b;
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.5,
      opacity: 0.14,
      transparent: true,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      depthWrite: false
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(LINE_COUNT * 6);
    const lineDistances = new Float32Array(LINE_COUNT * 4);
    const lineSpeeds = new Float32Array(LINE_COUNT);

    for (let i = 0; i < LINE_COUNT; i += 1) {
      const i6 = i * 6;
      const i4 = i * 4;
      const x = (Math.random() - 0.5) * 360;
      const y = (Math.random() - 0.5) * 220;
      const z = -Math.random() * 700;
      const length = 12 + Math.random() * 18;

      linePositions[i6] = x;
      linePositions[i6 + 1] = y;
      linePositions[i6 + 2] = z;
      linePositions[i6 + 3] = x;
      linePositions[i6 + 4] = y;
      linePositions[i6 + 5] = z - length;

      lineDistances[i4] = 0;
      lineDistances[i4 + 1] = length;
      lineDistances[i4 + 2] = 0;
      lineDistances[i4 + 3] = length;
      lineSpeeds[i] = 0.8 + Math.random() * 1.4;
    }

    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute("lineDistance", new THREE.BufferAttribute(lineDistances, 2));

    const lineMaterial = new THREE.LineDashedMaterial({
      color: 0x88aaff,
      transparent: true,
      opacity: 0.12,
      linewidth: 0.005,
      dashSize: 1.8,
      gapSize: 1.2
    });

    const energyLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(energyLines);

    const snowGeometry = new THREE.BufferGeometry();
    const snowPositions = new Float32Array(SNOW_COUNT * 3);
    const snowOriginX = new Float32Array(SNOW_COUNT);
    const snowDrift = new Float32Array(SNOW_COUNT);
    const snowFallSpeed = new Float32Array(SNOW_COUNT);

    for (let i = 0; i < SNOW_COUNT; i += 1) {
      const i3 = i * 3;
      const x = (Math.random() - 0.5) * 360;
      const y = (Math.random() - 0.5) * 260;
      const z = (Math.random() - 0.5) * 240;

      snowPositions[i3] = x;
      snowPositions[i3 + 1] = y;
      snowPositions[i3 + 2] = z;

      snowOriginX[i] = x;
      snowDrift[i] = 0.2 + Math.random() * 0.8;
      snowFallSpeed[i] = 0.06 + Math.random() * 0.18;
    }

    snowGeometry.setAttribute("position", new THREE.BufferAttribute(snowPositions, 3));

    const snowMaterial = new THREE.PointsMaterial({
      color: 0xeaf3ff,
      size: 0.9,
      transparent: true,
      opacity: 0.16,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const snow = new THREE.Points(snowGeometry, snowMaterial);
    scene.add(snow);

    const pointer = new THREE.Vector2(9999, 9999);
    const pointerWorld = new THREE.Vector3(9999, 9999, 0);
    const raycaster = new THREE.Raycaster();
    const interactionPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

    const onPointerMove = (event: MouseEvent) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("resize", onResize);

    let rafId = 0;

    const animate = () => {
      const t = performance.now() * 0.001;
      raycaster.setFromCamera(pointer, camera);
      raycaster.ray.intersectPlane(interactionPlane, pointerWorld);

      const positions = particleGeometry.attributes.position.array as Float32Array;
      const colors = particleGeometry.attributes.color.array as Float32Array;

      for (let i = 0; i < PARTICLE_COUNT; i += 1) {
        const i3 = i * 3;
        const ox = basePositions[i3];
        const oy = basePositions[i3 + 1];
        const oz = basePositions[i3 + 2];

        let px = positions[i3];
        let py = positions[i3 + 1];
        let pz = positions[i3 + 2];

        px += (ox - px) * 0.02;
        py += (oy - py) * 0.02;
        pz += (oz - pz) * 0.02;

        const dx = px - pointerWorld.x;
        const dy = py - pointerWorld.y;
        const dz = pz - pointerWorld.z;
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

        let mix = 0;
        if (distance < INTERACTION_DISTANCE) {
          const pull = (1 - distance / INTERACTION_DISTANCE) * REPULSE_FORCE;
          const inv = distance > 0.0001 ? 1 / distance : 0;
          px += dx * inv * pull * 20;
          py += dy * inv * pull * 20;
          pz += dz * inv * pull * 8;
          mix = Math.min(0.4, pull * 12);
        }

        positions[i3] = px;
        positions[i3 + 1] = py;
        positions[i3 + 2] = pz;

        colors[i3] += ((baseColor.r + (accentColor.r - baseColor.r) * mix) - colors[i3]) * 0.2;
        colors[i3 + 1] += ((baseColor.g + (accentColor.g - baseColor.g) * mix) - colors[i3 + 1]) * 0.2;
        colors[i3 + 2] += ((baseColor.b + (accentColor.b - baseColor.b) * mix) - colors[i3 + 2]) * 0.2;
      }

      const lines = lineGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < LINE_COUNT; i += 1) {
        const i6 = i * 6;
        lines[i6 + 2] += lineSpeeds[i];
        lines[i6 + 5] += lineSpeeds[i];

        if (lines[i6 + 2] > 120) {
          const x = (Math.random() - 0.5) * 360;
          const y = (Math.random() - 0.5) * 220;
          const z = -700;
          const len = 12 + Math.random() * 18;
          lines[i6] = x;
          lines[i6 + 1] = y;
          lines[i6 + 2] = z;
          lines[i6 + 3] = x;
          lines[i6 + 4] = y;
          lines[i6 + 5] = z - len;
        }
      }

      const snowPoints = snowGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < SNOW_COUNT; i += 1) {
        const i3 = i * 3;
        let y = snowPoints[i3 + 1] - snowFallSpeed[i];

        if (y < -140) {
          y = 140 + Math.random() * 24;
          snowOriginX[i] = (Math.random() - 0.5) * 360;
        }

        snowPoints[i3] = snowOriginX[i] + Math.sin(t * 0.75 + i * 0.17) * snowDrift[i];
        snowPoints[i3 + 1] = y;
      }

      particleGeometry.attributes.position.needsUpdate = true;
      particleGeometry.attributes.color.needsUpdate = true;
      lineGeometry.attributes.position.needsUpdate = true;
      snowGeometry.attributes.position.needsUpdate = true;

      particles.rotation.y += 0.0007;
      composer.render();
      rafId = window.requestAnimationFrame(animate);
    };

    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("resize", onResize);
      composer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      snowGeometry.dispose();
      snowMaterial.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="pointer-events-none fixed inset-0 z-0" aria-hidden="true" />;
}
