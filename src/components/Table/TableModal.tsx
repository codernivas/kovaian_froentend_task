import React from "react";
import styles from "./TableModal.module.scss";
import { useDispatch } from "react-redux";
import { addLead, editLead } from "../../redux/leadsSlice";
import { useForm } from "react-hook-form";
import Dropdown from "../common/Dropdown/Dropdown";
interface FormData {
  id: number;
  leadOwner: string;
  firstName: string;
  lastName: string;
  title: string;
  phone: string;
  mobile: string;
  industry: string;
  revenue: string;
  source: string;
  emailOptOut: string;
  company: string;
  email: string;
  fax: string;
  website: string;
  employees: string;
  rating: string;
  leadStatus: string;
  secondaryEmail: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  description: string;
  status: string;
}
interface TableModalProps {
  isOpen: boolean;
  type: "add" | "edit" | null;
  data?: FormData;
  onClose: () => void;
}
const sources = [
  { value: "Lead Source", label: "Lead Source" },
  { value: "Twitter", label: "Twitter" },
  { value: "LinkedIn", label: "LinkedIn" },
  { value: "Organic", label: "Organic" },
  { value: "Referral", label: "Referral" },
];
const typeStatus = [
  { value: "Open", label: "Open" },
  { value: "In Progress", label: "In Progress" },
  { value: "Closed", label: "Closed" },
];
const TableModal: React.FC<TableModalProps> = ({
  isOpen,
  type,
  data,
  onClose,
}) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      leadOwner: "",
      email: "",
      status: "",
      source: "",
      revenue: "$0.00",
    },
  });
  if (!isOpen) return null;

  const onSubmit = (formData: FormData) => {
    const lead = {
      id: Date.now(),
      leadOwner: formData.leadOwner,
      surename: "",
      firstName: "",
      lastName: "",
      title: "",
      phone: "",
      mobile: "",
      industry: "",
      revenue: formData.revenue,
      source: formData.source,
      emailOptOut: "",
      company: "",
      email: formData.email,
      fax: "",
      website: "",
      employees: "",
      rating: "",
      leadStatus: "",
      secondaryEmail: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      description: "",
      status: formData.status,
    };

    if (type === "add") {
      dispatch(addLead(lead));
    } else if (type === "edit") {
      dispatch(editLead(lead));
    }

    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h3>Add Lead</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="leadOwner">Name</label>
          <input
            id="leadOwner"
            type="text"
            {...register("leadOwner", { required: "Name is required" })}
          />
          {errors.leadOwner && (
            <p className={styles.error}>{errors.leadOwner.message}</p>
          )}

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}

          <Dropdown
            id="status"
            label="Status Type"
            register={register}
            options={typeStatus}
            placeholder="Select Status Type"
            defaultValue=""
          />

          {errors.status && (
            <p className={styles.error}>{errors.status.message}</p>
          )}

         
          <Dropdown
            id="source"
            label="Source"
                        register={register}

            options={sources}
            placeholder="Select Source"
            defaultValue=""
          />
          {errors.source && (
            <p className={styles.error}>{errors.source.message}</p>
          )}

          <label htmlFor="revenue">Revenue</label>
          <input
            id="revenue"
            type="text"
            {...register("revenue", {
              required: "Revenue is required",
              pattern: {
                value: /^[\d,.,$, ,]+$/,
                message: "Only numeric values allowed",
              },
            })}
          />
          {errors.revenue && (
            <p className={styles.error}>{errors.revenue.message}</p>
          )}

          <div className={styles.actions}>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TableModal;
