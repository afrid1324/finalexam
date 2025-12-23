<h1 className="text-5xl font-semibold tracking-tight text-red-500">
  Event Staffing, done right.
</h1>
// app/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck2,
  ClipboardList,
  Clock,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
  PhoneCall,
  Wand2,
} from "lucide-react";

export default function Page() {
  return (
    <div className="relative">
      {/* soft background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-28 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary/30 via-primary/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-44 right-[-160px] h-[560px] w-[560px] rounded-full bg-gradient-to-tr from-primary/20 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl space-y-14 px-4 py-10 sm:py-14">
        {/* pill */}
        <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-sm text-muted-foreground shadow-sm backdrop-blur">
          <Sparkles className="h-4 w-4" />
          Final Exam · Next.js · Tailwind 4+ · shadcn/ui · lucide-react
        </div>

        {/* HERO */}
        <section className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Event Staffing, <span className="text-primary">done right</span>.
            </h1>

            <p className="max-w-xl text-base text-muted-foreground">
              A modern “after” version of my Exam 1 Event Staffing site — rebuilt
              in Next.js with a clean theme, responsive layout, and reusable UI
              components using Tailwind 4+ and shadcn/ui.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button asChild className="gap-2">
                <a href="#contact">
                  Request Staff <ArrowRight className="h-4 w-4" />
                </a>
              </Button>

              <Button asChild variant="outline" className="gap-2">
                <a href="#services">
                  View Services <ClipboardList className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              <MiniStat icon={Clock} title="Fast booking" value="24–48 hrs" />
              <MiniStat icon={ShieldCheck} title="Vetted staff" value="Verified" />
              <MiniStat icon={BadgeCheck} title="Reliable" value="On-site ready" />
            </div>

            <div className="text-sm text-muted-foreground">
              Use the menu links (Exam 1 + Git 1) to view the “before” website
              and GitHub repo in a new tab.
            </div>
          </div>

          {/* hero card */}
          <Card className="rounded-3xl border bg-background/70 shadow-lg backdrop-blur">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <Wand2 className="h-5 w-5" />
                What’s improved from Exam 1
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid gap-3">
                <CheckRow text="Modern theme + typography using Tailwind 4+ + globals.css" />
                <CheckRow text="shadcn/ui layout components (Card, Button, Separator)" />
                <CheckRow text="lucide-react icons used consistently across sections" />
                <CheckRow text="Responsive grid layout (mobile → desktop)" />
                <CheckRow text="Build-ready (npm run build passes)" />
              </div>

              <Separator />

              <div className="grid gap-3 sm:grid-cols-2">
                <QuickInfo icon={Users} label="Staff Types" value="Servers, Ushers, Setup" />
                <QuickInfo icon={CalendarCheck2} label="Availability" value="Weekdays & weekends" />
                <QuickInfo icon={MapPin} label="Coverage" value="Local events & venues" />
                <QuickInfo icon={PhoneCall} label="Contact" value="Request-based" />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* SERVICES */}
        <section id="services" className="space-y-6 scroll-mt-24">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">Services</h2>
            <p className="text-muted-foreground">
              Clean, clear, and modern — like a real landing page.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon={Users}
              title="Event Staffing"
              text="Trained staff matched to your event size, timeline, and venue needs."
            />
            <FeatureCard
              icon={CalendarCheck2}
              title="Scheduling"
              text="Confirm roles, arrival times, and responsibilities with a simple flow."
            />
            <FeatureCard
              icon={ShieldCheck}
              title="On-site Support"
              text="Day-of coverage so your event runs smoothly from setup to wrap."
            />
          </div>
        </section>

        {/* PROCESS */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
            <p className="text-muted-foreground">
              Three steps — simple and professional.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <StepCard
              step="01"
              title="Submit request"
              text="Event type, date/time, location, and how many staff you need."
            />
            <StepCard
              step="02"
              title="Confirm details"
              text="We match staff and confirm roles, arrival times, and expectations."
            />
            <StepCard
              step="03"
              title="Event day"
              text="Staff arrive prepared and support your event start to finish."
            />
          </div>
        </section>

        {/* CONTACT / CTA */}
        <section id="contact" className="scroll-mt-24">
          <Card className="rounded-3xl border bg-gradient-to-tr from-primary/15 via-background to-background shadow-lg">
            <CardContent className="flex flex-col gap-4 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
              <div className="space-y-1">
                <div className="text-xl font-semibold tracking-tight">
                  Ready to staff your next event?
                </div>
                <div className="text-sm text-muted-foreground">
                  This is the “after” version built in Next.js for the Final Exam.
                </div>
              </div>

              <Button asChild className="gap-2">
                <a href="#contact">
                  Get a quote <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>

        <div className="text-center text-xs text-muted-foreground">
          © 2025 Event Staffing Application · Final Exam
        </div>
      </div>
    </div>
  );
}

function CheckRow({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 text-sm text-muted-foreground">
      <BadgeCheck className="mt-0.5 h-4 w-4 text-primary" />
      <span>{text}</span>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) {
  return (
    <Card className="group rounded-3xl border bg-background/70 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <span className="rounded-2xl border bg-muted/30 p-2 transition group-hover:bg-muted/50">
            <Icon className="h-5 w-5" />
          </span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">{text}</CardContent>
    </Card>
  );
}

function StepCard({
  step,
  title,
  text,
}: {
  step: string;
  title: string;
  text: string;
}) {
  return (
    <Card className="rounded-3xl border bg-background/70 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between text-base">
          <span>{title}</span>
          <span className="rounded-full border bg-muted/30 px-2 py-1 text-xs text-muted-foreground">
            {step}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">{text}</CardContent>
    </Card>
  );
}

function MiniStat({
  icon: Icon,
  title,
  value,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
}) {
  return (
    <Card className="rounded-3xl border bg-background/70 shadow-sm">
      <CardContent className="flex items-center gap-3 p-4">
        <div className="rounded-2xl border bg-muted/30 p-2">
          <Icon className="h-4 w-4" />
        </div>
        <div className="leading-tight">
          <div className="text-xs text-muted-foreground">{title}</div>
          <div className="text-sm font-medium">{value}</div>
        </div>
      </CardContent>
    </Card>
  );
}

function QuickInfo({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-2 rounded-2xl border bg-muted/20 p-3">
      <Icon className="mt-0.5 h-4 w-4 text-primary" />
      <div className="leading-tight">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </div>
  );
}
