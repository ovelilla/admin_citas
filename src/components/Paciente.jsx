const Paciente = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    const { id, nombre, propietario, email, alta, sintomas } = paciente;

    const eliminarPaciente = id => {
        const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
        setPacientes(pacientesActualizados);
        setPaciente({});
      }

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar el paciente')

        if (respuesta) {
            eliminarPaciente(id);
        }
    }

    return (
        <div className="bg-white shadow-md rounded-lg mb-5 py-10 px-5">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: <span className="font-normal normal-case">{nombre}</span></p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: <span className="font-normal normal-case">{propietario}</span></p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: <span className="font-normal normal-case">{email}</span></p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: <span className="font-normal normal-case">{alta}</span></p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: <span className="font-normal normal-case">{sintomas}</span></p>
            <div className="flex justify-between mt-5">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md transition-all"
                    onClick={() => setPaciente(paciente)}
                >Editar</button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md transition-all"
                    onClick={handleEliminar}
                >Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente;
