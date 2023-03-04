import fs from 'fs'

async function writeHeader(logFile) {
  const today = new Date(Date.now());
  const logHeader = `--------------------------------------------\n| Inicio de log\n| Sesión: ${today.toUTCString()}\n--------------------------------------------\n\n`

  try {
      const fileRead = await fs.promises.readFile(process.cwd() + logFile, 'utf-8');
      const fileWrite = await fs.promises.writeFile(process.cwd() + logFile, fileRead + (fileRead == '' ? logHeader : '\n' + logHeader));
  } catch (e) { console.log('Error! Algo salió mal') }
}

const logsFile = ['/logs/error.log', '/logs/warn.log']

logsFile.forEach(logFile => writeHeader(logFile))
