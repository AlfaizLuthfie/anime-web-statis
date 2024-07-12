function PrimaryButton({children}) {
  return (
    <>
      <button className="bg-primary text-white px-4 py-2 rounded-2xl mt-8 text-sm hover:bg-primary/90">
        {children}
      </button>
    </>
  );
}

export default PrimaryButton;
