import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styles from '@/styles/Home.module.css'
import Head from 'next/head';
import Link from 'next/link';

const Cart = () => {
    const state=useSelector((state)=>state.cart.cart);

    const [cart,setcart]=useState(state);
 const handleremove=(item)=>{
    alert("item removed")
 }
 const total=()=>{
   return cart.reduce((acc,it)=>acc +it.price,0)
 }
  return (
    <>
    <Head>
        <title>cart page</title>
    </Head>
    {cart.length ==0 ?"cart is empty":""}
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
    <h3 style={{textAlign:"center"}}>Total-{total()}</h3>
    <div style={{textAlign:"center"}}>
<Link href="/payment">
Make Payment
</Link>
    </div>
    
        </>
  )
}

export default Cart
