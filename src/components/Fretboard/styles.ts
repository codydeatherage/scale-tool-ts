import { styled } from '@mui/system'

export const Row = styled('div')({
    position: 'relative',
    width: '100%',
    display: 'flex',
})

export const Fret = styled('div', {
    shouldForwardProp: (prop) => prop !== 'label'
})<{ label: boolean }>(({ label }) => ({
    flex: 1,
    height: '30px',
    color: label ? 'black' : 'white',
    borderLeft: label ? 'none' : '3px solid #FCBF49',
    borderRight: label ? 'none' : '3px solid #FCBF49',
    zIndex: 99,
    padding: '2px',
}))

export const StringDecoration = styled('div', {
    shouldForwardProp: (prop) => prop !== 'sm'
})<{ sm: boolean }>(({ sm }) => ({
    position: 'absolute',
    height: '35%',
    top: 0,
    width: '100%',
    borderBottom: sm ? '3px solid #FCBF49' : '6px solid #FCBF49',
    zIndex: 0,
}))

export const Note = styled('div', {
    shouldForwardProp: (prop) => prop !== 'label' && prop !== 'root' && prop !== 'active'
})<{ label: boolean, root?: boolean, active?: boolean }>(({ label, root, active }) => ({
    borderRadius: '40px',
    width: label ? '100%' : '30px',
    height: '30px',
    backgroundColor: label ? '#432818' : (root ? 'white' : (active ? '#D62828' : '#002649')),
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: '30px',
    margin: 'auto',
    color: root ? 'black' : active || label ? 'white' : '#5c5f63',
    '&:hover': {
        backgroundColor: '#fcbf49',
        width: label ? '100%' : '30px',
        height: '30px',
        color: active || label ? 'black' : 'gray'
    }
}))