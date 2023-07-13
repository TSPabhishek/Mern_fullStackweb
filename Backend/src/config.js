let BASE_URL = "https://mernappbackend-hpnp.onrender.com/";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "https://mernappbackend-hpnp.onrender.com/";
}

export { BASE_URL };
