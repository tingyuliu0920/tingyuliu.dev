import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useEffect, useState } from "react";
import { useDocumentTitle } from "../router";

const importAllImages = async (): Promise<Record<string, string>> => {
  try {
    const imageModules = await import.meta.glob(
      "../assets/photos/*.{png,jpg,jpeg}",
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
        const fileName = path.replace("../assets/photos/", "");
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

const Photography = () => {
  useDocumentTitle("Photography | Anne is pilipala");
  const [images, setImages] = useState<Record<string, string>>({});

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
    <ImageList variant="masonry" cols={3} gap={10}>
      {Object.entries(images).map(([key, value]) => (
        <ImageListItem key={key}>
          <img src={value} alt={key} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
export default Photography;
