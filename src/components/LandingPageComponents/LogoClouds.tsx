export default function Example() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8">
          Trusted by the worlds most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4 select-none">
          <div className="flex flex-col items-center">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://res.cloudinary.com/dszjgdktf/image/upload/v1710710415/BullSwapNftApi/MetaMask_Fox.svg_nufabu.png"
              alt="Metamask"
              width={150}
              height={50}
            />
            <h1 className="text-lg font-semibold leading-8 mt-2">Metamask</h1>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://res.cloudinary.com/dszjgdktf/image/upload/v1710710414/BullSwapNftApi/coinbase-coin-logo-C86F46D7B8-seeklogo.com_kqop8g.png"
              alt="Coinbase"
              width={150}
              height={50}
            />
            <h1 className="text-lg font-semibold leading-8 mt-2">Coinbase</h1>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://res.cloudinary.com/dszjgdktf/image/upload/v1710710414/BullSwapNftApi/Binance_Logo.svg_ekxqh1.png"
              alt="Binance"
              width={150}
              height={50}
            />
            <h1 className="text-lg font-semibold leading-8 mt-2">Binance</h1>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://res.cloudinary.com/dszjgdktf/image/upload/v1710710414/BullSwapNftApi/Logomark-White_pi3gd8.png"
              alt="OpenSea"
              width={150}
              height={50}
            />
            <h1 className="text-lg font-semibold leading-8 mt-2">OpenSea</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
