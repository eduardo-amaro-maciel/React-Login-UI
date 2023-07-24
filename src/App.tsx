import logoGoogle from "./assets/img/google.png";

export default function App() {
   return (
      <div className="bg-[#a0a0a0] w-full min-h-screen p-10 flex items-center justify-center overflow-auto max-sm:p-2">
         <div className="w-full max-w-[1200px] min-h-[800px] bg-white grid grid-rows-1 grid-cols-2 overflow-hidden rounded-lg max-lg:grid-cols-1">
            {/* Seção do htmlFormulário */}
            <section className="p-10 flex flex-col items-center justify-center max-sm:p-5">
               <form className="flex flex-col items-center justify-center w-full">
                  <h1 className="text-5xl mb-20 max-sm:mb-14">SIGN IN</h1>
                  <input type="text" placeholder="Email" tabIndex={1} className="input-primary" />
                  <input
                     type="password"
                     placeholder="Password"
                     tabIndex={2}
                     className="input-primary"
                  />
                  <div className="flex justify-between w-full mb-16 max-sm:flex-col max-sm:items-center max-sm:gap-4">
                     <div className="gap-1 flex">
                        <input type="checkbox" tabIndex={3} className="on-focus" />
                        <label htmlFor="">Keep me logged in</label>
                     </div>
                     <a href="#" tabIndex={4} className="on-focus">
                        Forget email or password?
                     </a>
                  </div>
                  <div className="flex gap-5 w-full">
                     <button className="btn-secondery" tabIndex={5}>
                        REGISTER
                     </button>
                     <button className="btn-primary" type="submit" tabIndex={6}>
                        {" "}
                        SIGN IN
                     </button>
                  </div>
                  <div className="py-10 w-full flex items-center">
                     <div className="w-full h-[2px] bg-black"></div>
                     <p className="px-2">OR</p>
                     <div className="w-full h-[2px] bg-black"></div>
                  </div>
                  <button
                     tabIndex={8}
                     className="w-full rounded-md btn-secondery flex items-center justify-center gap-4"
                  >
                     <img src={logoGoogle} alt="" className="w-7" />
                     <span>SIGN IN WITH GOOGLE</span>
                  </button>
               </form>
            </section>
            {/* Seção da imagem de fundo  */}
            <section className="h-full w-full bg-login bg-cover bg-center bg-none-repeat max-lg:hidden"></section>
         </div>
      </div>
   );
}
