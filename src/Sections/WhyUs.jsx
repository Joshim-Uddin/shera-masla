import React from 'react';

const WhyUs = () => {
    return (
        <div>
            <h2 className='my-8 bg-amber-600 py-3 text-center text-5xl font-semibold text-white'>বিশুদ্ধ মসলা গুঁড়া কেন “সেরা মসলা” থেকে কিনবেন?</h2>
            <div className='flex items-center gap-8 wrapper'>
                <div className='w-1/2 text-2xl font-semibold'>
                    <p className='text-3xl font-bold mb-8 w-11/12'>“সেরা মসলা”-এর বিশুদ্ধ মসলা মানে অসাধারণ স্বাদ, প্রাকৃতিক উপাদান, আস্থা ও স্বাস্থ্যগুণের দারুণ সমন্বয়।</p>

                <div className="speciality flex flex-col gap-4">
                    <p className='text-3xl font-bold'>আমাদের মসলা স্পেশাল কেন? </p>
                <p>✔️ নিজস্ব তত্ত্বাবধানে সম্পূর্ণ ধুলাবালিমুক্তভাবে প্রস্তুতকৃত।</p>
                <p>✔️ শতভাগ ফ্রেশ ও প্রাকৃতিক মসলা উপাদান।</p>
                <p>✔️ সকল প্রকার কৃত্রিম রঙ, ঘ্রাণ বা প্রিজারভেটিভ, কেমিক্যালমুক্ত।</p>
                <p>✔️ স্বাস্থ্যগুণে ভরপুর ও বিশ্বস্তভাবে প্রস্তুতকৃত।</p>
                </div>

                <div className='elements flex flex-col gap-4 mt-10'>
                    <p className='text-3xl font-bold'>
                আমাদের শাহী মসলার বৈশিষ্ট্য: </p>
                <p>👉 সেরা গ্রেডের ২১ টি উপাদান দিয়ে তৈরি</p>
                <p>👉 আকর্ষণীয় স্বাদ, ঘ্রাণ ও রঙ</p>
                <p>👉 সবগুলো উপাদানের সঠিক অনুপাতে মিশ্রণ</p>
                <p>👉 প্রাকৃতিক উপাদানের হওয়ায় রান্নায় পরিমাণমতো লাগে</p>
                </div>

                <p className='mt-10'>
                    প্রত্যেকটি উপাদান আমরা নিজ হাতে ধুয়ে, রোদে শুকিয়ে, সযত্নে প্রস্তুত করি—যেন আপনার খাঁটি স্বাদ ও সুস্বাস্থ্য নিশ্চিত হয়।
                </p>
                </div>
                <div className='w-1/2'>
                    <img src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1751198920/shahi-mashla-custom_w32bcj.png" alt="" />
                </div>
            </div>

        </div>
    );
};

export default WhyUs;