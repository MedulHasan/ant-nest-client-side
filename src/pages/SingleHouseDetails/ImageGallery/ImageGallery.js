import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import "./ImageGallery.css";

const ImageGallery = ({ image }) => {
    return (
        <div className='single-home-page-image-galary-container'>
            <Gallery>
                <div className='single-image-galary-container'>
                    <Item
                        thumbnail={image.img1}
                        original={image.img1}
                        width='1024'
                        height='768'
                    >
                        {({ ref, open }) => (
                            <img
                                className='image-gallery-thumbnail'
                                ref={ref}
                                onClick={open}
                                src={image.img1}
                                alt=''
                            />
                        )}
                    </Item>
                    <div className='image-galary'>
                        <Item
                            thumbnail={image.img2}
                            original={image.img2}
                            width='1024'
                            height='768'
                        >
                            {({ ref, open }) => (
                                <img
                                    className='image-gallery-partial'
                                    ref={ref}
                                    onClick={open}
                                    src={image.img2}
                                    alt=''
                                />
                            )}
                        </Item>
                        <Item
                            thumbnail={image.img3}
                            original={image.img3}
                            width='1024'
                            height='768'
                        >
                            {({ ref, open }) => (
                                <img
                                    className='image-gallery-partial'
                                    ref={ref}
                                    onClick={open}
                                    src={image.img3}
                                    alt=''
                                />
                            )}
                        </Item>
                        <Item
                            thumbnail={image.img4}
                            original={image.img4}
                            width='1024'
                            height='768'
                        >
                            {({ ref, open }) => (
                                <img
                                    className='image-gallery-partial'
                                    ref={ref}
                                    onClick={open}
                                    src={image.img4}
                                    alt=''
                                />
                            )}
                        </Item>
                        <Item
                            thumbnail={image.img5}
                            original={image.img5 || ""}
                            width='1024'
                            height='768'
                        >
                            {({ ref, open }) => (
                                <img
                                    className='image-gallery-partial'
                                    ref={ref}
                                    onClick={open}
                                    src={image.img5 || ""}
                                    alt=''
                                />
                            )}
                        </Item>
                    </div>
                </div>
            </Gallery>
        </div>
    );
};

export default ImageGallery;
