/**
 * Export Composable
 * Provides export functionality for stats data
 */

export function useExport() {
  /**
   * Export user history to CSV
   */
  function exportToCSV(username, historyData) {
    const headers = ['Date', 'Time', 'Source', 'Reason', 'Amount', 'Day of Week']
    const rows = historyData.map(record => [
      record.date,
      new Date(record.timestamp.seconds * 1000).toLocaleTimeString(),
      record.source,
      record.reason,
      record.amount,
      ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][record.dayOfWeek]
    ])
    
    const csv = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n')
    
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${username}_handout_history_${Date.now()}.csv`
    link.click()
    URL.revokeObjectURL(url)
  }
  
  /**
   * Export chart to PNG (using Chart.js toBase64Image)
   */
  function exportChartToPNG(chartRef, filename) {
    if (!chartRef?.value?.chart) return
    
    const url = chartRef.value.chart.toBase64Image()
    const link = document.createElement('a')
    link.href = url
    link.download = `${filename}_${Date.now()}.png`
    link.click()
  }
  
  /**
   * Print stats page as PDF
   */
  function printToPDF() {
    window.print() // Uses browser's print dialog with "Save as PDF"
  }
  
  return {
    exportToCSV,
    exportChartToPNG,
    printToPDF
  }
}
