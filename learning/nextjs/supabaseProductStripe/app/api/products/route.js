import { NextRequest, NextResponse } from "next/server";
import { supabase } from "../../../utils/supabase/client";

export async function GET(req, res) {
  // const { data, error } = await supabase.from("products").select("*");

  // use customers ID to get customer's order details
  // one the order_item is found, get product_ID and quantity
  // use product_ID to get product info: name, description, price, inventory

  const userId = 3;

  /**
   * workding with order details
   * **/

  const { data, error } = await supabase
    .from(`order_details`)
    .select(`*`)
    .eq(`user_id`, `${userId}`);

  const [firstObj] = data;

  const { id: orderId } = firstObj;

  // once the order_details ID is found, use order_details ID
  // get order_item using order_details ID

  // console.log(id, "id");

  // const orderId = 3;

  // console.log(orderId, "orderId");

  /**
   * working with order item
   * select takes `` not ""
   * **/
  const { data: orderItemData, error: orderError } = await supabase
    .from(`order_item`)
    .select(`*`)
    .eq(`order_id`, `${orderId}`);

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

  console.log(orderItemData, "orderItemData");

  const productId = orderItemData.reduce(function getProductId(
    buildingUp,
    currentValue,
    index,
    list
  ) {
    buildingUp.push(currentValue.product_id);
    return buildingUp;
  },
  []);

  console.log(productId, "productId");

  const [firstId, secondId] = productId;

  /**
   * products database
   * **/

  const { data: productList, error: productError } = await supabase
    .from(`products`)
    .select(`*`)
    .eq(`id`, `${firstId}`);
  // .or(`id.eq.${firstId}, id.eq.${secondId}`);

  console.log(productList, "productList");

  return NextResponse.json({
    message: "This is GET from Api Product route",
    orderInfo: orderItemData,
    productInfo: productList,
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

// const obj = {
//   name:"hi"
// }

// const {name:firstName} = obj;
