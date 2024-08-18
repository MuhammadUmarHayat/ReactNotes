import React from 'react';

function Services() {
  return (
    <section id="services" className="py-5 text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Consultations</h5>
                <p className="card-text">Get professional medical advice from expert doctors.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Medical Exams</h5>
                <p className="card-text">Comprehensive medical exams for a healthy life.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Emergency Care</h5>
                <p className="card-text">Round-the-clock emergency care services.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;