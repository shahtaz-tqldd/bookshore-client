import React from 'react'

const TestimonialModal = () => {
    return (
        <div>
            <input type="checkbox" id="testimonial-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="testimonial-modal" className="btn btn-sm btn-error btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl text-start font-bold">What's your thoughts about Bookshore?</h3>
                    <input type="text" placeholder="Your Name" className="input input-bordered input-accent w-full mt-6" />
                    <select className="select select-bordered select-accent w-full mt-4">
                        <option disabled selected>Your Ratings</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <textarea className="textarea textarea-accent w-full mt-4 h-40" placeholder="Your Comments"></textarea>
                    <button className="btn btn-active btn-accent mt-5 w-full text-white">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default TestimonialModal