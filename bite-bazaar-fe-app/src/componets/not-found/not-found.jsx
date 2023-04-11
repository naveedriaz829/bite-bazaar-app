import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='w-100 d-flex align-items-center justify-content-center text-center  ' style={{ height: '100vh'}}>
            <div>
                <h2 className='fw-bold'>404</h2>
                <h3>Page not found</h3>
                <button type="button" class="btn btn-success mt-3">
                    <Link to='/home' className='text-decoration-none'><span className='text-white fw-bold' >Back to homepage</span></Link>
                </button>
            </div>
        </div>
    )
}

export default NotFound