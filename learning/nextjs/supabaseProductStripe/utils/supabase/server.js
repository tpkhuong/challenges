// import { createServerClient } from "@supabase/ssr";
// import { cookies } from "next/headers";

// export async function createClient(req, res) {
//   const cookieStore = await cookies();

//   return createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
//     {
//       cookies: {
//         getAll() {
//           return cookieStore.getAll();
//         },
//         setAll(cookiesToSet) {
//           try {
//             cookiesToSet.forEach(function setCookie({ name, value, options }) {
//               cookieStore.set(name, value, options);
//             });
//           } catch {}
//         },
//       },
//     }
//   );
// }
