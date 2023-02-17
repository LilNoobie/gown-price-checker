import React, {useState, useEffect} from 'react';
import SampleData from '../../Components/Data.json';
import {Link, useParams} from 'react-router-dom';

function Dress() {
  const [dress, setDress] = useState([]);
  const {title} = useParams();

  return (
    <div className="dressName">{title}</div>
  )
}

export default Dress