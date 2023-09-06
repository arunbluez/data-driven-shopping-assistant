import React from "react"

type Props = {}

export default function ProductItem({}: Props) {
  return (
    <div className="w-full border border-gray-400 rounded-xl p-4">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p>
            SAMSUNG GU55CU7179 LED TV (Flat, 55 Zoll / 138 cm, UHD 4K, SMART TV,
            Tizen)
          </p>
        </div>
      </div>
    </div>
  )
}
