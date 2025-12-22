import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const EXAM1_URL = "https://www.afrid1.com/";
const EXAM1_GIT_URL = "https://github.com/afrid1324/Staffing-Website";

export default function Menu() {
  return (
    <div className="flex items-center gap-2">
      <Button asChild variant="outline" size="sm" className="gap-2">
        <Link href={EXAM1_URL} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="h-4 w-4" />
          Exam 1
        </Link>
      </Button>

      <Button asChild variant="outline" size="sm" className="gap-2">
        <Link href={EXAM1_GIT_URL} target="_blank" rel="noopener noreferrer">
          <Github className="h-4 w-4" />
          Git 1
        </Link>
      </Button>
    </div>
  );
}
