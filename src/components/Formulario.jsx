import { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    useEffect(() => {
        const { nombre, propietario, email, alta, sintomas } = paciente;

        if (Object.keys(paciente).length > 0) {
            setNombre(nombre);
            setPropietario(propietario);
            setEmail(email);
            setAlta(alta);
            setSintomas(sintomas);
        }
    }, [paciente]);

    useEffect(() => {
        if (pacientes.length > 0) {
            setNombre("");
            setPropietario("");
            setEmail("");
            setAlta("");
            setSintomas("");
        }
    }, [pacientes]);


    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const date = Date.now().toString(36);
        return random + date;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombre, propietario, email, email, alta, sintomas].includes('')) {
            setError(true);
            return;
        }

        const objetoPaciente = {
            nombre,
            propietario,
            email,
            alta,
            sintomas
        }

        if (paciente.id) {
            objetoPaciente.id = paciente.id;
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);
            setPacientes(pacientesActualizados);
            setPaciente({});
        } else {
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }

        // setNombre("");
        // setPropietario("");
        // setEmail("");
        // setAlta("");
        // setSintomas("");

        setError(false);
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 mb-10 text-center">Añade Pacientes y <span className="text-indigo-600 font-bold">Administralos</span></p>
            <form
                className="sticky top-5 bg-white shadow-md rounded-lg mb-10 py-10 px-5"
                onSubmit={handleSubmit}
            >
                {/* {error && <Error mensaje="Todos los campos son obligatorios" />} */}
                {error && <Error><p>Todos los campos son obligatorios</p></Error>}

                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-grey-700 uppercase font-bold">Nombre Mascota</label>
                    <input
                        type="text"
                        id="mascota"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-grey-700 uppercase font-bold">Nombre Propietario</label>
                    <input
                        type="text"
                        id="propietario"
                        placeholder="Nombre del Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-grey-700 uppercase font-bold">Email Propietario</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-grey-700 uppercase font-bold">Fecha Alta</label>
                    <input
                        type="date"
                        id="alta"
                        className="border-2 w-full p-2 mt-2 rounded-md"
                        value={alta}
                        onChange={(e) => setAlta(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-grey-700 uppercase font-bold">Síntomas</label>
                    <textarea
                        name="sintomas"
                        id="sintomas"
                        placeholder="Describe los síntomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-all" />
            </form>
        </div>
    )
}

export default Formulario;
