import { Part } from '@/features/parts/types';

export type Rarity = 'common' | 'rare' | 'epic' | 'stock';

// TODO: Remove
export type Driver = Part;
export type Asset = Part | Driver;
