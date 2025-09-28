import { useNavigate } from "react-router-dom";

export default function Contact() {
    // initialize the useNavigate
    const navigate = useNavigate();

    const submitData = (event) => {
        // prevent the default response on the form submission
        event.preventDefault();

        // captures the data from the form and stores it as key value pair in an object
        const formData = new FormData(event.target);

        // iterate through all the fields to get the data
        for (let [name, value] of formData.entries()) {
            console.log(name, value);

            // stores the key value pair in localStorage
            localStorage.setItem(name, value);

            // sets the duration the data will be stored
            const maxAge = 60 * 60 * 24;

            // creates cookies available for the entire project
            document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + "; path=/; max-age=" + maxAge;
        }

        // navigate to the home page
        navigate("/");
    }
    return (
        <>
            <h2>Contact</h2>
            <div className="leftMessage">Welcome to my Contact Page</div>
            <div className="homeGrid">
                <form onSubmit={submitData}>
                    <fieldset>
                        <legend>Personal Information</legend>

                        <label className="block" htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" required></input>

                        <label className="block" htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" name="firstName" required></input>

                        <label className="block" htmlFor="contactNumber">Contact Number</label>
                        <input type="tel" id="contactNumber" name="contactNumber" placeholder="123-456-78-90" pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}" required></input>

                        <label className="block" htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="sample@email.com" pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" required></input>
                    </fieldset>
                    <fieldset>
                        <legend>Message</legend>
                        <label className="block" htmlFor="message">Provide short message or comment</label>
                        <textarea name="message" id="message"></textarea>
                    </fieldset>
                    <fieldset>
                        <legend>Submission</legend>
                        <input type="submit" value="Submit Message"></input>
                        <input type="reset" value="Reset Fields"></input>
                    </fieldset>
                </form>
            </div>
        </>
    )
}