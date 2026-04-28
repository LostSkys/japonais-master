import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'applangue',
  webDir: 'dist',
  server: {
    androidScheme: 'https', // Force le schéma en https pour rassurer Android
    allowNavigation: ['https://ton-site.netlify.app'] // Autorise ton lien Netlify
  }
};

export default config;
