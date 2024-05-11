async function fetchPetsDetailsFromAPI({ queryKey }) {
    const { animal, location, breed } = queryKey[1];
    const apiResponse = await fetch(
        `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    if (!apiResponse.ok) {
        throw new Error(
            `requestPetsDetailsFromAPI Error, while fetching ${location} - ${animal} - ${breed} data`
        );
    }
    const responseInJSON = await apiResponse.json();
    return responseInJSON;
}

export default fetchPetsDetailsFromAPI;
