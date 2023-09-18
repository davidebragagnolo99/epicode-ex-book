import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const ButtonFavourite = () => {
  const navigate = useNavigate();

  return (
    <Link to={"/favourites"}>
      <Button variant="success" onClick={() => navigate("/favourites")}>
        Preferiti
      </Button>
    </Link>
  );
};

export default ButtonFavourite;
