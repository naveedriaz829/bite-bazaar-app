import {
  Avatar, Badge, Box, Button, Divider, Grid, List, ListItem, ListItemButton, ListItemText, Modal, SwipeableDrawer,
} from "@mui/material";
import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import DeleteIcon from "@mui/icons-material/Delete";
import "./add-cart.css";
import { deepOrange } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, removeItem } from "../../store/addCartSlice/addCartSlice";
import { Link } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import useAddCart from "./use-add-cart";



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const AddCart = () => {
  const [state, setState] = React.useState({ left: false });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { initialValuesOrder, placeOrderSchema, placeOrderHandler } = useAddCart();

  const { cartItems } = useSelector((state) => state.addproduct);
  const dispatch = useDispatch();
  const total = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const decrementHandler = (item) => {
    dispatch(decrement(item));
  };

  const incrementHandler = (item) => {
    dispatch(increment(item));
  };

  const deleteHandler = (item) => {
    dispatch(removeItem(item));
  };

  

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 320 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="cart-header">
        <h4>
          <ShoppingBagIcon
            sx={{ width: "50px", height: "30px", color: "green" }}
          />
          Shopping Cart
        </h4>
      </div>
      {cartItems?.map((item) => {
        return (
          <div key={item.id} className="cart-items p-2">
            <div className="d-flex align-self-center">
              <h6>{item?.name}</h6>
            </div>
            <div className="d-flex w-50 justify-content-between align-self-center">
              <Grid className="d-flex mr-2">
                <Avatar
                  onClick={() => decrementHandler(item)}
                  sx={{ width: 24, height: 24 }}
                >
                  -
                </Avatar>
                <span> {item?.quantity} </span>
                <Avatar
                  onClick={() => incrementHandler(item)}
                  sx={{ width: 24, height: 24 }}
                >
                  +
                </Avatar>
              </Grid>

              <div>
                <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
                  <DeleteIcon sx={{ width: '20px', height: '20px' }} onClick={() => deleteHandler(item)} />
                </Avatar>
              </div>
            </div>
          </div>
        );
      })}

      <button onClick={handleOpen} className=" border-0 cart-footer d-flex rounded-3 justify-content-around align-items-center">
        <h6>Proceed To Checkout   <span className="ml-2 bg-light text-success p-1 px-3 rounded-3">{`$ ${total}`}</span></h6>
      </button>
    </Box>
  );

  return (
    <div>
      <div>
        {cartItems?.length > 0 && <Button className="add-cart" onClick={toggleDrawer("left", true)}>
          <Badge badgeContent={cartItems?.length} color="success">
            <ShoppingBagIcon
              className="add-cart-icon"
              sx={{ color: "#157347" }}
            />
          </Badge>
          <span className="add-cart-price">${total}</span>
        </Button>}
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </div>

      {/* Proceed Order Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3 id="modal-modal-title">
            Place Your Order
          </h3>
          <Box id="modal-modal-description" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className='col-5'>
              <Formik
                initialValues={initialValuesOrder}
                validationSchema={placeOrderSchema}
                onSubmit={placeOrderHandler}
              >
                {({ errors, touched }) => (
                  <Form className="">
                    <div className="mb-2">
                      <label>Full Name</label>
                      <Field name='name' type='text' className='col-12 field-input' placeholder="Name" />
                      {errors.name && touched.name && <div className='text-danger'>{errors.name}</div>}
                    </div>
                    <div className="">
                      <label>Email</label>
                      <Field name='email' type='email' className='col-12 field-input' placeholder="Enter Email" />
                      {errors.email && touched.email && <div className='text-danger'>{errors.email}</div>}
                    </div>
                    <div className="my-2">
                      <label>Delivery Address</label>
                      <Field name='address' type='text' className='col-12  field-input' placeholder='Address' />
                      {errors.address && touched.address && <div className='text-danger'>{errors.address}</div>}
                    </div>

                    <div className="my-2">
                      <label>Payment Details</label>
                      <p>
                        <Field type="radio" name="delivery" value="Cash_on_delivery" />
                         <span className="ml-2">Cash on Delivery</span>
                         {errors.delivery && touched.delivery && <div className='text-danger'>{errors.delivery}</div>}
                      </p>
                    </div>
                    <button className="w-100 btn btn-lg btn-success" type="submit">Confirm</button>
                  </Form>)}

              </Formik>
            </div>

            <div className='col-5'>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h4>
                  <ShoppingBagIcon
                    sx={{ width: "50px", height: "30px", color: "green" }}
                  />
                  Shopping Cart
                </h4>
                <h4>
                  ${total}
                </h4>
              </div>
              {cartItems?.map((item) => {
                return (
                  <div key={item.id} className="cart-items p-2">
                    <div className="d-flex align-self-center">
                      <h6>{item?.name}</h6>
                    </div>
                    <div className="d-flex w-50 justify-content-between align-self-center">
                      <Grid className="d-flex mr-2">
                        <Avatar
                          onClick={() => decrementHandler(item)}
                          sx={{ width: 24, height: 24 }}
                        >
                          -
                        </Avatar>
                        <span> {item?.quantity} </span>
                        <Avatar
                          onClick={() => incrementHandler(item)}
                          sx={{ width: 24, height: 24 }}
                        >
                          +
                        </Avatar>
                      </Grid>

                      <div>
                        <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
                          <DeleteIcon sx={{ width: '20px', height: '20px' }} onClick={() => deleteHandler(item)} />
                        </Avatar>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddCart;
