import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import styles from "./EditLeadsModule.module.scss"; 
import { useDispatch } from "react-redux";
import { editLead } from "../../redux/leadsSlice"; 
import { useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import Dropdown from "../../components/common/Dropdown/Dropdown";

type LeadForm = {
  id?: number;
  leadOwner: string;
  firstName: string;
  title: string;
  phone: string;
  mobile: string;
  industry: string;
  revenue: string;
  source: string;
  emailOptOut: string;
  company: string;
  lastName: string;
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
  size: string;
  surename: string;
};
const industries = [
  { value: "Large Enterprise", label: "Large Enterprise" },
  { value: "Startup", label: "Startup" },
];
const sources = [
  { value: "Lead Source", label: "Lead Source" },
  { value: "Twitter", label: "Twitter" },
  { value: "LinkedIn", label: "LinkedIn" },
  { value: "Organic", label: "Organic" },
  { value: "Referral", label: "Referral" },
];

const ratingOptions = [
  { value: "Very Good", label: "Very Good" },

  { value: "Good", label: "Good" },
  { value: "Medium", label: "Medium" },

  { value: "Poor", label: "Poor" },
];
const leadStatusOptions = [
  { value: "Lead Status", label: "Lead Status" },

  { value: "Contact in Future", label: "Contact in Future" },
  { value: "Not Interested", label: "Not Interested" },
];

const EditLeadsModule = () => {
  const { state } = useLocation();
  const lead = state?.lead;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadForm>({
    defaultValues: {
      leadOwner: lead?.leadOwner || "",
      firstName: lead?.firstName || "",
      surename: lead?.surename || "",

      title: lead?.title || "",
      phone: lead?.phone || "",
      mobile: lead?.mobile || "",
      industry: lead?.industry || "",
      revenue: lead?.revenue || "$ 0.00",
      source: lead?.source || "",
      emailOptOut: lead?.emailOptOut || "",
      company: lead?.company || "",
      lastName: lead?.lastName || "",
      email: lead?.email || "",
      fax: lead?.fax || "",
      website: lead?.website || "",
      employees: lead?.employees || "",
      rating: lead?.rating || "",
      leadStatus: lead?.leadStatus || "",
      secondaryEmail: lead?.secondaryEmail || "",
      street: lead?.street || "",
      city: lead?.city || "",
      state: lead?.state || "",
      zipCode: lead?.zipCode || "",
      country: lead?.country || "",
      description: lead?.description || "",
      status: lead?.status || "Open", 
      size: lead?.size || "$0.00",
    },
  });

  
  const onSubmit = (data: LeadForm) => {
    if (!lead?.id) return;

    const updatedLead = {
      ...data,
      id: lead.id,
    };

    dispatch(editLead(updatedLead));
    navigate("/leads");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h2>Edit Leads</h2>

      <fieldset className={styles.section}>
        <legend>Lead Information</legend>
        <div className={styles.grid}>
          <div>
            <label htmlFor="leadOwner">
              Lead Owner <span style={{ color: "red" }}>*</span>
            </label>
            <input
              id="leadOwner"
              {...register("leadOwner", {
                required: "This field is required",
              })}
            />
            {errors.leadOwner && (
              <p className={styles.error}>{errors.leadOwner.message}</p>
            )}
          </div>
          <div className={styles.firstNameContainer}>
            <label htmlFor="firstName">First Name</label>
            <div className={styles.inputWithPrefix}>
              <div className={styles.selectWrapper}>
                <select
                  {...register("surename")}
                  className={styles.prefixSelect}
                  defaultValue="Mr."
                >
                  <option value="Mr.">Mr.</option>
                  <option value="Ms.">Ms.</option>
                  <option value="Dr.">Dr.</option>
                </select>
                <FaChevronDown className={styles.dropdownIcon} />
              </div>
              <input
                id="firstName"
                {...register("firstName")}
                placeholder="Enter First Name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <input id="title" {...register("title")} />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              {...register("phone", {
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Only numeric values are allowed",
                },
              })}
            />
            {errors.phone && (
              <p className={styles.error}>{errors.phone.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="mobile">Mobile</label>
            <input
              id="mobile"
              {...register("mobile", {
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Only numeric values are allowed",
                },
              })}
            />
            {errors.mobile && (
              <p className={styles.error}>{errors.mobile.message}</p>
            )}
          </div>
          <div>
            <Dropdown
              id="industry"
              label="Industry"
              register={register}
              options={industries}
              placeholder="Select Industry"
              defaultValue=""
            />
          </div>
          <div>
            <label htmlFor="revenue">Annual Revenue</label>
            <input
              id="revenue"
              {...register("revenue", {
                pattern: {
                  value: /^[0-9,-,$,., ,]+$/,
                  message: "Only numeric values are allowed",
                },
              })}
            />
            {errors.revenue && (
              <p className={styles.error}>{errors.revenue.message}</p>
            )}
          </div>
          <div>
            <Dropdown
              id="source"
              label="Source"
              register={register}
              options={sources}
              placeholder="Select Source"
              defaultValue=""
            />
          </div>
          <div>
            <label htmlFor="emailOptOut">Email Opt Out</label>
            <input id="emailOptOut" {...register("emailOptOut")} />
          </div>
          <div>
            <label htmlFor="company">Company</label>
            <input id="company" {...register("company")} />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" {...register("lastName")} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" {...register("email")} />
          </div>
          <div>
            <label htmlFor="fax">Fax</label>
            <input id="fax" {...register("fax")} />
          </div>
          <div>
            <label htmlFor="website">Website</label>
            <input id="website" {...register("website")} />
          </div>
          <div>
            <label htmlFor="employees">Employees</label>
            <input
              id="employees"
              {...register("employees", {
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Only numeric values are allowed",
                },
              })}
            />
            {errors.employees && (
              <p className={styles.error}>{errors.employees.message}</p>
            )}
          </div>
          <div>
            <Dropdown
              id="rating"
              label="Rating"
              register={register}
              options={ratingOptions}
              placeholder="Select Rating"
              defaultValue=""
            />
          </div>
          <div>
            <Dropdown
              id="leadStatus"
              label="Lead Status"
              register={register}
              options={leadStatusOptions}
              placeholder="Select Lead Status"
              defaultValue=""
            />
          </div>
          <div>
            <label htmlFor="secondaryEmail">Secondary Email</label>
            <input id="secondaryEmail" {...register("secondaryEmail")} />
          </div>
        </div>
      </fieldset>

      <fieldset className={styles.section}>
        <legend>Address Information</legend>
        <div className={styles.grid}>
          <div>
            <label htmlFor="street">Street</label>
            <input id="street" {...register("street")} />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <input id="state" {...register("state")} />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input id="city" {...register("city")} />
          </div>
          <div>
            <label htmlFor="zipCode">Zip Code</label>
            <input
              id="zipCode"
              {...register("zipCode", {
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Only numeric values are allowed",
                },
              })}
            />
            {errors.zipCode && (
              <p className={styles.error}>{errors.zipCode.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <input id="country" {...register("country")} />
          </div>
        </div>
      </fieldset>

      <fieldset className={styles.section}>
        <legend>Description Information</legend>
        <div>
          <label htmlFor="description">Description</label>
          <input id="description" {...register("description")} />
        </div>
      </fieldset>

      <div className={styles.actions}>
        <button type="submit">Save</button>
        <button type="button" onClick={() => navigate("/leads")}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditLeadsModule;
