import { useNavigate } from "react-router-dom";

export default function Contact() {
    const navigate = useNavigate();

    const submitData = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        for (let [name, value] of formData.entries()) {
            console.log(name, value);
            localStorage.setItem(name, value);
            const maxAge = 60 * 60 * 24;
            document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + "; path=/; max-age=" + maxAge;
        }
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