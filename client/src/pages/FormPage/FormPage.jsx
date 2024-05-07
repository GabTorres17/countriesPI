import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import validate from "./validate";

const FormPage = function (props) {
    const [formValues, setFormValues] = useState({
        nombre: "",
        dificultad: "",
        duracion: "",
        temporada: "",
        paises: [],
    });
    const [errors, setErrors] = useState({})
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
            //Esto permite que el estado del formulario 
            //se mantenga siempre actualizado con los valores ingresados por el usuario en tiempo real.
        });
        setErrors(
            validate({
                ...formValues,
                [name]: value,
            })
        )
    };
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        //preventDefault es para que al hacerle submit, no se reinicien todos los datos y se borro todo
        navigate("/");

    }
    return (
        <div style={{ backgroundColor: "grey", height: "150px", width: "600px", textAlign: "center" }}>
            <h1>Crea una actividad turística</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input
                    type="text"
                    id="nombre"
                    autoComplete="nombre"
                    value={formValues.nombre}
                    onChange={handleChange}
                    required
                />
                <p style={{ color: "white" }}>{errors.nombre ? errors.nombre : null}</p>
                <label htmlFor="dificultad">Dificultad:</label>
                <input
                    type="text"
                    id="dificultad"
                    name="dificultad"
                    value={formValues.dificultad}
                    onChange={handleChange}
                    required
                />
                <p style={{ color: "white" }}>{errors.nombre && errors.dificultad}</p>
                <label htmlFor="duracion">Duración (en horas):</label>
                <input
                    type="number"
                    id="duracion"
                    name="duracion"
                    value={formValues.duracion}
                    onChange={handleChange}
                    required
                />
                <p style={{ color: "white" }}>{errors.dificultad && errors.duacion}</p>
                <label htmlFor="temporada">Temporada:</label>
                <select
                    id="temporada"
                    name="temporada"
                    value={formValues.temporada}
                    onChange={handleChange}
                    required
                >
                    <option value="">Seleccionar</option>
                    <option value="Verano">Verano</option>
                    <option value="Otoño">Otoño</option>
                    <option value="Invierno">Invierno</option>
                    <option value="Primavera">Primavera</option>
                </select>
                <p style={{ color: "white" }}>{errors.duracion && errors.temporada}</p>
                <button
                    type="submit"
                    disabled={errors.nombre || errors.dificultad || errors.duracion || errors.temporada}
                >Subir</button>
            </form>
        </div>
    )
}


export default FormPage;