// src/components/CardProducto.jsx
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";
import '../assets/css/CardProducto.css';

function CardProducto({ producto }) {
  const { agregarAlCarrito, disminuirCantidad, carrito } = useContext(CarritoContext);
  const navigate = useNavigate();

  if (!producto?.id) return null;

  const { id, titulo, precio, imagen } = producto;
  const cantidad = carrito.find((p) => p.id === id)?.cantidad || 0;

  return (
    <div className="producto">
      <div className="imagen-container">
        <img src={imagen || "https://via.placeholder.com/150"} alt={titulo} />
      </div>

      <h4>{titulo}</h4>

      <div className="acciones">
        <p>${Number(precio).toLocaleString('es-CL')}</p>

        <div className="control-cantidad">
          <button onClick={() => disminuirCantidad(id)} disabled={cantidad === 0}>
            Quitar
          </button>
          <span>{cantidad}</span>
          <button onClick={() => agregarAlCarrito(producto)}>
            Agregar
          </button>
        </div>

        <button 
          className="detalle-button" 
          onClick={() => navigate(`/publicacion/${id}`)}
        >
          Ver detalle
        </button>
      </div>
    </div>
  );
}

export default CardProducto;
