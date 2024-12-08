import { NextRequest, NextResponse } from "next/server";
import { supabase } from "../../../utils/supabase/client";

export async function GET(req, res) {
  const { data, error } = await supabase.from("products").select("*");

  return NextResponse.json({
    message: "This is GET from api products",
    productsData: data,
  });
}
