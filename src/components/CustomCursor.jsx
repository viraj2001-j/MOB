import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0;
    let posX = 0, posY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: 'power3.out',
      });
    };

    const tick = () => {
      posX += (mouseX - posX) * 0.08;
      posY += (mouseY - posY) * 0.08;
      gsap.set(follower, { x: posX, y: posY });
      requestAnimationFrame(tick);
    };
    const rafId = requestAnimationFrame(tick);

    // Hover effects
    const onEnter = () => {
      gsap.to(cursor, { scale: 0.4, duration: 0.3 });
      gsap.to(follower, { scale: 2.5, opacity: 0.6, duration: 0.3 });
    };
    const onLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 });
      gsap.to(follower, { scale: 1, opacity: 1, duration: 0.3 });
    };

    const interactables = document.querySelectorAll('a, button, [data-cursor]');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={cursorRef} />
      <div className="cursor-follower" ref={followerRef} />
    </>
  );
}
