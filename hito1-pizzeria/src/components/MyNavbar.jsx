import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { EmojiCandado, EmojiCandadoAbierto, EmojiCandadoConLlave, EmojiCarrito, EmojiTrozoDePizza } from './Emojis'

const MyNavbar = ({token, onAuthClick}) => {
  const total = 25000
  
  return (
    <div className = "navbar">
        <div>
            <Navbar.Brand href="#home" id = "navbar-home">Pizzería Mamma Mía!</Navbar.Brand>{' '}
            <Button variant="outline-light" id="home"><EmojiTrozoDePizza></EmojiTrozoDePizza> Home</Button>{' '}
            {token ? (          
              <>
                <Button variant="outline-light" id="logout" onClick={onAuthClick}><EmojiCandado /> Logout</Button>{' '}
                <Button variant="outline-light" id="profile"><EmojiCandadoAbierto /> Profile</Button>{' '}
              </>
            ) : (
              <>
                <Button variant="outline-light" id="login" onClick={onAuthClick}><EmojiCandadoConLlave /> Login</Button>{' '}
                <Button variant="outline-light" id="register" onClick={onAuthClick}><EmojiCandadoConLlave /> Register</Button>{' '}
            </>) }
        </div>
        <div>
            <Button variant="outline-info" id = "navbar-total"><EmojiCarrito></EmojiCarrito> Total: {total}</Button>{' '}
        </div>
    </div>
  )
}

export default MyNavbar
