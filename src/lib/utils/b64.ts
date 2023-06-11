export type Base64 = string;

export async function encodeBase64(file: File): Promise<Base64> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as Base64);
    reader.onerror = (error) => reject(error);
  });
}
