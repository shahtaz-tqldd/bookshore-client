import { format } from 'date-fns'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import books from '../../assets/images/books.webp'
import { AuthContext } from '../../context/AuthProvider'
import ErrorMessage from '../../tools/ErrorMessage'

const SellBooks = () => {
	const { categories, user } = useContext(AuthContext)
	const navigate = useNavigate()
	const postDate = format(new Date(), 'PP')
	const postTime = format(new Date(), 'p')
	const { register, formState: { errors }, handleSubmit } = useForm()
	const imageHostKey = process.env.REACT_APP_imgbb_key;
	const handleGetProduct = data => {
		const image = data.imgProduct[0]
		const formData = new FormData()
		formData.append('image', image)
		const url = `https://api.imgbb.com/1/upload?&key=${imageHostKey}`
		fetch(url, {
			method: 'POST',
			body: formData
		})
			.then(res => res.json())
			.then(imgData => {
				console.log(imgData)
				if (imgData.success) {
					const imgProduct = imgData.data.url
					const productInfo = {
						productName: data.name,
						description: data.description,
						resalePrice: data.resalePrice,
						originalPrice: data.originalPrice,
						usedPeriod: data.usedPeriod,
						category: data.category,
						imgProduct,
						postDate,
						postTime,
						sellerName: user.displayName,
						sellerEmail: user.email,
						phone: data.phone,
						location: data.location,
						status: 'unsold'
					}
					fetch("https://bookshore-server.vercel.app/products/", {
						method: 'POST',
						headers: {
							'Content-type': 'application/json'
						},
						body: JSON.stringify(productInfo)
					})
						.then(res => res.json())
						.then(data => {
							console.log(data)
							toast.success("Your Product added successfully")
							navigate('/categories')
						})
				}
			})

	}
	return (
		<div className='max-w-[1200px] mt-6 mb-12 mx-auto shadow-xl'>
			<div className="flex flex-col lg:flex-row w-full bg-base-100 rounded-xl">
				<div className="lg:w-1/3">
					<img src={books} alt="books" className='h-[350px] mt-12 mx-auto' />
					<h2 className='text-accent uppercase font-bold text-4xl text-center'>Sell your books</h2>
				</div>
				<div className="lg:w-2/3">
					<div className="card-body">
						<h1 className="text-xl font-bold text-primary">Your Book Details</h1>
						<form onSubmit={handleSubmit(handleGetProduct)}>
							{/* product name */}
							<div className="form-control">
								<label className="label">
									<span className="label-text">Book's Name</span>
								</label>
								<input {...register("name", { required: "You must Provide a Book Name" })} type="text" placeholder="Book's Name" className="input input-bordered" />
								{errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
							</div>

							{/* description name */}
							<div className="form-control">
								<label className="label">
									<span className="label-text">Book's Description</span>
								</label>
								<textarea {...register("description", { required: "Say Something about this Book" })} type="text" placeholder="Say something about this book" className="input input-bordered py-2 h-32" />
								{errors.description && <ErrorMessage>{errors.description.message}</ErrorMessage>}
							</div>

							<div className='flex flex-row gap-4 mt-4'>
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
							<div className="form-control mt-4">
								<label className="label">
									<span className="label-text">Upload a Book's Photo</span>
								</label>
								<input {...register("imgProduct", { required: "Your Photo is required" })} type="file" className='w-1/2' />
								{errors.imgProduct && <ErrorMessage>{errors.imgProduct.message}</ErrorMessage>}
							</div>

							<h1 className="text-xl font-bold text-primary mt-12 mb-2">Seller Information</h1>

							{/* seller name */}
							<div className="form-control">
								<label className="label">
									<span className="label-text">Seller Name</span>
								</label>
								<input {...register("sellerName", { required: "You must Provide your name" })} type="text" placeholder='your name' defaultValue={user.displayName} className="input input-bordered" />
								{errors.sellerName && <ErrorMessage>{errors.sellerName.message}</ErrorMessage>}
							</div>
							<div className='flex flex-row gap-4'>
								{/* seller phone number */}
								<div className="form-control w-1/2">
									<label className="label">
										<span className="label-text">Phone Number</span>
									</label>
									<input {...register("phone")} type="text" placeholder='Phone Number' className="input input-bordered" />
								</div>

								{/* location */}
								<div className="form-control w-1/2">
									<label className="label">
										<span className="label-text">Your Location</span>
									</label>
									<input {...register("location", { required: "You must Provide your Location" })} type="text" placeholder="Location" className="input input-bordered" />
									{errors.location && <ErrorMessage>{errors.location.message}</ErrorMessage>}
								</div>
							</div>
							{/* submit button */}
							<div className="form-control mt-20">
								<button className="btn btn-primary text-white w-40 mx-auto normal-case">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SellBooks