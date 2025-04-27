import React, { useEffect } from 'react'
import '../styles/Hero.scss'

const HeroEffects = () => {
    useEffect(() => {
        const bubblesContainer = document.querySelector('.bubbles');
        if (!bubblesContainer) return;

        const numBubbles = 50;
        for (let i = 0; i < numBubbles; i++) {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            bubble.style.top = `${Math.random() * 100}vh`;
            bubble.style.left = `${Math.random() * 100}vw`;
            bubble.style.width = `${10 + Math.random() * 20}px`;
            bubble.style.height = bubble.style.width;
            bubble.style.animationDuration = `${5 + Math.random() * 10}s`; // مدة عشوائية من 5 إلى 15 ثانية
            bubble.style.animationDelay = `${Math.random() * 5}s`; // كل بابل تبدأ بتأخير مختلف
            bubblesContainer.appendChild(bubble);
        }
    }, []);



    return (


        <div className="bubbles"></div>
    )
}

export default HeroEffects