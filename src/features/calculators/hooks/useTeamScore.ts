import useBestDrivers from './useBestDrivers';
import useBestParts from './useBestParts';

const useTeamScore = () => {
  const { driver1, driver2, hasTwoDrivers } = useBestDrivers();
  const { bestBrake, bestEngine, bestFrontWing, bestGearbox, bestRearWing, bestSuspension } = useBestParts();

  let teamScore =
    bestBrake.stat.statsSum +
    bestEngine.stat.statsSum +
    bestFrontWing.stat.statsSum +
    bestGearbox.stat.statsSum +
    bestRearWing.stat.statsSum +
    bestSuspension.stat.statsSum;

  if (hasTwoDrivers) {
    teamScore += driver1.stat.statsSum;
    teamScore += driver2.stat.statsSum;
  }

  return teamScore.toFixed(0);
};

export default useTeamScore;
