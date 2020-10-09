const env = process.env.VUE_APP_ENV;
console.log(env, "env");
const apiBaseUrl = {
  dev: "http://192.168.11.53:8080",
  test: "http://121.199.35.201:8080",
  fz: "http://fz.hzyotoy.com:8022",
  pro: ""
};
export const TIMEOUT = 50 * 1000;
export const API_HOST = apiBaseUrl[env];
