import React, { useState } from 'react';
import { useEffect } from 'react';
// import { nasaFetch } from './api/api';
 import { useDispatch, useSelector } from 'react-redux';
import { MANIFEST_FETCH, ROVER_FETCH, SET_MANIFEST, PHOTO_FETCH } from './redux/actionTypes/index';
import Rovers from './components/Rovers';
import ManifestTable from './components/ManifestTable';
import Sols from './components/Sols';
import Cameras from './components/Cameras';

function App() {
  const [sol, setSol] = useState(null);
  const [camera, setCamera] = useState(null);
  const dispatch = useDispatch();

  const rovers = useSelector(state => state.rover.rovers);

  const name = useSelector(state => state.manifest.name);
  const landing_date = useSelector(state => state.manifest.landing_date);
  const max_date = useSelector(state => state.manifest.max_date);
  const max_sol = useSelector(state => state.manifest.max_sol);
  const status = useSelector(state => state.manifest.status);
  const total_photos = useSelector(state => state.manifest.total_photos);
  const launch_date = useSelector(state => state.manifest.launch_date);
  const photos = useSelector(state => state.manifest.photos);

  const manifestFetch = (roverName) => {
    // debugger
    dispatch({type: MANIFEST_FETCH, roverName})
  } 

  useEffect(() => {
    debugger
    if (name && photos && camera) {
      // const sol = photos[sol_id].sol;
      dispatch({type: PHOTO_FETCH}, name, sol, camera);
    }
  }, [camera]);

  const rovers_list = [{rover: 'Curiosity'}, {rover: 'Opportunity'}, {rover: 'Spirit'}];

  const sols_list = React.useMemo(() => {
    // debugger
    // return photos.map((el, index) => ({id: index, sol: `Sol: ${el.sol} (${el.earth_date})`}))
    return photos.map((el, index) => ({sol: el.sol, text: `Sol: ${el.sol} (${el.earth_date})`}))
  },[photos]);


  const cameras_list = React.useMemo(() => {
    debugger
    // return sol && photos[sol].cameras.map(el => ({camera: `${el.toLowerCase()}`}))
    // return sol && photos.filter(el => el.sol === sol && el.cameras.map(el2 => ({camera: `${el2.toLowerCase()}`}))); 
    // 
    // remuve 
    return sol && photos.filter(el => el.sol === sol && el.cameras.map(el2 => ({camera: `${el2.toLowerCase()}`}))); 
    // [sol].cameras.map(el => ({camera: `${el.toLowerCase()}`}))
  },[sol]);

  return (
    <>
      <header></header>
      <main></main>
      <footer></footer>


      <Rovers rovers_list={rovers_list} manifestFetch={manifestFetch} name={name} />

      {name.length > 0 && ( <ManifestTable name={name} 
                                      launch_date={launch_date} 
                                      landing_date={landing_date} 
                                      max_date={max_date}
                                      max_sol={max_sol}
                                      status={status}
                                      total_photos={total_photos}
                                  /> )}

      {name.length > 0 && ( <Sols sols_list={sols_list} setSol={setSol}/> )}
      
      {sol !== null && ( <Cameras cameras_list={cameras_list} setCamera={setCamera}/> )}


      

      <ul>{rovers.length > 0 && rovers.map((el, index) => (<React.Fragment key={el.id}>
        {index < 10 && <li>
          <img src={el.img_src} style={{width: '150px'}} />
        </li>}
      </React.Fragment>))}</ul>
      
    </>
  );
}

export default App;
