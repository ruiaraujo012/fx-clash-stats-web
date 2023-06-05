import fs from 'fs/promises';

const COMMON_BASE_COINS_COST = [0, 200, 400, 750, 1500, 2500, 5000, 10000, 25000, 50000, 100000] as const;
const RARE_BASE_COINS_COST = [0, 900, 1750, 3000, 6000, 12000, 30000, 60000, 112500] as const;
const EPIC_BASE_COINS_COST = [0, 1500, 2500, 5000, 10000, 25000, 50000, 100000] as const;

export const RARITY_COINS_COST = {
  common: COMMON_BASE_COINS_COST,
  epic: EPIC_BASE_COINS_COST,
  rare: RARE_BASE_COINS_COST,
} as const;

export const CARDS_NEEDED = [0, 4, 10, 20, 50, 100, 200, 400, 1000, 2000, 4000] as const;

export const createFile = async <T extends object>(filePath: string, content: T) => {
  try {
    await fs.writeFile(filePath, JSON.stringify(content));
  } catch (err) {
    console.error(err);
  }
};
