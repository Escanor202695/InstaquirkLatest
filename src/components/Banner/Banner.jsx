    import React from "react";

    function Banner({ src_banner, src_mobile, text_banner }) {
    return (
        <div className="w-full md:p-[40px] relative">
        <img
            src={src_banner}
            alt="vector"
            className="hidden md:block w-full  h-auto rounded-lg "
        />
        <img
            src={src_mobile}
            alt="vector"
            className=" md:hidden w-full  h-auto"
        />

        <p
            className=" leading-[30px] lg:leading-relaxed font-bold w-[350px] text-[22px] sm:text-[28px] md:text-[22px] lg:text-[30px]
                lg:w-[450px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                text-white text-center"
        >
            {text_banner}
        </p>
        </div>
    );
    }

    export default Banner;
