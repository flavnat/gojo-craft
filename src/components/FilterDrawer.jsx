import React, { useState } from "react";
import Drawer from "./Drawer";
import { Funnel } from "lucide-react";

export default function FilterDrawer({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div className="mt-2">
        <button
          className="flex items-center px-2 py-1 border gap-x-2 capitalize"
          onClick={() => setIsDrawerOpen(true)}
        >
          <span>filter</span>
          {/* <Funnel strokeWidth={1.2} size={18} /> */}
        </button>
      </div>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Filter"
        position="left"
      >
        {children}
      </Drawer>
    </>
  );
}
