import { Card } from '@/components/ui';
import DefinitionItem from '@/components/DefinitionItem';

interface Props {
  children: string | number;
  title: string;
}

const TeamStatCard = (props: Props) => {
  const { children, title } = props;

  return (
    <Card className='max-w-[250px] w-full'>
      <div className='p-3'>
        <DefinitionItem
          className='text-center'
          term={title}
        >
          {children}
        </DefinitionItem>
      </div>
    </Card>
  );
};

export default TeamStatCard;
