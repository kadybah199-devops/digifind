export type ProfileRole = "admin" | "editor" | "viewer";

export type BlogStatus = "draft" | "published" | "archived";
export type AppointmentStatus = "pending" | "confirmed" | "cancelled" | "completed";
export type QuoteStatus = "new" | "in_review" | "quote_preparing" | "quote_sent" | "accepted" | "rejected" | "closed";

export interface Profile {
  id: string;
  email: string;
  full_name: string;
  role: ProfileRole;
  avatar_url?: string | null;
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  short_description?: string | null;
  icon_name?: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  created_at: string;
  updated_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image?: string | null;
  author_id?: string | null;
  status: BlogStatus;
  published_at?: string | null;
  seo_title?: string | null;
  seo_description?: string | null;
  reading_time: number;
  created_at: string;
  updated_at: string;
}

export interface Appointment {
  id: string;
  customer_name: string;
  company_name?: string | null;
  email: string;
  phone: string;
  subject: string;
  service_id?: string | null;
  preferred_date: string;
  preferred_time: string;
  meeting_mode: "presentiel" | "visio";
  message?: string | null;
  status: AppointmentStatus;
  created_at: string;
  updated_at: string;
}

export interface QuoteRequest {
  id: string;
  customer_name: string;
  company_name?: string | null;
  email: string;
  phone: string;
  sector?: string | null;
  service_id?: string | null;
  description: string;
  budget_estimate?: number | null;
  desired_deadline?: string | null;
  status: QuoteStatus;
  reference: string;
  created_at: string;
  updated_at: string;
}

export interface ContactMessage {
  id: string;
  full_name: string;
  email: string;
  phone?: string | null;
  subject: string;
  message: string;
  status: string;
  created_at: string;
  updated_at: string;
}
