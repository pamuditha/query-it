import { autobind } from 'core-decorators';

export default class Auth {
  constructor($element) {
    this.projectNumber = '780312880514';

    this.initialize();
  }

  initialize() {
    setTimeout( function() {
      this.auth();
    }.bind(this), 500);
  }

  @autobind
  auth() {
    const clientId = '296583778570-oecube77sm0c3oj0n734l78mt0npkhhv.apps.googleusercontent.com';

    var config = {
      'client_id': clientId,
      'scope': 'https://www.googleapis.com/auth/bigquery'
    };

    gapi.auth.authorize(config, () => {
      gapi.client.load('bigquery', 'v2');
    });
  }
}
