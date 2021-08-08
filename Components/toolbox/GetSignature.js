export async function getSignature() {
  const response = await fetch('/api/cloudinary');

  const data = await response.json();
  const { signature, timestamp } = data;

  return { signature, timestamp };
}
