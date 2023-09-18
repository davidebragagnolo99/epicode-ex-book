import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const FavouritesPage = () => {
  const favourites = useSelector((state) => state.favourites.content);
  const dispatch = useDispatch();
  return (
    <>
      <Container className="my-5">
        <h1>I tuoi preferiti</h1>
        <ol>
          {favourites.map((favorito, i) => (
            <>
              <li key={favorito._id}>
                <strong>{favorito.company_name}</strong>
              </li>
              <span className="ms-auto">Job Application: {favorito.title}</span>
              <p>Location: {favorito.candidate_required_location}</p>
              <Button
                variant="danger"
                className="mb-2"
                onClick={() => {
                  dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: i });
                }}
              >
                Rimuovi
              </Button>
            </>
          ))}
        </ol>
      </Container>
    </>
  );
};

export default FavouritesPage;
