const SUPABASE_URL = "https://yhgiybgbzhhjghikjydk.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InloZ2l5YmdiemhoamdoaWtqeWRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM0MzAzMTIsImV4cCI6MjA5OTAwNjMxMn0.1EJkjJka_GxPCC8i2TKZXhF5FrgLeAUzBlWauqR9Ub0";

window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);