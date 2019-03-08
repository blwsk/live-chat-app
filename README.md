# `live-chat-app`

## Local dev

Create a `.env` file containing:

```
REACT_APP_FIREBASE_API_KEY=...
REACT_APP_FIREBASE_AUTH_DOMAIN=...
REACT_APP_FIREBASE_DATABASE_URL=...
REACT_APP_FIREBASE_PROJECT_ID=...
REACT_APP_FIREBASE_STORAGE_BUCKET=...
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=...
```

then:

```bash
yarn start
```

## Deployment with `now`

Using the `.env` created above and the existing `now.sh` script:

```bash
chmod +x now.sh

./now.sh
```
