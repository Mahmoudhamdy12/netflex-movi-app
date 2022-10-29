import './Story.css'

const Story = () => {
  return (
    <div className='story'>
        <img className='opacity img-fluid img-auto'  src="https://assets.nflxext.com/ffe/siteui/vlv3/afc06103-4d6a-4236-b496-34b671a7e9ba/bc0788fe-a1ce-49fb-bc80-525f4879b02b/EG-ar-20221003-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt=""/>
        <div className='container'>
        <div className=' info z-index-1'>
            <p className='fs-1 fw-bold'>Unlimited movies, TV shows, and more.</p>
            <p className='fs-3'>Watch anywhere. Cancel anytime.</p>
            <form className='row g-2 justify-content-center info-form'>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="input-group mb-3">
            <input type="email" className="form-control p-3" placeholder="Email address" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button className="btn btn-outline-danger" type="button" id="button-addon2">Get Started</button>
            </div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Story