import { useEffect, useState } from "react";

interface useImageResult {
  loading: boolean;
  error: Error | null;
  image: string | undefined;
}
const useImage = (fileName: string): useImageResult => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [image, setImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        /* @vite-ignore */
        const response = await import(fileName);
        setImage(response.default);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [fileName]);

  return {
    loading,
    error,
    image,
  };
};

export default useImage;
