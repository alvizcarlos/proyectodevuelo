import './page.css'
import React, { useState, useEffect } from 'react';

// Función para generar comentarios simulados
function generarComentariosSimulados() {
    return [
        { nombre: "Juan", contenido: "¡Excelente servicio! El vuelo fue cómodo y puntual.", fecha: "2024-02-26", hora: "6:37 PM" },
        { nombre: "María", contenido: "Me encantó la atención del personal de la aerolínea. ¡Muy profesionales!", fecha: "2024-02-25", hora: "01:45 PM" },
        { nombre: "Carlos", contenido: "Los destinos ofrecen una experiencia única. Recomiendo visitar Medellín.", fecha: "2024-02-24", hora: "03:00 PM" },
        { nombre: "Ana", contenido: "Reservé mi vuelo de forma sencilla. ¡Todo salió como esperaba!", fecha: "2024-02-20", hora: "04:20 PM" },
        { nombre: "Pedro", contenido: "Viajé con mi familia y todos disfrutamos del viaje. Gracias TravelHub.", fecha: "2024-02-16", hora: "05:45 PM" },
        // Agrega más comentarios según sea necesario
    ];
}

function Comentarios() {
    // Estado para almacenar los comentarios
    const [comentarios, setComentarios] = useState([]);
    // Estado para el comentario actual
    const [comentarioActual, setComentarioActual] = useState('');
    // Estado para el nombre del usuario
    const [nombreUsuario, setNombreUsuario] = useState('');

    // Cargar comentarios simulados al montar el componente
    useEffect(() => {
        const comentariosSimulados = generarComentariosSimulados();
        setComentarios(comentariosSimulados);
    }, []);

    // Función para manejar el envío de comentarios
    const enviarComentario = () => {
        if (nombreUsuario && comentarioActual) {
            const nuevoComentario = {
                nombre: nombreUsuario,
                contenido: comentarioActual,
                fecha: new Date().toISOString().slice(0, 10), // Fecha actual
                hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) // Hora actual
            };

            setComentarios([nuevoComentario, ...comentarios]); // Agregar el nuevo comentario al principio
            setComentarioActual('');
            setNombreUsuario('');
            alert(`Comentario enviado: ${comentarioActual}`);
        } else {
            alert("Por favor, completa tu nombre y comentario.");
        }
    };

    // Función para renderizar los comentarios
    const renderizarComentarios = () => {
        return comentarios.map((comentario, index) => (
            <li key={index}>
                <p><strong>{comentario.nombre}</strong></p>
                <p>{comentario.contenido}</p>
                <p><em>Publicado el {comentario.fecha} a las {comentario.hora}</em></p>
            </li>
        ));
    };

    return (
        <div>
            <section id="comentarios" className="seccion">
                <div className='textoCentrado'><h1>Comentarios de Usuarios</h1></div>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" value={nombreUsuario} onChange={(e) => setNombreUsuario(e.target.value)} placeholder="Tu nombre..." />
                <textarea id="comentario" value={comentarioActual} onChange={(e) => setComentarioActual(e.target.value)} placeholder="Deja tu comentario..."></textarea>
                <button onClick={enviarComentario}>Enviar Comentario</button>
                <ul id="listaComentarios" className="resultados">
                    {renderizarComentarios()}
                </ul>
            </section>
        </div>
    );
}

export default Comentarios;



