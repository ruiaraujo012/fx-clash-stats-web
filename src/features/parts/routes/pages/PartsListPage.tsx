import { Alert } from '@/components/ui/Alert';
import { Container } from '@/components/ui/Container';
import { Heading4 } from '@/components/ui/Heading';
import { useTranslation } from 'react-i18next';
import AssetCard from '@/components/AssetCard';
import AssetHeadingContainer from '@/components/AssetHeadingContainer';
import AssetsFuseSearch from '@/components/AssetsFuseSearch';
import AssetsGrid from '@/components/AssetsGrid';
import useAssetsFuseSearch from '@/hooks/useAssetsFuseSearch';
import useBrakes from '../../hooks/useBrakes';

const PartsPage = () => {
  const brakes = useBrakes();

  const { t } = useTranslation(['common', 'parts']);

  const { filteredAssets, setSearch, search } = useAssetsFuseSearch(brakes);

  return (
    <Container maxWidth='2xl'>
      <AssetHeadingContainer>
        <Heading4 className='m-0'>{t('parts:brake', { count: 2 })}</Heading4>

        <AssetsFuseSearch onChangeSearch={setSearch} />
      </AssetHeadingContainer>

      {filteredAssets.length === 0 ? (
        <Alert severity='info'>{t('noResultsFor', { search })}</Alert>
      ) : (
        <AssetsGrid>
          {filteredAssets.map((brake) => (
            <AssetCard
              asset={brake}
              assetKey='brakes'
              key={brake.id}
            />
          ))}
        </AssetsGrid>
      )}
    </Container>
  );
};

export default PartsPage;
