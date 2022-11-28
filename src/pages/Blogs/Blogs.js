import React from 'react';

const Blogs = () => {
    return (
        <div className='w-100'>
            <div className="container mx-auto">
                <div className="hero bg-white">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-primary">Welcome To Blogs</h1>
                        <p className="py-6">Read some questions and answers</p>
                        </div>
                    </div>
                </div>
                <div className="mockup-window border bg-base-300 mb-10">
                    <div className="flex flex-col justify-start items-start px-4 py-16 bg-base-200">
                        <h1 className='text-2xl font-bold text-secondary'>Question: <span className='text-black'>What are the different ways to manage a state in a react application ?</span></h1>
                        <p><span className='text-xl font-bold text-primary'>Answer:</span> The Four Kinds of React State to Manage When we talk about state in our applications, it's important to be clear about what types of state actually matter. There are four main types of state you need to properly manage in your React apps: Local state Global state Server state URL state.</p>
                    </div>
                </div>
                <div className="mockup-window border bg-base-300 mb-10">
                    <div className="flex flex-col justify-start items-start px-4 py-16 bg-base-200">
                        <h1 className='text-2xl font-bold text-secondary'>Question: <span className='text-black'>How does prototypical inheritance work</span></h1>
                        <p><span className='text-xl font-bold text-primary'>Answer:</span> Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the <strong>[[Prototype]]</strong> of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
                    </div>
                </div>
                <div className="mockup-window border bg-base-300 mb-10">
                    <div className="flex flex-col justify-start items-start px-4 py-16 bg-base-200">
                        <h1 className='text-2xl font-bold text-secondary'>Question: <span className='text-black'>What is a unit test why should we write unit test?</span></h1>
                        <p><span className='text-xl font-bold text-primary'>Answer:</span> The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                    </div>
                </div>
                <div className="mockup-window border bg-base-300 mb-10">
                    <div className="flex flex-col justify-start items-start px-4 py-16 bg-base-200">
                        <h1 className='text-2xl font-bold text-secondary'>Question: <span className='text-black'>React vs Angular vs Vue</span></h1>
                        <p><span className='text-xl font-bold text-primary'>Answer:</span> If the choice you,re making is based on Angular vs React alone, then you,ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.
React often requires extra modules and components, which keeps the core library small, but means there,s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn,t require extras like React often does, though it does have a steeper learning curve for its core compared to React. React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript.
Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;