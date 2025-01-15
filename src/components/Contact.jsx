import cartoon from "/public/Code&Chill.png"

const Contact = () => {
  return (
    <div id="contact" className='flex min-h-[74vh] min-w-full items-center justify-center'  >
      <div className='flex flex-col items-center justify-center gap-3 space-y-6 p-14' >
              <h1 className='text-center text-5xl md:text-7xl' >
                
            <span className='bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent' > Get in Touch</span>
        </h1>
        <p className='text-center text-lg font-semibold text-gray-500 ' >
        Want to chat? Click the button to send me an email, and I'll get back to you as soon as possible.</p>
        <a href="mailto:example@gmail.com" className='text-nowrap rounded-lg border-blue-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-blue-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-indigo-600' >Contact Me</a>
      </div>
      <img src={cartoon} alt="cartoon" className=' w-[30px] cursor-pointer rounded-full shadow-xl shadow-indigo-900
                        transition-all duration-300 hover:-translate-y-5  hover:scale-105 hover:shadow-2xl hover:shadow-blue-600 md:w-[150px] ' />
        

    </div>
  )
}

export default Contact