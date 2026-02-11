import { isValidLog, normaliseLog, groupByUser } from './helpers.js'

export function processActivityLogs(logs) {
  // Step 1: validate logs
  const validLogs = []

  for (let i = 0; i < logs.length; i++) {
    if (isValidLog(log[i])) {
      validLogs.push(logs[i])
    }
  }
  // Step 2: normalise data
  const normalisedLogs = []

  for (let i = 0; i < validLogs; i++) {
    normalisedLogs.push(normaliseLog(validLogs[i]))
  }

  // Step 3: group by user
  // Step 4: calculate per-user stats
  // Step 5: calculate global stats
  // Step 6: generate insights
  // Step 7: return final result object
}
