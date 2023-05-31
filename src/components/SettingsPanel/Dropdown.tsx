import { FC } from 'react'
import { ScaleDropdown } from './styles'
import { TextField, Autocomplete } from '@mui/material'

const DropDown: FC<{ options: string[], handleChange: (name: ScaleNames) => void }> = ({ options, handleChange }) =>
    <ScaleDropdown>
        <Autocomplete
            disablePortal
            disableClearable
            id='combo-box'
            options={options}
            onChange={(_event, data) => handleChange(data as ScaleNames)}
            sx={{ backgroundColor: '#372e57', color: 'white', borderRadius: '4px' }}
            renderInput={(params) =>
                <TextField
                    {...params}
                    label='Scale'
                    sx={{ borderRadius: '4px' }}
                    InputLabelProps={{ className: "autocompleteLabel" }}
                    InputProps={{
                        ...params.InputProps,
                    }}
                />
            }
        />
    </ScaleDropdown>

export default DropDown