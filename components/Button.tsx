"use client";

import ImageWithFallback from './ImageWithFallback';
import ImagePlaceholder from './ImagePlaceholder';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  onClick?: () => void;
}

const Button = ({ type, title, icon, variant, full, onClick }: ButtonProps) => {
  const getIconPlaceholder = () => {
    if (icon?.includes('user')) return 'user';
    if (icon?.includes('play')) return 'check';
    if (icon?.includes('android')) return 'electric';
    if (icon?.includes('apple')) return 'business';
    return 'service';
  };

  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'} transition-all hover:scale-[1.02] active:scale-[0.98]`}
      type={type}
      onClick={onClick}
    >
      {icon && (
        <ImageWithFallback 
          src={icon}
          alt={title}
          width={24}
          height={24}
          fallbackComponent={
            <ImagePlaceholder 
              type={getIconPlaceholder()}
              size={24}
            />
          }
          style={{ width: 'auto', height: 'auto' }}
        />
      )}
      <span className="bold-16 whitespace-nowrap cursor-pointer">{title}</span>
    </button>
  )
}

export default Button