import React from 'react';

   function Reviews() {
     return (
       <section id="reviews" className="py-5 text-center">
         <div className="container">
           <h2>What Our Patients Say</h2>
           <div id="carouselReviews" className="carousel slide" data-ride="carousel">
             <div className="carousel-inner">
               <div className="carousel-item active">
                 <blockquote className="blockquote">
                   <p className="mb-0">"Dr. John Doe is amazing! He took the time to explain everything and made me feel at ease."</p>
                   <footer className="blockquote-footer">Jane Doe</footer>
                 </blockquote>
               </div>
               <div className="carousel-item">
                 <blockquote className="blockquote">
                   <p className="mb-0">"Dr. Jane Smith has been fantastic with my child. He’s caring and very knowledgeable."</p>
                   <footer className="blockquote-footer">Mark Johnson</footer>
                 </blockquote>
               </div>
               <div className="carousel-item">
                 <blockquote className="blockquote">
                   <p className="mb-0">"I couldn’t be happier with the surgery performed by Dr. Emily White. He’s a true professional."</p>
                   <footer className="blockquote-footer">Sarah Lee</footer>
                 </blockquote>
               </div>
             </div>
             <a className="carousel-control-prev" href="#carouselReviews" role="button" data-slide="prev">
               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
               <span className="sr-only">Previous</span>
             </a>
             <a className="carousel-control-next" href="#carouselReviews" role="button" data-slide="next">
               <span className="carousel-control-next-icon" aria-hidden="true"></span>
               <span className="sr-only">Next</span>
             </a>
           </div>
         </div>
       </section>
     );
   }

   export default Reviews;