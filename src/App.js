import React, { useState } from 'react';
import { useEffect } from 'react';
// import { nasaFetch } from './api/api';
 import { useDispatch, useSelector } from 'react-redux';
import { MANIFEST_FETCH, ROVER_FETCH, SET_MANIFEST } from './redux/actionTypes/index';
import RoversSelect from './components/RoversSelect';
import ManifestTable from './components/ManifestTable';
import SolSelect from './components/SolSelect';

function App() {
  const [sol_id, setSol_id] = useState(null);
  const dispatch = useDispatch();
  // debugger

  const rovers = useSelector(state => state.rover.rovers);

  const name = useSelector(state => state.manifest.name);
  const landing_date = useSelector(state => state.manifest.landing_date);
  const max_date = useSelector(state => state.manifest.max_date);
  const max_sol = useSelector(state => state.manifest.max_sol);
  const status = useSelector(state => state.manifest.status);
  const total_photos = useSelector(state => state.manifest.total_photos);
  const launch_date = useSelector(state => state.manifest.launch_date);
  const photos = useSelector(state => state.manifest.photos);


  // debugger
  console.log(sol_id);


  const manifestFetch = (roverName) => {
    // debugger
    dispatch({type: MANIFEST_FETCH, roverName})
  } 

  useEffect(() => {
    // debugger
    // dispatch({type: ROVER_FETCH})
    // nasaFetch();
  }, []);

  // const search_sol = photos.map((el, index) => ({id: index, sol: `Sol: ${el.sol} (${el.earth_date})`}));
  const search_sol = React.useMemo(() => {
    debugger
    return photos.map((el, index) => ({id: index, sol: `Sol: ${el.sol} (${el.earth_date})`}))
  },[photos]);


  return (
    <>
      <header></header>
      <main></main>
      <footer></footer>


      <RoversSelect manifestFetch={manifestFetch}/>

      {name.length > 0 && ( <ManifestTable name={name} 
                                      launch_date={launch_date} 
                                      landing_date={landing_date} 
                                      max_date={max_date}
                                      max_sol={max_sol}
                                      status={status}
                                      total_photos={total_photos}
                                  />)}

      <SolSelect search_sol={search_sol} setSol_id={setSol_id}/>



      <ul>{rovers.length > 0 && rovers.map((el, index) => (<React.Fragment key={el.id}>
        {index < 10 && <li>
          <img src={el.img_src} style={{width: '150px'}} />
        </li>}
      </React.Fragment>))}</ul>
      
    </>
  );
}

export default App;
