// components/Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-footer mt-auto w-full bg-blue-gray-custom text-white">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="flex flex-row justify-center items-center">
              {/* Facebook */}
              <a href="https://www.facebook.com/100x100hojaldre" className="text-black hover:text-[#C2A471]">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
  
              {/* Instagram */}
              <a href="https://www.instagram.com/100x100hojaldre/" className="text-black hover:text-[#C2A471] ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
              {/* TripAdvisor */}
              <a href="https://en.tripadvisor.com.hk/Restaurant_Review-g187482-d26589205-Reviews-100_Hojaldre-Santa_Cruz_de_Tenerife_Tenerife_Canary_Islands.html" 
                 className="text-black hover:text-[#C2A471] ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M23.49 14.862c0 0 0 0 0 0-1.469 0-2.659 1.191-2.659 2.659s1.191 2.659 2.659 2.659c1.469 0 2.659-1.191 2.659-2.659 0-0.49-0.132-0.948-0.363-1.342l0.007 0.013c-0.468-0.8-1.324-1.33-2.303-1.33 0 0 0 0 0 0v0zM8.505 14.862c0 0 0 0 0 0-1.469 0-2.659 1.191-2.659 2.659s1.191 2.659 2.659 2.659c1.469 0 2.659-1.191 2.659-2.659 0-0.49-0.132-0.948-0.363-1.342l0.007 0.013c-0.468-0.8-1.324-1.33-2.303-1.33v0zM23.49 12.45c0.001 0 0.001 0 0.002 0 2.8 0 5.070 2.27 5.070 5.070s-2.27 5.070-5.070 5.070c-2.8 0-5.070-2.27-5.070-5.070 0-0.933 0.252-1.807 0.691-2.558l-0.013 0.024c0.892-1.527 2.523-2.536 4.39-2.537h0zM8.505 12.447c0 0 0 0 0 0 2.801 0 5.072 2.271 5.072 5.072s-2.271 5.072-5.072 5.072c-2.801 0-5.072-2.271-5.072-5.072 0-0.934 0.252-1.809 0.692-2.56l-0.013 0.024c0.893-1.527 2.525-2.536 4.393-2.536v0zM16 8.821c2.032 0.001 3.966 0.416 5.724 1.165l-0.096-0.036c-3.173 1.090-5.447 3.97-5.628 7.405l-0.001 0.020c-0.18-3.455-2.455-6.336-5.57-7.408l-0.058-0.017c1.662-0.712 3.597-1.126 5.628-1.127h0zM16.008 6.372c-0.002 0-0.005 0-0.007 0-3.565 0-6.873 1.099-9.604 2.978l0.057-0.037h-5.45l2.453 2.668c-1.508 1.376-2.45 3.349-2.45 5.542 0 4.138 3.355 7.493 7.493 7.493 1.971 0 3.764-0.761 5.102-2.005l-0.005 0.004 2.402 2.614 2.402-2.612c1.333 1.239 3.126 2 5.097 2 4.139 0 7.494-3.355 7.494-7.494 0-2.193-0.942-4.167-2.444-5.537l-0.006-0.005 2.453-2.668h-5.436c-2.673-1.841-5.98-2.94-9.545-2.94-0.003 0-0.005 0-0.008 0h0z"/>
                </svg>
                <span className="sr-only">TripAdvisor</span>
              </a>
            </div>

          <hr className="my-6 border-1 border-[#C2A471] sm:mx-auto lg:my-8" />
          
          {/* Copyright and Social Media Links */}
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              {/* Social Media Icons */}
              <a href="https://100x100hojaldre.com/aviso-legal/" className="text-gray-500 hover:text-[#C2A471] ms-5">
                Aviso Legal
              </a>

              <a href="https://100x100hojaldre.com/politica-privacidad/" className="text-gray-500 hover:text-[#C2A471] ms-5">
               Cookies
              </a>

              <a href="https://100x100hojaldre.com/politica-cookies" className="text-gray-500 hover:text-[#C2A471] ms-5">
                Condiciones
              </a>
  
              <a href="https://100x100hojaldre.com/condiciones-compra/" className="text-gray-500 hover:text-[#C2A471] ms-5">
                Privacidad
              </a>
              {/* Other social media icons... */}
            </div>
            <span className="text-sm text-gray-400 sm:text-center">
              © 2025 <a href="#" className="hover:underline">100% Hojaldre</a>
            </span>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;