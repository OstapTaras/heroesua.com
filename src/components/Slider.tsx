import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
}

interface SliderItemProps {
    src: string,
}

interface SliderProps {
    items: SliderItemProps[],
    title: string,
}

const SliderItem = (props:SliderItemProps) => {
    const {src} = props
        return (
            <div className='slider-item-wrapper'>
                <img src={src} className='slider-image'/>
            </div>
        )
}

const Slider = (props:SliderProps) => {
    const {items, title} = props
    return (
        <section className='section slider'>
            <div className='row'>
                <div className='col-md-6 offset-md-2 py-5'>
                    <h2 className='d-none d-md-block'>{title}</h2>
                    <h3 className='d-md-none text-center'>{title}</h3>
                </div>
            </div>
            <Carousel slidesToSlide={4} responsive={responsive}>
                {items.map( (item, index) => {
                    return <SliderItem src={item.src} key={`slider-item-${index}`}/>
                })}
            </Carousel>    
        </section> 
    )
}
export default Slider