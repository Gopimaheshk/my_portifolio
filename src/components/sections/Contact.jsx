import { useState } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [form, setForm] = useState({
      name: '',
      email: '',
      message: ''
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.vite_serviceID, import.meta.env.vite_templateID, e.target, import.meta.env.vite_userID)
      .then((result) => {
          console.log(result.text);
            alert('Message sent successfully!');
            setForm({
              name: '',
              email: '',
              message: ''
            });
      }).catch((error) => {
          console.log(error.text);
      });
  };

  return (
	<section 
    id="contact"
    className="min-h-screen flex items-center justify-center py-20">
     <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-6 mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Contact Me
          </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
                <div className="relative">

                    <input 
                      type="text"
                      name="name" 
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className=" w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                      placeholder="Name.."
                    />
                </div>

		    <div className="relative">
                <input 
                 type="email" 
                 name="email" 
                 required className=" w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                 placeholder="example@example.com"
                />
            </div>
			   
             <div className="relative">
                 <textarea 
                 id="message" 
                 rows="5"
                 name="message" 
                 required
                 value={form.message}
                 onChange={e => setForm({ ...form, message: e.target.value })}
                 className=" w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                 placeholder="Your message here..."
                ></textarea>
            </div>    

		    <button type="submit" className="bg-blue-500 text-white rounded-md p-2">Send</button>
		    </div>
	        </form>
        </div>
	
	</section>
  );
};