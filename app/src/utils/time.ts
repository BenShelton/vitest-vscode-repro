export function secondsToMinutes (seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)

  return `${mins}:${secs.toString().padStart(2, '0')}`
}

export function secondsBetween (time1: number, time2: number): number {
  if (time1 === time2) return 0
  const milliDiff = Math.abs(time1 - time2)
  return milliDiff / 1000
}

export async function sleep (ms: number): Promise<void> {
  return await new Promise(resolve => window.setTimeout(resolve, ms))
}
