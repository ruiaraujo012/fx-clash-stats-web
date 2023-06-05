interface Score {
  weighted: number;
  percentageToMax: number;
}

export interface Upgrade {
  coins: number;
  cards: number;
}

export interface Stat {
  level: number;
  speed: number;
  cornering: number;
  powerUnit: number;
  reliability: number;
  pitStopTime: number;
  score: Score;
  upgrade: Upgrade;
}

export interface Part {
  id: number;
  name: string;
  rarity: 'stock' | 'common' | 'rare' | 'epic';
  series: number;
  stats: Stat[];
}
