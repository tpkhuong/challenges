import { NextRequest, NextResponse } from "next/server";
import { supabase } from "../../../utils/supabase/client.js";

export async function GET(req, res) {
  //   const supabase = createClient();

  console.log(supabase, "supabase");

  const { data, error } = await supabase.from("test_users").select("*");

  //   console.log(supabase, "supabase");
  console.log(data, "data");
  return NextResponse.json({
    message: "This is GET. Api User dir",
  });
}
