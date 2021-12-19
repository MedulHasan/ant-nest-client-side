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
                    <Item original={image.img1} width='1024' height='768'>
                        {({ ref, open }) => (
                            <img
                                height='400px'
                                width='715px'
                                ref={ref}
                                onClick={open}
                                src={image.img1}
                                alt=''
                            />
                        )}
                    </Item>
                    <div className='image-galary'>
                        <Item original={image.img2} width='1024' height='768'>
                            {({ ref, open }) => (
                                <img
                                    height='173px'
                                    width='173px'
                                    ref={ref}
                                    onClick={open}
                                    src={image.img2}
                                    alt=''
                                />
                            )}
                        </Item>
                        <Item original={image.img3} width='1024' height='768'>
                            {({ ref, open }) => (
                                <img
                                    height='173px'
                                    width='173px'
                                    ref={ref}
                                    onClick={open}
                                    src={image.img3}
                                    alt=''
                                />
                            )}
                        </Item>
                        <Item original={image.img4} width='1024' height='768'>
                            {({ ref, open }) => (
                                <img
                                    height='173px'
                                    width='173px'
                                    ref={ref}
                                    onClick={open}
                                    src={image.img4}
                                    alt=''
                                />
                            )}
                        </Item>
                        <Item original={image.img2} width='1024' height='768'>
                            {({ ref, open }) => (
                                <img
                                    height='173px'
                                    width='173px'
                                    ref={ref}
                                    onClick={open}
                                    src={image.img2}
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
