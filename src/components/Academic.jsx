import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const academics = [
	{
		level: 'Higher Secondary',
		percentage: '92%',
		barWidth: '92%',
		year: '2020',
		desc: 'Completed with distinction — strong academic foundation',
		side: 'right',
		accentClass: 'from-indigo-500 to-violet-500',
		barClass: 'from-indigo-500 to-violet-500',
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
				<path d="M22 10v6M2 10l10-5 10 5-10 5z" />
				<path d="M6 12v5c3 3 9 3 12 0v-5" />
			</svg>
		),
	},
	{
		level: 'Diploma',
		percentage: '80.69%',
		barWidth: '81%',
		year: '2023',
		desc: 'Strong foundation in technical skills and applied engineering',
		side: 'left',
		accentClass: 'from-purple-500 to-fuchsia-500',
		barClass: 'from-purple-500 to-fuchsia-500',
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
				<rect x="2" y="3" width="20" height="14" rx="2" />
				<path d="M8 21h8M12 17v4" />
			</svg>
		),
	},
	{
		level: 'B.Tech (CSE)',
		percentage: '7.0 CGPA',
		barWidth: '70%',
		year: '2026',
		desc: 'Major in Computer Science & Engineering',
		side: 'right',
		accentClass: 'from-pink-500 to-rose-500',
		barClass: 'from-pink-500 to-rose-500',
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
				<polyline points="16 18 22 12 16 6" />
				<polyline points="8 6 2 12 8 18" />
			</svg>
		),
	},
];

