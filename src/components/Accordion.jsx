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

export function Accordion({ children, value = [], onChange, defaultOpenAll = false, ...props }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    if (defaultOpenAll && value.length === 0 && selected.length === 0) {
      const childValues = React.Children.toArray(children)
        .map(child => child.props?.value)
        .filter(Boolean);
      
      setSelected(childValues);
    }
  }, [children, defaultOpenAll, value, selected]);

  useEffect(() => {
    onChange?.(selected);
  }, [selected, onChange]);

  return (
    <ul {...props} className='md:block flex md:space-x-0 space-x-10'>
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