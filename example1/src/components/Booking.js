import React from 'react';

function Booking() {
  return (
    <section id="booking" className="bg-light py-5">
      <div className="container text-center">
        <h2>Book an Appointment</h2>
        <form className="mt-4">
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>


            <div className="form-group col-md-6">
              <input type="email" className="form-control" placeholder="Your Email" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="text" className="form-control" placeholder="Doctor's Name" />
            </div>
            <div className="form-group col-md-6">
              <input type="date" className="form-control" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Booking;