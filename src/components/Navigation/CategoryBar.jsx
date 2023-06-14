

import { Link } from 'react-router-dom';
import { Button, Col, Dropdown, Form, ListGroup, Nav, Row } from 'react-bootstrap';


// ICONS
const vbIconFilterTag = 'https://res.cloudinary.com/ferjen/image/upload/v1670427552/veggieBox/img/icons/vb-filter-tag-icon_bk9mtd.svg';
const vbIconUserTag = 'https://res.cloudinary.com/ferjen/image/upload/v1670119538/veggieBox/img/icons/vb-user-tag-icon_ysjx1v.svg';
const vbIconSearchTag = 'https://res.cloudinary.com/ferjen/image/upload/v1670212537/veggieBox/img/icons/vb-search-tag-icon_kuyjmf.svg';

export const CategoryBar = () => {
	return (
		<div className='container'>
			<Row className='category-bar'>
				<Col className='p-0 d-flex align-items-center justify-content-start'>
					<div className='category-bar--search'>
						<Form className='category-bar--search'>
							<Button className='btn me-4 shadow-none bg-transparent border-0'>
								<img className='category-bar--icon' src='https://res.cloudinary.com/ferjen/image/upload/v1670212537/veggieBox/img/icons/vb-search-tag-icon_kuyjmf.svg' alt='Search Icon' />
							</Button>
							<Form.Control type='search' placeholder='Search' className='ms-5 category-bar--control' aria-label='Search' />
						</Form>
					</div>
				</Col>
				<Col xs={6} className='p-0 d-flex align-items-center justify-content-center'>
					<ListGroup horizontal className=' align-items-center'>
						<Nav className='justify-content-center'>
							<Nav.Item className='category-bar--link'>
								<Link to='/sanslfiltre'>Todos</Link>
							</Nav.Item>
							<Nav.Item className='category-bar--link'>
								<Link to='/category/1'>Keto</Link>
							</Nav.Item>
							<Nav.Item className='category-bar--link'>
								<Link to='/category/2'>Light</Link>
							</Nav.Item>
							<Nav.Item className='category-bar--link'>
								<Link to='/category/3'>Sin Gluten</Link>
							</Nav.Item>
							<Nav.Item className='category-bar--link'>
								<Link to='/category/4'>Vegetariano</Link>
							</Nav.Item>
							<Nav.Item className='category-bar--link'>
								<Link to='/category/5'>Vegano</Link>
							</Nav.Item>
						</Nav>
					</ListGroup>
				</Col>
				<Col className='p-0 d-flex align-items-center justify-content-end'>
					<Dropdown className='navbar--dropdown__filter'>
						<Dropdown.Toggle className='btn m-0 shadow-0 bg-transparent border-0 pe-5'>
							<img className='category-bar--icon__filter position-absolute top-0 start-50 translate-middle' src='https://res.cloudinary.com/ferjen/image/upload/v1670427552/veggieBox/img/icons/vb-filter-tag-icon_bk9mtd.svg' alt='Icono para filtrar' />
						</Dropdown.Toggle>
						<Dropdown.Menu className='navbar--dropdown dropdown-menu-start'>
							<Dropdown.Header className='navbar--dropdown__header'>FILTRAR VEGGIEBOX</Dropdown.Header>
							<Dropdown.Divider className='navbar--dropdown__divider' />
							<Form.Group className='m-3' controlId='formBasicCheckbox'>
								<Form.Check type='checkbox' label='FILTRO 1' />
							</Form.Group>
							<Form.Group className='m-3' controlId='formBasicCheckbox'>
								<Form.Check type='checkbox' label='FILTRO 2' />
							</Form.Group>
							<Form.Group className='m-3' controlId='formBasicCheckbox'>
								<Form.Check type='checkbox' label='FILTRO 3' />
							</Form.Group>
							<div className='d-grid gap-2'>
								<Button className='fw-bold' variant='primary' size='lg'>
									BORRAR FILTROS
								</Button>
							</div>
						</Dropdown.Menu>
					</Dropdown>
				</Col>
			</Row>
		</div>
	);
};

