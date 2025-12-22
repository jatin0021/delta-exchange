import React, { useState } from "react";

const Preferences = ({ mode }) => {
  const [settings, setSettings] = useState({
    // Trade Settings
    marketBracketOrders: false,
    
    // Push Notifications
    pushNotifications: {
      adl: true,
      liquidation: true,
      orderFill: false,
      stopOrderTrigger: false,
      priceAlert: true,
      marketing: true,
    },
    
    // Email Alerts
    emailAlerts: {
      adl: true,
      liquidation: true,
      orderFill: false,
      stopOrderTrigger: true,
      orderCancel: false,
      marketing: false,
    },
    
    // Confirmation Messages
    confirmations: {
      limitOrder: true,
      marketOrder: true,
      stopMarketOrder: true,
      stopLimitOrder: true,
      trailingStopOrder: true,
      takeProfitLimitOrder: true,
      takeProfitMarketOrder: true,
      fatFingerProtection: true,
      alwaysShowOnMobile: true,
      orderPlacedFromCharts: true,
    },
    
    // General Settings
    general: {
      blinkingEnabled: true,
      positionForSocialShare: false,
      tradeToOrderBookedPriceFill: true,
      showCloseAllPosition: true,
      showOrderOnChart: true,
    },
  });

  const toggleSetting = (category, key) => {
    setSettings((prev) => ({
      ...prev,
      [category]: typeof prev[category] === 'object' 
        ? { ...prev[category], [key]: !prev[category][key] }
        : !prev[category]
    }));
  };

  const CheckboxItem = ({ checked, onChange, label, description, id }) => (
    <>
      <div className="flex items-start row-margin">
        <div className="flex-shrink-0 w-12">
          <div className="checkbox">
            <input
              type="checkbox"
              checked={checked}
              onChange={onChange}
              id={id}
              className="w-5 h-5 text-orange-500 border-gray-300 rounded cursor-pointer accent-orange-500"
            />
          </div>
        </div>
        <label
          htmlFor={id}
          className={`flex-1 cursor-pointer select-none ${
            mode === "dark" ? "text-gray-200" : "text-gray-800"
          }`}
        >
          <div className="font-medium">{label}</div>
        </label>
      </div>
      {description && (
        <div className="flex">
          <div className="w-12"></div>
          <div className={`flex-1 text-sm mb-4 ${
            mode === "dark" ? "text-gray-400" : "text-gray-600"
          }`}>
            {description}
          </div>
        </div>
      )}
    </>
  );

  return (
    <div className={`h-full overflow-y-auto p-6 md:p-10 ${
      mode === "dark" ? "bg-[#0b0c0f]" : "bg-white"
    }`}>
      <div className={`max-w-4xl ${mode === "dark" ? "text-gray-200" : "text-gray-800"}`}>
        
        {/* Trade Settings Section */}
        <div className="mb-8">
          <h2 className={`text-xl font-semibold mb-6 pb-3 border-b ${
            mode === "dark" ? "border-gray-700 text-gray-100" : "border-gray-200 text-gray-900"
          }`}>
            Trade Settings
          </h2>
          
          <CheckboxItem
            checked={settings.marketBracketOrders}
            onChange={() => setSettings(prev => ({ ...prev, marketBracketOrders: !prev.marketBracketOrders }))}
            label="Market bracket orders for Options"
            description="Enable market take profit and stop loss orders for Options"
            id="marketBracketOrders"
          />
        </div>

        {/* Push Notifications Section */}
        <div className="mb-8">
          <h2 className={`text-xl font-semibold mb-3 pb-3 border-b ${
            mode === "dark" ? "border-gray-700 text-gray-100" : "border-gray-200 text-gray-900"
          }`}>
            Push Notifications
          </h2>
          <p className={`text-sm mb-6 ${mode === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            We send push notifications on certain events. You can choose to disable some or all of them.
          </p>
          
          <CheckboxItem
            checked={settings.pushNotifications.adl}
            onChange={() => toggleSetting('pushNotifications', 'adl')}
            label="ADL"
            id="pushNotifications-adl"
          />
          <CheckboxItem
            checked={settings.pushNotifications.liquidation}
            onChange={() => toggleSetting('pushNotifications', 'liquidation')}
            label="Liquidation"
            id="pushNotifications-liquidation"
          />
          <CheckboxItem
            checked={settings.pushNotifications.orderFill}
            onChange={() => toggleSetting('pushNotifications', 'orderFill')}
            label="Order Fill"
            id="pushNotifications-orderFill"
          />
          <CheckboxItem
            checked={settings.pushNotifications.stopOrderTrigger}
            onChange={() => toggleSetting('pushNotifications', 'stopOrderTrigger')}
            label="Stop Order Trigger"
            id="pushNotifications-stopOrderTrigger"
          />
          <CheckboxItem
            checked={settings.pushNotifications.priceAlert}
            onChange={() => toggleSetting('pushNotifications', 'priceAlert')}
            label="Price Alerts"
            id="pushNotifications-priceAlert"
          />
          <CheckboxItem
            checked={settings.pushNotifications.marketing}
            onChange={() => toggleSetting('pushNotifications', 'marketing')}
            label="Marketing"
            id="pushNotifications-marketing"
          />
        </div>

        {/* Email Alerts Section */}
        <div className="mb-8">
          <h2 className={`text-xl font-semibold mb-3 pb-3 border-b ${
            mode === "dark" ? "border-gray-700 text-gray-100" : "border-gray-200 text-gray-900"
          }`}>
            Email Alerts
          </h2>
          <p className={`text-sm mb-6 ${mode === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            We send emails on certain events. You can choose to disable some or all of them.
          </p>
          
          <CheckboxItem
            checked={settings.emailAlerts.adl}
            onChange={() => toggleSetting('emailAlerts', 'adl')}
            label="ADL"
            id="emailAlerts-adl"
          />
          <CheckboxItem
            checked={settings.emailAlerts.liquidation}
            onChange={() => toggleSetting('emailAlerts', 'liquidation')}
            label="Liquidation"
            id="emailAlerts-liquidation"
          />
          <CheckboxItem
            checked={settings.emailAlerts.orderFill}
            onChange={() => toggleSetting('emailAlerts', 'orderFill')}
            label="Order Fill"
            id="emailAlerts-orderFill"
          />
          <CheckboxItem
            checked={settings.emailAlerts.stopOrderTrigger}
            onChange={() => toggleSetting('emailAlerts', 'stopOrderTrigger')}
            label="Stop Order Trigger"
            id="emailAlerts-stopOrderTrigger"
          />
          <CheckboxItem
            checked={settings.emailAlerts.orderCancel}
            onChange={() => toggleSetting('emailAlerts', 'orderCancel')}
            label="Order Cancel"
            id="emailAlerts-orderCancel"
          />
          <CheckboxItem
            checked={settings.emailAlerts.marketing}
            onChange={() => toggleSetting('emailAlerts', 'marketing')}
            label="Marketing"
            id="emailAlerts-marketing"
          />
        </div>

        {/* Confirmation Messages Section */}
        <div className="mb-8">
          <h2 className={`text-xl font-semibold mb-3 pb-3 border-b ${
            mode === "dark" ? "border-gray-700 text-gray-100" : "border-gray-200 text-gray-900"
          }`}>
            Confirmation Messages
          </h2>
          <p className={`text-sm mb-6 ${mode === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            We recommend that you enable confirmation before execution of certain actions on Delta Exchange.
          </p>
          
          <CheckboxItem
            checked={settings.confirmations.limitOrder}
            onChange={() => toggleSetting('confirmations', 'limitOrder')}
            label="Limit Order"
            id="confirmations-limitOrder"
          />
          <CheckboxItem
            checked={settings.confirmations.marketOrder}
            onChange={() => toggleSetting('confirmations', 'marketOrder')}
            label="Market Order"
            id="confirmations-marketOrder"
          />
          <CheckboxItem
            checked={settings.confirmations.stopMarketOrder}
            onChange={() => toggleSetting('confirmations', 'stopMarketOrder')}
            label="Stop Market Order"
            id="confirmations-stopMarketOrder"
          />
          <CheckboxItem
            checked={settings.confirmations.stopLimitOrder}
            onChange={() => toggleSetting('confirmations', 'stopLimitOrder')}
            label="Stop Limit Order"
            id="confirmations-stopLimitOrder"
          />
          <CheckboxItem
            checked={settings.confirmations.trailingStopOrder}
            onChange={() => toggleSetting('confirmations', 'trailingStopOrder')}
            label="Trailing Stop Order"
            id="confirmations-trailingStopOrder"
          />
          <CheckboxItem
            checked={settings.confirmations.takeProfitLimitOrder}
            onChange={() => toggleSetting('confirmations', 'takeProfitLimitOrder')}
            label="Take Profit Limit Order"
            id="confirmations-takeProfitLimitOrder"
          />
          <CheckboxItem
            checked={settings.confirmations.takeProfitMarketOrder}
            onChange={() => toggleSetting('confirmations', 'takeProfitMarketOrder')}
            label="Take Profit Market Order"
            id="confirmations-takeProfitMarketOrder"
          />
          <CheckboxItem
            checked={settings.confirmations.fatFingerProtection}
            onChange={() => toggleSetting('confirmations', 'fatFingerProtection')}
            label="Fat Finger Protection"
            description="Confirmation is sought for orders that are placed too deep in the market, or have large size or will lead to excessive slippage."
            id="confirmations-fatFingerProtection"
          />
          <CheckboxItem
            checked={settings.confirmations.alwaysShowOnMobile}
            onChange={() => toggleSetting('confirmations', 'alwaysShowOnMobile')}
            label="Always show on mobile"
            description="On mobile devices, all confirmation messages are enabled by default to protect against fat finger risks."
            id="confirmations-alwaysShowOnMobile"
          />
          <CheckboxItem
            checked={settings.confirmations.orderPlacedFromCharts}
            onChange={() => toggleSetting('confirmations', 'orderPlacedFromCharts')}
            label="Orders placed from charts screen"
            id="confirmations-orderPlacedFromCharts"
          />
        </div>

        {/* General Settings Section */}
        <div className="mb-8">
          <h2 className={`text-xl font-semibold mb-6 pb-3 border-b ${
            mode === "dark" ? "border-gray-700 text-gray-100" : "border-gray-200 text-gray-900"
          }`}>
            General Settings
          </h2>
          
          <CheckboxItem
            checked={settings.general.blinkingEnabled}
            onChange={() => toggleSetting('general', 'blinkingEnabled')}
            label="Enable animations in order book"
            id="general-blinkingEnabled"
          />
          <CheckboxItem
            checked={settings.general.positionForSocialShare}
            onChange={() => toggleSetting('general', 'positionForSocialShare')}
            label="Show position on social sharing cards"
            id="general-positionForSocialShare"
          />
          <CheckboxItem
            checked={settings.general.tradeToOrderBookedPriceFill}
            onChange={() => toggleSetting('general', 'tradeToOrderBookedPriceFill')}
            label="Enable click on chart to select order price levels"
            id="general-tradeToOrderBookedPriceFill"
          />
          <CheckboxItem
            checked={settings.general.showCloseAllPosition}
            onChange={() => toggleSetting('general', 'showCloseAllPosition')}
            label="Show option to close all positions"
            id="general-showCloseAllPosition"
          />
          <CheckboxItem
            checked={settings.general.showOrderOnChart}
            onChange={() => toggleSetting('general', 'showOrderOnChart')}
            label="Show order form on chart screen on mobile"
            id="general-showOrderOnChart"
          />
        </div>
      </div>

      <style jsx>{`
        .row-margin {
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Preferences;
