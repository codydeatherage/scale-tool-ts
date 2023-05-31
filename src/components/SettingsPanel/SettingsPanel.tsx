import { FC } from 'react'
import RootSelect from './RootSelect'
import ScaleSelect from './ScaleSelect'
import TuningSelect from './TuningSelect'
import { SettingsContainer, Setting } from './styles'

const SettingsPanel: FC<SettingsPanel> = (props) => {
    const { changeSetting, root, accidental } = props;

    return (
        <SettingsContainer>
            <Setting>
                <RootSelect changeSetting={changeSetting} root={root} accidental={accidental} />
            </Setting>
            <Setting sx={{ marginTop: 2 }}>
                <ScaleSelect {...props} />
            </Setting>
            <Setting>
                <TuningSelect />
            </Setting>
        </SettingsContainer>
    )
}
export default SettingsPanel