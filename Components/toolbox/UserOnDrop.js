import { buildUrl, buildVideoUrl } from 'cloudinary-build-url';
import { getSignature } from './GetSignature';

export const onDrop = async (acceptedFile) => {
  const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;

  // await this.props.cloudinaryProfileImage();

  // ilk denemede çalışmıyor bak buraya
  // const { signature, timestamp } = await this.props.cloudinaryProfileImageData
  //   .cloudinaryProfileImage;
  // console.log(signature);
  // console.log(timestamp);

  const { signature, timestamp } = await getSignature();

  const formData = new FormData();
  formData.append('file', acceptedFile);

  formData.append('signature', signature);
  formData.append('timestamp', timestamp);
  formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_KEY);

  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  });

  const datas = await response.json();
  console.log(datas);

  return datas.url;
};
