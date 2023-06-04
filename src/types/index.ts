type Rarity = 'stock' | 'common' | 'rare' | 'epic';

export interface AssetDetails {
  name: string;
  series: number;
  rarity: Rarity;
}
