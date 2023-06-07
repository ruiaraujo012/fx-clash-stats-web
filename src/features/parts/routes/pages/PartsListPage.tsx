import AssetCard from '@/components/AssetCard';
import useBrakes from '../../hooks/useBrakes';

const PartsPage = () => {
  const brakes = useBrakes();

  return (
    <div>
      <h1>PartsPage</h1>

      <div className='flex justify-center w-full'>
        <div className='max-w-screen-2xl'>
          <div className='grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-4 gap-5'>
            {brakes.map((brake) => (
              <AssetCard
                asset={brake}
                // FIXME:
                isUpgradable={brake.series === 1}
                key={brake.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartsPage;
