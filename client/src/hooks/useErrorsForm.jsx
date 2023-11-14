import { useDispatch, useSelector } from 'react-redux';
import { actionErrorsForm } from '../redux/actions/actionForm';
import { useEffect } from 'react';
import { validateForm } from '../helpers/validateForm';

const useErrorsForm = () => {
	const dispatch = useDispatch();
	const errorsForm = useSelector((state) => state.formReducer.errorsForm);
	const createDriver = useSelector((state) => state.formReducer.createDriver);


	useEffect(() => {
        const errors = validateForm(createDriver)
        dispatch(actionErrorsForm(errors))
    }, [createDriver, dispatch]);

	return errorsForm;
};

export default useErrorsForm;
