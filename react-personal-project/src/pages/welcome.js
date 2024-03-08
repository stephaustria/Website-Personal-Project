import React from 'react'
import Photo from '../assets/draustria.jpg';

function Welcome() {
  return (
    <div className='welcome'>
        <div className='headerContainer'>
            <h2>FRIENDLY STAFF. EXCELLENT SERVICE. BEAUTIFUL SMILES.</h2>
            <p>Dr. Austria’s office started as a single dentist practice with a mission to make a positive and lasting difference in the community through comprehensive dental treatment by delivering quality and comfortable care to our patients. Our team of professional, friendly and caring employees strive to provide a caring environment by educating and motivating patients toward a lifetime of oral health. Our relaxed private office setting enables our team to develop a collaborative effort with our patients by informing them of the best dental options available by using the latest in educational techniques and quality materials to give patients smiles they truly deserve.</p>
            <p></p>
            <p>We are always welcoming new patients and we would love to have you as part of our dental family. Please explore our web site to learn more about us. You can find information about our staff, our office, and the procedures and services that we offer.</p>
            <p></p>
            <p>If you have any questions please call us. We love hearing from our patients and anyone who may be interested in becoming one.</p>
            <p></p>
            <p>We’ll Provide You With That Winning Smile!</p>
        </div>
        <br/>
        <div className='subContainer'>
            <img src={Photo} />
        </div>
    </div>
  )
}

export default Welcome
