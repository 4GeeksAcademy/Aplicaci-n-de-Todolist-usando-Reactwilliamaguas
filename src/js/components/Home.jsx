import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [listaDeTareas, setListaDeTareas] = useState([])
	const [nuevaTarea, setNuevaTarea] = useState("")



	function agregarTarea(evento) {
		if (evento.key === "Enter" && nuevaTarea.trim() !== "") {
			setListaDeTareas([...listaDeTareas, nuevaTarea.trim()])
			setNuevaTarea("")
		}
	}

	function eliminarTarea(indiceAEliminar) {
		const tareasActualizadas = listaDeTareas.filter((_, indice) => indice !== indiceAEliminar)
		setListaDeTareas(tareasActualizadas)

	}

	return (
		<div className="d-flex flex-column align-items-center text-center container">
			<h1 style={{ color: "#dc2626" }}>
				¡¡Todolist!!
			</h1>
			<div className="w-100 todos-container">
				<input type="text" className="form-control" id="todo" onChange={(evento) => { setNuevaTarea(evento.target.value) }} value={nuevaTarea} onKeyDown={(evento) => { agregarTarea(evento) }} style={{boxShadow: "0px 0px 105px 0px rgba(255,46,98,0.9)"}} />
				{
					listaDeTareas.map((tarea, indice) => {
						return (
							<div className="tarea d-flex justify-content-between align-items-center p-2 border-bottom" key={indice}>
								<span className="text-start py-2">{tarea}</span>
								<button className="btn btn-sm btn-danger" onClick={() => eliminarTarea(indice)}>X</button>
							</div>
						)
					})
				}

				<p className="text-start form-text">
					{listaDeTareas.length + " tareas pendientes"}
				</p>

			</div>




		</div>
	);
};

export default Home;