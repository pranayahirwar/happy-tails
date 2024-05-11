// This file is used to view animal images in detail page in a large format.
import { Component } from "react";

class Carousel extends Component {
    state = {
        active: 0,
        someOtherObject1: 1,
        someOtherObject2: "Two",
        someOtherObject3: "Three",
    };

    static defaultProps = {
        images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
    };

    replaceBigImageWithSelectedImge = (event) => {
        this.setState({
            active: +event.target.dataset.index,
        });
    };

    render() {
        const { active } = this.state;
        const { images } = this.props;
        return (
            <div className='carousel'>
                <img src={images[active]} alt='animal' />
                <div className='carousel-smaller'>
                    {images.map((photo, index) => (
                        // eslint-disable-next-line
                        <img
                            onClick={this.replaceBigImageWithSelectedImge}
                            key={photo}
                            src={photo}
                            className={index === active ? "active" : ""}
                            alt='Some more images of selected dog'
                            data-index={index}
                            data-photourl={photo}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Carousel;
