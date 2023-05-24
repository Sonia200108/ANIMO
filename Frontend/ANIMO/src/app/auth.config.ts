import { isPlatform } from '@ionic/angular';
import config from '../../capacitor.config';

export const domain = 'dev-vish8e6quuts5zo2.us.auth0.com';
export const clientId = '9qQcMQMEAylpnFy29YNMdUW1jM7BerOx';
const { appId } = config;

// Use `auth0Domain` in string interpolation below so that it doesn't
// get replaced by the quickstart auto-packager
const auth0Domain = domain;
const iosOrAndroid = isPlatform('hybrid');

export const callbackUri = iosOrAndroid
  ? `${appId}://${auth0Domain}/capacitor/${appId}/callback`
  : 'http://localhost:4200';
