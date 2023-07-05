import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const headerList = headers();
  const cookiesList = cookies();

  const type = headerList.get("Content-type");
  const cookie = cookiesList.get("Cookie_1")?.value;

  //Logic for deleting
  // redirect('/blog')

  return NextResponse.json({
    id,
    type,
    cookie,
  });
}
