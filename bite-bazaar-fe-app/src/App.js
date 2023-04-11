import { Navigate, Route, Routes } from "react-router-dom";
import CreateProduct from "./componets/add-products/add-products";
import SignIn from "./componets/authentication/sign-in/sign-in";
import SignUp from "./componets/authentication/sign-up/sign-up";
import AppLoader from "./componets/app-loader/app-loader";
import Dashboard from "./componets/Dashboard/dashboard";
import AddCart from "./componets/add-cart/add-cart";
import Footer from "./componets/footer/footer";
import SingleProducts from "./componets/single-products/single-products"
import { lazy, Suspense, useEffect } from "react";
import "./App.css";
import ProceedOrder from "./componets/proceed-order/proceed-order";
import AppAlert from "./componets/app-alert/app-alert";
import NotFound from "./componets/not-found/not-found";

const HeroSection = lazy(() => import('./componets/hero-section/hero-section'));
const AllProducts = lazy(() => import('./componets/our-products/all-products'));
const Wishlists = lazy(() => import('./componets/wishlists/wishlists'));
const History = lazy(() => import('./componets/history/history'));
// const SingleProducts = lazy(() => import('./componets/single-products/single-products'));


function App() {

  useEffect(() => { }, [])
  return (
    <div className="App">
      <AddCart />
      <AppAlert />
      <Suspense fallback={<AppLoader message={'Loading...'} />}>
        <Routes>
          <Route path='/' element={<Navigate to='/log-in' />} />
          <Route path='*' element={<Navigate to='/not-found' />} />
          <Route path="/" element={<Dashboard />}>
            <Route path="/home" element={<HeroSection />} />
            <Route path="home/products" element={<AllProducts />} />
            <Route path="history" element={<History />} />
            <Route path="/:productId" element={<SingleProducts />} />
            <Route path="wishlists" element={<Wishlists />} />
            <Route path="proceed-order" element={<ProceedOrder />} />
          </Route>
          <Route path="create-products" element={<CreateProduct />} />
          <Route path="/log-in" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
