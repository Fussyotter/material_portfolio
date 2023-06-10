'use client';

export default function HeaderSection() {
	return (
		<div className='w-full sm:row-start-1 sm:col-span-1 bg-cover bgimg-1 shadow-2xl flex flex-col sm:flex-row items-center justify-center sm:justify-start space-x-0 sm:space-x-5 space-y-2 p-6 '>
			<img
				className='rounded-full   p-2 border-s-4 border-b-2 border-indigo-400/75 hover:border-blue-500'
				src='corgitwo.png'
				alt='Logo'
				width='250px'
			/>
			<div>
				<h1 className='text-3xl text-orange-300 font-bold underline'>
					Isaac
				</h1>

			</div>
		</div>
	);
}
