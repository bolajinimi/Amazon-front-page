import React from 'react';

import classes from './ProductDetails.module.css';

const ProductDetails = (props) => {
  return(
    <div className={classes.ProductData}>
      <h1 className={classes.ProductTitle}>
        FitBit 21 - The Smartest Watch
      </h1>
      <p className={classes.ProductDescription}>
        FitBit 21 has all the functionality you need including up to two weeks of battery life.
      </p> 


      <h3 className={classes.SectionHeading}> Select Color</h3>
      <div>
        <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="https://imgur.com/iOeUBV7.png" alt="Red Colored Watch"/>
        <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="black Colored Watch"/>
        <img className={classes.ProductImage} src="https://imgur.com/iOeUBV7.png" alt="blue Colored Watch"/>
        <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="purple Colored Watch"/>
      </div>
      <h3 className={classes.SectionHeading}> Features </h3>
      <div>
        <button className={[classes.FeatureItem, classes.SelectedFeatureItem].join(' ')}>Time</button>
        <button className={classes.FeatureItem}>Heart Rate</button>
      </div>
      <div>
        <button className={classes.PrimaryItem}> Buy Now</button>
      </div>
    </div>
      
  )
}

export default ProductDetails;