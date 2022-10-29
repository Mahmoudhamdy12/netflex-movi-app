import React from 'react'
import './Footer.css'
const Footer = () => {
    const footer = ['FAQ','Investor Relations','Privacy','Speed Test','Help Center','Jobs','Cookie Preferences',
                    'Legal Notices','Account','Ways to Watch','Corporate Information','Only on Netflix',
                    'Media Center','Terms of Use','Contact Us']
  return (
    <div className='footer'>
        <div className='container'>
            <p className='fs-2 fw-bold'>Questions? Contact us.</p>
            <ul className='footer-ul'>
                {footer.map((text,index)=>{
                    return (
                        <li key={index}><a href='#/'>{text}</a></li>
                    )
                })}
            </ul>
            <p className='copy'>Made by Mahmoud</p>
        </div>
    </div>
  )
}

export default Footer