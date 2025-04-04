import { OptimizedImage } from './common/OptimizedImage';

export const ImageTest = () => {
  return (
    <div>
      <h2>Image Test</h2>
      <p>Cloudinary Cloud Name: {import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}</p>
      <OptimizedImage 
        publicId="cld-sample-5" 
        alt="Test image"
      />
    </div>
  );
};
