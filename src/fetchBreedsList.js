const fetchBreeds = async ({ queryKey }) => {
    if (queryKey[0] === "") {
        return [];
    }

    const animalName = queryKey[0];
    const apiRes = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animalName}`
    );

    if (!apiRes.ok) {
        throw new Error(`Breeds Details for ${animalName} fetch Error!`);
    }
    return apiRes.json();
};

export default fetchBreeds;
