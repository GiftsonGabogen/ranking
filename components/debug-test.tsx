import React from 'react';

export function DebugTest() {
  return (
    <div className="p-8 space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Design Token CSS Variables Test</h1>
        <p className="text-muted-foreground">Testing if CSS variables are properly loaded and accessible.</p>
      </div>

      {/* Primary Colors Test */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Primary Colors</h2>
        <div className="grid grid-cols-6 gap-2">
          {['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'].map((shade) => (
            <div key={shade} className="space-y-2">
              <div 
                className="w-16 h-16 rounded border"
                style={{ backgroundColor: `var(--color-primary-${shade})` }}
              />
              <p className="text-xs text-center">{shade}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Neutral Colors Test */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Neutral Colors</h2>
        <div className="grid grid-cols-6 gap-2">
          {['0', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950', '1000'].map((shade) => (
            <div key={shade} className="space-y-2">
              <div 
                className="w-16 h-16 rounded border"
                style={{ backgroundColor: `var(--color-neutral-${shade})` }}
              />
              <p className="text-xs text-center">{shade}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Success Colors Test */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Success Colors</h2>
        <div className="grid grid-cols-6 gap-2">
          {['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'].map((shade) => (
            <div key={shade} className="space-y-2">
              <div 
                className="w-16 h-16 rounded border"
                style={{ backgroundColor: `var(--color-success-${shade})` }}
              />
              <p className="text-xs text-center">{shade}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Warning Colors Test */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Warning Colors</h2>
        <div className="grid grid-cols-6 gap-2">
          {['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'].map((shade) => (
            <div key={shade} className="space-y-2">
              <div 
                className="w-16 h-16 rounded border"
                style={{ backgroundColor: `var(--color-warning-${shade})` }}
              />
              <p className="text-xs text-center">{shade}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Error Colors Test */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Error Colors</h2>
        <div className="grid grid-cols-6 gap-2">
          {['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'].map((shade) => (
            <div key={shade} className="space-y-2">
              <div 
                className="w-16 h-16 rounded border"
                style={{ backgroundColor: `var(--color-error-${shade})` }}
              />
              <p className="text-xs text-center">{shade}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Variable Values Display */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">CSS Variable Values</h2>
        <div className="bg-neutral-50 p-4 rounded-lg font-mono text-sm space-y-1">
          <div>--color-primary-500: <span style={{ color: 'var(--color-primary-500)' }}>var(--color-primary-500)</span></div>
          <div>--color-success-500: <span style={{ color: 'var(--color-success-500)' }}>var(--color-success-500)</span></div>
          <div>--color-warning-500: <span style={{ color: 'var(--color-warning-500)' }}>var(--color-warning-500)</span></div>
          <div>--color-error-500: <span style={{ color: 'var(--color-error-500)' }}>var(--color-error-500)</span></div>
        </div>
      </div>
    </div>
  );
}