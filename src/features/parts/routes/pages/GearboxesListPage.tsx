import { useTranslation } from 'react-i18next';
import AssetListPage from '@/components/Asset/AssetListPage';
import useGearboxes from '../../hooks/useGearboxes';

const GearboxesListPage = () => {
  const brakes = useGearboxes();

  const { t } = useTranslation(['parts']);

  return (
    <AssetListPage
      assetKey='brakes'
      assets={brakes}
      title={t('parts:gearbox', { count: 2 })}
    />
  );
};

export default GearboxesListPage;
