// import React from 'react'
// import ExpenseList from './ExpenseList';

// const ExpenseItems = ({dta}) => {
//   return (
//     <div>
//         {
//             dta.map( (ele, idx)=>  {
//                 return(
//                     <div>
//                         <ExpenseList key={ele} elements={ele} />
//                     </div>
//                 )
//             } )
//         }
//    </div>
//   )
// }
// export default ExpenseItems

import React from 'react'

const ExpenseItems = ({dta, DeleteClk, EditClk}) => {







  return (
    <div >
      {dta.map((ele, idx)=>{
        return(
        <ul className='border border-black flex justify-around gap-2 w-[50%] m-auto'>
            <p className='font-bold text-xl'>{ele.product}</p>
            <p className='text-xl'>{ele.amount}</p>
            <div className='flex gap-3'>
            <button onClick={()=> (EditClk(ele))}  className='bg-blue-700 text-white py-1 px-2 rounded-md hover:text-black hover:bg-blue-400'>Edit</button>

            <button onClick={() => DeleteClk(idx)}  className='bg-blue-600 text-white py-1 px-2 rounded-md hover:text-black hover:bg-blue-400'>Delete</button>
            </div>
        </ul>
        )
        })}

        

    </div>
  )}


export default ExpenseItems