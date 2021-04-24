import React from "react";

function InputSearch(props) {
    return (
        <div className="col my-4">
            <input
                className="form-control"
                value={props.search}
                placeholder="Buscar..."
                onChange={(e) => props.setSearch(e.target.value)}
            />
        </div>
    );
}

export default InputSearch;
