import { FC } from 'react'
import { ToggleButtonGroup, ToggleButton, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import scales from '../../scales.json'
import DropDown from './Dropdown'
import { ScaleContainer } from './styles'

const ScaleSelect: FC<SettingsPanel> = ({ accidental, changeSetting }) => {

    const handleChange = (name: ScaleNames) => changeSetting('scale', scales[name])

    return (
        <ScaleContainer>
            <DropDown
                options={Object.keys(scales)}
                handleChange={handleChange}
            />
        </ScaleContainer>
    )
}

export default ScaleSelect