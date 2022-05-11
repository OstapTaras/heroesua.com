import React from 'react'
import { Col, Row } from 'reactstrap'
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
                <Col lg={4} sm={12}>
                    <img src={props.mainImage.src} alt={props.mainImage.alt || ''} />
                </Col>
                <Col lg={8} sm={12}>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </Col>
            </Row>
            <Row>
                <Col lg={8}>
                    <button type="button" className="btn btn-nftua buy-btn p-0">
                        <div className="row">
                            <div className="col-8">
                                <p>Купити на</p>
                                <img src="../static/img/open_sea.png" alt="" />
                            </div>
                            <div className="col-4 right-arrow">
                                <img src="../static/img/right-arrow.png" alt="" />
                            </div>
                        </div>
                    </button>
                </Col>
                <Col lg={4}>
                    <div>
                        <img src={props.posterImage.src} alt={props.posterImage.alt || ''} />
                    </div>
                </Col>
            </Row>
        </section>
    )
}
export default SingleNFT