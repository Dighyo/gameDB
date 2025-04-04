import axios from "axios";

const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: supabaseKey,
  },
});
