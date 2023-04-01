import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styles from '@/styles/Home.module.css'

const Cart = () => {
    const state=useSelector((state)=>state.cart.cart);

    const [cart,setcart]=useState(state);
 const handleremove=(item)=>{
    alert("item removed")
 }
  return (
    <div className={styles.container}>
      {
        cart.map((ele)=>{
            return (
                <div className={styles.card}>
                <h3>{ele.title}</h3>
                <img src={ele.image} alt={ele.image} width={100} />
                <p>{ele.price}</p>
                <p>{ele.description}</p>
                <button onClick={()=>handleremove(ele)}>remove</button>
              </div>
              )
        })
      }
    </div>
  )
}

export default Cart
