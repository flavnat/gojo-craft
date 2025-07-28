import { X } from "lucide-react";

const Drawer = ({
  isOpen,
  onClose,
  title = "Info",
  children,
  position = "left",
}) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-opacity-10"
          onClick={onClose}
        ></div>
      )}

      {/* Drawer */}
      <div
        id="drawer-example"
        className={`fixed top-0 ${
          position === "left" ? "left-0" : "right-0"
        } z-40 h-screen p-4 overflow-y-auto transition-transform shadow-sm bg-white/55 backdrop-blur-3xl w-96 ${
          isOpen
            ? "translate-x-0"
            : `${
                position === "left" ? "-translate-x-full" : "translate-x-full"
              }`
        }`}
        tabIndex="-1"
        aria-labelledby="drawer-label"
      >
        <h5
          id="drawer-label"
          className="inline-flex items-center text-xl mb-4 font-medium"
        >
          {title}
        </h5>
        <button
          type="button"
          onClick={onClose}
          className="text-black bg-transparent text-sm size-8 cursor-pointer absolute top-2.5 end-2.5 flex items-center justify-center hover:bg-black hover:text-white duration-200"
        >
          <X />
          <span className="sr-only">Close menu</span>
        </button>

        {/* Content Slot */}
        <div>{children}</div>
      </div>
    </>
  );
};

export default Drawer;
