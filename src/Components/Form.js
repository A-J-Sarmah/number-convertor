export let Form = () => {
 return(
       <div className="container">
         <div className="row justify-content-center mb-5">
          <p className="display-3 text-muted text-center my-5">
           Quickly convert numbers
          </p>
          <div className="col-xl-6 col-12 d-flex flex-column justify-content-center">
           <label>Enter the number</label>
           <input type="text" className="w-100" id="amount" placeholder="Enter the number"/>
          </div>
          <div className="col-xl-4 col-6 d-flex justify-content-center">
            <button className="btn btn-warning py-0 mt-3">Calculate</button>
          </div>
         </div>
         <div className="row justify-content-center mb-5">
            <div className="col-xl-6 col-12">
                <label>From</label>
                <select className="form-select" aria-label="Default select example">
                    <option value="decimal">Decimal</option>
                    <option value="binary">Binary</option>
                    <option value="octal">Octal</option>
                    <option value="hex">Hex</option>
                </select>
            </div>
             <div className="col-xl-6 col-12">
                 <label>To</label>
                 <select className="form-select" aria-label="Default select example">
                     <option value="decimal">Decimal</option>
                     <option value="binary">Binary</option>
                     <option value="octal">Octal</option>
                     <option value="hex">Hex</option>
                 </select>
             </div>
         </div>
       </div>
 )
}