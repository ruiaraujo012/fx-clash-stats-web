import { useTranslation } from 'react-i18next';
import AssetListPage from '@/components/Asset/AssetListPage';
import useRearWings from '../../hooks/useRearWings';

const RearWingsListPage = () => {
  const rearWings = useRearWings();

  const { t } = useTranslation(['parts']);

  return (
    <AssetListPage
      assetKey='rearWings'
      assets={rearWings}
      title={t('parts:rearWing', { count: 2 })}
    />
  );
};

export default RearWingsListPage;
