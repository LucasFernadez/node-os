const os = require('os');

function getSystemInfo() {
  const systemInfo = {
    nombre: os.platform(),
    tipo: os.type(),
    version: os.version(),
    arquitectura: os.arch(),
    cpus: os.cpus().length, 
    memoriaTotal: (os.totalmem() / (1024 * 1024)).toFixed(2),
    memoriaLibre: (os.freemem() / (1024 * 1024)).toFixed(2), 
  };

  return systemInfo;
}

module.exports = { getSystemInfo };
