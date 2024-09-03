import { render } from "../../test-utils";
import ImageModal from "./ImageModal";
import testImage from "../../assets/compressed-photos/DSCF0249.jpg";
import { fireEvent, screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

describe("ImageModal", () => {
  const mockHandleClose = vi.fn();
  test("doesn't render when open is false", () => {
    render(
      <ImageModal
        imgSrc={testImage}
        open={false}
        handleClose={mockHandleClose}
      />,
    );
    expect(screen.queryByAltText("Modal Image")).not.toBeInTheDocument();
  });

  test("renders modal spinner when open is true and img is loading", () => {
    render(
      <ImageModal
        imgSrc={testImage}
        open={true}
        handleClose={mockHandleClose}
      />,
    );

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
    expect(screen.getByAltText("Modal Image")).toBeInTheDocument();
  });

  test("hides spinner when image is loaded", () => {
    render(
      <ImageModal
        imgSrc={testImage}
        open={true}
        handleClose={mockHandleClose}
      />,
    );
    const img = screen.getByAltText("Modal Image");
    fireEvent.load(img);
    expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
  });

  test("handleClose is called when image modal is closed", async () => {
    render(
      <ImageModal
        imgSrc={testImage}
        open={true}
        handleClose={mockHandleClose}
      />,
    );

    const dialog = screen.getByRole("dialog");
    await userEvent.click(dialog);
    expect(mockHandleClose).toHaveBeenCalled();
  });

  test("handles image loading error by hiding the progressbar", () => {
    render(
      <ImageModal
        imgSrc={testImage}
        open={true}
        handleClose={mockHandleClose}
      />,
    );
    const img = screen.getByAltText("Modal Image");
    fireEvent.error(img);
    expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
  });
});
