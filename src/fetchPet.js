const fetchPet = async (queryKey) => {

    const id = queryKey.queryKey[0];
    const apiRes = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);

    if (!apiRes) {
        throw new Error(`Details/${id} fetch Error!`);
    }

    return apiRes.json();
};

export default fetchPet;
