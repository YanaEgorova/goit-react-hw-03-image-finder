import React, { Component } from 'react';
import './ImageGallery.css';

export default class ImageGallery extends Component {
    render() {
        return <ul className="ImageGallery">{this.props.children}</ul>;
    }
}
