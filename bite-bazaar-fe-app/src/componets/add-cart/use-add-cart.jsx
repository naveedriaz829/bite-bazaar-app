import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import axios from "../../axios/axios";
import { removeItem } from '../../store/addCartSlice/addCartSlice';
import { showAppAlert } from '../../store/app-alert/app-alert-slice';

const useAddCart = () => {
  const token = localStorage?.getItem("token");
  const { cartItems } = useSelector((state) => state.addproduct);
  const dispatch = useDispatch();

  const alertHandler = (message) => {
    dispatch(showAppAlert(message));
  }

  const initialValuesOrder = {
    name: '',
    email: '',
    address: '',
    delivery: ''
  }

  const placeOrderSchema = Yup.object().shape({
    name: Yup.string().required('Enter Your Name'),
    email: Yup.string().required('Enter your Email'),
    address: Yup.string().required('Enter your Delivery Address'),
    delivery: Yup.string().required('Click on delivery option')
  })

  const placeOrderHandler = async (values) => {
    // console.log(values);
    try {
      const response = axios.put('/user/history', {
        name: values.name,
        email: values.email,
        address: values.address,
        delivery: values.delivery,
        shoppingList: cartItems
      }, { headers: { Authorization: `Bearer ${token}` } }).then(alertHandler('Your order is placed'))
      return response.data
    } catch (error) {
      console.log(error);
    }
  }
  return { initialValuesOrder, placeOrderSchema, placeOrderHandler }
}

export default useAddCart