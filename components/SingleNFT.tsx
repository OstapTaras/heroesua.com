import React from 'react'
import { Col, Row } from 'reactstrap'
import { openRef } from '../helpers'
import { ImageType } from '../types'

interface SingleNFTProps {
    title: string,
    text: string,
    mainImage: ImageType,
    openseaLink: string,
    posterImage: ImageType,
}

const SingleNFT = (props:SingleNFTProps) => {
    return (
        <section className='section single-nft'>
            <Row>
                <Col lg={4} md={4} xs={12} className='main-image-block'>
                    <img src={props.mainImage.src} alt={props.mainImage.alt || ''} />
                </Col>
                <Col lg={8} md={8} xs={12}>
                    <h2 className='my-5 pt-2'>{props.title}</h2>
                    <p>{props.text}</p>
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col lg={8} md={6}>
                    <button type="button" className="btn btn-nftua buy-btn p-0"  onClick={() => openRef(props.openseaLink)}>
                        <Row>
                            <Col xl={3} lg={3} md={5} className='offset-xl-6 offset-lg-5 offset-md-1'>
                                <p className='ms-2'>Купити на</p>
                                <img src="../static/img/open_sea.png"/>
                            </Col>
                            <Col xl={2} lg={3} md={4}>
                                <img src="../static/img/right-arrow.png" style={{marginTop:'1.5rem'}}/>
                            </Col>
                        </Row>
                    </button>
                </Col>
                <Col lg={4} md={6} style={{overflow:'hidden'}}>
                    <div style={{height:'180px'}}>
                        <img src={props.posterImage.src} alt={props.posterImage.alt || ''}  style={{width:'100%', marginTop:'-48px'}}/>
                    </div>
                </Col>
            </Row>
        </section>
    )
}
export default SingleNFT