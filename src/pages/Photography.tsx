import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ImageModal from "../components/imageModal/ImageModal";

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
const getHigherImagePath = (imageName: string): string => {
  const regex = /\.(png|jpg|jpeg)$/;
  return `photos/${imageName.replace(regex, "@2x$&")}`;
};

const Photography = () => {
  const [images, setImages] = useState<Record<string, string>>({});
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleCloseModal = () => {
    setSelectedImage(null);
  };
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const fetchedImages = await importAllImages();
        setImages(fetchedImages);
      } catch (error) {
        console.error("Fetch pictures error:", error);
      }
    };
    fetchImages();
  }, []);
  return (
    <>
      <Helmet title="Photography | Tingyu Liu"></Helmet>
      <ImageList variant="masonry" cols={3} gap={10}>
        {Object.entries(images).map(([key, value]) => (
          <ImageListItem key={key}>
            <img
              src={value}
              alt={key}
              loading="lazy"
              onClick={() => setSelectedImage(getHigherImagePath(key))}
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