const Card = ({ item, isDark, animated, isRight }) => (
	<div className={`w-64 rounded-2xl border relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group
		${isDark ? 'bg-linear-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-purple-500' : 'bg-linear-to-br from-white to-gray-50 border-gray-200 hover:border-purple-400'}`}>
		
		{/* Gradient background overlay on hover */}
		<div className={`absolute inset-0 bg-linear-to-br ${item.accentClass} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
		
		<div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${item.accentClass}`} />
		
		<div className="px-5 py-4 pt-5 relative z-10">
			<p className={`text-[11px] uppercase tracking-widest mb-1 font-bold bg-linear-to-r ${item.accentClass} bg-clip-text text-transparent`}>
				{item.year}
			</p>
			<h3 className={`text-sm font-bold mb-1 bg-linear-to-r ${item.accentClass} bg-clip-text text-transparent`}>
				{item.level}
			</h3>
			<p className={`text-xs leading-relaxed mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
				{item.desc}
			</p>
			<div className={`flex items-center gap-2 ${!isRight ? 'flex-row-reverse' : ''}`}>
				<span className={`text-xs font-medium px-2.5 py-1 rounded-full border bg-linear-to-r ${item.accentClass} text-white flex
					${isDark ? 'border-purple-500/50' : 'border-purple-400/50'}`}>
					{item.percentage}
				</span>
				<div className={`flex-1 h-1 rounded-full overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
					<div
						className={`h-full rounded-full bg-linear-to-r ${item.barClass} transition-all duration-1300 ease-out shadow-lg shadow-purple-500/50`}
						style={{ width: animated ? item.barWidth : '0%' }}
					/>
				</div>
			</div>
		</div>
	</div>
);

const Academic = ({ isDark }) => {
	const canvasRef = useRef(null);
	const [animated, setAnimated] = useState(false);

	useEffect(() => {
		if (!canvasRef.current) return;
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		camera.position.z = 8;

		// Create multiple rotating geometries
		const cubeGeo = new THREE.BoxGeometry(2, 2, 2);
		const torusGeo = new THREE.TorusGeometry(3, 0.8, 16, 100);
		const icosahedronGeo = new THREE.IcosahedronGeometry(2, 0);
		
		const cubeMat = new THREE.MeshBasicMaterial({ 
			color: isDark ? 0x818cf8 : 0xa78bfa, 
			wireframe: true,
			transparent: true,
			opacity: 0.7
		});
		
		const torusMat = new THREE.MeshBasicMaterial({ 
			color: isDark ? 0xc4b5fd : 0xddd6fe, 
			wireframe: true,
			transparent: true,
			opacity: 0.5
		});

		// Left geometries
		const cube1 = new THREE.Mesh(cubeGeo, cubeMat);
		cube1.position.x = -10;
		cube1.position.y = -2;
		scene.add(cube1);

		const torus = new THREE.Mesh(torusGeo, torusMat);
		torus.position.x = -10;
		torus.position.y = 3;
		scene.add(torus);

		// Right geometries
		const cube2 = new THREE.Mesh(cubeGeo, cubeMat);
		cube2.position.x = 10;
		cube2.position.y = -2;
		scene.add(cube2);

		const icosahedron = new THREE.Mesh(icosahedronGeo, cubeMat);
		icosahedron.position.x = 10;
		icosahedron.position.y = 3;
		scene.add(icosahedron);

		// Enhanced particles with more density
		const pgeo = new THREE.BufferGeometry();
		const pos = new Float32Array(3000);
		const vel = new Float32Array(3000);
		for (let i = 0; i < 3000; i += 3) {
			pos[i] = (Math.random() - 0.5) * 60;
			pos[i + 1] = (Math.random() - 0.5) * 60;
			pos[i + 2] = (Math.random() - 0.5) * 60;
			vel[i] = (Math.random() - 0.5) * 0.05;
			vel[i + 1] = (Math.random() - 0.5) * 0.05;
			vel[i + 2] = (Math.random() - 0.5) * 0.05;
		}
		pgeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
		
		const pmat = new THREE.PointsMaterial({ 
			size: 0.08, 
			color: isDark ? 0x818cf8 : 0xa78bfa,
			transparent: true,
			opacity: 0.8,
			sizeAttenuation: true
		});
		const particles = new THREE.Points(pgeo, pmat);
		scene.add(particles);

		// Add a second layer of finer particles
		const pgeo2 = new THREE.BufferGeometry();
		const pos2 = new Float32Array(2000);
		for (let i = 0; i < 2000; i++) {
			pos2[i] = (Math.random() - 0.5) * 80;
		}
		pgeo2.setAttribute('position', new THREE.BufferAttribute(pos2, 3));
		const pmat2 = new THREE.PointsMaterial({ 
			size: 0.03, 
			color: isDark ? 0xc084fc : 0xd8b4fe,
			transparent: true,
			opacity: 0.4
		});
		const particles2 = new THREE.Points(pgeo2, pmat2);
		scene.add(particles2);

		let raf;
		let time = 0;
		const animate = () => {
			raf = requestAnimationFrame(animate);
			time += 0.0001;

			// Rotate geometries
			cube1.rotation.x += 0.003;
			cube1.rotation.y += 0.004;
			cube1.position.y += Math.sin(time * 2) * 0.002;

			cube2.rotation.x -= 0.002;
			cube2.rotation.y -= 0.003;
			cube2.position.y += Math.sin(time * 2 + Math.PI) * 0.002;

			torus.rotation.z += 0.005;
			torus.rotation.x += 0.001;

			icosahedron.rotation.y += 0.004;
			icosahedron.rotation.z += 0.002;

			// Animate particles
			particles.rotation.z += 0.0002;
			particles.rotation.x += 0.00005;
			particles2.rotation.z -= 0.0001;
			particles2.rotation.y += 0.00007;

			// Subtle particle position animation
			const posArray = pgeo.attributes.position.array;
			for (let i = 0; i < posArray.length; i += 3) {
				posArray[i] += vel[i];
				posArray[i + 1] += vel[i + 1];
				posArray[i + 2] += vel[i + 2];
				
				// Wrap around bounds
				if (posArray[i] > 30) posArray[i] = -30;
				if (posArray[i] < -30) posArray[i] = 30;
				if (posArray[i + 1] > 30) posArray[i + 1] = -30;
				if (posArray[i + 1] < -30) posArray[i + 1] = 30;
			}
			pgeo.attributes.position.needsUpdate = true;

			renderer.render(scene, camera);
		};
		animate();

		const onResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};
		window.addEventListener('resize', onResize);
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('resize', onResize);
			[cubeGeo, torusGeo, icosahedronGeo, cubeMat, torusMat, pgeo, pmat, pgeo2, pmat2].forEach(o => o.dispose());
			renderer.dispose();
		};
	}, [isDark]);

	useEffect(() => {
		const t = setTimeout(() => setAnimated(true), 350);
		return () => clearTimeout(t);
	}, []);

	return (
		<section id="academic" className="relative py-20 overflow-hidden">
			{/* Gradient background */}
			<div className={`absolute inset-0 -z-5 bg-linear-to-br ${isDark ? 'from-gray-900 via-purple-900/20 to-gray-900' : 'from-white via-purple-50/30 to-white'}`} />
			
			<canvas
				ref={canvasRef}
				className="absolute inset-0 w-full h-full -z-10 opacity-20 pointer-events-none"
			/>

			<div className="max-w-3xl mx-auto px-6 sm:px-10 relative z-10">
				<div className="text-center mb-14">
				<h2 className="text-4xl font-bold tracking-tight mb-2 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
					Academic Journey
				</h2>
				<p className={`text-sm tracking-wide bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold`}>
					Building knowledge, one milestone at a time
				</p>
			</div>

			<div className="relative">
				{/* Spine with gradient */}
				<div className={`absolute left-1/2 -translate-x-px top-0 bottom-0 w-1 bg-linear-to-b from-indigo-500 via-purple-500 to-pink-500 opacity-40`} />
					{academics.map((item) => {
						const isRight = item.side === 'right';
						return (
							<div key={item.level} className="flex items-center mb-11 relative">
								{/* Left slot */}
								{isRight ? (
									<div className="flex-1" />
								) : (
									<div className="flex-1 flex justify-end pr-7">
										<Card item={item} isDark={isDark} animated={animated} isRight={false} />
									</div>
								)}

								{/* Center node */}
								<div className="w-0 flex justify-center z-10 relative">
									<div className={`w-9 h-9 -translate-x-1/2 rounded-full flex items-center justify-center border-2 transition-all duration-300 group/node
										bg-linear-to-br ${item.accentClass} border-transparent shadow-lg group-hover/node:shadow-xl group-hover/node:scale-110
										${isDark ? 'shadow-purple-500/50' : 'shadow-purple-400/50'}`}>
										<div className="text-white">
											{item.icon}
										</div>
									</div>
								</div>

								{/* Right slot */}
								{isRight ? (
									<div className="flex-1 flex justify-start pl-7">
										<Card item={item} isDark={isDark} animated={animated} isRight={true} />
									</div>
								) : (
									<div className="flex-1" />
								)}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Academic;