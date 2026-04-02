import React from 'react';
import '../estilos/estilos.css';

const Home = () => {

    return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 botones-container">
        <button className="btn btn-3d btn-entrada">
            Nueva Entrada
        </button>
        <button className="btn btn-3d btn-consultar">
            Consultar Registros
        </button>
        <button className="btn btn-3d btn-agenda">
            Ver Agenda
        </button>
    </div>
    );
}

export default Home;