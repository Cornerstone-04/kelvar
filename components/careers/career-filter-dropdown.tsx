"use client";

import { useId } from "react";
import { LuChevronDown } from "react-icons/lu";
import { ALL } from "@/lib/careers-filter-utils";

export function CareerFilterDropdown({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  const selectId = useId();

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={selectId}
        className="font-mono text-xxs uppercase tracking-[0.2em] text-dim"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={selectId}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="min-h-12 w-full appearance-none border border-border-col bg-bg px-4 py-3 pr-12 font-mono text-xs-plus text-primary transition-colors duration-200 hover:border-white/30 focus:border-primary"
        >
          {options.map((option) => (
            <option
              key={option}
              value={option}
              className="bg-card text-primary"
            >
              {option === ALL ? `All ${label}s` : option}
            </option>
          ))}
        </select>
        <LuChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-dim"
          size={14}
        />
      </div>
    </div>
  );
}
