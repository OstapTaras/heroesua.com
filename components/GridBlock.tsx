import React from 'react'
import { Row, Col } from 'reactstrap'

const css = `
.grid-block {
    z-index:100;
}
.grid-block .red{
    box-shadow: 2px 0 0 #aaa;
}
.grid-block .blue{
    box-shadow: 1px 0 0 #aaa;
}
.grid-block .green{
    box-shadow: 1px 0 0 #aaa;
}
.grid-block div {
    height: 100%;
}
`

const GridBlock = (props={display:true}) => {
    return (
        <div className='grid-block fixed-top w-100 h-100'>
            <style>{css}</style>
            <Row>
                <Col lg={6} md={6} sm={12} xs={12} className='red'>
                    <Row>
                        <Col lg={4} md={4} sm={4} xs={4} className='blue'>
                            <Row>
                                <Col lg={6} md={6} sm={6} xs={12} className='green'></Col>
                                <Col lg={6} md={6} sm={6} xs={6} className='green'></Col>
                            </Row>
                        </Col>
                        <Col lg={4} md={4} sm={4} xs={4} className='blue'>
                            <Row>
                                <Col lg={6} md={6} sm={6} xs={12} className='green'></Col>
                                <Col lg={6} md={6} sm={6} xs={6} className='green'></Col>
                            </Row>
                        </Col>
                        <Col lg={4} md={4} sm={4} xs={4} className='blue'>
                            <Row>
                                <Col lg={6} md={6} sm={6} xs={12} className='green'></Col>
                                <Col lg={6} md={6} sm={6} xs={6} className='green'></Col>
                            </Row>
                        </Col>
                    </Row> 
                </Col>
                <Col lg={6} md={6} sm={6} xs={6} className='red'>
                    <Row>
                        <Col lg={4} md={4} sm={4} xs={4} className='blue'>
                            <Row>
                                <Col lg={6} md={6} sm={6} xs={6} className='green'></Col>
                                <Col lg={6} md={6} sm={6} xs={6} className='green'></Col>
                            </Row>
                        </Col>
                        <Col lg={4} md={4} sm={4} xs={4} className='blue'>
                            <Row>
                                <Col lg={6} md={6} sm={6} xs={6} className='green'></Col>
                                <Col lg={6} md={6} sm={6} xs={6} className='green'></Col>
                            </Row>
                        </Col>
                        <Col lg={4} md={4} sm={4} xs={4} className='blue'>
                            <Row>
                                <Col lg={6} md={6} sm={6} xs={6} className='green'></Col>
                                <Col lg={6} md={6} sm={6} xs={6} className='green'></Col>
                            </Row>
                        </Col>
                    </Row> 
                </Col>
            </Row>
        </div>
    )
}
export default GridBlock