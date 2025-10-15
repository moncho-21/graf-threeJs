import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Crear la escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear geometrías y materiales para los cubos
const geometry = new THREE.BoxGeometry(1, 1, 1);

const materialGreen = new THREE.MeshStandardMaterial({ color: 0x00ff00 }); // Verde
const materialBlue  = new THREE.MeshStandardMaterial({ color: 0x0000ff }); // Azul
const materialRed   = new THREE.MeshStandardMaterial({ color: 0xff0000 }); // Rojo

// Crear los cubos
const cubeGreen = new THREE.Mesh(geometry, materialGreen);
const cubeBlue  = new THREE.Mesh(geometry, materialBlue);
const cubeRed   = new THREE.Mesh(geometry, materialRed);

// Posicionar los cubos en diferentes lugares
cubeGreen.position.x = -2;
cubeBlue.position.x  = 0;
cubeRed.position.x   = 2;

// Agregar los cubos a la escena
scene.add(cubeGreen);
scene.add(cubeBlue);
scene.add(cubeRed);

// Agregar luz direccional
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Posicionar la cámara
camera.position.z = 5;

// Función de animación con velocidades diferentes
function animate() {
    cubeGreen.rotation.x += 0.01;
    cubeGreen.rotation.y += 0.01;

    cubeBlue.rotation.x += 0.04;
    cubeBlue.rotation.y += 0.03;

    cubeRed.rotation.x += 0.1;
    cubeRed.rotation.y += 0.07;

    renderer.render(scene, camera);
}

// Iniciar la animación
renderer.setAnimationLoop(animate);
