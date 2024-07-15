import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useState } from "react";
import { useTheme } from "./ThemeContext";

interface Movie {
  name: string;
  picture: string;
  line: string;
}
interface CardsProps {
  movies: Movie[];
}
const Cards = ({ movies }: CardsProps) => {
  const { darkMode } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };
  return (
    <div className="sm: relative mx-[10px] mt-5 flex h-[400px] items-center justify-center sm:mt-0 sm:h-[500px] sm:justify-start">
      {movies.map((movie, index) => (
        <Card
          key={index}
          className={`absolute max-h-[400px] max-w-[80%] transform transition-transform sm:max-h-[500px] sm:max-w-[350px]`}
          sx={{
            backgroundColor: darkMode ? "rgb(51 65 85)" : "#fff",
            transformOrigin: "center",
            marginLeft: {
              xs: `${index % 2 === 0 ? 20 : -20}px`,
              sm: `${index * 30}px`,
            },
            transform: {
              xs: `rotate(${index % 2 === 0 ? index * 2 : index * -2}deg)`,
              sm: "rotate(0deg)",
            },

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
              className="max-h-[250px] w-full bg-cover sm:max-h-[350px]"
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
