import React from 'react'
import { Link } from 'react-router-dom'


function History() {
  return (
    <div className='container my-5'>
      <div className="d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link to={'/home'}>Back to Home</Link>
      </div>
      <table className="table my-5 ">
        <thead >
          <th>#</th>
          <th>Caption</th>
          <th>Video Link</th>
          <th>Time Stamp</th>
          <th><i className='fa-solid fa-ellipsis-vertical'></i></th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Avesham</td>
            <td><a target='_blank' href="https://www.youtube.com/embed/L0yEMl8PXnw"></a></td>
            <td>22/4/2014 10:45AM</td>
            <td><button className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default History