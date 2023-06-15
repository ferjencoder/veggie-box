import { Col, Container, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export const EmptyCartMessage = () => {

    return (

        <Container className='mt-5 px-5'>
            <Row className='px-5'>
                <Col className='px-5'>
                    <Table>
                        <thead>
                            <tr>
                                <th>TU CARRITO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border-0'>
                                    <h4 className='mt-5 pt-2 pb-5'>Aun no has agregado items a tu carrito</h4>
                                    <hr />

                                    <Link to={'/sanslfiltre'}>
                                        <Button
                                            className='card--button mt-5 px-5'
                                        >
                                            Seguir comprando
                                        </Button>
                                    </Link>

                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>

    )
}
