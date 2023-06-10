import { Container } from '@/components/ui/Container';
import AssetCard from '@/components/AssetCard';
import AssetsGrid from '@/components/AssetsGrid';
import useBrakes from '../../hooks/useBrakes';

const PartsPage = () => {
  const brakes = useBrakes();

  return (
    <>
      <h1>PartsPage</h1>

      <Container>
        <AssetsGrid>
          {brakes.map((brake) => (
            <AssetCard
              asset={brake}
              key={brake.id}
            />
          ))}
        </AssetsGrid>
      </Container>
    </>
  );
};

export default PartsPage;
