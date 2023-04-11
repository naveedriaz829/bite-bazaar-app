import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { singinUserThunk } from '../../../store/auth/signinSlice';
import AppAlert from '../../app-alert/app-alert';

const useSignIn = () => {

    const { error } = useSelector(state => state.sigin)
    console.log(error);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const initialValuesSignIn = {
        email: '',
        password: ''
    }

    const signInSchema = Yup.object().shape({
        email: Yup.string().required('Enter your Email'),
        password: Yup.string().required('Enter your Password')
    })

    const signInHandler = (values) => {
        // console.log(values);

        dispatch(singinUserThunk({values,navigate}))
    }
    return {
        initialValuesSignIn, signInSchema, signInHandler, error
    }
}

export default useSignIn