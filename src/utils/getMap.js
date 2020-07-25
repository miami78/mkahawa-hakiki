// export default getGoogleMaps() {
//     // If we haven't already defined the promise, define it
//     if (!this.googleMapsPromise) {
//       this.googleMapsPromise = new Promise((resolve) => {
//         // Add a global handler for when the API finishes loading
//         window.resolveGoogleMapsPromise = () => {
//           // Resolve the promise
//           resolve(google);

//           // Tidy up
//           delete window.resolveGoogleMapsPromise;
//         };

//         // Load the Google Maps API
//         const script = document.createElement("script");
//         const API = 'AIzaSyDbAz1XXxDoKSU2nZXec89rcHPxgkvVoiw';
//         script.src = `https://maps.googleapis.com/maps/api/js?key=${API}&callback=resolveGoogleMapsPromise`;
//         script.async = true;
//         document.body.appendChild(script);
//       });
//     };

//     // Return a promise for the Google Maps API
//     return this.googleMapsPromise;
// };
  