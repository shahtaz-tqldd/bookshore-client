import React from 'react'

const ProductModal = ({ product, user }) => {
    return (
        <div>
            <input type="checkbox" id="productBuy-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="productBuy-modal" className="btn btn-sm btn-error btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg mb-8">Check Out</h3>
                    <form>
                        <input type="text" placeholder="Type here" defaultValue={product.productName} className="input input-bordered w-full my-2" disabled />
                        <input type="text" placeholder="Type here" defaultValue={product.resalePrice + ' Taka'} className="input input-bordered w-full my-2" disabled />
                        <input type="text" placeholder="Your Name" defaultValue={user.displayName} className="input input-bordered w-full my-2" disabled />
                        <input type="text" placeholder="Your Email" defaultValue={user.email} className="input input-bordered w-full my-2" disabled />
                        <input type="text" placeholder="Your Phone" className="input input-bordered w-full my-2" />
                        <input type="text" placeholder="Your Location" className="input input-bordered w-full my-2" />
                        <div className="modal-action">
                            <button className="btn btn-primary w-40 text-white">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductModal