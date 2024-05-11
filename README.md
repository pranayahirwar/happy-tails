# Pet Adopt Me - A React Project

This React pet adoption website demonstrates my understanding of React functionalities like state management, context, and Hooks. The project was built by following Frontend Masters, [Complete Intro to React, v8](https://frontendmasters.com/courses/complete-react-v8/) course by Brian Holt.

Key React Features I Mastered by Following This Course

- Hooks & Custom Hooks
- Effects

## Project Structure

The project is structured as follows:

- `src/`: Contains the source code of the application.
- `src/App.jsx`: The main entry point of the application.
- `src/SearchParams.jsx`: Handles the Search parameters for the animal breed.
- `src/Details.jsx`: A component for displaying more detailed page with images of animal when user click on animals profile in root page.
- `src/Carousel.jsx`: A component for displaying selected animal's image in slightly larger form
- `src/AdoptedPetContext.js`: Provides context for the adopted pet.
- `src/fetchBreedsList.js`, `src/fetchPet.js`, `src/fetchPetsDetails.js`: Functions for fetching data from the API.
- `src/useSearchBreedBasedOnAnimal.js`: A custom hook for searching breeds based on the selected animal.

**Installation**

To install the project, clone the repository and run `npm install` to install the dependencies.

**Running the Project**

To run the project, use the command `npm run dev`.

**Building the Project**

To build the project for production, use the command `npm run build`.
