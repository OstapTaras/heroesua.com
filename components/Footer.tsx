import React from 'react'
import { Col, Nav, NavItem, NavLink, Row } from 'reactstrap'
import { openRef } from '../helpers'
import { LinkType } from '../types'

interface FooterProps {
    logoLink: string,
    joinLink: string,
    shareLink: string,
    menuItems: LinkType[],
}

const Footer = (props:FooterProps) => {
    return (
        <section className='footer section'>
            <Row className='p-5 d-lg-none'>
                <Col>
                    <Nav className='mt-2 flex-column text-center mobile-nav'>
                        <NavItem>
                            <a href={props.logoLink}>
                                <img src='../static/img/logo.png' alt='logo' />
                            </a>
                        </NavItem>
                        {props.menuItems.map((item, index) => {
                            return (
                                <NavItem key={`nav-bottom-item-${index}`}>
                                    <NavLink className='mx-1' href={item.url} >{item.name}</NavLink>
                                </NavItem>
                            )
                        })}
                        <NavItem>
                            <button type="button" className="btn btn-nftua trnsp pe-0 text-center" onClick={() => openRef(props.joinLink)}>
                                <strong>Приєднатись до проєкту</strong>
                            </button>
                        </NavItem>
                        <NavItem>
                            <button type="button" className="btn btn-nftua trnsp pe-0 text-center" onClick={() => openRef(props.shareLink)}>
                                <strong>Розповісти історію</strong>
                            </button>
                        </NavItem>
                    </Nav>
                </Col>
            </Row>
            <Row className='p-5 d-none d-lg-flex'>
                <Col lg={1} md={1}>
                    <a href={props.logoLink}>
                        <img src='../static/img/logo.png' alt='logo' />
                    </a>
                </Col>
                <Col lg={5} md={6}>
                    <Nav className='mt-2'>
                    {props.menuItems.map((item, index) => {
                        return (
                            <NavItem key={`nav-bottom-item-${index}`}>
                                <NavLink className='mx-1' href={item.url} >{item.name}</NavLink>
                            </NavItem>
                        )
                    })} 
                    </Nav>
                </Col>
                <Col md={5} className='pt-2 text-end'>
                    <button type="button" className="btn btn-nftua trnsp pe-0 me-5" onClick={() => openRef(props.joinLink)}><strong>Приєднатись до проєкту</strong></button>
                    <button type="button" className="btn btn-nftua trnsp pe-0" onClick={() => openRef(props.shareLink)}><strong>Розповісти історію</strong></button>
                </Col>
            </Row>
            <Row style={{backgroundColor:'#313131', height:'150px'}}></Row>
        </section>
    )
}
export default Footer