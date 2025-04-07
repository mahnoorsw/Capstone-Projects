import { useState } from "react"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"
import Die from "./components/Die";
import './css/Tenzies.css';

export default function Tenzies() {
    // it initialize useState (lazy state) many times that would be more expensive
    // const [dice, setDice] = useState(generateAllNewDice())

    // it initialize useState (lazy state) one time that would be less expensive
    const [dice, setDice] = useState(() => generateAllNewDice())

    const gameWon = dice.every(die => die.isHeld) &&
        dice.every(die => die.value === dice[0].value)

    function generateAllNewDice() {
        // first way to generate 10 random numbers between 1 and 6
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            }))

        // second way to generate 10 random numbers between 1 and 6
        // const newDice = []
        // for (let i = 0; i < 10; i++) {
        //     const rand = Math.ceil(Math.random() * 6)
        //     newDice.push(rand)
        // }
        // return newDice
    }
    // console.log(generateAllNewDice())
    function rollDice() {
        if (!gameWon) {
            setDice(oldDice => oldDice.map(die =>
                die.isHeld ?
                    die :
                    { ...die, value: Math.ceil(Math.random() * 6) }
            ))
        } else {
            setDice(generateAllNewDice())
        }
    }

    function hold(id) {
        setDice(oldDice => oldDice.map(die =>
            die.id === id ?
                { ...die, isHeld: !die.isHeld } :
                die
        ))
    }

    const diceElements = dice.map(dieObj => (
        <Die
            key={dieObj.id}
            value={dieObj.value}
            isHeld={dieObj.isHeld}
            hold={() => hold(dieObj.id)}
        />
    ))

    return (
        <>
            <main className="tenzies-main-container">
                {gameWon && <Confetti />}
                <h1 className="tenzies-title">Tenzies</h1>
                <p className="tenzies-instructions">Roll until all dice are the same.
                    <br /> {/* Line break */}
                    Click each die to freeze it at its current value between rolls.</p>

                <div className="dice-container">
                    {diceElements}
                </div>
                <br /> {/* Line break */}
                <div>
                    <button className="roll-dice" onClick={rollDice}>
                        {gameWon ? "New Game" : "Roll"}
                    </button>
                </div>
            </main>
        </>
    )
}
