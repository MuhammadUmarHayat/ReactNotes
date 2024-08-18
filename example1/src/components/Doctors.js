import React from 'react';

   function Doctors() 
   {
     return (
       <section id="doctors" className="py-5 bg-light">
         <div className="container">
           <h2 className="text-center">Meet Our Doctors</h2>
           <div className="row">
             <div className="col-lg-4 col-md-6">
               <div className="card">
                 <img src="umar.jpg" className="card-img-top" alt="Doctor 1" />
                 <div className="card-body">
                   <h5 className="card-title">Dr. John Doe</h5>
                   <p className="card-text">Specialist in Cardiology with over 15 years of experience.</p>
                 </div>
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div className="card">
                 <img src="umar.jpg" className="card-img-top" alt="Doctor 2" />
                 <div className="card-body">
                   <h5 className="card-title">Dr. Jane Smith</h5>
                   <p className="card-text">Pediatrician with a focus on child healthcare and wellness.</p>
                 </div>
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div className="card">
                 <img src="umar.jpg" className="card-img-top" alt="Doctor 3" />
                 <div className="card-body">
                   <h5 className="card-title">Dr. Emily White</h5>
                   <p className="card-text">Expert in Orthopedic Surgery, helping patients with bone and joint issues.</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
     );
   }

   export default Doctors;