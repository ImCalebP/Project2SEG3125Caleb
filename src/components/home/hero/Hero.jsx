import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Come experience Jesus ' subtitle='SEARCH A MINISTRY OR AN EVENT' />

          <form className='flex'>
            <div className='box'>
              <span>Age</span>
              <input type='text' placeholder='Baby/Kid/Teen/Adult/Senior' />
            </div>
            <div className='box'>
              <span>Gender</span>
              <input type='text' placeholder='Male/Female' />
            </div>
            <div className='box'>
              <span>Interest</span>
              <input type='text' placeholder='Baptism/Activity/Conference/Mission' />
            </div>
            <div className='box'>
              <h4>Advance Filter</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
