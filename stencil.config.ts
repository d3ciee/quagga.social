import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'quagga',
  enableCache:true,  
  srcDir:"web/ui/",
  outputTargets: [
    {
      type: 'www',
      dir: 'dist/js',
      serviceWorker: null
    }
  ]
};

