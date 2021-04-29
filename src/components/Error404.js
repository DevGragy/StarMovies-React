import React from "react";
import { Link } from "react-router-dom";

function Error404(props) {
    return (
        <div className="main-card-error d-flex justify-content-center align-items-center">
            <div class="card" style={{ width: 18 + "rem" }}>
                <img
                    src="https://ih1.redbubble.net/image.1008890883.3812/st,small,507x507-pad,600x600,f8f8f8.jpg"
                    class="card-img-top"
                    alt="amsiedad"
                />
                <div class="card-body">
                    <h5 class="card-title text-dark">Error 404</h5>
                    <p class="card-text text-dark">
                        Pagina no encontrada, por favor verifique si la ruta es
                        correcta.
                    </p>
                    <Link to="/" class="btn btn-primary">
                        Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Error404;
