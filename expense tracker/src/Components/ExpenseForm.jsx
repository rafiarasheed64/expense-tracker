import React, {useState} from 'react'

const ExpenseForm = ({InpProductChange, InpAmountChange, SubmitBtn, proValue, amoValue }) => {
 



  return (
    <div className='flex flex-col items-center p-5'>
        <p className='font-bold text-4xl'>EXPENSE TRACKER</p>



        <div className='w-[75%] border border-black-100 rounded-md mt-3 shadow-xl p-3'>
          <div className='flex items-center gap-4'>
          <img className='h-[25px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/OOjs_UI_icon_alert-yellow.svg/2048px-OOjs_UI_icon_alert-yellow.svg.png" alt="" />
            <p className='font-bold text-2xl'>Alert</p>
          </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, reiciendis pariatur dicta quaerat quibusdam, fugit vitae deleniti hic odio quam optio voluptatum doloribus ab nam sapiente ratione dolore illo quidem?</p>
        </div>



        <div className='gap-4 flex mt-3'>
        <input className='h-10 border border-black p-2 rounded-md' value={proValue}  onChange={InpProductChange} type="text" placeholder='Product'/>
        <input className='h-10 border border-black p-2 rounded-md' value={amoValue} type="number" onChange={InpAmountChange} placeholder='Amount'/>
          <button onClick={SubmitBtn} className='p-2 bg-black text-white rounded-md'>Submit</button>
        </div>

    </div>
  )
}

export default ExpenseForm