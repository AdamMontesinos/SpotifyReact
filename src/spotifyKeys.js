const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientID = "9ad010d156dd470b9cbacb7df9901045";
export const loginUri = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&response_type=token`;
