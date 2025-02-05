const os = require('os');

function formatUptime(uptime_sec) {
  const days = Math.floor(uptime_sec/(24*3600));
  const hours = Math.floor((uptime_sec%(24*3600))/3600);
  const minutes = Math.floor((uptime_sec%3600)/60);
  const seconds = Math.floor(uptime_sec%60);
  return `${days}days,${hours}hours,${minutes}minutes,${seconds}seconds`;
}

function logUptime() {
  setInterval(() => {
    const uptime_sec = os.uptime();
    const format_uptime = formatUptime(uptime_sec);
    console.log(`System Uptime: ${format_uptime}`);
  }, 5000); 
}
logUptime();