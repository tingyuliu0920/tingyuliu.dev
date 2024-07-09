import { useEffect, useState } from "react";
import { getImageURL } from "../utils/imageUtil";

interface useImageResult {
  loading: boolean;
  error: Error | null;
  image: string | undefined;
}
const useImage = (imagePath: string): useImageResult => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [image, setImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchImage = () => {
      try {
        const imgUrl = getImageURL(`${imagePath}`);
        setImage(imgUrl);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [imagePath]);

  return {
    loading,
    error,
    image,
  };
};

export default useImage;
