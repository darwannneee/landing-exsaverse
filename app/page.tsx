"use client"
import { useState, useEffect } from "react";
import Bg from "@/public/assets/img/bg.gif";
import BgMobile from "@/public/assets/img/bg_mobile.gif";
import BgLoading from "@/public/assets/img/bg_loading.gif";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isContentReady, setIsContentReady] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Breakpoint for mobile
    };

    handleResize(); // Iniati
    window.addEventListener("resize", handleResize);

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); // 1200 ms = 1.2 detik

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(loadingTimer);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const contentTimer = setTimeout(() => {
        setIsContentReady(true);
      }, 1000); // 1000 ms delay to ensure smooth transition

      return () => clearTimeout(contentTimer);
    }
  }, [isLoading]);

  if (isLoading || !isContentReady) {
    return (
      <div style={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
        <img 
          src={BgLoading.src} 
          alt="Loading Background" 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)',
            zIndex: '-1',
          }}
        />
        {/* Logo center */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Placeholder for your logo */}
        </div>
        {/* Loading Text with Blur Effect */}
        <div
          style={{
            position: 'absolute',
            top: '60%',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '24px',
            color: '#ffffff',
            filter: 'blur(2px)',
            textShadow: '0 0 10px rgba(255, 255, 255, 0.7)',
            transition: 'all 1s ease-out',
            opacity: 0.8,
          }}
        >
          Loading...
        </div>
      </div>
    );
  }

  return (
    <main>
      <div style={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
        <img 
          src={isMobile ? BgMobile.src : Bg.src} 
          alt="Background" 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)',
            zIndex: '-1',
          }}
          className="bg-center bg-cover" 
        />
         {/* Social Media */}
         <div className="flex justify-center items-center absolute top-[74%] md:top-[65%] 2xl:top-[63%] left-1/2 transform -translate-x-1/2">
         <a href="https://x.com/exsaverse">
          <svg
              className="w-[50px] h-[50x] md:w-[60px] md:h-[60px] 2xl:w-[80px] 2xl:h-[80px]"
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              fill="#333333"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path
                    className="st0"
                    d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M260.926,217.391 
                      c0.084,0.004,0.164,0.021,0.25,0.025c-0.875-3.752-1.328-7.664-1.328-11.682c0-28.307,22.951-51.258,51.262-51.258 
                      c14.742,0,28.063,6.225,37.414,16.188c9.6-1.89,18.684-5.174,27.129-9.523c1.781-0.864,3.566-1.723,5.32-2.674 
                      c-3.039,9.334-8.744,17.412-16.141,23.532c-2.004,1.576-4.062,3.098-6.326,4.344c0.154-0.018,0.304-0.052,0.457-0.071 
                      c-0.15,0.093-0.275,0.22-0.428,0.312c8.402-1.005,16.459-3.051,24.111-5.942c1.715-0.592,3.428-1.191,5.127-1.852 
                      c-6.842,10.159-15.453,19.095-25.375,26.259c0.098,2.197,0.148,4.406,0.148,6.631c0,67.736-51.558,145.842-145.844,145.842 
                      c-28.947,0-55.891-8.484-78.576-23.028c4.01,0.473,8.092,0.715,12.229,0.715c19.136,0,37.014-5.269,52.383-14.34 
                      c3.871-2.23,7.658-4.639,11.273-7.365c-0.098-0.002-0.187-0.026-0.285-0.028c0.094-0.073,0.196-0.136,0.289-0.209 
                      c-19.422-0.358-36.184-11.539-44.574-27.747c-1.25-2.489-2.32-5.096-3.164-7.831c3.086,0.58,6.246,0.898,9.5,0.898 
                      c3.391,0,6.666-0.436,9.871-1.063c1.197-0.168,2.406-0.308,3.586-0.502c-0.156-0.032-0.293-0.1-0.449-0.133 
                      c0.162-0.042,0.336-0.056,0.496-0.1c-23.449-4.709-41.119-25.428-41.119-50.262c0-0.196,0.002-0.387,0.004-0.58l0.024-0.055 
                      c5.521,3.064,11.693,5.092,18.23,5.94c1.609,0.269,3.221,0.516,4.832,0.657c-0.11-0.074-0.205-0.164-0.314-0.238 
                      c0.152,0.006,0.297,0.036,0.447,0.041c-13.754-9.191-22.803-24.883-22.803-42.666c0-8.142,1.988-15.787,5.367-22.623 
                      c0.539-1.028,1.018-2.078,1.637-3.074c22.711,27.822,55.516,46.971,92.801,52.15c4.16,0.605,8.332,1.144,12.553,1.388 
                      C260.934,217.443,260.932,217.416,260.926,217.391z"
                  />
                </g>
              </g>
            </svg>
          </a>
          <a href="https://discord.gg/exsaverse">
            <svg
              className="w-[50px] h-[50x] md:w-[60px] md:h-[60px] 2xl:w-[80px] 2xl:h-[80px] ml-7"
              fill="#333333"
              viewBox="-1.5 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M13.93 11.4c-.054.633-.582 1.127-1.224 1.127-.678 0-1.229-.55-1.229-1.229s.55-1.229 1.228-1.229c.683.029 1.225.59 1.225 1.277 0 .019 0 .037-.001.056v-.003zm-5.604-1.33c-.688.061-1.223.634-1.223 1.332s.535 1.271 1.218 1.332h.005c.683-.029 1.225-.59 1.225-1.277 0-.019 0-.037-.001-.056v.003c.001-.02.002-.043.002-.067 0-.685-.541-1.243-1.219-1.269h-.002zm12.674-7.598v21.528c-3.023-2.672-2.057-1.787-5.568-5.052l.636 2.22H3.059c-1.359-.004-2.46-1.106-2.46-2.466v-16.224c0-1.36 1.101-2.462 2.459-2.466h16.081c1.359.004 2.46 1.106 2.46 2.466v.006zm-3.42 11.376c-.042-2.559-.676-4.96-1.77-7.086l.042.09c-.924-.731-2.088-1.195-3.358-1.259l-.014-.001-.168.192c1.15.312 2.15.837 3.002 1.535l-.014-.011c-1.399-.769-3.066-1.222-4.839-1.222-1.493 0-2.911.321-4.189.898l.064-.026c-.444.204-.708.35-.708.35.884-.722 1.942-1.266 3.1-1.56l.056-.012-.12-.144c-1.284.065-2.448.529-3.384 1.269l.012-.009c-1.052 2.036-1.686 4.437-1.728 6.982v.014c.799 1.111 2.088 1.826 3.543 1.826.041 0 .082-.001.123-.002h-.006s.444-.54.804-.996c-.866-.223-1.592-.727-2.093-1.406l-.007-.01c.176.124.468.284.49.3 1.209.672 2.652 1.067 4.188 1.067 1.191 0 2.326-.238 3.36-.668l-.058.021c.528-.202.982-.44 1.404-.723l-.025.016c-.526.703-1.277 1.212-2.144 1.423l-.026.005c.36.456.792.972.792.972.033.001.072.001.111.001 1.461 0 2.755-.714 3.552-1.813l.009-.013z"></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}
