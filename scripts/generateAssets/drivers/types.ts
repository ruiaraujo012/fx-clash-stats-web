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
  overtaking: number;
  defending: number;
  qualifying: number;
  raceStart: number;
  tireManagement: number;
  score: Score;
  upgrade: Upgrade;
  statsSum: number;
}

export interface Driver {
  id: number;
  name: string;
  rarity: 'common' | 'rare' | 'epic';
  series: number;
  stats: Stat[];
}
