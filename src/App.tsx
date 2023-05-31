import { useReducer } from 'react'
import { Box } from '@mui/material'
import Fretboard from './components/Fretboard'
import Settings from './components/SettingsPanel'
import scales from './scales.json'

const initialState: ScaleInfo = {
  root: 'C',
  scale: scales['Major'],
  tuning: ['E', 'B', 'G', 'D', 'A', 'E'],
  accidental: 'natural',
  numStrings: 6,
  numFrets: 12
}

function reducer(state: ScaleInfo, action: SettingsAction) {
  const { field, payload/* , type */ } = action;

  const changeRoot = (acc: string): string => {
    let newRoot = ''
    const symbol = ((acc === 'sharp' && '♯') || (acc === 'flat' && '♭'));
    if (state.root.length === 1) {
      newRoot = state.root + symbol;
    }
    else if (state.root.length > 1) {
      if (acc === 'natural') {
        newRoot = state.root[0];
      }
      else {
        newRoot = state.root[0] + symbol
      }
    }
    return newRoot
  }

  if (field === 'accidental') {
    return { ...state, root: changeRoot(payload as string), accidental: payload as string }
  }

  return { ...state, [field]: payload }


}

function formatScaleDegrees(degrees: string[]): string {
  let formattedDegrees: string = '';
  for (let i = 0; i < degrees.length; i++) {
    formattedDegrees += degrees[i];
    if (i !== degrees.length - 1) {
      formattedDegrees += ', ';
    }
  }
  return formattedDegrees
}

function App() {
  const [settings, dispatch] = useReducer(reducer, initialState)
  const { degrees, name } = settings.scale;
  const displayDegrees = formatScaleDegrees(degrees)

  const modifySettings = (field: string, payload: SettingsPayload) => {
    dispatch({ field: field, payload: payload })
  }

  console.log('settings', settings)
  return (
    <Box sx={{ height: '100vh', width: '100vw', backgroundColor: '#002649', textAlign: 'center' }}>
      <Settings {...settings} changeSetting={modifySettings} />
      <Box sx={{ height: '200px', color: 'white', fontSize: '25px' }}>
        <h1>{`${settings.root} ${name}`}</h1>
        <h4>{`(${displayDegrees})`}</h4>
      </Box>
      <Fretboard {...settings} />
    </Box>
  )
}

export default App
