import fs from 'fs/promises';

// Row are series
// Cols are levels
const COMMON_COINS_COST = [
  [0, 1_400, 1_650, 2_000, 2_400, 2_900, 3_500, 4_200, 10_000, 20_000, 50_000],
  [0, 2_100, 2_500, 3_000, 3_700, 4_500, 5_400, 6_500, 10_000, 30_000, 75_000],
  [0, 3_500, 4_200, 5_100, 6_100, 7_300, 8_800, 10_600, 20_000, 50_000, 100_000],
  [0, 6_400, 7_500, 9_300, 11_000, 13_000, 16_000, 19_000, 40_000, 90_000, 200_000],
  [0, 11_000, 13_000, 15_000, 18_000, 22_000, 26_000, 31_000, 60_000, 130_000, 275_000],
  [0, 18_000, 21_000, 25_000, 30_000, 35_000, 42_500, 50_000, 90_000, 190_000, 400_000],
  [0, 36_000, 42_500, 50_000, 57_500, 67_500, 82_500, 97_500, 160_000, 300_000, 600_000],
  [0, 63_000, 75_000, 90_000, 105_000, 125_000, 150_000, 180_000, 260_000, 430_000, 800_000],
  [0, 105_000, 130_000, 155_000, 190_000, 230_000, 275_000, 330_000, 480_000, 700_000, 1_0755_000],
  [0, 175_000, 210_000, 250_000, 295_000, 350_000, 420_000, 505_000, 700_000, 990_000, 1_475_000],
  [0, 295_000, 355_000, 415_000, 500_000, 600_000, 700_000, 850_000, 1_050_000, 1_360_000, 1_875_000],
  [0, 520_000, 620_000, 750_000, 900_000, 1_075_000, 1_300_000, 1_550_000, 1_875_000, 2_250_000, 2_700_000],
] as const;
const RARE_COINS_COST = [
  [0, 2_000, 2_400, 2_900, 3_500, 4_200, 10_000, 20_000, 50_000],
  [0, 3_000, 3_700, 4_500, 5_400, 6_500, 10_000, 30_000, 75_000],
  [0, 5_100, 6_100, 7_300, 8_800, 10_600, 20_000, 50_000, 100_000],
  [0, 9_300, 11_000, 13_000, 16_000, 19_000, 40_000, 90_000, 200_000],
  [0, 15_000, 18_000, 22_000, 26_000, 31_000, 60_000, 130_000, 275_000],
  [0, 25_000, 30_000, 35_000, 42_500, 50_000, 90_000, 190_000, 400_000],
  [0, 50_000, 57_500, 67_500, 82_500, 97_500, 160_000, 300_000, 600_000],
  [0, 90_000, 105_000, 125_000, 150_000, 180_000, 260_000, 430_000, 800_000],
  [0, 155_000, 190_000, 230_000, 275_000, 330_000, 480_000, 700_000, 1_075_000],
  [0, 250_000, 295_000, 350_000, 420_000, 505_000, 700_000, 990_000, 1_475_000],
  [0, 415_000, 500_000, 600_000, 700_000, 850_000, 1_050_000, 1_360_000, 1_875_000],
  [0, 750_000, 900_000, 1_075_000, 1_300_000, 1_550_000, 1_875_000, 2_250_000, 2_700_000],
] as const;
const EPIC_COINS_COST = [
  [0, 2_400, 2_900, 3_500, 4_200, 10_000, 20_000, 50_000],
  [0, 3_700, 4_500, 5_400, 6_500, 10_000, 30_000, 75_000],
  [0, 6_100, 7_300, 8_800, 10_600, 20_000, 50_000, 100_000],
  [0, 11_000, 13_000, 16_000, 19_000, 40_000, 90_000, 200_000],
  [0, 18_000, 22_000, 26_000, 31_000, 60_000, 130_000, 275_000],
  [0, 30_000, 35_000, 42_500, 50_000, 90_000, 190_000, 400_000],
  [0, 57_500, 67_500, 82_500, 97_500, 160_000, 300_000, 600_000],
  [0, 105_000, 125_000, 150_000, 180_000, 260_000, 430_000, 800_000],
  [0, 190_000, 230_000, 275_000, 330_000, 480_000, 700_000, 1_075_000],
  [0, 295_000, 350_000, 420_000, 505_000, 700_000, 990_000, 1_475_000],
  [0, 500_000, 600_000, 700_000, 850_000, 1_050_000, 1_360_000, 1_875_000],
  [0, 900_000, 1_075_000, 1_300_000, 1_550_000, 1_875_000, 2_250_000, 2_700_000],
] as const;

export const RARITY_COINS_COST = {
  common: COMMON_COINS_COST,
  epic: EPIC_COINS_COST,
  rare: RARE_COINS_COST,
} as const;

export const CARDS_NEEDED = [0, 4, 10, 20, 50, 100, 200, 400, 1000, 2000, 4000] as const;

export const createFile = async <T extends object>(filePath: string, content: T) => {
  try {
    await fs.writeFile(filePath, JSON.stringify(content));
  } catch (err) {
    console.error(err);
  }
};