import React from 'react'
import bookreading from '../../../assets/images/about.webp'

const About = () => {
	const features = [
		{
			id: 1,
			title: "Open an account",
			details: "To get started your should start with openning an account as a seller",
			icon: "https://cdn.lordicon.com/hbvyhtse.json",
		},
		{
			id: 2,
			title: "Upload book details",
			details: "Go to sell books section and upload all the details of your books",
			icon: "https://cdn.lordicon.com/qvbrkejx.json",
		},
		{
			id: 3,
			title: "Manage your products",
			details: "After enlisting a product you can manage their status from your seller dashboard",
			icon: "https://cdn.lordicon.com/zchxlapl.json",
		},
		{
			id: 4,
			title: "Advertise your items",
			details: "You can directly advertise your items to get more attention from your seller dashboard",
			icon: "https://cdn.lordicon.com/zlllsfoh.json"
		},

	]
	return (
		<section className="hero bg-[#804674] my-40 lg:pt-16 lg:pb-20 md:py-12 py-8 md:px-12">
			<div className="hero-content flex-col lg:flex-row-reverse justify-around text-white">
				<div className="lg:w-[60%] w-full">
					<h1 className="lg:text-5xl text-3xl font-bold mb-16 max-w-[650px]">Bookshore is your <span className='text-warning'>one stop solution</span> for exchanging books</h1>
					<div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-12'>
						{features?.map(({ id, title, icon, details }) => (
							<aside key={id}>
								<div className='flex gap-4 items-start'>
									<lord-icon
										src={icon}
										target="aside"
										trigger="hover"
										colors="primary:#fff"
										style={{ width: "60px", height: "60px" }}>
									</lord-icon>
									<h2 className='text-2xl font-bold text-white w-40'>{title}</h2>
								</div>
								<p className='p-3 text-[#ddd]'>{details}</p>
							</aside>
						))}
					</div>
				</div>
				<div className="lg:w-[40%] md:w-1/2 lg:block hidden">
					<img src={bookreading} alt="a book" className='lg:w-[90%] w-full' />
				</div>
			</div>
		</section>
	)
}

export default About
