import {useState} from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (event) => {
        // prevent submission to browser!
        event.preventDefault()

        if (!text) {
            alert("Please fill in the text")
            return
        }

        onAdd({
            text: text,
            day: day,
            reminder: reminder
        })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (

        <form onSubmit={onSubmit} >
            <div>
                <label>Task</label>
                <input type="text" value={text} placeholder="Add text"
                       onChange={event => setReminder(setText(event.target.value))}/>
            </div>

            <div>
                <label>Day & Time</label>
                <input type="text" value={day} placeholder="Add day"
                       onChange={event => setReminder(setDay(event.target.value))}/>
            </div>

            <div>
                <label>Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder}
                       onChange={event => setReminder(event.currentTarget.checked)}/>
            </div>

            <input type="submit" value="Save Task" className="btn btn-block"/>
        </form>
    )
}

export default AddTask

