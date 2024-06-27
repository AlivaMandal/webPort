import React from 'react'

function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://cdn.pixabay.com/photo/2024/03/28/06/21/ai-generated-8660349_1280.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                        React code is made of entities called components.
                         These components are modular and reusable.
                          React applications typically consist of many layers of components
                        </p>
                        <p className="mt-4 text-gray-600">
                        ReactJS, also known as React, is a popular JavaScript library for building user interfaces. 
                        It is also referred to as a front-end JavaScript library. 
                        It was developed by Facebook and is widely used for creating dynamic and interactive web applications. 
                        In this article, we’ll explore the key concepts of React.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default About
