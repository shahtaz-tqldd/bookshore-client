import React from 'react'

const ProductActionModal = ({productData, setProductData, message, handleClick, btnColor, action}) => {
    return (
        <div>
            <input type="checkbox" id="productAction-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="text-lg text-center">{message}<br /><span className='text-xl font-bold'>{productData.productName}</span> ? </h3>

                    <div className="modal-action">
                        <button onClick={() => setProductData(null)} className="btn btn-outline btn-sm">Cancel</button>
                        <button onClick={() => handleClick(productData)} className={`btn ${btnColor} btn-sm text-white`}>{action}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductActionModal