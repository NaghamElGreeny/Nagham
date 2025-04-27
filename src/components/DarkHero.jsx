import { React, useEffect } from 'react'
import '../styles/Hero.scss'

const DarkHero = () => {

    useEffect(() => {

        const starsContainer = document.querySelector('.stars');
        const numStars = 30;
        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.top = `${Math.random() * 100}vh`;
            star.style.left = `${Math.random() * 100}vw`;
            starsContainer.appendChild(star);
        }

        // const shootingStarsContainer = document.querySelector('.shooting-stars');
        // const numShootingStars = 5;
        // for (let i = 0; i < numShootingStars; i++) {
        //     const shootingStar = document.createElement('div');
        //     shootingStar.classList.add('shooting-star');
        //     shootingStar.style.top = `${Math.random() * 100} vh`;
        //     shootingStar.style.left = `${Math.random() * 100} vw`;
        //     shootingStarsContainer.appendChild(shootingStar);
        // }
    }, []);
    return (
        <>
            <div className="stars"></div>
            <div className="shooting-stars"></div>
        </>
    )
}

export default DarkHero