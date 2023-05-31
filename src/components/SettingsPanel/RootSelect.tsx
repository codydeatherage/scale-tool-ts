import { FC } from 'react'
import { ButtonGroup } from '@mui/material'
import { RootsContainer, RootSelectNote } from './styles'
import { RadioGroup, FormControlLabel, Radio } from '@mui/material'

const RootSelect: FC<{ root: string, accidental: string, changeSetting: (field: string, payload: SettingsPayload) => void }> = ({ root, accidental, changeSetting }) => {
    let noteSequence = [];
    switch (accidental) {
        case 'sharp': noteSequence = ['A♯', 'B♯', 'C♯', 'D♯', 'E♯', 'F♯', 'G♯']; break;
        case 'flat': noteSequence = ['A♭', 'B♭', 'C♭', 'D♭', 'E♭', 'F♭', 'G♭']; break;
        default: noteSequence = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    }

    const handleRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeSetting('accidental', (event.target as HTMLInputElement).value)
    }

    return (
        <RootsContainer>
            <RadioGroup
                row
                name="accidental-select"
                value={accidental}
                onChange={handleRadio}
            >
                <FormControlLabel value='natural' control={<Radio />} label='(N)' />
                <FormControlLabel value='sharp' control={<Radio />} label='♯' />
                <FormControlLabel value='flat' control={<Radio />} label='♭' />
            </RadioGroup>
            <ButtonGroup variant="outlined">
                {noteSequence.map((note, index) =>
                    <RootSelectNote
                        active={note === root}
                        key={note + index}
                        onClick={() => { if (note !== root) changeSetting('root', note) }}
                    >
                        {note}
                    </RootSelectNote>
                )}
            </ButtonGroup>
        </RootsContainer>
    )
}

export default RootSelect