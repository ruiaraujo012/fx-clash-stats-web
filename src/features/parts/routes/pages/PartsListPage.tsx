import useBrakes from '../../hooks/useBrakes';

const PartsPage = () => {
  const brakes = useBrakes();

  return (
    <div>
      <h1>PartsPage</h1>
      <p>Brakes:</p>
      <pre>{JSON.stringify(brakes, null, 2)}</pre>
    </div>
  );
};

export default PartsPage;
