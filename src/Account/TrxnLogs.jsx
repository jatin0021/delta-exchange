import React from 'react'

const TrxnLogs = ({ mode }) => {
  return (
    <div className={`h-full flex items-center justify-center ${
      mode === "dark" ? "bg-[#0b0c0f] text-gray-400" : "bg-white text-gray-600"
    }`}>
      <p className="text-lg">Transaction Logs</p>
    </div>
  )
}

export default TrxnLogs