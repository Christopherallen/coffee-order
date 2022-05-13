import React, { useState } from 'react';
import styles from '../styles/Form.module.css'
import OrderName from './OrderName';
import SelectCoffeeType from "./SelectCoffeeType"
import SelectShots from './SelectShots';

function Form() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    coffeeType: "",
    shots: "",
    name: "",
  });

  const FormTitles = [
    "What kind of coffee would you like?",
    "Select how many shots",
    "Name"
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <SelectCoffeeType
          data={data}
          setData={setData}
          setPage={setPage}
        />
      )
    } else if (page === 1) {
      return (
        <SelectShots
          data={data}
          setData={setData}
        />
      )
    } else {
      return <OrderName />
    }
  }

  return(
    <div className="form">
      <div className="progres-bar"></div>
      <div className="form-container">
        <div className="header">
          <h1 className={styles.title}>{FormTitles[page]}</h1>
        </div>
        <div className="body">
          {PageDisplay()}
        </div>
        <div className={styles.footer}>
          <button
            className={`${styles.button__prev} button`}
            disabled={page == 0}
            onClick={() => {
            setPage((currPage) => currPage - 1 );
          }}>
            Prev
          </button>
          <button
            className={`${styles.button__next} button`}
            disabled={page === FormTitles.length -1}
            onClick={() => {
              setPage((currPage) => currPage + 1 );
            }}>
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Form;
