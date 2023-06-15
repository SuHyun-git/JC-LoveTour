import React, { useCallback, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import '../UI/paging.css';
import styled from 'styled-components';
import { Container, Row, Col, ButtonGroup, Button, Card, Stack, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';

// import GalleryBoardList from './galleryBoardList';
import { useDispatch, useSelector } from 'react-redux';

import { LOAD_GALLERY_POSTS_REQUEST } from '../../reducers/post';

function festivalBoardView() {
    // 페이지 버튼 눌린 상태로 만드려고 생성
    const [currentPage, setCurrentPage] = useState('축제/행사'); // 현재 페이지 상태
    const { admin } = useSelector((state) => state.admin);
    const { gallery } = useSelector((state) => state.post);
    const dispatch = useDispatch();

    // 페이지네이션
    const [page, setPage] = useState(1);
    const [currentPosts, setCurrentPosts] = useState([]);
    const indexOfLastPost = page * 10;
    const indexOfFirstPost = indexOfLastPost - 10;
    const handlePageChange = (page) => {
        setPage(page);
    };
    useEffect(() => {
        setCurrentPosts(gallery.slice(indexOfFirstPost, indexOfLastPost));
    }, [gallery, indexOfFirstPost, indexOfLastPost, page]);

    useEffect(() => {
        dispatch({
            type: LOAD_GALLERY_POSTS_REQUEST,
        });
    }, []);

    return (
        <>
            <Container>
                {/* 상단 네비바 */}
                <Row style={{ width: '100%', marginLeft: 0, marginRight: 0 }}>
                    <Navbar bg="success" expand="lg" className="p-0">
                        <Container style={{ top: '-2px' }}>
                            <Navbar.Brand href="#home">
                                <h6>홈</h6>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav>
                                    <NavDropdown as="h6" title="제천 러브투어" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown as="h6" title="러브투어 소개" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Row>

                {/* 사이드바 */}
                <Row className="mt-3 ps-1" style={{ width: '100%' }}>
                    <Col md={3} className="d-grid gap-2 ms" style={{ height: '100%' }}>
                        <Card bg="success" text="white">
                            <Card.Body className="pb-1 pt-1">
                                <Card.Title style={{ textAlign: 'center' }}>
                                    <h3 className="mb-0">축제 / 행사</h3>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                        <ButtonGroup vertical>
                            <Button
                                href="/board/touristSpot"
                                variant="outline-success"
                                className="mb-2 p-2 rounded-0"
                                size="lg"
                                block
                            >
                                관광지
                            </Button>
                            <Button
                                href="/board/traditionalMarket"
                                variant="outline-success"
                                className="mb-2 p-2 rounded-0"
                                size="lg"
                                block
                            >
                                전통시장
                            </Button>
                            <Button
                                href="/board/food"
                                variant="outline-success"
                                className="mb-2 p-2 rounded-0"
                                size="lg"
                                block
                            >
                                음식
                            </Button>
                            <Button
                                href="/board/accommodation"
                                variant="outline-success"
                                className="mb-2 p-2 rounded-0"
                                size="lg"
                                block
                            >
                                숙박
                            </Button>
                            <Button
                                href="/board/festival"
                                variant={currentPage === '축제/행사' ? 'success' : 'outline-success'} // 현재 페이지에 따라 스타일 설정
                                className="mb-2 p-2 rounded-0"
                                size="lg"
                                block
                                onClick={() => setCurrentPage('축제/행사')} // 버튼 클릭 시 현재 페이지 업데이트
                            >
                                축제/행사
                            </Button>
                        </ButtonGroup>
                    </Col>
                    <Col md={9}>
                        <Row>
                            <h3>축제/행사</h3>
                            <table bordered className="mt-4 table table-hover" style={{ border: '1px solid #f2f2f2' }}>
                            <thead style={{ textAlign: 'center', backgroundColor: '#E0E0E0' }}>
                                    <tr>
                                        <th scope="col" width="20%">
                                            일자
                                        </th>
                                        <th scope="col" width="30%">
                                            장소
                                        </th>
                                        <th scope="col" width="50%">
                                            제목
                                        </th>
                                    </tr>
                            </thead>
                            <tbody a={"http://www.jccf.or.kr/bbs/board.php?bo_table=product&wr_id=491"}>
                                <tr>
                                    <th scope="col" width="20%">
                                        2023-06-16
                                    </th>
                                    <th scope="col" width="30%">
                                    제천재가노인센터
                                    </th>
                                    <th scope="col" width="50%">
                                    2023 육성지원사업(겨자씨친구들)
                                    </th>
                                </tr>
                            </tbody>
                            <tbody href={"http://www.jccf.or.kr/bbs/board.php?bo_table=product&wr_id=491"}>
                                <tr>
                                    <th scope="col" width="20%">
                                        2023-06-16
                                    </th>
                                    <th scope="col" width="30%">
                                    제천문화재단 3층 상영관
                                    </th>
                                    <th scope="col" width="50%">
                                    제천영상미디어센터 정기상영 '길버트 그레이프'
                                    </th>
                                </tr>
                            </tbody>
                            <tbody href={"http://www.jccf.or.kr/bbs/board.php?bo_table=product&wr_id=491"}>
                                <tr>
                                    <th scope="col" width="20%">
                                        2023-06-17
                                    </th>
                                    <th scope="col" width="30%">
                                    제천문화재단 3층 상영관
                                    </th>
                                    <th scope="col" width="50%">
                                    제천영상미디어센터 정기상영 '라따뚜이'
                                    </th>
                                </tr>
                            </tbody>
                            <tbody href={"http://www.jccf.or.kr/bbs/board.php?bo_table=product&wr_id=491"}>
                                <tr>
                                    <th scope="col" width="20%">
                                        2023-06-18
                                    </th>
                                    <th scope="col" width="30%">
                                    청전동 야외공연장
                                    </th>
                                    <th scope="col" width="50%">
                                    2023 육성지원사업(제천문화홍보단)
                                    </th>
                                </tr>
                            </tbody>
                            <tbody href={"http://www.jccf.or.kr/bbs/board.php?bo_table=product&wr_id=491"}>
                                <tr>
                                    <th scope="col" width="20%">
                                        2023-06-20
                                    </th>
                                    <th scope="col" width="30%">
                                    세종주간보호센터
                                    </th>
                                    <th scope="col" width="50%">
                                    2023 육성지원사업(한국연예예술단)
                                    </th>
                                </tr>
                            </tbody>
                            <tbody href={"http://www.jccf.or.kr/bbs/board.php?bo_table=product&wr_id=491"}>
                                <tr>
                                    <th scope="col" width="20%">
                                        2023-06-24
                                    </th>
                                    <th scope="col" width="30%">
                                    청전동 야외공연장
                                    </th>
                                    <th scope="col" width="50%">
                                    2023 육성지원사업(제천연주인협회)
                                    </th>
                                </tr>
                            </tbody>
                            </table>
                            {/* <Table bordered className="mt-4 table table-hover" style={{ border: '1px solid #f2f2f2' }}>
                                <thead style={{ textAlign: 'center', backgroundColor: '#E0E0E0' }}>
                                    <tr>
                                        <th scope="col" width="10%">
                                            번호
                                        </th>
                                        <th scope="col" width="40%">
                                            제목
                                        </th>
                                        <th scope="col" width="15%">
                                            작성자
                                        </th>
                                        <th scope="col" width="20%">
                                            작성일
                                        </th>
                                        <th scope="col" width="10%">
                                            조회수
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </Table> */}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default festivalBoardView;
