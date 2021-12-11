import { useEffect } from 'react';
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPacientes, setPaciente, eliminarPaciente }) => {
    return (
        <div className="md:w-1/2 lg:w-3/5">
            {pacientes && pacientes.length ?
                <>
                    <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
                    <p className="text-lg mt-5 mb-10 text-center">Administra tus <span className="text-indigo-600 font-bold">Pacientes y Citas</span></p>

                    {pacientes.map(paciente => {
                        return <Paciente
                            key={paciente.id}
                            pacientes={pacientes}
                            setPacientes={setPacientes}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    })}

                </> :
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-lg mt-5 mb-10 text-center">Comienza agregando <span className="text-indigo-600 font-bold">Pacientes</span></p>
                </>}

        </div>

    )
}

export default ListadoPacientes;
