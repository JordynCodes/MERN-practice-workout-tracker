import { useState } from "react";

const WorkoutForm = () => {

    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const workout = {title, load, reps};
        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: { 'Content-Type': 'application/json' }
        });
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        };
        if (response.ok){
            setTitle('');
            setLoad('');
            setReps('');
            setError(null);
        }
    }

    return ( 
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>
            <label>Exercise Title:</label>
            <input 
                type="text" 
                required 
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <label>Load (in lbs):</label>
            <input 
                type="number" 
                required 
                value={load}
                onChange={(event) => setLoad(event.target.value)}
            />
            <label>Number of reps:</label>
            <input 
                type="number" 
                required 
                value={reps}
                onChange={(event) => setReps(event.target.value)}
            />
            <button>Add Workout</button>
            { error && <div className="error">{error}</div> }
        </form>
     );
}
 
export default WorkoutForm;