import { FC } from 'react'
import { Row, Fret, Note, StringDecoration } from './styles'

interface IString {
    notes: string[], //arr of all notes on this string
    label?: boolean, //if true, repurpose string into a label
    index?: number, //string #
    root?: string, //root of current scale
    scaleSeq?: string[] //note sequence of the scale
}

const String: FC<IString> = ({ notes, label = false, index, root, scaleSeq }) =>
    <Row>
        {!label && <StringDecoration sm={!index || index <= 2} />}
        {notes.map((note: string) =>
            <Fret label={label}>
                {scaleSeq && scaleSeq.includes(note) ?
                    <Note label={label} root={note === root} active>{note}</Note>
                    :
                    <Note label={label}>{note}</Note>
                }
            </Fret>
        )}
    </Row>

export default String
