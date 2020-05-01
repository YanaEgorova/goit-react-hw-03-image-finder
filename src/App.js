import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem';
import Notification from './components/Notification';
import Button from './components/Button';
import Modal from './components/Modal';
import imagesApi from './services/imagesApi';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

{
    /* <Searchbar>, <ImageGallery>, <ImageGalleryItem>, <Loader>, <Button>  <Modal></Modal> */
}

export default class App extends Component {
    state = {
        images: [],
        loading: false,
        key: '13248585-0966523de6c8b046532b25512',
        error: null,
        searchQuery: '',
        page: 1,
        largeImageURL: null,
    };

    componentDidUpdate(prevProps, prevState) {
        const prevQuery = prevState.searchQuery;
        const nextQuery = this.state.searchQuery;

        if (prevQuery !== nextQuery) {
            this.fetchImages();
        }

        if (
            prevState.images !== this.state.images &&
            Object.keys(prevState.images).length !== 0
        ) {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
            });
        }

        if (prevQuery === nextQuery) return;
    }

    fetchImages = () => {
        const { searchQuery, page } = this.state;

        this.setState({
            loading: true,
        });

        imagesApi
            .fetchImagesWithQuery(searchQuery, page)
            .then(images =>
                this.setState(prevState => ({
                    images: [...prevState.images, ...images],
                    page: prevState.page + 1,
                })),
            )
            .catch(error =>
                this.setState({
                    error,
                }),
            )
            .finally(() =>
                this.setState({
                    loading: false,
                }),
            );
    };

    handleSearchFormSubmit = query => {
        if (query === this.state.searchQuery) return;
        this.setState({
            searchQuery: query,
            images: [],
            page: 1,
        });
    };

    // showModal = () => {
    //   this.setState({
    //     showModal: !this.state.showModal
    //   })

    // }

    setLargeImage = url => {
        this.setState({
            largeImageURL: url,
        });
        console.log('Event');
        // console.log('HERE:', this.state.largeImageURL);
    };

    render() {
        const { error, loading, images, largeImageURL } = this.state;

        return (
            <>
                {largeImageURL && (
                    <Modal src={largeImageURL} onClose={this.setLargeImage} />
                )}{' '}
                <Searchbar onSubmit={this.handleSearchFormSubmit} />{' '}
                {error && <Notification message={`Wooops ${error.message}`} />}{' '}
                {images.length > 0 && (
                    <ImageGallery>
                        {' '}
                        {this.state.images.map(image => (
                            <ImageGalleryItem
                                key={image.id}
                                src={image.webformatURL}
                                srcLargeImage={image.largeImageURL}
                                onClick={this.setLargeImage}
                            />
                        ))}{' '}
                    </ImageGallery>
                )}{' '}
                {loading && (
                    <Loader
                        type="Bars"
                        color="#00BFFF"
                        height={100}
                        width={100}
                    />
                )}{' '}
                {images.length > 0 && !loading && (
                    <Button onClick={this.fetchImages} />
                )}{' '}
            </>
        );
    }
}
