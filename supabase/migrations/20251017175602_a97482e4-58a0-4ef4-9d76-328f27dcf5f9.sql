-- Create table for demo requests
CREATE TABLE public.demo_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  company_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT DEFAULT 'pending'
);

-- Enable Row Level Security
ALTER TABLE public.demo_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert demo requests (public form)
CREATE POLICY "Anyone can insert demo requests" 
ON public.demo_requests 
FOR INSERT 
WITH CHECK (true);

-- Create policy for admins to view all demo requests
CREATE POLICY "Admins can view all demo requests" 
ON public.demo_requests 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create index for better performance
CREATE INDEX idx_demo_requests_created_at ON public.demo_requests(created_at DESC);