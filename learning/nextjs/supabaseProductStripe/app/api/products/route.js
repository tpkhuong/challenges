import { NextRequest, NextResponse } from "next/server";
import { supabase } from "../../../utils/supabase/client";

export async function GET(req, res) {
  // const { data, error } = await supabase.from("products").select("*");

  /**
   * JOIN
   * **/

  const { data, error } = await supabase.from("order_item").select(
    `
    *,
    order_details(id)
    `
  );

  console.log(data, "inner join");

  return NextResponse.json({
    message: "This is GET from api products",
    productsDataInnerJoin: data,
  });
  // return NextResponse.json({
  //   message: "This is GET from api products",
  //   productsData: data,
  // });
}
