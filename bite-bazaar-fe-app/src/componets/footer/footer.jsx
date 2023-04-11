import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div>
      <div className="main-footer">
        <div className="container">
         
          <div className="row">
            
          <div className="col-md-3 col-sm-6">
          <h1 className='bite'>Bite Bazaar</h1>
          There are many popular products you will find our shop, Choose your daily necessary product from our KachaBazar shop and get some special offer.
          </div>
            
            <div className='col-md-3 col-sm-6'>
              <h4 className='comp'> Company</h4>
              <ul className='list-unstyled'>
                <li>About us</li>
                <li>Contact us</li>
                <li>Careers</li>
                <li>Latest news</li>
                 </ul>
            </div>
            <div className='col-md-3 col-sm-6'>
              <h4 className='top'> Top category</h4>
              <ul className='list-unstyled'>
                <li>Fish & Meat</li>
                <li>Soft Drink</li>
                <li>baby care</li>
                <li>Beauty & Health</li>

              </ul>
            </div>
            <div className='col-md-3 col-sm-6'>
              <h4 className='my'> My account </h4>
              <ul className='list-unstyled'>
                <li>Dashboard</li>
                <li>My order</li>
                <li>Recent Order</li>
                <li>Update profile</li>

              </ul>
            </div>

           
          </div>
        
          <div className="footer-bottom">
          <p className="text-xs-center my-5">
            &copy;{new Date().getFullYear()} City Lahore All Right reserved
          </p>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer
