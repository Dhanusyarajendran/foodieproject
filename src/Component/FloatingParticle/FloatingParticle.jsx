import React from 'react';

const particles = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  top: Math.random() * 100,
  left: Math.random() * 100,
  duration: 2 + Math.random() * 3,
}));

const FloatingParticle = () => (
  <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
    {particles.map((particle) => (
      <div
        key={particle.id}
        className="floating-particle"
        style={{
          top: `${particle.top}%`,
          left: `${particle.left}%`,
          animationDuration: `${particle.duration}s`,
        }}
      />
    ))}
  </div>
);

export default FloatingParticle;
