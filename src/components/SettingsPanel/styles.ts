import { styled } from '@mui/system'
import {Button} from '@mui/material'

export const SettingsContainer = styled('div')({
    height: '25vh',
    width: 'fit-content',
    padding: 10,
    margin: 'auto',
    borderRadius: '0 0 10px 10px',
    textAlign: 'center',
    backgroundColor: '#003c5c'
})

export const ScaleContainer = styled('div')({
    width: 'fit-content',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    /*   margin: 'auto', */
    '& #toggle': {
        '& button': {
            color: 'white',
            width: '60px',
            fontSize: '20px',
            border: '1px solid #fcbf49',
        },
        '& .Mui-selected': {
            backgroundColor: '#fcbf49',
            color: 'black'
        }
    },
    '& p': {
        margin: 'auto 10px'
    }
})

export const RootsContainer = styled('div')({
    width: 'fit-content',
    margin: 'auto',
    height: 'auto',
    flex: 1,
    display: 'flex',
    alignItems: 'center'
})

export const ScaleDropdown = styled('div')({
    width: 'fit-content',
    height: 'auto',
    display: 'flex',
    '& div': {
        backgroundColor: '#fcbf49',
        color: 'black',
        fontWeight: 'bold',
    },
    '& #combo-box': {
        color: 'black',
        fontWeight: 'bold',
        width: '150px',
    },
    '#combo-box-label': {
        color: 'black',
        fontWeight: 'bold',
    },
})

export const Setting = styled('div')({
    width: '100%',
    color: 'white',
    height: '25%',
    minHeight: '50px',

    textAlign: 'center',
    alignItems: 'center',
    justifyItems: 'center'
})

export const RootSelectNote = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'active'
})<{ active?: boolean }>(({ active }) => ({
    width: 60,
    height: 60,
    backgroundColor: active ? '#fcbf49' : 'none',
    marginLeft: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: active ? 'black' : '#5c5f63',
    borderColor: '#fcbf49',
    '&:hover': {
        backgroundColor: 'white',
        color: 'black'
    }
}))

