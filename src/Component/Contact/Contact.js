import './Contact.css'

const Contact = () => {
    return (
    <div className='contact'>
    <section className="container">
    <p className="fs-2 fw-bold">Contact us</p>
    <p>Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>
    <div className="contact-form ">
        <div className=" mb-md-0 mb-5">
            <form className='p-3'>
                <div className="row ">
                    <div className="col-md-6 ">
                        <div className="md-form mb-0">
                            <input type="text" id="name" name="name" className="form-control"/>
                            <label htmlFor="name" className="">Your name</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="email" id="email" name="email" className="form-control"/>
                            <label htmlFor="email" className="">Your email</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <input type="text" id="subject" name="subject" className="form-control"/>
                            <label htmlFor="subject" className="">Subject</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form">
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                            <label htmlFor="message">Your message</label>
                        </div>
                    </div>
                </div>
            </form>
            <div className="text-center text-md-left">
                <a href='#/' className="btn btn-primary">Send</a>
            </div>
        </div>
    </div>

</section>
</div>
    )
}

export default Contact