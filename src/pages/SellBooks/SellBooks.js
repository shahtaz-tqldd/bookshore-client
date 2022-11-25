import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import books from '../../assets/images/books.png'
import { AuthContext } from '../../context/AuthProvider'
import ErrorMessage from '../../tools/ErrorMessage'

const SellBooks = () => {
    const { categories, user } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm()
    const handleGetProduct = data => {
        const name = data.name
        console.log(name, user.displayName)
    }
    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className="hero mt-4">
                <div className="hero-content flex-col lg:flex-row w-full">
                    <div className="lg:w-1/2 flex flex-col lg:text-left">
                        <div className='flex flex-row items-center'>
                            <img src={books} alt="books" className='w-2/3 -ml-24' />
                            <div className='-ml-20 mt-32'>
                                <h1 className='text-4xl font-bold'>Sell Books</h1>
                                <p className='mt-2 text-lg'>to other that you don't need anymore</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 card flex-shrink-0 w-md shadow-lg bg-base-100">
                        <div className="card-body">
                            <h1 className="text-xl font-bold">Your Book Details</h1>
                            <form onSubmit={handleSubmit(handleGetProduct)}>
                                {/* product name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Book's Name</span>
                                    </label>
                                    <input {...register("name", { required: "You must Provide a Book Name" })} type="text" placeholder="Book's Name" className="input input-bordered" />
                                    {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                                </div>

                                <div className='flex flex-row gap-4'>
                                    {/* resale price */}
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Asking Price</span>
                                        </label>
                                        <input {...register("resalePrice", { required: "You must ask a price" })} type="text" placeholder="Your Resale Price" className="input input-bordered" />
                                        {errors.resalePrice && <ErrorMessage>{errors.resalePrice.message}</ErrorMessage>}
                                    </div>
                                    {/* original price */}
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Book's original price</span>
                                        </label>
                                        <input {...register("originalPrice", { required: "You must Provide original price" })} type="text" placeholder="Book's Original Price" className="input input-bordered" />
                                        {errors.originalPrice && <ErrorMessage>{errors.originalPrice.message}</ErrorMessage>}
                                    </div>
                                </div>

                                <div className='flex flex-row gap-4'>
                                    {/* used */}
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Used Period</span>
                                        </label>
                                        <input {...register("usedPeriod", { required: "Provide a used period" })} type="text" placeholder="Ex: 4months" className="input input-bordered" />
                                        {errors.usedPeriod && <ErrorMessage>{errors.usedPeriod.message}</ErrorMessage>}
                                    </div>
                                    {/* categories */}
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Category of this Book</span>
                                        </label>
                                        <select {...register("category", { required: "You must select a category" })} type="text" placeholder="Books Category" className="input input-bordered">
                                            <option disabled selected>Select a Category</option>
                                            {
                                                categories.map(category => <option key={category.id}>{category.categoryName}</option>)
                                            }
                                        </select>
                                        {errors.category && <ErrorMessage>{errors.category.message}</ErrorMessage>}
                                    </div>
                                </div>

                                {/* image */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Upload a Book's Photo</span>
                                    </label>
                                    <input {...register("image", { required: "Your Photo is required" })} name="image" type="file" />
                                    {errors.image && <ErrorMessage>{errors.image.message}</ErrorMessage>}
                                </div>

                                {/* seller name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Name</span>
                                    </label>
                                    <input {...register("sellerName", { required: "You must Provide your name" })} type="text" placeholder='your name' defaultValue={user.displayName} className="input input-bordered" />
                                    {errors.sellerName && <ErrorMessage>{errors.sellerName.message}</ErrorMessage>}
                                </div>

                                {/* location */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Location</span>
                                    </label>
                                    <input {...register("location", { required: "You must Provide your Location" })} type="text" placeholder="Location" className="input input-bordered" />
                                    {errors.location && <ErrorMessage>{errors.location.message}</ErrorMessage>}
                                </div>

                                {/* submit button */}
                                <div className="form-control mt-3">
                                    <button className="btn btn-primary text-white">Submit</button>
                                </div>
                            </form>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellBooks