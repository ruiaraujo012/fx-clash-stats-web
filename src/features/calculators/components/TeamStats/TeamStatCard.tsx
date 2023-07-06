import { Card } from '@/components/ui';
import DefinitionItem from '@/components/DefinitionItem';
import type { ReactNode } from 'react';

interface Props {
  children: string | number | ReactNode;
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
