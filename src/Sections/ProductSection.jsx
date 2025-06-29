import React from 'react';
import { Link } from 'react-router';
import ImageZoom from "react-image-zooom";

const ProductSection = () => {
    const discount = true;
    return (
        <div>
            <h2 className='my-8 bg-amber-600 py-3 text-center text-5xl font-semibold text-white'>Products</h2>
            <div className="products grid grid-cols-4 gap-5 wrapper">
                <div className="single-porduct mb-5 p-4 bg-[#f5f5f5] rounded-md shadow-md flex flex-col gap-3 items-center justify-center hover:transition-transform hover:-translate-y-3 ">
                    <ImageZoom className='max-h-96 ' src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1751198919/shahi-masla_fetwcq.png" alt="Shahi Masla" fullWidth={true} zoom='250'/>
                    <p className='text-2xl text-center py-1 font-bold'>শাহী মসলা</p>
                    <p className="price text-xl font-semibold">রেগুলার মূল্য <span className='line-through'>১২৬০</span> টাকা</p>
                    {discount?<p className="price text-xl font-semibold">অফার মূল্য <span>১২৬০</span> টাকা</p>:<></>}
                    <button className='cursor-pointer my-3 py-2 px-4 text-center bg-blue-500 text-white rounded-md hover:bg-amber-600 hover:text-black hover:transition hover:border-red-800 text-xl'><Link >Details</Link></button>
                </div>
                <div className="single-porduct mb-5 p-4 bg-[#f5f5f5] rounded-md shadow-md flex flex-col gap-3 items-center justify-center hover:transition-transform hover:-translate-y-3 ">
                    <ImageZoom className='max-h-96 ' src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1751198919/shahi-masla_fetwcq.png" alt="Shahi Masla" fullWidth={true} zoom='200'/>
                    <p className='text-2xl text-center py-1 font-bold'>শাহী মসলা</p>
                    <p className="price text-xl font-semibold line-through">রেগুলার মূল্য <span>১২৬০</span> টাকা</p>
                    {discount?<p className="price text-xl font-semibold">অফার মূল্য <span>১২৬০</span> টাকা</p>:<></>}
                    <button className='cursor-pointer my-3 py-2 px-4 text-center bg-blue-500 text-white rounded-md hover:bg-amber-600 hover:text-black hover:transition hover:border-red-800 text-xl'><Link >Details</Link></button>
                </div>
                <div className="single-porduct mb-5 p-4 bg-[#f5f5f5] rounded-md shadow-md flex flex-col gap-3 items-center justify-center hover:transition-transform hover:-translate-y-3 ">
                    <ImageZoom className='max-h-96 ' src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1751198919/shahi-masla_fetwcq.png" alt="Shahi Masla" fullWidth={true} zoom='200'/>
                    <p className='text-2xl text-center py-1 font-bold'>শাহী মসলা</p>
                    <p className="price text-xl font-semibold line-through">রেগুলার মূল্য <span>১২৬০</span> টাকা</p>
                    {discount?<p className="price text-xl font-semibold">অফার মূল্য <span>১২৬০</span> টাকা</p>:<></>}
                    <button className='cursor-pointer my-3 py-2 px-4 text-center bg-blue-500 text-white rounded-md hover:bg-amber-600 hover:text-black hover:transition hover:border-red-800 text-xl'><Link >Details</Link></button>
                </div>
                <div className="single-porduct mb-5 p-4 bg-[#f5f5f5] rounded-md shadow-md flex flex-col gap-3 items-center justify-center hover:transition-transform hover:-translate-y-3 ">
                    <ImageZoom className='max-h-96 ' src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1751198919/shahi-masla_fetwcq.png" alt="Shahi Masla" fullWidth={true} zoom='200'/>
                    <p className='text-2xl text-center py-1 font-bold'>শাহী মসলা</p>
                    <p className="price text-xl font-semibold line-through">রেগুলার মূল্য <span>১২৬০</span> টাকা</p>
                    {discount?<p className="price text-xl font-semibold">অফার মূল্য <span>১২৬০</span> টাকা</p>:<></>}
                    <button className='cursor-pointer my-3 py-2 px-4 text-center bg-blue-500 text-white rounded-md hover:bg-amber-600 hover:text-black hover:transition hover:border-red-800 text-xl'><Link >Details</Link></button>
                </div>
                <div className="single-porduct mb-5 p-4 bg-[#f5f5f5] rounded-md shadow-md flex flex-col gap-3 items-center justify-center hover:transition-transform hover:-translate-y-3 ">
                    <ImageZoom className='max-h-96 ' src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1751198919/shahi-masla_fetwcq.png" alt="Shahi Masla" fullWidth={true} zoom='200'/>
                    <p className='text-2xl text-center py-1 font-bold'>শাহী মসলা</p>
                    <p className="price text-xl font-semibold line-through">রেগুলার মূল্য <span>১২৬০</span> টাকা</p>
                    {discount?<p className="price text-xl font-semibold">অফার মূল্য <span>১২৬০</span> টাকা</p>:<></>}
                    <button className='cursor-pointer my-3 py-2 px-4 text-center bg-blue-500 text-white rounded-md hover:bg-amber-600 hover:text-black hover:transition hover:border-red-800 text-xl'><Link >Details</Link></button>
                </div>
                <div className="single-porduct mb-5 p-4 bg-[#f5f5f5] rounded-md shadow-md flex flex-col gap-3 items-center justify-center hover:transition-transform hover:-translate-y-3 ">
                    <ImageZoom className='max-h-96 ' src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1751198919/shahi-masla_fetwcq.png" alt="Shahi Masla" fullWidth={true} zoom='200'/>
                    <p className='text-2xl text-center py-1 font-bold'>শাহী মসলা</p>
                    <p className="price text-xl font-semibold line-through">রেগুলার মূল্য <span>১২৬০</span> টাকা</p>
                    {discount?<p className="price text-xl font-semibold">অফার মূল্য <span>১২৬০</span> টাকা</p>:<></>}
                    <button className='cursor-pointer my-3 py-2 px-4 text-center bg-blue-500 text-white rounded-md hover:bg-amber-600 hover:text-black hover:transition hover:border-red-800 text-xl'><Link >Details</Link></button>
                </div>
                <div className="single-porduct mb-5 p-4 bg-[#f5f5f5] rounded-md shadow-md flex flex-col gap-3 items-center justify-center hover:transition-transform hover:-translate-y-3 ">
                    <ImageZoom className='max-h-96 ' src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1751198919/shahi-masla_fetwcq.png" alt="Shahi Masla" fullWidth={true} zoom='200'/>
                    <p className='text-2xl text-center py-1 font-bold'>শাহী মসলা</p>
                    <p className="price text-xl font-semibold line-through">রেগুলার মূল্য <span>১২৬০</span> টাকা</p>
                    {discount?<p className="price text-xl font-semibold">অফার মূল্য <span>১২৬০</span> টাকা</p>:<></>}
                    <button className='cursor-pointer my-3 py-2 px-4 text-center bg-blue-500 text-white rounded-md hover:bg-amber-600 hover:text-black hover:transition hover:border-red-800 text-xl'><Link >Details</Link></button>
                </div>
                <div className="single-porduct mb-5 p-4 bg-[#f5f5f5] rounded-md shadow-md flex flex-col gap-3 items-center justify-center hover:transition-transform hover:-translate-y-3 ">
                    <ImageZoom className='max-h-96 ' src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1751198919/shahi-masla_fetwcq.png" alt="Shahi Masla" fullWidth={true} zoom='200'/>
                    <p className='text-2xl text-center py-1 font-bold'>শাহী মসলা</p>
                    <p className="price text-xl font-semibold line-through">রেগুলার মূল্য <span>১২৬০</span> টাকা</p>
                    {discount?<p className="price text-xl font-semibold">অফার মূল্য <span>১২৬০</span> টাকা</p>:<></>}
                    <button className='cursor-pointer my-3 py-2 px-4 text-center bg-blue-500 text-white rounded-md hover:bg-amber-600 hover:text-black hover:transition hover:border-red-800 text-xl'><Link >Details</Link></button>
                </div>
                <div className="single-porduct mb-5 p-4 bg-[#f5f5f5] rounded-md shadow-md flex flex-col gap-3 items-center justify-center hover:transition-transform hover:-translate-y-3 ">
                    <ImageZoom className='max-h-96 ' src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1751198919/shahi-masla_fetwcq.png" alt="Shahi Masla" fullWidth={true} zoom='200'/>
                    <p className='text-2xl text-center py-1 font-bold'>শাহী মসলা</p>
                    <p className="price text-xl font-semibold line-through">রেগুলার মূল্য <span>১২৬০</span> টাকা</p>
                    {discount?<p className="price text-xl font-semibold">অফার মূল্য <span>১২৬০</span> টাকা</p>:<></>}
                    <button className='cursor-pointer my-3 py-2 px-4 text-center bg-blue-500 text-white rounded-md hover:bg-amber-600 hover:text-black hover:transition hover:border-red-800 text-xl'><Link >Details</Link></button>
                </div>
                <div className="single-porduct mb-5 p-4 bg-[#f5f5f5] rounded-md shadow-md flex flex-col gap-3 items-center justify-center hover:transition-transform hover:-translate-y-3 ">
                    <ImageZoom className='max-h-96 ' src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1751198919/shahi-masla_fetwcq.png" alt="Shahi Masla" fullWidth={true} zoom='200'/>
                    <p className='text-2xl text-center py-1 font-bold'>শাহী মসলা</p>
                    <p className="price text-xl font-semibold line-through">রেগুলার মূল্য <span>১২৬০</span> টাকা</p>
                    {discount?<p className="price text-xl font-semibold">অফার মূল্য <span>১২৬০</span> টাকা</p>:<></>}
                    <button className='cursor-pointer my-3 py-2 px-4 text-center bg-blue-500 text-white rounded-md hover:bg-amber-600 hover:text-black hover:transition hover:border-red-800 text-xl'><Link >Details</Link></button>
                </div>
                <div className="single-porduct mb-5 p-4 bg-[#f5f5f5] rounded-md shadow-md flex flex-col gap-3 items-center justify-center hover:transition-transform hover:-translate-y-3 ">
                    <ImageZoom className='max-h-96 ' src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1751198919/shahi-masla_fetwcq.png" alt="Shahi Masla" fullWidth={true} zoom='200'/>
                    <p className='text-2xl text-center py-1 font-bold'>শাহী মসলা</p>
                    <p className="price text-xl font-semibold line-through">রেগুলার মূল্য <span>১২৬০</span> টাকা</p>
                    {discount?<p className="price text-xl font-semibold">অফার মূল্য <span>১২৬০</span> টাকা</p>:<></>}
                    <button className='cursor-pointer my-3 py-2 px-4 text-center bg-blue-500 text-white rounded-md hover:bg-amber-600 hover:text-black hover:transition hover:border-red-800 text-xl'><Link >Details</Link></button>
                </div>
                
            </div>
        </div>
    );
};

export default ProductSection;