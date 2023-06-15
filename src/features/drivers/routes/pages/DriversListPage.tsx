import { useTranslation } from 'react-i18next';
import AssetListPage from '@/components/Asset/AssetListPage';
import useDrivers from '../../hooks/useDrivers';

const DriversListPage = () => {
  const drivers = useDrivers();

  const { t } = useTranslation(['drivers']);

  return (
    <AssetListPage
      assetKey='drivers'
      assets={drivers}
      title={t('drivers:driver', { count: 2 })}
    />
  );
};

export default DriversListPage;
