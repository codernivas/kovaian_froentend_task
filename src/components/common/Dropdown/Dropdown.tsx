import React from "react";
import { FaChevronDown } from "react-icons/fa";
import styles from "./Dropdown.module.scss";
import { UseFormRegister } from "react-hook-form";

interface DropdownProps {
  id: string;
  label: string;
  register: UseFormRegister<any>;
  options: { value: string; label: string }[];
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  id,
  label,
  register,
  options,
  placeholder = "Select an option",
  defaultValue = "",
  disabled = false,
}) => {
  return (
    <div className={styles.dropdownContainer}>
      <label htmlFor={id}>{label}</label>
       
      <div className={styles.selectWrapper}>
       
          <select id={id} defaultValue={defaultValue} {...register(id)} disabled={disabled}>
            <option value="">{placeholder}</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <FaChevronDown className={styles.dropdownIcon} />
        
      </div>
    </div>
  );
};

export default Dropdown;
