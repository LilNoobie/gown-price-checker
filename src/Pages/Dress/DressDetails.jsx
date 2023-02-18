import React, {useState, useEffect} from 'react';
import SampleData from '../../Components/Data.json';
import {Link, useParams} from 'react-router-dom';
import './DressDetails.css'
import SampleImage from '../../assets/ines.jpg'


function DressDetails() {
  const {style} = useParams();


  return (
    <div className="dress">

      <div className="dressImage">
        <img src={SampleImage} id="sampleImage" />
      </div>


      <div className="dressInfo">
        <div className="dressName">
          <h1>{style}</h1>
            <h2>{SampleData.map(data => {
              return (
                <div className="designer">
                  {data.designer}
                </div>
              )
            })}</h2>
          </div>
        <div className="price">Est. Price: $5000</div>
      </div>

    </div>
  )
};

export default DressDetails

