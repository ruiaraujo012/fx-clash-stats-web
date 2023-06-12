import { useTranslation } from 'react-i18next';
import AssetListPage from '@/components/Asset/AssetListPage';
import useFrontWings from '../../hooks/useFrontWings';

const FrontWingsListPage = () => {
  const frontWings = useFrontWings();

  const { t } = useTranslation(['parts']);

  return (
    <AssetListPage
      assetKey='frontWings'
      assets={frontWings}
      title={t('parts:frontWing', { count: 2 })}
    />
  );
};

export default FrontWingsListPage;
