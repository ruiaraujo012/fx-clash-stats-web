import { AssetCard, AssetsGrid, PartStat } from '@/components/Asset';
import { Heading1, Heading6, Hr } from '@/components/ui';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import useBestBrake from '../../hooks/useBestBrake';
import useBestEngine from '../../hooks/useBestEngine';
import useBestFrontWing from '../../hooks/useBestFrontWing';
import useBestGearbox from '../../hooks/useBestGearbox';
import useBestRearWing from '../../hooks/useBestRearWing';
import useBestSuspension from '../../hooks/useBestSuspension';

const CalculatorPage = () => {
  const { t } = useTranslation(['parts']);

  const bestBrake = useBestBrake();
  const bestGearbox = useBestGearbox();
  const bestRearWing = useBestRearWing();
  const bestFrontWing = useBestFrontWing();
  const bestSuspension = useBestSuspension();
  const bestEngine = useBestEngine();

  const parts = useMemo(
    () => [
      {
        data: bestBrake,
        label: t('parts:brake', { count: 1 }),
      },
      {
        data: bestGearbox,
        label: t('parts:gearbox', { count: 1 }),
      },
      {
        data: bestRearWing,
        label: t('parts:rearWing', { count: 1 }),
      },
      {
        data: bestFrontWing,
        label: t('parts:frontWing', { count: 1 }),
      },
      {
        data: bestSuspension,
        label: t('parts:suspension', { count: 1 }),
      },
      {
        data: bestEngine,
        label: t('parts:engine', { count: 1 }),
      },
    ],
    [bestBrake, bestEngine, bestFrontWing, bestGearbox, bestRearWing, bestSuspension, t],
  );

  /**
   * Render
   */
  return (
    <>
      <Heading1>Calculator:</Heading1>

      <AssetsGrid>
        {parts.map((part, i) => (
          <div key={i}>
            <Heading6 className='mb-1'>{part.label}</Heading6>

            <AssetCard asset={part.data.asset}>
              <Hr />

              <PartStat stat={part.data.stat} />
            </AssetCard>
          </div>
        ))}
      </AssetsGrid>
    </>
  );
};

export default CalculatorPage;
