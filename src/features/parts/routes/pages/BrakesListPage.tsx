import { useTranslation } from 'react-i18next';
import AssetListPage from '@/components/Asset/AssetListPage';
import useBrakes from '../../hooks/useBrakes';

const BrakesListPage = () => {
  const brakes = useBrakes();

  const { t } = useTranslation(['parts']);

  return (
    <AssetListPage
      assetKey='brakes'
      assets={brakes}
      title={t('parts:brake', { count: 2 })}
    />
  );
};

export default BrakesListPage;
