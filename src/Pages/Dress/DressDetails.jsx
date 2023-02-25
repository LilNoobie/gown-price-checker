import React from 'react';
// import SampleData from '../../Components/Data.json';
import { Link, useParams } from 'react-router-dom';
import SampleImage from '../../assets/ines.jpg';
import Tooltip from '@mui/material/Tooltip';
import './DressDetails.css'

function DressDetails() {
  const { style } = useParams();

  return (
    <div className="dress">
      <div className="infoBox">
        <div className="dressImage">
          <img src={SampleImage} id="sampleImage" alt="sample"/>
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

          <div className="formLink">
            Know the price? <br></br>Share it
            <Link to={`/form`}>
            <span id="here"> here</span>.
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};


export default DressDetails;

