export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  distance: string;
  difficulty: 'Facile' | 'Medio' | 'Impegnativo';
  description: string;
  partnerAssociation?: string;
  imageUrl: string;
}

export interface Team {
  id: string;
  name: string;
  type: 'Settimanale' | 'Mensile' | 'Annuale' | 'Dinamico';
  description: string;
  role: string;
}

export interface Partner {
  id: string;
  name: string;
  description: string;
  location: { x: number; y: number; label: string }; // Coordinates for the SVG map
  website?: string;
  logoUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageUrl: string;
  category: string;
}

export interface NavItem {
  label: string;
  path: string;
}