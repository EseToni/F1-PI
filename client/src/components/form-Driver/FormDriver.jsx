import styles from './styles.module.css'
import { actionCreateDriver } from '../../redux/actions/actionForm';
import {useSelector, useDispatch} from 'react-redux';

const FormDriver = () => {
    const dispatch = useDispatch();
    const createDriver = useSelector((state) => state.formReducer.createDriver);

    const handleChange = (e) => {
        const {name, value} = e.target;
        dispatch(actionCreateDriver({name : name , value : value}));
    }
    const handleOnSubmit = ()=> {

    }
	return (
		<form className={styles.form} onSubmit={handleOnSubmit} >
			<label htmlFor='name'>Nombre: </label>
			<input value={createDriver.name} onChange={handleChange} name='name'/>
            
			<label>Apellido: </label>
			<input value={createDriver.lastName} onChange={handleChange} name='lastName'/>

			<label>Nacionalidad: </label>
			<input value={createDriver.nationality} onChange={handleChange} name='nationality'/>

			<label>Fecha de nacimiento: </label>
			<input value={createDriver.dateOfBirth} name='dateOfBirth' onChange={handleChange}/>
			<label>Escuderias: </label>
			<input value={createDriver.teams} name='teams' onChange={handleChange}/>
			<label>Imagen: </label>
			<input value={createDriver.image} name='image' onChange={handleChange}/>
			<label>Descripcion: </label>
			<textarea value={createDriver.description} name='description' onChange={handleChange} />
            <button type='submit'>Crear</button>
		</form>
	);
};

export default FormDriver;
