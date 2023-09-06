import { Rating } from "@mui/material"
import EnergyLabel from "./EnergyLabel/EnergyLabel"

export default function ProductItem() {
  return (
    <div className="w-full border border-gray-400 rounded-xl p-4">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center w-full">
          <p className="font-bold">
            SAMSUNG GU55CU7179 LED TV (Flat, 55 Zoll / 138 cm, UHD 4K, SMART TV,
            Tizen)
          </p>
          <EnergyLabel />
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col justify-between w-1/3 p-4">
            <div className="w-full flex items-center justify-center">
              <img
                width="80%"
                src="https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105413335?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320"
              />{" "}
            </div>
            <div className="flex items-center gap-2">
              <Rating name="read-only" value={4} readOnly color="primary" />
              <p>35</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start p-4 w-1/3">
            <div className="text-start">
              <p className="text-sm">ProductType</p>
              <p className="font-bold">LED TV</p>
            </div>
            <div className="text-start">
              <p className="text-sm">ProductType</p>
              <p className="font-bold">LED TV</p>
            </div>
            <div className="text-start">
              <p className="text-sm">ProductType</p>
              <p className="font-bold">LED TV</p>
            </div>
            <div className="text-start">
              <p className="text-sm">ProductType</p>
              <p className="font-bold">LED TV</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start p-4">
            <div className="text-start">
              <p className="text-3xl font-bold">519,-</p>
              <div className="text-xs text-start">
                <p>inkl. MwSt. versandkostenfrei</p>
                <p>
                  Bezahle in 12 Raten à 26,30 € (eff. Zins. P.a. 9.9%)**
                </p>{" "}
                <p>Gesamtpreis 315.6 €</p>
              </div>
            </div>

            <div className="text-start">
              <div className="flex items-center gap-2">
                <div className="bg-green-700 rounded-full w-2 h-2"></div>
                <p className="text-green-700 text-xs font-bold">
                  Online verfügbar
                </p>
              </div>
              <p className="text-gray-600 text-xs pl-4">
                Lieferung 07.09.2023 - 08.09.2023
              </p>
            </div>
            <div className="text-start">
              <div className="flex items-center gap-2">
                <div className="bg-green-700 rounded-full w-2 h-2"></div>
                <p className="text-green-700 text-xs font-bold">
                  Marktabholung ab 09.09.2023
                </p>
              </div>
              <p className="text-gray-600 text-xs pl-4">Ingolstadt</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
