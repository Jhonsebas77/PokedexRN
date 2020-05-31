import React from 'react'
import Router from './routes'
import { View, YellowBox } from 'react-native'
import ThemeProvider from './Helpers/Theme/theme.provider'
console.disableYellowBox = true
YellowBox.ignoreWarnings([
  'Encountered an error loading page',
  'Deprecation warning: moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
  'Task orphaned for request ',
  'Remote debugger is in a background tab which may cause apps to perform slowly'
])
console.error = (error) => error.apply

export function App() {
  return (
    <View style={{ flex: 1 }}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </View>
  )
}
export default App