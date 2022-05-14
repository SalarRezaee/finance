import React from "react";

const PriceBox = ({data}) => {
  return (
    <div>
      <div className="w-full bg-white rounded-md shadow-xl p-5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold">
            ارزش پرتفوی پانصد هزار تومانی
          </span>
          <span className="text-lg font-bold">
            {data?.last_value?.toLocaleString("fa")}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between text-sm mt-3">
            <span>بازدهی ماهانه</span>
            <span
              className={`${data?.last30Return < 0 && "text-red-600"} mx-4`}
              dir="ltr"
            >
              {data?.last30Return?.toFixed(2)}%
            </span>
          </div>
          <div className="flex items-center justify-between text-sm mt-3">
            <span>بازدهی هفتگی</span>
            <span
              className={`${data?.last7Return < 0 && "text-red-600"} mx-4`}
              dir="ltr"
            >
              {data?.last7Return?.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceBox;
