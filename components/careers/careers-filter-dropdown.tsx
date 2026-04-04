"use client";

import { useEffect, useRef, useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import { AnimatePresence, motion } from "motion/react";
import { ALL } from "@/lib/careers-filter-utils";

interface CareersFilterDropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export function CareersFilterDropdown({
  label,
  options,
  value,
  onChange,
}: CareersFilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const displayValue = value === ALL ? `All ${label}s` : value;

  return (
    <div ref={containerRef} className="flex flex-col gap-2">
      <label className="font-mono text-xxs uppercase tracking-[0.2em] text-white/20">
        {label}
      </label>

      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex w-full items-center justify-between border border-border-col bg-transparent px-4 py-3 font-mono text-xs-plus text-white/70 transition-all duration-200 hover:border-white/20 focus:border-white/30"
        >
          <span className={value === ALL ? "text-white/40" : "text-white"}>
            {displayValue}
          </span>

          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <LuChevronDown className="text-white/20" size={14} />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-50 mt-1 w-full border border-border-col bg-card py-1 shadow-2xl"
            >
              {options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-left font-mono text-xs-plus transition-colors hover:bg-white/5 ${
                    value === option ? "text-white" : "text-white/40"
                  }`}
                >
                  {option === ALL ? `All ${label}s` : option}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
