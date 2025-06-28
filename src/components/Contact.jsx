import React from 'react'
import bg5 from '../assets/imgs/bg5.jpg'

function Contact() {
  return (
    <div><section id="contact" className="h-screen w-full bg-cover bg-center flex flex-col items-center justify-center px-4 relative"
          style={{ backgroundImage: `url(${bg5})` }}>
   
      <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>

      <div className="glass-card max-w-xl mx-auto p-8 rounded-3xl text-center">
        <p className="mb-4">Feel free to reach out to me:</p>
        <p className="text-blue-300">📧 manojchinthala12@gmail.com</p>
        <p className="text-blue-300">📱 +91 8179178043</p>

        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://github.com/manoj8043"
            target="_blank"
            className="hover:text-blue-300"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/manoj-kumar-chinthala-5524161ba/"
            target="_blank"
            className="hover:text-blue-300"
          >
            LinkedIn
          </a>
          
        </div>

        {/* Resume Buttons */}
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="/Manoj_Kumar_Chinthala_Resume_MERN_DEVELOPER.pdf"
            target="_blank"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
          >
            View Resume
          </a>
          <a
            href="/Manoj_Kumar_Chinthala_Resume_MERN_DEVELOPER.pdf"
            download
            className="bg-transparent border border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white px-4 py-2 rounded-lg shadow"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
</div>
  )
}

export default Contact