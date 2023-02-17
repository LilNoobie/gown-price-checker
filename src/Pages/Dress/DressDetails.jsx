import React, {useState, useEffect} from 'react';
import SampleData from '../../Components/Data.json';
import {Link, useParams} from 'react-router-dom';

function Dress() {
  const [dress, setDress] = useState([]);
  const {style} = useParams();

  return (
    <div className="dressName">Dress Style - {style}</div>
  )
}

export default Dress