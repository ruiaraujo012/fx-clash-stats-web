import { Alert, Container, Heading4 } from '@/components/ui';
import { AssetHeadingContainer, AssetsFuseSearch, AssetsGrid, EditAssetCard } from '@/components/Asset';
import { useTranslation } from 'react-i18next';
import useAssetsFuseSearch from '@/hooks/useAssetsFuseSearch';
import type { Asset } from '@/types';
import type { CollectedAssetsKeys } from '@/store/collectedAssetsStore';

interface Props {
  assets: Asset[];
  assetKey: CollectedAssetsKeys;
  title: string;
}

const AssetListPage = (props: Props) => {
  const { assets, assetKey, title } = props;

  const { t } = useTranslation();

  const { filteredAssets, setSearch, search } = useAssetsFuseSearch(assets);

  return (
    <Container maxWidth='2xl'>
      <AssetHeadingContainer>
        <Heading4 className='m-0'>{title}</Heading4>

        <AssetsFuseSearch onChangeSearch={setSearch} />
      </AssetHeadingContainer>

      {filteredAssets.length === 0 ? (
        <Alert severity='info'>{t('noResultsFor', { search })}</Alert>
      ) : (
        <AssetsGrid>
          {filteredAssets.map((brake) => (
            <EditAssetCard
              asset={brake}
              assetKey={assetKey}
              key={brake.id}
            />
          ))}
        </AssetsGrid>
      )}
    </Container>
  );
};

export default AssetListPage;
