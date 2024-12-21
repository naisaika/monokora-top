"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './LoadingAnime.module.scss'
import { RoundedBoxGeometry } from 'three/examples/jsm/Addons.js';

export const LoadingAnime = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x24456b);

    // 立方体の作成
    const createRoundedCube = (text: string, textColor: string) => {
        const geometry = new RoundedBoxGeometry(1, 1, 1, 8, 0.15);
    
        const materials = ['front', 'back', 'top', 'bottom', 'left', 'right']
            .map(() => {
                const canvas = document.createElement('canvas');
                const resolution = 512; // 高解像度
                canvas.width = resolution;
                canvas.height = resolution;
                const ctx = canvas.getContext('2d');
                if (!ctx) return null;
    
                ctx.scale(resolution / 256, resolution / 256); 
    
                // 背景
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, 256, 256);

                // 影の設定
                ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
                ctx.shadowOffsetX = 15;
                ctx.shadowOffsetY = 15;
    
                // 文字
                ctx.fillStyle = textColor;
                ctx.font = '900 180px Noto Sans JP';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(text, 128, 140);
    
                return new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(canvas) });
            })
            .filter((material): material is THREE.MeshBasicMaterial => material !== null);
    
        return new THREE.Mesh(geometry, materials);
    };
    
    const cubes: THREE.Object3D[] = [];
    const cubeTexts = ['モ', 'ノ', 'コ', 'ラ'];
    const textColors = ['#a00033', '#091f38', '#091f38', '#091f38'];
    
    cubeTexts.forEach((char, i) => {
        const cube = createRoundedCube(char, textColors[i]);
        const row = Math.floor(i / 2);
        const col = i % 2;

        cube.position.x = col * 1.3 - 0.5;
        cube.position.y = -row * 1.3 + 1.2;

        scene.add(cube);
        cubes.push(cube);
    });

    camera.position.z = 10;

    const animationStates = cubes.map(() => ({
      isAnimating: false,
      currentRotation: 0,
    }));

    let currentIndex = 0;
    const rotationSpeed = 0.01;

    const animate = () => {
      requestAnimationFrame(animate);

      if (currentIndex >= 0 && currentIndex < cubes.length) {
        const state = animationStates[currentIndex];
        const cube = cubes[currentIndex];

        if (state.isAnimating) {
          const deltaRotation = rotationSpeed;
          state.currentRotation += deltaRotation;
          cube.rotation.x += deltaRotation;

          if (state.currentRotation >= Math.PI * 0.5) {
            state.isAnimating = false;
            state.currentRotation = 0;
            currentIndex++;
            if (currentIndex >= cubes.length) {
              currentIndex = -1;
            }
          }
        }

        if (!state.isAnimating) {
          state.isAnimating = true;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  useEffect(() => {

    const timer = setTimeout(() => {
      document.body.style.overflow = "auto";

    }, 4800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="loading">
        <canvas ref={canvasRef} className={styles.cubeCanvas}></canvas>
        <div className={styles.whiteLogo}>
            <svg width="24" height="3" viewBox="0 0 24 1" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.lineSvg}>
                <line 
                    y1="0.5" 
                    x2="24" 
                    y2="0.5" 
                    stroke="white" 
                    className={styles.animateLine}
                />
            </svg>
            <svg width="108" height="25" viewBox="0 0 108 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                    d="M0 7.69809H11.6467V11.2351H4.00283V14.5754H10.1179V18.0606H4.00283V24.8887H0V7.69809Z" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="1" 
                    strokeDasharray="150" 
                    strokeDashoffset="150"
                    className={styles.animatePath}
                />
                <path 
                    d="M14.5437 21.0409C14.5437 18.1434 15.7514 17.4314 17.9987 17.1129C19.1351 16.9394 20.5467 16.8177 21.9863 16.7426V15.1476C21.9863 14.7799 21.841 14.6297 21.4767 14.6297H19.2549C18.8905 14.6297 18.7453 14.7773 18.7453 15.1476V15.9089H14.9794V14.8032C14.9794 12.6437 15.9706 11.6365 18.0956 11.6365H22.664C24.789 11.6365 25.7802 12.6437 25.7802 14.8032V24.9016H22.1086V23.0114C21.3824 23.9927 20.3428 25 18.0956 25C15.5833 24.9948 14.5437 23.9384 14.5437 21.0409ZM21.9863 21.0176V18.9047L19.0867 19.4692C18.5312 19.5909 18.3376 19.8136 18.3376 20.7224C18.3376 21.7038 18.5083 21.9731 19.102 21.9731C20.2944 21.9731 21.0435 21.5562 21.9863 21.0176Z"
                    fill="none" 
                    stroke="white" 
                    strokeWidth="1" 
                    strokeDasharray="150" 
                    strokeDashoffset="150"
                    className={styles.animatePath}
                />
                <path 
                    d="M29.5384 21.7297V14.8032C29.5384 12.6437 30.5295 11.6365 32.6571 11.6365H37.2434C39.3709 11.6365 40.3621 12.6437 40.3621 14.8032V16.6157H36.5504V15.3392C36.5504 14.9456 36.4306 14.8213 36.0408 14.8213H33.8674C33.4801 14.8213 33.3578 14.943 33.3578 15.3392V21.1885C33.3578 21.5562 33.4775 21.7064 33.8674 21.7064H36.0408C36.4281 21.7064 36.5504 21.5588 36.5504 21.1885V19.912H40.3723V21.7245C40.3723 23.884 39.3811 24.8912 37.2536 24.8912H32.6673C30.5296 24.8964 29.5384 23.8892 29.5384 21.7297Z"
                    fill="none" 
                    stroke="white" 
                    strokeWidth="1" 
                    strokeDasharray="150" 
                    strokeDashoffset="150"
                    className={styles.animatePath}
                />
                <path 
                    d="M45.8962 21.7297V14.7048H43.9139V11.6365H45.9523V8.44382H49.6723V11.6365H52.4521V14.7048H49.7131V21.2377C49.7131 21.6054 49.8583 21.7556 50.2227 21.7556H52.447V24.899H49.0124C46.8874 24.8964 45.8962 23.8892 45.8962 21.7297Z"
                    fill="none" 
                    stroke="white" 
                    strokeWidth="1" 
                    strokeDasharray="150" 
                    strokeDashoffset="150"
                    className={styles.animatePath}
                />
                <path 
                    d="M56.4244 21.7297V14.8032C56.4244 12.6437 57.4156 11.6365 59.5405 11.6365H64.5192C66.6442 11.6365 67.6354 12.6437 67.6354 14.8032V21.7297C67.6354 23.8892 66.6442 24.8964 64.5192 24.8964H59.5278C57.4028 24.8964 56.4244 23.8892 56.4244 21.7297ZM63.3599 21.7038C63.7447 21.7038 63.8695 21.5562 63.8695 21.1859V15.3444C63.8695 14.9508 63.7472 14.8265 63.3599 14.8265H60.6871C60.3024 14.8265 60.1775 14.9482 60.1775 15.3444V21.1885C60.1775 21.5562 60.2998 21.7064 60.6871 21.7064L63.3599 21.7038Z"
                    fill="none" 
                    stroke="white" 
                    strokeWidth="1" 
                    strokeDasharray="150" 
                    strokeDashoffset="150"
                    className={styles.animatePath}
                />
                <path 
                    d="M71.7274 11.6365H75.5493V13.5008C76.25 12.5194 77.1444 11.6365 78.933 11.6365H80.1407V15.1217H78.5202C77.4814 15.0792 76.4518 15.3349 75.5493 15.8597V24.8964H71.7274V11.6365Z" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="1" 
                    strokeDasharray="150" 
                    strokeDashoffset="150"
                    className={styles.animatePath}
                />
                <path 
                    d="M97.849 19.0523L101.421 24.8964H108L101.138 13.6743L97.849 19.0523Z" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="1" 
                    strokeDasharray="150" 
                    strokeDashoffset="150"
                    className={styles.animatePath}
                />
                <path 
                    d="M107.427 0.939927L108 0H101.421L97.0998 7.06888L92.776 0H86.1997L93.8104 12.4495L86.1997 24.8964H92.776L107.427 0.939927Z" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="1" 
                    strokeDasharray="150" 
                    strokeDashoffset="150"
                    className={styles.animatePath}
                />
            </svg>
            <svg width="24" height="3" viewBox="0 0 24 1" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.lineSvg}>
                <line 
                    y1="0.5" 
                    x2="24" 
                    y2="0.5" 
                    stroke="white" 
                    className={styles.animateLine}
                />
            </svg>
        </div>
    </div>
  )
}
