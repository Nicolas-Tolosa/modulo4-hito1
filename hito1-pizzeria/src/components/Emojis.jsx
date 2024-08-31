// Emojis.js
import React from 'react';

const Emoji = ({ symbol, label }) => (
  <span
    role="img"
    aria-label={label ? label : ""}
    aria-hidden={label ? "false" : "true"}
  >
    {symbol}
  </span>
);

export const EmojiCandado = () => <Emoji symbol="🔒" label="lock" />;
export const EmojiCandadoAbierto = () => <Emoji symbol="🔓" label="open-lock" />;
export const EmojiCandadoConLlave = () => <Emoji symbol="🔐" label="lock-w-key" />;
export const EmojiTrozoDePizza = () => <Emoji symbol="🍕" label="pizza-slice" />;
export const EmojiCarrito = () => <Emoji symbol="🛒" label="cart" />;
export const EmojiOjos = () => <Emoji symbol="👀" label="eyes" />;

export default Emoji;
