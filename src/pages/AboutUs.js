import React from 'react';
import '../styles/aboutus.css';

export default function Main() {
  return (
    <div className='main-container'>
      <div className='flex-column-c'>
        <div className='rectangle'>
          <div className='diamond-outline' />
          <span className='database-management'>DataBase Management</span>
          <span className='create-user-interface'>
            Create user interface design with
            <br />
            unique & modern ideas
          </span>
        </div>
        <div className='rectangle-1'>
          <div className='school-outline' />
          <span className='application'>Application</span>
          <span className='create-digital-user'>
            Create digital user products with
            <br />
            updated ideas
          </span>
        </div>
      </div>
      <div className='flex-column-e'>
        <div className='why-hire-me'>
          <span className='text-5'>
            Why Hire Me For Your <br />
          </span>
          <span className='text-6'>Next</span>
          <span className='text-7'> Pro</span>
          <span className='text-8'>ject?</span>
        </div>
        <span className='text-9'>
          I'm a specialist in Professional Software Development, dedicated to
          delivering high-quality, user-centric solutions.
        </span>
        <span className='text-a'>Hire Me</span>
        <div className='ellipse' />
      </div>
      <div className='rectangle-2'>
        <div className='frame' />
        <span className='cloud-computing'>Cloud Computing</span>
        <div className='create-advance-design'>
          <span className='text-d'>Create advance design prototype</span>
          <span className='text-e'> with Figma apps.</span>
        </div>
      </div>
    </div>
  );
}