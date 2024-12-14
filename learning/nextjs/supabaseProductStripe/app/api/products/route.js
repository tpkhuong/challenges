import { NextRequest, NextResponse } from "next/server";
import { supabase } from "../../../utils/supabase/client";

export async function GET(req, res) {
  // const { data, error } = await supabase.from("products").select("*");

  // use customers ID to get customer's order details
  // one the order_item is found, get product_ID and quantity
  // use product_ID to get product info: name, description, price, inventory

  // const userId = 3;

  const { data, error } = await supabase.from("order_item").select(`*`);
  // .eq("user_id", `${userId}`);

  // const [firstObj] = data;

  // const { id } = firstObj;

  // once the order_details ID is found, use order_details ID
  // get order_item using order_details ID

  // console.log(id, "id");

  const orderId = 3;

  /**
   * select takes `` not ""
   * **/
  // const { orderItemData, itemError } = await supabase
  //   .from("order_item")
  //   .select("*");

  /**
   * JOIN
   * **/

  // const { data, error } = await supabase.from("order_item").select(
  //   `
  //   *,
  //   order_details(id)
  //   `
  // );

  // console.log(data, "inner join");

  console.log(data, "data");

  return NextResponse.json({
    message: "This is GET from Api Product route",
    // orderDetail: orderItemData,
  });

  // return NextResponse.json({
  //   message: "This is GET from api products",
  //   productsDataInnerJoin: data,
  // });
  // return NextResponse.json({
  //   message: "This is GET from api products",
  //   productsData: data,
  // });
}

async function getOrderID() {}
