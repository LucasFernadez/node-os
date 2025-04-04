const { getSystemInfo } = require('./osModule');
const { getNetworkInterfaces } = require('./networkModule');

const systemInfo = getSystemInfo();
console.log('Información del Sistema Operativo:');
console.log(`Nombre: ${systemInfo.nombre}`);
console.log(`Tipo: ${systemInfo.tipo}`);
console.log(`Versión: ${systemInfo.version}`);
console.log(`Arquitectura: ${systemInfo.arquitectura}`);
console.log(`CPUs: ${systemInfo.cpus}`);
console.log(`MemoriaTotal: ${systemInfo.memoriaTotal} MB`);
console.log(`MemoriaLibre: ${systemInfo.memoriaLibre} MB`);

console.log('\nInformación de las Interfaces de Red:');
const networkInterfaces = getNetworkInterfaces();
networkInterfaces.forEach((iface) => {
  console.log(`\nInterfaz ${iface.interfaz}:`);
  console.log(`  Familia: ${iface.familia}`);
  console.log(`  Dirección: ${iface.direccion}`);
  console.log(`  Interno: ${iface.interno}`);
});
