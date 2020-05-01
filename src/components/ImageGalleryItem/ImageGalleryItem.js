import React, {
    Component
} from 'react';
import './ImageGalleryItem.css';

export default class ImageGalleryItem extends Component {
    // componentDidMount() {
    //     console.log(this.props.onClick);
    // }

    // showModal = (id) => {
    //     console.log("Показать модалку");
    //     console.log('ID:', id);
    // }


    render() {
        return ( <
            li className = "ImageGalleryItem" >
            <
            img src = {
                this.props.src
            }
            alt = ""
            className = "ImageGalleryItem-image"
            onClick = {
                () => {
                    this.props.onClick(this.props.srcLargeImage)
                }
            }
            / > < /
            li >
        );
    }
}