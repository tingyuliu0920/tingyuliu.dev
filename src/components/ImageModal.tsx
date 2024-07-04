import { Box, Modal } from "@mui/material";

interface ImageModalProps {
  imgSrc: string;
  open: boolean;
  handleClose: () => void;
}
const ImageModal = ({ imgSrc, open, handleClose }: ImageModalProps) => {
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
      <div className="flex items-center justify-center focus-visible:outline-none">
        <img
          src={imgSrc}
          alt="Modal Image"
          className="max-h-[90vh] w-auto max-w-[84vw] sm:max-w-[600px]"
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
