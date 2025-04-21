export function ContentWindow({
  w,
  children,
}: {
  w: number;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`w-[${w}px] bg-[#A3C08A] rounded-[25px] p-8 flex flex-col items-center`}
    >
      {children}
    </div>
  );
}
