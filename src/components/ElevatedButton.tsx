export function ElevatedButton({
  type,
  onClick,
  children,
}: {
  type: "submit" | "reset" | "button" | undefined;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children: React.ReactNode;
}) {
  return (
    <button
      type={type}
      className="h-[60px] px-8 bg-[#739953] rounded-[20px] text-white text-[25px] font-semibold font-Montserrat mb-3"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
