import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useCallback, useState } from "react";
import { useTheme } from "../themeContext/ThemeContext";

interface Movie {
  id: number;
  name: string;
  picture: string;
  line: string;
}
interface CardsProps {
  movies: Movie[];
}
const Cards = ({ movies }: CardsProps) => {
  const { darkMode } = useTheme();
  const [cards, setCards] = useState<Movie[]>(movies);

  const handleCardClick = useCallback(
    (index: number) => {
      if (index === 0) index = 1;
      const updatedCards = [...cards];
      const rotatedCards = updatedCards.splice(0, index);
      setCards([...updatedCards, ...rotatedCards]);
    },
    [cards],
  );
  const getRotation = useCallback((index: number) => {
    return index % 2 === 0 ? -5 : 5;
  }, []);

  return (
    <div className="sm: relative mx-[10px] mt-5 flex h-[400px] items-center justify-center sm:mt-0 sm:h-[500px] sm:justify-start">
      {cards.map((movie, index) => (
        <Card
          key={movie.id}
          onClick={() => handleCardClick(index)}
          className={`max-h-[400px] max-w-[80%] sm:max-h-[500px] sm:max-w-[350px]`}
          sx={{
            backgroundColor: darkMode ? "rgb(51 65 85)" : "#fff",
            transformOrigin: "center",
            position: "absolute",
            left: 0,
            right: 0,
            margin: "0 auto",
            transform: `rotate(${getRotation(Number(movie.id))}deg) translateY(${index * 5}px)`,
            transition: "transform 0.3s ease",
            zIndex: cards.length - index,
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
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
