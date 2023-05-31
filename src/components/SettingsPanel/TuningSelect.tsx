import { styled } from '@mui/system'

const Container = styled('div')({
    width: '100%',
    textAlign: 'left',
    color: 'white',
    height: 'auto',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    minHeight: '60px',
})

const TuningSelect = () =>{
    return(
        <Container>
            <p>Tuning</p>
        </Container>
    )
}

export default TuningSelect