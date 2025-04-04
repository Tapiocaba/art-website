import { AdvancedImage } from '@cloudinary/react';
import { cld } from '../../utils/cloudinary';

interface OptimizedImageProps {
  publicId: string;
  alt: string;
  className?: string;
}

export const OptimizedImage = ({ publicId, alt, className }: OptimizedImageProps) => {
  const image = cld.image(publicId);

  return (
    <AdvancedImage 
      cldImg={image} 
      alt={alt}
      className={className}
    />
  );
};
