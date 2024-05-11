import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import fetchPetsDetails from "./fetchPetsDetails";
import useSearchBreedBasedOnAnimal from "./useSearchBreedBasedOnAnimal";
import Results from "./Results";
import AdoptedPetContext from "./AdoptedPetContext";

let ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [adoptedPet] = useContext(AdoptedPetContext);
  const [fetchArgsForfetchPetsDetails, setFetchArgsForfetchPetsDetails] = useState({
    animal: "",
    location: "",
    breed: "",
  });

  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");

  let [ArrayOfBreedsBasedOnSelectedAnimal] = useSearchBreedBasedOnAnimal(animal);

  const { data } = useQuery({
    queryKey: ["petsDetailsSearch", fetchArgsForfetchPetsDetails],
    queryFn: fetchPetsDetails,
  });
  let petsPropForResultComponent = data?.pets ?? [];

  return (
    <div className='search-params'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const updatedValuesOfObject = {
            animal: formData.get("animal") ?? "",
            location: formData.get("location") ?? "",
            breed: formData.get("breed") ?? "",
          };
          setFetchArgsForfetchPetsDetails(updatedValuesOfObject);
        }}
      >
        {adoptedPet ? (
          <div className='pet image-container'>
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor='location'>
          Location
          <input id='location' name='location' placeholder='Seattle, WA' />
        </label>

        <label htmlFor='animal'>
          Animals
          <select
            id='animal'
            name='animal'
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => {
              return (
                <option value={animal} key={animal}>
                  {animal}
                </option>
              );
            })}
          </select>
        </label>

        <label htmlFor='breed'>
          Breeds
          <select
            id='breed'
            name='breed'
            disabled={ArrayOfBreedsBasedOnSelectedAnimal.length === 0}
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            <option />
            {ArrayOfBreedsBasedOnSelectedAnimal.map((breed) => {
              return (
                <option value={breed} key={breed}>
                  {breed}
                </option>
              );
            })}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets={petsPropForResultComponent} />
    </div>
  );
};

export default SearchParams;
