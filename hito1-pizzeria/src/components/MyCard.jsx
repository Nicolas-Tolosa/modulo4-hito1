import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { EmojiCarrito, EmojiOjos, EmojiTrozoDePizza } from './Emojis';

const MyCard = ({imagen, nombre, ingredientes, precio }) => {
    const precioFormateado = precio.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 });
    return (
        <Card style={{ width: '18rem', border: 'solid 1px #DFDFDF'}}>

            <Card.Img variant="top" style={{height: '14rem'}} src={imagen} />
            <ListGroup.Item style={{display: 'flex', alignItems: 'center',}}>
                <Card.Title style={{marginTop: '.25rem', fontSize: '22px', fontWeight: '500'}}>{nombre}</Card.Title>
            </ListGroup.Item>
            <ListGroup.Item>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <h3>Ingredientes:</h3>
                    <small><EmojiTrozoDePizza></EmojiTrozoDePizza>{ingredientes}</small>
                </div>
            </ListGroup.Item>
            <ListGroup.Item style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Card.Text style={{fontSize: '20px', fontWeight: 'semi-bold'}}>Precio: <span>{precioFormateado}</span></Card.Text>
                <div style={{display:'flex', gap: '20px'}}>
                    <Card.Link href="#" style= {{textDecoration: 'none', border: 'solid 1px #000000', borderRadius: '.25rem', padding: '0.375rem 0.75rem', color: '#000000', marginBottom: '10px'}}>Ver más <EmojiOjos></EmojiOjos></Card.Link>
                    <Card.Link href="#" style= {{textDecoration: 'none', border: 'solid 1px #000000', borderRadius: '.25rem', padding: '0.375rem 0.75rem', color: '#000000', marginBottom: '10px'}}>Añadir <EmojiCarrito></EmojiCarrito></Card.Link>
                </div>       
            </ListGroup.Item>

        </Card>
    )
}

export default MyCard
