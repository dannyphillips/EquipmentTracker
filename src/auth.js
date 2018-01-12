import 'isomorphic-fetch';
import qs from 'qs';
import { client, oauth, implicit, me, projects, images } from '@procore/js-sdk';

const clientId = document.head.querySelector('value=client_id').getAttribute('content');
const redirectUri = document.head.querySelector('value=redirect_uri').getAttribute('content');

const accessToken = qs.parse(window.location).access_token;

if ( !accessToken ) {
  window.location = implicit({ id: clientId, uri: redirectUri });
}

const procore = client(oauth(accessToken));
Promise.all([
    procore.get(me()),
    procore.get(projects({ company_id: 2 })),
    procore.get(images({ action: 'most_recent' }))
  ])
})
  .then(onSuccess);