import React, { useState, useEffect } from 'react';
import SampleData from '../../Components/Data.json';
import { Link, useParams } from 'react-router-dom';
import './DressDetails.css';
import SampleImage from '../../assets/ines.jpg';
import Tooltip from '@mui/material/Tooltip';

<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1"></meta>
function DressDetails() {
  const { style } = useParams();

  return (
    <div className="dress">
      <div className="infoBox">
        <div className="dressImage">
          <img src={SampleImage} id="sampleImage" />
        </div>

        <div className="dressInfo">
          <div className="dressName">
            <h1>{style}</h1>
            <h2>Muse by Berta</h2>
          </div>

          <div className="dataBox">
            <div className="price">
              Est. Price: $5000
            </div>
            <div className="dataPoints">
              <Tooltip title="Data points from brides" placement="right-end">
              <p>(5)</p>
              </Tooltip>
            </div>
          </div>

          <div className="form">
            Know the price? <br></br>Share it here.
          </div>
        </div>
      </div>
    </div>
  )
};


export default DressDetails

