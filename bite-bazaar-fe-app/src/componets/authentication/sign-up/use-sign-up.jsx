import { useDispatch, useSelector } from 'react-redux';
import { signupUserThunk } from '../../../store/auth/signinSlice';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const useSignUp = () => {
  const { error } = useSelector(state => state.sigin)
  const dispatch = useDispatch();
  console.log(error);
  const navigate = useNavigate();
  const initialValuesSignUp = {
    name: '',
    email: '',
    password: '',
    confirmpassword:''
  }

  const signUpSchema = Yup.object().shape({
    name: Yup.string().required('Enter Your Name'),
    email: Yup.string().required('Enter your Email'),
    password: Yup.string().min(8).required('Enter your Password'),
    confirmpassword: Yup.string().when("password", {
      is: val => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      )})
    })

  const signUpHandler = (values) => {
      console.log(values);
      // navigate('/log-in')
      dispatch(signupUserThunk({ values, navigate }))
    }
  return {
      initialValuesSignUp, signUpSchema, signUpHandler, error
    }
  }

export default useSignUp