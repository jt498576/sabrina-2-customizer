import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Sabrina2Customizer() {
  const [upperColor, setUpperColor] = useState("#1f2937");
  const [midsoleColor, setMidsoleColor] = useState("#ffffff");
  const [swooshColor, setSwooshColor] = useState("#e11d48");

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Sabrina 2 Custom Builder</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Shoe Preview */}
        <Card className="bg-neutral-900">
          <CardContent className="p-6">
            <div className="relative w-full h-64 rounded-2xl bg-neutral-800 flex items-center justify-center">
              <div
                className="absolute w-56 h-24 rounded-full"
                style={{ backgroundColor: upperColor }}
              />
              <div
                className="absolute w-56 h-6 bottom-16 rounded-full"
                style={{ backgroundColor: midsoleColor }}
              />
              <div
                className="absolute w-20 h-6 right-20 rounded-full"
                style={{ backgroundColor: swooshColor }}
              />
            </div>
            <p className="text-sm text-neutral-400 mt-4">Preview (stylized placeholder)</p>
          </CardContent>
        </Card>

        {/* Controls */}
        <Card className="bg-neutral-900">
          <CardContent className="p-6 space-y-4">
            <div>
              <label className="block mb-1">Upper Color</label>
              <input type="color" value={upperColor} onChange={(e) => setUpperColor(e.target.value)} />
            </div>

            <div>
              <label className="block mb-1">Midsole Color</label>
              <input type="color" value={midsoleColor} onChange={(e) => setMidsoleColor(e.target.value)} />
            </div>

            <div>
              <label className="block mb-1">Swoosh Color</label>
              <input type="color" value={swooshColor} onChange={(e) => setSwooshColor(e.target.value)} />
            </div>

            <Button className="w-full mt-4">Save Colorway</Button>
          </CardContent>
        </Card>
      </div>

      <p className="text-xs text-neutral-500 mt-8">
        Fan-made concept customizer. Not affiliated with Nike.
      </p>
    </div>
  );
}
