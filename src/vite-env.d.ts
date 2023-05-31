/// <reference types="vite/client" />
// import scales from './scales.json'

type ScaleNames = "Major" | "Harmonic Major" | "Natural Minor" | "Melodic Minor" |
    "Major Pentatonic" | "Minor Pentatonic" | "Blues" | "Dorian"


type Scale = {
    name: string,
    intervals: number[],
    degrees: string[]
}

type SettingsPayload = number | string | string[] | Scale

interface ScaleInfo {
    numStrings: number,
    numFrets: number,
    root: string,
    scale: Scale,
    tuning: string[],
    accidental: string
}

interface SettingsPanel extends ScaleInfo {
    changeSetting: (field: string, payload: SettingsPayload, type?:string) => void
}

// interface Dispatch {
//     field: string,
//     type?: string,
//     payload: 
// }

interface SettingsAction {
    type?: string,
    field: string,
    payload: SettingsPayload
}

