import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useState } from "react";

interface Movie {
  name: string;
  picture: string;
  line: string;
}
interface CardsProps {
  movies: Movie[];
}
const Cards = ({ movies }: CardsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };
  return (
    <div className="sm: relative mx-[10px] flex h-[400px] items-center justify-start sm:h-[500px]">
      {movies.map((movie, index) => (
        <Card
          key={index}
          className={`absolute transform transition-transform ${
            index === activeIndex ? "rotate-0" : "rotate-5"
          } max-h-[400px] max-w-[80%] sm:max-h-[500px] sm:max-w-[350px]`}
          sx={{
            marginLeft: `${index * +20}px`,
            transformOrigin: "top left",
            zIndex:
              index === activeIndex ? movies.length : movies.length - index,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          onClick={handleCardClick}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              className="max-h-[250px] w-full sm:max-h-[350px]"
              image={movie.picture}
              alt="green iguana"
            />
            <CardContent className="dark:bg-gray-700 dark:text-white">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="italic"
              >
                {movie.name}
              </Typography>
              <Typography variant="body2" className="dark:text-gray-50">
                {movie.line}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
