import { Alert, Heading6, Hr } from '@/components/ui';
import { BestAssetCard } from '@/components/Asset';
import { DriverStats } from '@/features/drivers';
import { useTranslation } from 'react-i18next';
import type { BestDrivers as BestDriversType } from '../../types';

interface Props {
  bestDrivers: BestDriversType;
}

const BestDrivers = (props: Props) => {
  const { bestDrivers } = props;

  const { t } = useTranslation(['calculators']);

  if (!bestDrivers.hasTwoDrivers) {
    return <Alert severity='warning'>{t('calculators:error.twoDriverRequired')}</Alert>;
  }

  return (
    <div className='grid justify-items-center max-sm:grid-cols-1 grid-cols-2 gap-5 mb-5'>
      <div className='max-w-sm w-full'>
        <Heading6 className='mb-1'>{t('calculators:driver1')}</Heading6>

        <BestAssetCard asset={bestDrivers.driver1.asset}>
          <Hr />

          <DriverStats stat={bestDrivers.driver1.stat} />
        </BestAssetCard>
      </div>

      <div className='max-w-sm w-full'>
        <Heading6 className='mb-1'>{t('calculators:driver2')}</Heading6>

        <BestAssetCard asset={bestDrivers.driver2.asset}>
          <Hr />

          <DriverStats stat={bestDrivers.driver2.stat} />
        </BestAssetCard>
      </div>
    </div>
  );
};

export default BestDrivers;
