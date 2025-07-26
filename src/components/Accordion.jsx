import { ChevronDown } from 'lucide-react';
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

const AccordionContext = createContext({
  selected: [],
  setSelected: () => {},
});

export function Accordion({ children, value = [], onChange, ...props }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);

  return (
    <ul {...props}>
      <AccordionContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordionContext.Provider>
    </ul>
  );
}

export function AccordionItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordionContext);
  const isOpen = selected.includes(value);
  const ref = useRef(null);

  const toggleItem = () => {
    if (isOpen) {
      setSelected(selected.filter((v) => v !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  return (
    <li {...props}>
      <header
        role="button"
        onClick={toggleItem}
        className="flex justify-between items-center py-2 font-medium cursor-pointer"
      >
        {trigger}
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </header>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          height: isOpen && ref.current ? ref.current.scrollHeight : 0,
        }}
      >
        <div ref={ref} className="">
          {children}
        </div>
      </div>
    </li>
  );
}
