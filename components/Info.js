import React from 'react'

export default function Info () {
    return (
        <div className='Info'>
            <img className='Info--image'src='./images/ayevchenkoheadshot.jpeg' />
            <h1 className='Info--name'>Alexander Yevchenko</h1>
            <h2 className='Info--description'>Aspiring React Student</h2>
            <h3 className='Info--website'>www.alexanderyevchenko.com</h3>
            <div className='Info--buttons'>
                <form className='Info--email-button'>
                    <img src='./images/email_clip_art.png' className='Info--email-image' />
                    <input type='submit' value='Email' />
                </form>
                <form className='Info--linkedin-button' action='https://www.linkedin.com/in/alexander-yevchenko-1334291b3/'>
                    <img src='../images/linkedin_clipart.png' className='Info--linkedin-image' />
                    <input type='submit' value='LinkedIn' />
                </form>
            </div>
        </div>
    )
}
