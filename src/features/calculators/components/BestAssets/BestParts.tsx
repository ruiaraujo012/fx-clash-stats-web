import { BestAssetCard } from '@/components/Asset';
import { Heading6, Hr } from '@/components/ui';
import { PartStats } from '@/features/parts';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import BestPartsGrid from './BestPartsGrid';
import type { BestParts as BestPartsType } from '../../types';

interface Props {
  bestParts: BestPartsType;
}

const BestParts = (props: Props) => {
  const {
    bestParts: { bestBrake, bestEngine, bestFrontWing, bestGearbox, bestRearWing, bestSuspension },
  } = props;
  const { t } = useTranslation(['parts']);

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

  return (
    <BestPartsGrid>
      {parts.map((part, i) => (
        <div
          className='w-full'
          key={i}
        >
          <Heading6 className='mb-1'>{part.label}</Heading6>

          <BestAssetCard asset={part.data.asset}>
            <Hr />

            <PartStats stat={part.data.stat} />
          </BestAssetCard>
        </div>
      ))}
    </BestPartsGrid>
  );
};

export default BestParts;
