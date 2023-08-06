import React from 'react';
import './Audit.css';
import Auditimage from '../../img/AuditMobile.svg';

const Audit = () => {
  return (
    <div className="Audit-section">
      
          <h1 className="Audit-heading">Security First</h1>
         
            <img className="audit-image" src={Auditimage} alt="Audit terminal" />
             <div className="subheading-container">
            <p className="Audit-text">
            <span>  Our smart contracts have undergone rigorous unit testing and have been subjected to several independent audits conducted by <strong>“The ARCADIA GROUP”.</strong> </span></p>

          </div>
          <a href="https://github.com/TheArcadiaGroup/publications/blob/main/audits/FXDX%20Final.pdf" className="button">Learn more</a>
    </div>
  );
};

export default Audit;
