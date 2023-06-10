'use client';
import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styles from '../page.module.css';
import HeaderSection from '../header/page';

const Page = ({ offset, gradient, onClick, children }) => (
	<>
		<ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
			<div className={styles.slopeBegin} />
		</ParallaxLayer>

		<ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
			<div className={`${styles.slopeEnd} ${styles[gradient]}`} />
		</ParallaxLayer>

		<ParallaxLayer
			className={`${styles.text} ${styles.number}`}
			offset={offset}
			speed={0.3}>
			<span>{children}</span>
		</ParallaxLayer>
	</>
);

export default function App() {
	const parallax = useRef(null);

	const scroll = (to) => {
		if (parallax.current) {
			parallax.current.scrollTo(to);
		}
	};

	return (
		<div style={{ background: '#dfdfdf' }}>
			<Parallax
				className={styles.container}
				ref={parallax}
				pages={3}
				horizontal>
				<Page
					offset={0}
					gradient='pink'
					onClick={() => scroll(1)}
                    >
					<HeaderSection/>
                    </Page>
				<Page
					offset={1}
					gradient='teal'
					onClick={() => scroll(2)}
					content='Welcome to page 2'
				/>
				<Page
					offset={2}
					gradient='tomato'
					onClick={() => scroll(0)}
					content='This is the last page, page 3'
				/>
			</Parallax>
		</div>
	);
}
