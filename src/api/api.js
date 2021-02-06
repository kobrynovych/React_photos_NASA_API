import React from 'react';
import axios from 'axios';

const api_key = '2mwuXE5AgbXYA88tdK4dZTdwbU1zOxTksU0jlEdo';
// const api_key = process.env.api_key;
 
const instance = axios.create({
  baseURL: 'https://api.nasa.gov/mars-photos/api/v1/',
  params: {
         api_key: api_key,
        // earth_date: date,
        // camera: camera
      }
});
// https://api.nasa.gov/mars-photos/api/v1/manifests/Curiosity/?api_key=2mwuXE5AgbXYA88tdK4dZTdwbU1zOxTksU0jlEdo
  


// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=2mwuXE5AgbXYA88tdK4dZTdwbU1zOxTksU0jlEdo
// https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&api_key=2mwuXE5AgbXYA88tdK4dZTdwbU1zOxTksU0jlEdo
// https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=2mwuXE5AgbXYA88tdK4dZTdwbU1zOxTksU0jlEdo

// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY

// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY

// manifests
// https://api.nasa.gov/mars-photos/api/v1/manifests/Curiosity/?api_key=2mwuXE5AgbXYA88tdK4dZTdwbU1zOxTksU0jlEdo
// https://api.nasa.gov/mars-photos/api/v1/manifests/Spirit/?api_key=2mwuXE5AgbXYA88tdK4dZTdwbU1zOxTksU0jlEdo
// https://api.nasa.gov/mars-photos/api/v1/manifests/Opportunity/?api_key=2mwuXE5AgbXYA88tdK4dZTdwbU1zOxTksU0jlEdo


export const nasaFetch = () => {
    // debugger 
  return instance.get(`rovers/curiosity/photos?sol=1000`)
}

export const manifestFetch = (roverName) => {
    // debugger 
  return instance.get(`manifests/${roverName}`)
}

// export const nasaFetch = {
//     rovers() {
//        return instance.get(`curiosity/photos?sol=1000&api_key=${api_key}`)
//   },
// //   search(city) {
// //     return instance.get(`forecast?q=${city}&units=metric&appid=${apiKey}`)
// //   },
// }

// const getRoverPhotos = (date, camera) => {
//     return axios.get(`${baseUrl}${roverPath}/photos`, {
//       params: {
//         api_key: apiKey,
//         earth_date: date,
//         camera: camera
//       }
//     });
//   };

// export const weatherFetch = {
//   geolocation(city) {
//     return instance.get(`weather?q=${city}&units=metric&appid=${apiKey}`)
//   },
//   search(city) {
//     return instance.get(`forecast?q=${city}&units=metric&appid=${apiKey}`)
//   },
// }
