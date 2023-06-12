import { useTranslation } from 'react-i18next';
import AssetListPage from '@/components/Asset/AssetListPage';
import useEngines from '../../hooks/useEngines';

const EnginesListPage = () => {
  const engines = useEngines();

  const { t } = useTranslation(['parts']);

  return (
    <AssetListPage
      assetKey='engines'
      assets={engines}
      title={t('parts:engine', { count: 2 })}
    />
  );
};

export default EnginesListPage;
