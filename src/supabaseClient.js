import { createClient } from '@supabase/supabase-js';

// REEMPLAZAR con tu URL y clave anónima de Supabase
//const supabaseUrl = "https://wodlauqtdcdhdrkhztlj.supabase.co";
//const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvZGxhdXF0ZGNkaGRya2h6dGxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2Mzc3MjIsImV4cCI6MjA2OTIxMzcyMn0.Hmtpf9pF1t2IjPdI9NgKs9DkCrX7IdfL20Xqxkc0FYo";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


