import React from "react";
import "./home.css";
import Video from "../../Components/Video/Video";
function Home() {
  return (
    <div>
      <div id="booking" className="section mt-lg-5 pb-5">
        <div className="section-center">
          <div className="container">
            <div className="row">
              <div className="booking-form">
                <form>
                  <div className="form-group">
                    <div className="form-checkbox">
                      <label htmlFor="roundtrip">
                        <input type="radio" id="roundtrip" name="flight-type" />
                        <span />
                        Roundtrip
                      </label>
                      <label htmlFor="one-way">
                        <input type="radio" id="one-way" name="flight-type" />
                        <span />
                        One way
                      </label>
                      <label htmlFor="multi-city">
                        <input
                          type="radio"
                          id="multi-city"
                          name="flight-type"
                        />
                        <span />
                        Multi-City
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <span className="form-label">Flying from</span>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="City or airport"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <span className="form-label">Flyning to</span>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="City or airport"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="form-group">
                        <span className="form-label">Departing</span>
                        <input className="form-control" type="date" required />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <span className="form-label">Returning</span>
                        <input className="form-control" type="date" required />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="form-group">
                        <span className="form-label">Adults (18+)</span>
                        <select className="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                        <span className="select-arrow" />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="form-group">
                        <span className="form-label">Children (0-17)</span>
                        <select className="form-control">
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                        </select>
                        <span className="select-arrow" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="form-group">
                        <span className="form-label">Travel class</span>
                        <select className="form-control">
                          <option>Economy class</option>
                          <option>Business class</option>
                          <option>First class</option>
                        </select>
                        <span className="select-arrow" />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-btn">
                        <button className="submit-btn">Show flights</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Video />
    </div>
  );
}

export default Home;

// import React from "react";
// import "./home.css";
// import Video from "../../Components/Video/Video";

// function Home() {
//   return (
//     <div>
//       <div id="booking" className="section pb-5">
//         <div className="section-center">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-8 offset-md-2">
//                 {" "}
//                 {/* Centering the form on medium screens */}
//                 <div className="booking-form">
//                   <form>
//                     <div className="form-group">
//                       <div className="form-checkbox">
//                         <label htmlFor="roundtrip">
//                           <input
//                             type="radio"
//                             id="roundtrip"
//                             name="flight-type"
//                           />
//                           <span />
//                           Roundtrip
//                         </label>
//                         <label htmlFor="one-way">
//                           <input type="radio" id="one-way" name="flight-type" />
//                           <span />
//                           One way
//                         </label>
//                         <label htmlFor="multi-city">
//                           <input
//                             type="radio"
//                             id="multi-city"
//                             name="flight-type"
//                           />
//                           <span />
//                           Multi-City
//                         </label>
//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="col-md-6">
//                         <div className="form-group">
//                           <span className="form-label">Flying from</span>
//                           <input
//                             className="form-control"
//                             type="text"
//                             placeholder="City or airport"
//                           />
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="form-group">
//                           <span className="form-label">Flying to</span>
//                           <input
//                             className="form-control"
//                             type="text"
//                             placeholder="City or airport"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="col-md-3">
//                         <div className="form-group">
//                           <span className="form-label">Departing</span>
//                           <input
//                             className="form-control"
//                             type="date"
//                             required
//                           />
//                         </div>
//                       </div>
//                       <div className="col-md-3">
//                         <div className="form-group">
//                           <span className="form-label">Returning</span>
//                           <input
//                             className="form-control"
//                             type="date"
//                             required
//                           />
//                         </div>
//                       </div>
//                       <div className="col-md-2">
//                         <div className="form-group">
//                           <span className="form-label">Adults (18+)</span>
//                           <select className="form-control">
//                             <option>1</option>
//                             <option>2</option>
//                             <option>3</option>
//                           </select>
//                           <span className="select-arrow" />
//                         </div>
//                       </div>
//                       <div className="col-md-2">
//                         <div className="form-group">
//                           <span className="form-label">Children (0-17)</span>
//                           <select className="form-control">
//                             <option>0</option>
//                             <option>1</option>
//                             <option>2</option>
//                           </select>
//                           <span className="select-arrow" />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="col-md-3">
//                         <div className="form-group">
//                           <span className="form-label">Travel class</span>
//                           <select className="form-control">
//                             <option>Economy class</option>
//                             <option>Business class</option>
//                             <option>First class</option>
//                           </select>
//                           <span className="select-arrow" />
//                         </div>
//                       </div>
//                       <div className="col-md-3">
//                         <div className="form-btn">
//                           <button className="submit-btn">Show flights</button>
//                         </div>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="pt-5">
//         <Video />
//       </div>
//     </div>
//   );
// }

// export default Home;
