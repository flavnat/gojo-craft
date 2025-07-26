import React, { useState } from "react";
import Drawer from "./Drawer";
import { Funnel } from "lucide-react";
export default function FilterDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div>
        <button
          className="flex items-center gap-x-2 capitalize"
          onClick={() => setIsDrawerOpen(true)}
        >
          <span>filter</span>
          <span>
            <Funnel strokeWidth={1.2} size={20} />
          </span>
        </button>
      </div>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Filter"
        position="right"
      >
          <details className="siz">
            <summary>Category</summary>
            <input type="checkbox" name="tag" id="tag" />
            <label htmlFor="tag">XY</label>
          </details>
      </Drawer>
    </>
  );
}
