import { LucideProps } from 'lucide-react';
import { 
  User, 
  Building, 
  Wrench, 
  Zap, 
  GraduationCap,
  Home,
  CheckCircle
} from 'lucide-react';

interface ImagePlaceholderProps {
  type?: 'user' | 'business' | 'service' | 'electric' | 'education' | 'home' | 'check';
  size?: number;
  className?: string;
  text?: string;
  bgColor?: string;
  textColor?: string;
}

const iconMap = {
  user: User,
  business: Building,
  service: Wrench,
  electric: Zap,
  education: GraduationCap,
  home: Home,
  check: CheckCircle,
};

const ImagePlaceholder = ({
  type = 'user',
  size = 48,
  className = '',
  text,
  bgColor = 'bg-blue-100',
  textColor = 'text-blue-600',
}: ImagePlaceholderProps) => {
  const Icon = iconMap[type];
  
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div 
        className={`${bgColor} rounded-full flex items-center justify-center`}
        style={{ width: size, height: size }}
      >
        <Icon size={size * 0.6} className={textColor} />
      </div>
      {text && (
        <span className="mt-2 text-sm text-gray-600 font-medium">{text}</span>
      )}
    </div>
  );
};

export default ImagePlaceholder;