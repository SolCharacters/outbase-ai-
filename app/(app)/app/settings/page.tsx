import { Card, Input, Label, Button, Badge } from "@/components/ui";

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-[1000px] space-y-8">
      <div>
        <div className="inline-flex items-center gap-2">
          <Badge variant="sulfur">CONFIGURATION</Badge>
          <span className="mono-label text-smoke">WORKSPACE PREFERENCES</span>
        </div>
        <h1 className="mt-4 font-display text-[48px] md:text-[64px] leading-[0.92] text-obsidian uppercase">
          WORKSPACE <span className="text-ember">SETTINGS</span>.
        </h1>
      </div>

      <div className="rounded-[40px] bg-limestone p-8 md:p-10 border border-ash/40">
        <span className="mono-label text-smoke font-bold">ORGANIZATION DETAILS</span>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <Label>Workspace Name</Label>
            <Input id="name" defaultValue="Acme Autonomous Labs" className="mt-1" />
          </div>
          <div>
            <Label>Registry Identifier</Label>
            <Input id="slug" defaultValue="acme-labs" className="mt-1" />
          </div>
        </div>
        <Button className="mt-6">Save Preferences</Button>
      </div>

      <div className="rounded-[40px] bg-limestone p-8 md:p-10 border border-ash/40">
        <span className="mono-label text-smoke font-bold">SETTLEMENT ALERTS & TELEMETRY NOTIFICATIONS</span>
        <div className="mt-6 space-y-4 text-[15px] font-medium text-obsidian/80">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-ember" />
            Alert on low USDC settlement balance (&lt; $5.00)
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-ember" />
            Email cryptographic proof when execution completes
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="h-4 w-4 accent-ember" />
            Weekly agent consumption digest
          </label>
        </div>
      </div>
    </div>
  );
}
