import { useTranslation } from 'react-i18next';
import AssetListPage from '@/components/Asset/AssetListPage';
import useGearboxes from '../../hooks/useGearboxes';

const GearboxesListPage = () => {
  const gearboxes = useGearboxes();

  const { t } = useTranslation(['parts']);

  return (
    <AssetListPage
      assetKey='gearboxes'
      assets={gearboxes}
      title={t('parts:gearbox', { count: 2 })}
    />
  );
};

export default GearboxesListPage;
