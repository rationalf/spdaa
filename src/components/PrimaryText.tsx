export function PrimaryTextWhite({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-white text-[58px] font-semibold font-Montserrat mb-8">
      {children}
    </div>
  );
}

export function PrimaryTextGreyTitleBold({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[#444444] text-[40px] underline decoration-2 underline-offset-4 font-Montserrat text-center">
      {children}
    </div>
  );
}

export function PrimaryTextGreyTitleLight({ children }: { children: React.ReactNode }) {
  return (
      <div className="text-[#828181] text-[40px] underline decoration-2 underline-offset-4 font-Montserrat text-center">
        {children}
      </div>
  );
}

export function PrimaryTextGrey({ children }: { children: React.ReactNode }) {
  return (
      <div className="text-[#444444] text-[30px] font-semibold font-Montserrat mb-10 underline">
        {children}
      </div>
  );
}
