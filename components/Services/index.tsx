import React from "react";

function Services() {
  const services = (
    <>
      <div className="bg-yellow-500 w-[100px] h-[25px] rounded p-1 flex justify-center items-center shrink-0">
        <p className="text-center text-blue-950 font-semibold font-montserrat uppercase animate-[heartbeat_1.5s_infinite] text-sm">
          uskoro
        </p>
      </div>

      <div className="bg-white w-[100px] h-[25px] rounded p-1 shrink-0">
        <img
          className="mx-auto h-[25px] w-[100px] object-contain mt-[-4px]"
          src="/securityPay.jpg"
          alt="Security Pay"
        />
      </div>

      <div className=" w-[100px] h-[25px] rounded p-1 shrink-0 opacity-90">
        <img
          className="mx-auto h-[25px] w-[100px] object-contain mt-[-5px]"
          src="/wester-logo.png"
          alt="Western Union"
        />
      </div>

      <div className="bg-white rounded p-1 py-3 w-[100px] h-[25px] shrink-0">
        <img
          className="mx-auto h-[25px] w-[100px] object-contain mt-[-10px]"
          src="/moneyG.png"
          alt="MoneyGram"
        />
      </div>

      <div className="bg-white rounded p-1 w-[100px] h-[25px] shrink-0">
        <img
          className="mx-auto h-[25px] w-[100px] object-contain mt-[-5px]"
          src="/riaMoneyTr.png"
          alt="RIA"
        />
      </div>
    </>
  );

  return (
    <div className="bg-gray-50 dark:bg-[#1c2438] w-full overflow-hidden py-4">
      <div className="flex w-max animate-services-marquee">
        {/* PRVI SET */}
        <div className="flex items-center gap-8 px-4">{services}</div>

        {/* DRUGI SET */}
        <div className="flex items-center gap-8 px-4">{services}</div>

        {/* TREĆI SET */}
        <div className="flex items-center gap-8 px-4">{services}</div>

        {/* ČETVRTI SET */}
        <div className="flex items-center gap-8 px-4">{services}</div>
      </div>
    </div>
  );
}

export default Services;
