import React from 'react';
import Image from 'next/image'
import styles from '../styles/SelectCoffeeType.module.css'


function SelectCoffeeType({data, setData, setPage}) {

  return (
    <div className={styles.grid}>
      <div
        onClick={() => {
          setData({...data, coffeeType: "Espresso"});
          setPage((currPage) => currPage + 1 );
        }}
        className={
          data.coffeeType === "Espresso"
            ? `${styles.active} ${styles.card}`
            : `${styles.card}`
        }
      >
        <Image
          src="/coffee.svg"
          alt="coffee"
          width={100}
          height={100}
        />
        <h2>Espresso</h2>
      </div>

      <div
        onClick={() => {
          setData({...data, coffeeType: "Coffee"});
          setPage((currPage) => currPage + 1 );
        }}
        className={
          data.coffeeType === "Coffee"
            ? `${styles.active} ${styles.card}`
            : `${styles.card}`
        }
      >
        <Image
          src="/coffee.svg"
          alt="coffee"
          width={100}
          height={100}
        />
        <h2>Coffee</h2>
      </div>

      <div
        onClick={() => {
          setData({...data, coffeeType: "Americano"});
          setPage((currPage) => currPage + 1 );
        }}
        className={
          data.coffeeType === "Americano"
            ? `${styles.active} ${styles.card}`
            : `${styles.card}`
        }
      >
        <Image
          src="/coffee.svg"
          alt="coffee"
          width={100}
          height={100}
        />
        <h2>Americano</h2>
      </div>

      <div
        onClick={() => {
          setData({...data, coffeeType: "Americano"});
          setPage((currPage) => currPage + 1 );
        }}
        className={
          data.coffeeType === "Caffe Crema"
            ? `${styles.active} ${styles.card}`
            : `${styles.card}`
        }
      >
        <Image
          src="/coffee.svg"
          alt="coffee"
          width={100}
          height={100}
        />
        <h2>Caffe Crema</h2>
      </div>

      <div
        onClick={() => {
          setData({...data, coffeeType: "Ristretto"});
          setPage((currPage) => currPage + 1 );
        }}
        className={
          data.coffeeType === "Ristretto"
            ? `${styles.active} ${styles.card}`
            : `${styles.card}`
        }
      >
        <Image
          src="/coffee.svg"
          alt="coffee"
          width={100}
          height={100}
        />
        <h2>Ristretto</h2>
      </div>
    </div>
  )
}

export default SelectCoffeeType
