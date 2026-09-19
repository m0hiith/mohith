import { redirect } from "next/navigation";

const RESUME_URL =
  "https://www.dropbox.com/scl/fi/bw6wuowyony5enzu90zep/mohith-resume-final.pdf?rlkey=4wpojk59qsjyugujg5tuzmhvj&st=41w7t83u&dl=0";

export function GET() {
  redirect(RESUME_URL);
}
