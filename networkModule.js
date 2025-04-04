const os = require('os');

function getNetworkInterfaces() {
  const networkInterfaces = os.networkInterfaces();
  const interfacesInfo = [];

  for (const iface in networkInterfaces) {
    networkInterfaces[iface].forEach(details => {
      interfacesInfo.push({
        interfaz: iface,
        familia: details.family,
        direccion: details.address,
        interno: details.internal,
      });
    });
  }

  return interfacesInfo;
}

module.exports = { getNetworkInterfaces };
