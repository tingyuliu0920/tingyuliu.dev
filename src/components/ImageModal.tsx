import { CircularProgress, Modal } from "@mui/material";
import useImage from "../hooks/useImage";

interface ImageModalProps {
  imgSrc: string;
  open: boolean;
  handleClose: () => void;
}

const ImageModal = ({ imgSrc, open, handleClose }: ImageModalProps) => {
  const { loading, error, image } = useImage(imgSrc);
  if (error) return <div className="text-gray-300">{error.message}</div>;
  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="flex items-center justify-center focus-visible:outline-none"
        onClick={handleClose}
      >
        {loading ? (
          <CircularProgress />
        ) : (
          <img
            src={image}
            alt="Modal Image"
            className="max-h-[90vh] max-w-[84vw] sm:max-w-[600px]"
          />
        )}
      </div>
    </Modal>
  );
};

export default ImageModal;
