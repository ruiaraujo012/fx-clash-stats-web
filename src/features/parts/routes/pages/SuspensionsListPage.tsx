import { useTranslation } from 'react-i18next';
import AssetListPage from '@/components/Asset/AssetListPage';
import useSuspensions from '../../hooks/useSuspensions';

const SuspensionsListPage = () => {
  const suspensions = useSuspensions();

  const { t } = useTranslation(['parts']);

  return (
    <AssetListPage
      assetKey='suspensions'
      assets={suspensions}
      title={t('parts:suspension', { count: 2 })}
    />
  );
};

export default SuspensionsListPage;
