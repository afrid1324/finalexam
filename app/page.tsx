import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ClipboardCheck, CheckCircle2, Sparkles } from "lucide-react";

export default function Page() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-5xl font-semibold tracking-tight">
          Event Staffing Application
        </h1>

        <p className="max-w-3xl text-muted-foreground">
          A themed, modern Next.js site created for my final exam. This project
          demonstrates converting an Exam 1 HTML/CSS site into a Next.js
          application using Tailwind CSS 4+, shadcn/ui components, and
          lucide-react icons.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ClipboardCheck className="h-5 w-5" />
              Project Overview
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              This page represents the “after” version of my Exam 1 Event
              Staffing website. The purpose is to demonstrate the ability to
              rebuild a static site using Next.js with a modern component-based
              architecture and a consistent theme.
            </p>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4" />
                <span>Menu links open in a new tab (Exam 1 and Git 1)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4" />
                <span>Tailwind CSS 4+ theme via globals.css</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4" />
                <span>shadcn/ui components and lucide-react icons</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4" />
                <span>Successful build using npm run build</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              Technologies Used
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <div>Next.js (App Router)</div>
            <div>Tailwind CSS 4+</div>
            <div>shadcn/ui component library</div>
            <div>lucide-react icon set</div>
          </CardContent>
        </Card>
      </div>

      <Separator />
    </div>
  );
}
