import { Alert, Heading6, Hr } from '@/components/ui';
import { BestAssetCard } from '@/components/Asset';
import { DriverStats } from '@/features/drivers';
import { useTranslation } from 'react-i18next';
import useBestDrivers from '../../hooks/useBestDrivers';

const BestDrivers = () => {
  const { t } = useTranslation(['calculators']);

  const { hasTwoDrivers, driver1, driver2 } = useBestDrivers();

  if (!hasTwoDrivers) {
    return <Alert severity='warning'>{t('calculators:error.twoDriverRequired')}</Alert>;
  }

  return (
    <div className='grid justify-items-center max-sm:grid-cols-1 grid-cols-2 gap-5 mb-5'>
      <div className='max-w-sm w-full'>
        <Heading6 className='mb-1'>{t('calculators:driver1')}</Heading6>

        <BestAssetCard asset={driver1.asset}>
          <Hr />

          <DriverStats stat={driver1.stat} />
        </BestAssetCard>
      </div>

      <div className='max-w-sm w-full'>
        <Heading6 className='mb-1'>{t('calculators:driver2')}</Heading6>

        <BestAssetCard asset={driver2.asset}>
          <Hr />

          <DriverStats stat={driver2.stat} />
        </BestAssetCard>
      </div>
    </div>
  );
};

export default BestDrivers;
