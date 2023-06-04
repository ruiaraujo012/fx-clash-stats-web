import fs from 'fs/promises';

const COMMON_BASE_COST = [0, 200, 400, 750, 1500, 2500, 5000, 10000, 25000, 50000, 100000];
const RARE_BASE_COST = [0, 900, 1750, 3000, 6000, 12000, 30000, 60000, 112500];
const EPIC_BASE_COST = [0, 1500, 2500, 5000, 10000, 25000, 50000, 100000];

export const RARITY_COINS_COST = {
  common: COMMON_BASE_COST,
  epic: EPIC_BASE_COST,
  rare: RARE_BASE_COST,
};

export const CARDS_NEEDED = [0, 4, 10, 20, 50, 100, 200, 400, 1000, 2000, 4000];

export const createFile = async <T extends object>(filePath: string, content: T) => {
  try {
    await fs.writeFile(filePath, JSON.stringify(content));
  } catch (err) {
    console.error(err);
  }
};
