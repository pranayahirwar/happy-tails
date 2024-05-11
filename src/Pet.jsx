import { Link } from "react-router-dom";

const usingThisImageIfPetImageIsNotAvailable =
  "http://pets-images.dev-apis.com/pets/none.jpg";
let heroImage = usingThisImageIfPetImageIsNotAvailable;

const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;
  if (images.length !== 0) {
    heroImage = images[0];
  }

  return (
    <Link to={`details/${id}`} className='pet'>
      <div className='image-container'>
        <img src={heroImage} alt='Dog' />
      </div>
      <div className='info'>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
