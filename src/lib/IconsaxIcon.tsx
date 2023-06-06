import type { Icon, IconProps } from 'iconsax-react';

interface IconsaxIconProps {
  Icon: Icon;
}

export type IconsaxProps = IconsaxIconProps & IconProps;

const IconsaxIcon = (props: IconsaxProps) => {
  const { Icon, ...other } = props;

  return (
    <Icon
      size={25}
      variant='Bulk'
      {...other}
    />
  );
};

export default IconsaxIcon;
