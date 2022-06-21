import React from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_xb0r6qe', e.target, 'jgq7WvbeiHMH6uJya')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      toast.success('Thank you for your message')
  };


const Contact = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 px-32 mt-24'>
            <div>
                <h3 className='uppercase text-3xl font-bold mt-28 mb-8 text-slate-700'>Contact Me</h3>
                <div className='grid grid-cols-1 gap-4 border text-sm py-16 px-4 border-slate-700 bg-slate-800 rounded-xl text-xl text-gray-300'>
                    <div>
                        <i class="fa-solid fa-phone mx-4"></i>
                        <span>+8801638084253</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-envelope mx-4"></i>
                        <span><a href="#">sunjatuna@gmail.com</a></span>
                    </div>
                    <div>
                        <i class="fa-solid fa-location-dot mx-4"></i>
                        <span>Chittagong, Bangladesh</span>
                    </div>
                    <div className='text-center pt-4'>
                        <div class="avatar placeholder">
                            <div class="bg-sky-500 rounded-full w-6">
                                <i class="fa-brands fa-facebook-f text-sm"></i>
                            </div>
                        </div>
                        <div class="avatar placeholder mx-4">
                            <div class="bg-white rounded-full w-6">
                                <i class="fa-brands fa-instagram text-sm text-pink-700"></i>
                            </div>
                        </div>
                        <div class="avatar placeholder">
                            <div class="bg-sky-700 rounded-full w-6">
                                <i class="fa-brands fa-linkedin-in text-sm"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-24 text-center pb-24'>
                <p className='my-6 text-gray-300 text-xl uppercase'>Do You Have Any Query?</p>
                <form  onSubmit={sendEmail}>
                    <input type="email" placeholder='Email' name='email' className='border rounded-lg w-96 pl-4 py-2' /><br />
                    <textarea name="message" id="" placeholder='Type here' rows="5" className='border pl-4 pt-2 rounded-lg w-96 my-6'></textarea><br />
                    <button className='btn w-96 bg-rose-500 rounded-lg border-0 pl-4'>Send Message</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;