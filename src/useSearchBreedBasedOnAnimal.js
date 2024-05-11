import { useQuery } from "@tanstack/react-query";
import fetchBreeds from "./fetchBreedsList";

export default function useSearchBreedBasedOnAnimal(animalName) {
    const { data, status } = useQuery({
        queryKey: [animalName],
        queryFn: fetchBreeds,
    });
    return [data?.breeds ?? [], status];
}
