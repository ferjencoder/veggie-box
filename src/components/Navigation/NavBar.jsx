

import { Button, Container, Form, Nav, Navbar, Dropdown, Offcanvas, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { CartWidget } from '../Cart';
import { NavBarCartList } from './NavBarCartList';

const vbLogoNavBar = 'https://res.cloudinary.com/ferjen/image/upload/v1670441451/veggieBox/img/navbar/vb-logo-navbar_v3cux6.svg';

export const NavBar = () => {
	return (
		<>
			{[ 'lg' ].map( ( expand ) => (
				<Navbar key={expand} bg='light' expand={expand} className='m-0'>

					<Container fluid className='navbar m-0 p-0'>

						<Link to='/'>
							<img className='navbar--logo' src={vbLogoNavBar} alt='VeggieBox logo' />
						</Link>

						<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

						<Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement='end'>

							<Offcanvas.Header className='navbar--header__offcanvas' closeButton>
								<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
									<img className='navbar--logo__offcanvas' src='https://res.cloudinary.com/ferjen/image/upload/v1670109429/veggieBox/img/logo/vb-logo_ds51mw.png' alt='VeggieBox logo' />
								</Offcanvas.Title>
							</Offcanvas.Header>

							<Offcanvas.Body className='d-flex align-items-center ps-5'>
								<Nav className='d-flex ps-5 navbar-container__links'>
									<div className='navbar-leaves'>
										<img className='navbar-leaves__img' src='https://res.cloudinary.com/ferjen/image/upload/v1669927025/veggieBox/img/navbar/leavesString_cdyiun.png' alt='Decoración de guirnalda de hojas verdes' />
									</div>
									<Link to='/elegi' className='navbar--link flex-end px-5 pt-3'>
										Elegi
									</Link>
									<Link to='/planes' className='navbar--link flex-end pe-5 pt-3'>
										Planes
									</Link>
									<Link to='/faq' className='navbar--link flex-end pe-5 pt-3'>
										Faq
									</Link>
								</Nav>
								<Nav className='justify-content-end flex-grow-1 pe-5'>
									<Dropdown align='end'>
										<Dropdown.Toggle className='navbar--icon bg-transparent p-0 me-5'>
											<img className='navbar--icon ' src='https://res.cloudinary.com/ferjen/image/upload/v1670119538/veggieBox/img/icons/vb-user-tag-icon_ysjx1v.svg' alt='User Icon' />
										</Dropdown.Toggle>
										<Dropdown.Menu className='navbar--dropdown text-center'>
											<Dropdown.Header className='navbar--dropdown__header'>INGRESA A TU CUENTA</Dropdown.Header>
											<Dropdown.Divider className='navbar--dropdown__divider' />
											<Form className='text-center align-items-center justify-content-center justify-items-center'>
												<Form.Group controlId='formEmail'>
													<Form.Label className='mt-2'>TU EMAIL</Form.Label>
													<Form.Control className='navbar--control' type='email' placeholder='ejemplo@email.com' />
												</Form.Group>
												<Form.Group controlId='formPassword'>
													<Form.Label>TU CONTRASEÑA</Form.Label>
													<Form.Control className='navbar--control' type='password' placeholder='contraseña...' />
												</Form.Group>
												<Button className='btn-navbar justify-content-end mb-3' variant='primary' type='submit'>
													Ingresar
												</Button>
											</Form>
											<ListGroup>
												<ListGroup.Item>¿Olvidaste tu contraseña?</ListGroup.Item>
												<ListGroup.Item>¿Todavía no tenes cuenta? Creala </ListGroup.Item>
											</ListGroup>
										</Dropdown.Menu>
									</Dropdown>
									<Dropdown align='end'>
										<Dropdown.Toggle
											className='navbar--icon bg-transparent shadow-0 border border-0 p-0 me-5'
										>
											<img
												className='navbar--icon'
												src='https://res.cloudinary.com/ferjen/image/upload/v1670153544/veggieBox/img/icons/vb-favourites-tag-icon_b2dyfk.svg'
												alt='Favourites Icon'
											/>
										</Dropdown.Toggle>
										<Dropdown.Menu className='navbar--dropdown__cart m-0 p-0'>
											<Dropdown.Header className='navbar--dropdown__header'>TUS FAVORITOS</Dropdown.Header>
											<Dropdown.Divider className='navbar--dropdown__divider' />
											<ListGroup variant='flush'>{<NavBarCartList />}</ListGroup>
											<div className='d-grid gap-2'>
												<Button className='fw-bold' variant='primary' size='lg'>
													<Link to='/favorites'>VER TUS FAVORITOS</Link>
												</Button>
											</div>
										</Dropdown.Menu>
									</Dropdown>

									<Dropdown align='end'>
										<Dropdown.Toggle className='navbar--icon d-flex flex-start bg-transparent shadow-0 border border-0 p-0 me-5'>
											<img className='navbar--icon me-5 shadow-none border-none' src='https://res.cloudinary.com/ferjen/image/upload/v1670119538/veggieBox/img/icons/vb-cart-tag-icon_v9n7of.svg' alt='Icono de carrito de compras' />
											<CartWidget />
										</Dropdown.Toggle>
										<Dropdown.Menu className='navbar--dropdown navbar--dropdown__cart'>
											<Dropdown.Header className='navbar--dropdown__header'>TUS CARRITO</Dropdown.Header>
											<Dropdown.Divider className='navbar--dropdown__divider' />
											<ListGroup variant='flush'>{<NavBarCartList />}</ListGroup>
											<div className='d-grid gap-2'>
												<Button className='fw-bold' variant='primary' size='lg'>
													<Link to='/cart'>VER TU CARRITO</Link>
												</Button>
											</div>
										</Dropdown.Menu>
									</Dropdown>
								</Nav>
							</Offcanvas.Body>

						</Navbar.Offcanvas>

					</Container>
				</Navbar>
			) )}
		</>
	);
};
