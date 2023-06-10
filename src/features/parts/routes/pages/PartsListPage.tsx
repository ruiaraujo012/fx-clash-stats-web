import { Container } from '@/components/ui/Container';
import { Heading4 } from '@/components/ui/Heading';
import { useTranslation } from 'react-i18next';
import AssetCard from '@/components/AssetCard';
import AssetsGrid from '@/components/AssetsGrid';
import useBrakes from '../../hooks/useBrakes';

const PartsPage = () => {
  const brakes = useBrakes();

  const { t } = useTranslation(['parts']);

  return (
    <Container>
      <Heading4>{t('parts:brake', { count: 2 })}</Heading4>

      <AssetsGrid>
        {brakes.map((brake) => (
          <AssetCard
            asset={brake}
            key={brake.id}
          />
        ))}
      </AssetsGrid>
    </Container>
  );
};

export default PartsPage;
