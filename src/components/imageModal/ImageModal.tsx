import { CircularProgress, Modal } from "@mui/material";
import { useState } from "react";
import { getImageURL } from "../../utils/imageUtil";

interface ImageModalProps {
  imgSrc: string;
  open: boolean;
  handleClose: () => void;
}

const ImageModal = ({ imgSrc, open, handleClose }: ImageModalProps) => {
  const image = getImageURL(imgSrc);
  const [imgLoading, setImgLoading] = useState<boolean>(true);

  const handleImageLoad = () => {
    setImgLoading(false);
  };
  const handleImageError = () => {
    setImgLoading(false);
  };
  const handleModalClose = () => {
    setImgLoading(false);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleModalClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="relative flex items-center justify-center focus-visible:outline-none"
        onClick={handleModalClose}
        role="dialog"
      >
        {imgLoading && <CircularProgress className="absolute z-10" />}
        {image && (
          <img
            src={image}
            alt="Modal Image"
            className="max-h-[90vh] max-w-[84vw] sm:max-w-[600px]"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        )}
      </div>
    </Modal>
  );
};

export default ImageModal;
