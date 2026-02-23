
export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  distance: number;
  history: { x: number; y: number }[];
}

export interface HeroContent {
  headline: string;
  subheadline: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}
