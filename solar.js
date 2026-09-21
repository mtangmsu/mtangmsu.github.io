export const LAT = 39.407, LON = -84.09;
// Convert Eastern wall-clock time independently of the browser's own timezone.
export function easternDate(day, minutes) {
  const [y,m,d] = day.split('-').map(Number);
  const wall = Date.UTC(y,m-1,d,Math.floor(minutes/60),minutes%60);
  let utc = wall;
  const fmt = new Intl.DateTimeFormat('en-US',{timeZone:'America/New_York',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23'});
  for(let i=0;i<3;i++) {
    const p=Object.fromEntries(fmt.formatToParts(new Date(utc)).map(p=>[p.type,p.value]));
    const represented=Date.UTC(+p.year,+p.month-1,+p.day,+p.hour,+p.minute,+p.second);
    utc += wall-represented;
  }
  return new Date(utc);
}
export function sunPosition(day,minutes) {
  const date=easternDate(day,minutes), p=globalThis.SunCalc.getPosition(date,LAT,LON);
  return {date,altitude:p.altitude,azimuth:(p.azimuth+Math.PI+2*Math.PI)%(2*Math.PI)};
}
