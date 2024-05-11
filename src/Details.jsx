import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";
import AdoptedPetContext from "./AdoptedPetContext";

const Details = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);
  const navigateHook = useNavigate();

  const { id } = useParams();
  const [showModel, setShowModel] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: [id],
    queryFn: fetchPet,
  });

  if (isLoading) {
    return (
      <div className='loading-pane'>
        <h2 className='loader'>🐶</h2>
      </div>
    );
  }

  const petDetails = data.pets[0];

  return (
    <div className='details'>
      <Carousel images={petDetails.images} />
      <div>
        <h1>{petDetails.name}</h1>
        <h2>{`${petDetails.animal} — ${petDetails.breed} — ${petDetails.city}, ${petDetails.state}`}</h2>
        <button onClick={() => setShowModel(true)}>Adopt {petDetails.name}</button>
        <p>{petDetails.description}</p>
        {showModel ? (
          <Modal>
            <div>
              <h1>Would you like to Adopt {petDetails.name}</h1>
              <div className='buttons'>
                <button
                  onClick={() => {
                    setAdoptedPet(petDetails);
                    navigateHook("/");
                  }}
                >
                  Yes
                </button>
                <button onClick={() => setShowModel(false)}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

export default function catchingErrorUsingErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
