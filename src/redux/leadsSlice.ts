import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Lead {
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
      status:string,
      surename:string;

}


interface LeadsState {
  leads: Lead[];
}

const initialState: LeadsState = {
  leads: [
    {
    id: 1,
    leadOwner: "Darrell Steward 1",
    firstName: "Darrell",
    lastName: "Steward",
    title: "Sales Manager",
    phone: "555-1234",
    mobile: "555-5678",
    industry: "Startup",
    revenue: "$500000",
    status:"open",
    source: "Organic",
    emailOptOut: "no@example.com",
    company: "Tech Co",
    email: "nevaeh.simmons@example.com",
    fax: "",
    website: "https://example.com",
    employees: "10",
    rating: "Hot",
    leadStatus: "Open",
    secondaryEmail: "",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "USA",
    description: "Interested in full suite.",
     surename:"Mr."
  },
    {
    id: 2,
    leadOwner: "Darrell Steward 1",
    firstName: "Darrell",
    lastName: "Steward",
    title: "Sales Manager",
    phone: "555-1234",
    mobile: "555-5678",
    industry: "Startup",
    revenue: "$500000",
        status:"open",

    source: "Organic",
    emailOptOut: "no@example.com",
    company: "Tech Co",
    email: "nevaeh.simmons@example.com",
    fax: "",
    website: "https://example.com",
    employees: "10",
    rating: "Hot",
    leadStatus: "Open",
    secondaryEmail: "",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "USA",
    description: "Interested in full suite.",
          surename:"Mr."

  },
    {
    id: 3,
    leadOwner: "Darrell Steward 3",
    firstName: "Darrell",
    lastName: "Steward",
    title: "Sales Manager",
    phone: "555-1234",
    mobile: "555-5678",
    industry: "Startup",
        status:"open",

    revenue: "$500000",
    source: "Organic",
    emailOptOut: "no@example.com",
    company: "Tech Co",
    email: "nevaeh.simmons@example.com",
    fax: "",
    website: "https://example.com",
    employees: "10",
    rating: "Hot",
    leadStatus: "Open",
    secondaryEmail: "",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "USA",
    description: "Interested in full suite.",
          surename:"Mr."

  },
    
  ],
};

const leadsSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {
   addLead(state, action: PayloadAction<Lead>) {
  state.leads.push({ ...action.payload, id: Date.now() });
},
editLead(state, action: PayloadAction<Lead>) {
  const index = state.leads.findIndex((l) => l.id === action.payload.id);
  if (index !== -1) {
    state.leads[index] = action.payload;
  }
},
    deleteLead(state, action: PayloadAction<number>) {
      state.leads = state.leads.filter((lead) => lead.id !== action.payload);
    },
  },
});

export const { addLead, editLead, deleteLead } = leadsSlice.actions;
export default leadsSlice.reducer;
