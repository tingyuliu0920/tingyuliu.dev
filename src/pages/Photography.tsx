import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useEffect, useState } from "react";
import { useDocumentTitle } from "../router";
import ImageModal from "../components/ImageModal";

const importAllImages = async (): Promise<Record<string, string>> => {
  try {
    const imageModules = await import.meta.glob(
      "../assets/compressed-photos/*.{png,jpg,jpeg}",
    );
    const imagePaths = Object.keys(imageModules);

    const loadedImages = await Promise.all(
      imagePaths.map(async (path) => {
        const module = (await imageModules[path]()) as { default: string };
        return module.default;
      }),
    );

    return imagePaths.reduce(
      (imageMap, path, index) => {
        const fileName = path.replace("../assets/compressed-photos/", "");
        imageMap[fileName] = loadedImages[index];
        return imageMap;
      },
      {} as Record<string, string>,
    );
  } catch (error) {
    console.error("Error importing images:", error);
    return {};
  }
};
const filterImages = (url: string): string => {
  const regex = /\.(png|jpg|jpeg)$/;
  return url.replace("/compressed-photos/", "/photos/").replace(regex, "@2x$&");
};

const Photography = () => {
  useDocumentTitle("Photography | Anne is pilipala");
  const [images, setImages] = useState<Record<string, string>>({});
  // const [images, setImages] = useState<Record<string, { default: string }>>({});
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleCloseModal = () => {
    setSelectedImage(null);
  };
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const fetchedImages = await importAllImages();
        setImages(fetchedImages);
        // const images = import.meta.glob<{ default: string }>(
        //   "../assets/compressed-photos/*.{jpg,jpeg,png}",
        //   { eager: true },
        // );
        // setImages(images);
      } catch (error) {
        console.error("Fetch pictures error:", error);
      }
    };
    fetchImages();
  }, []);
  return (
    <>
      <ImageList variant="masonry" cols={3} gap={10}>
        {Object.entries(images).map(([key, value]) => (
          <ImageListItem key={key}>
            <img
              src={value}
              alt={key}
              loading="lazy"
              onClick={() => setSelectedImage(filterImages(value))}
            />
          </ImageListItem>
        ))}
      </ImageList>
      {selectedImage && (
        <ImageModal
          imgSrc={selectedImage}
          open={!!selectedImage}
          handleClose={handleCloseModal}
        />
      )}
    </>
  );
};
export default Photography;
