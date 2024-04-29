export default function Validation(user) {
    const errors = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const password_pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;
    const names_pattern = /^[a-zA-Z]+$/;
    const contact_pattern = /^\d{10}$/;

    if (user.firstName === "") {
        errors.firstName = "Name is required!";
    } else if (!names_pattern.test(user.firstName)) {
        errors.firstName = "Name should contain only letters, e.g., John";
    }

    if (user.lastName === "") {
        errors.lastName = "Last Name is required!";
    } else if (!names_pattern.test(user.lastName)) {
        errors.lastName = "Last Name should contain only letters, e.g., John";
    }

    if (user.email === "") {
        errors.email = "Email is required";
    } else if (!email_pattern.test(user.email)) {
        errors.email = "Email is not correct";
    }

    if (user.password === "") {
        errors.password = "Password is required";
    } else if (!password_pattern.test(user.password)) {
        errors.password = "Password must contain at least 7 letters, 1 digit, and 1 special character, and have a minimum length of 9 characters.";
    }

    if (user.mobile === "") {
        errors.mobile = "Mobile Number is required!";
    } else if (!contact_pattern.test(user.mobile)) {
        errors.mobile = "Mobile number should contain only 10 digits";
    }

    if (user.role === "") {
        errors.role = "Role cannot be empty, please select a role.";
    }

    return errors;
}