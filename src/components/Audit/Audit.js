import React from 'react';
import './Audit.css';
import Auditimage from '../../img/AuditMobile.png';

const Audit = () => {
  return (
    <div className="Audit-section">
      
          <h1 className="Audit-heading">Security First</h1>
         
            <img className="audit-image" src={Auditimage} alt="Audit terminal" />
            <br/>
     <div className="subheading-custom">
            <p className="Audit-text">
            <span className="paragraph-start">  Our smart contracts have undergone rigorous unit testing and have been subjected to several independent audits conducted by <strong>“The ARCADIA GROUP”.</strong> </span></p>

          </div>
          <a href="#page" className="button">Learn more</a>
    </div>
  );
};

export default Audit;
