import { Cloudinary } from '@cloudinary/url-gen';

export const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
  }
});

export const getImageUrl = (publicId: string) => {
  return cld.image(publicId)
    .quality('auto')
    .format('auto')
    .toURL();
};
