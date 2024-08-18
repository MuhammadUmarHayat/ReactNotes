import React from 'react';

   function Hero() {
     return (
       <section className="hero bg-primary text-white text-center d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
         <div className="container">
           <h1 className="display-4">Book Your Appointment Today</h1>
           <p className="lead">Easy and fast appointment booking with top doctors.</p>
           <a href="#booking" className="btn btn-light btn-lg">Book Now</a>
         </div>
       </section>
     );
   }

   export default Hero;