// Supabase configuration
const SUPABASE_URL = 'https://zgasitovbkoyjhgocdss.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnYXNpdG92YmtveWpoZ29jZHNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxMjEyODcsImV4cCI6MjA2MTY5NzI4N30.pcVo1BG30vOSGguKT6kPyUY36XThD5tGTALGHdV3fac';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Export for use in other files
export { SUPABASE_URL, SUPABASE_KEY, supabase };
