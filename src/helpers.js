// Helper functions go here
// Keep each function small and focused

export function isValidLog(log) {
  // return true or false
  if (typeof log.user === 'string') return false
  if (log.user.trim() === ' ') return false
  if (typeof log.time === 'number') return false
  if (log.time < 0) return false
  if (
    log.action !== 'click' &&
    log.action !== 'login' &&
    log.action !== 'logout'
  ) {
    return false
  }
  return true
}

export function normaliseLog(log) {
  // return a new, cleaned log object
  return {
    user: log.user.toLowerCase(),
    action: log.action,
    time: log.time,
  }
}

export function groupByUser(logs) {
  // return an object keyed by username
  const groups = {}

  for (let i = 0; i < logs.length; i++) {
    const log = logs[i]
    const user = log.user
    if (!groups[user]) {
      groups[user] = [],
    }
    groups[user].push(log)
  }
  return groups
}
