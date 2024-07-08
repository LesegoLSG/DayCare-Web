# Less-Ego Daycare Blog

Less-Ego Daycare Blog is a comprehensive web application that allows authorized users to manage blog posts related to daycare services. The application includes features for adding, updating, and deleting blog posts, along with various sections such as hero, about, services, blog, contact, teams, and testimonials.

## Table of contents
* Introduction
* Features
* Usage
* Challenges
* How to run this project
* Technologies used
* Live Demo
* contributions
* License

## Introduction
Less-Ego Daycare Blog is designed to streamline content management for daycare services. With an intuitive interface and robust backend, the application enables administrators and content creators to efficiently manage blog posts. The application ensures secure access and authorization through Spring Security, providing different levels of access to system admins, admins, and content creators.

## Features
- **Hero Section**: A slider with background images, a heading, and a button to navigate to different sections.
- **About Section**: A heading, paragraph, and a 'Read More' button that navigates to a detailed about page.
- **Services Section**: Showcases six services offered by the daycare, each with a 'Read More' button for detailed information.
- **Blog Section**: Displays blog cards, latest blogs, and upcoming blogs fetched from the backend.
- **Testimonial Section**: Hardcoded testimonials from parents, displayed using a horizontal slider.
- **Teams Section**: Displays team cards.
- **Contact Section**: A contact form that sends messages directly to the admin's email via EmailJS.
- **Admin Portal**:
  - **Dashboard**: Displays system data such as the number of users, blogs, and roles.
  - **Users Management**: Allows authorized users to add, delete, and update users.
  - **Blog Management**: Allows authorized users to add, delete, and update blog posts.
  - **Profile**: Displays logged-in user details and allows profile editing.
- **Authentication and Authorization**: Secure login with Spring Security, supporting roles for system admins, admins, and content creators.

## Usage
- **Admin Login**: Use the login page to authenticate as an admin, content creator, and system admin(at the moment that's me).
- **Dashboard**: View system statistics.
- **Users Management**: Add, update, or delete users (accessible by system admin and admin roles).
- **Blog Management**: Add, update, or delete blog posts (accessible by all roles).
- **Profile**: View and edit profile information.

## Challenges
- Ensuring secure authentication and authorization for different user roles.
- Managing state and data flow between the frontend and backend.
- Implementing a responsive and attractive UI/UX.
- Handling image uploads and storage.

## How to Run the Project
### Backend (Spring Boot)
1. **Clone the Repository**:
    ```sh
    git clone https://github.com/LesegoLSG/DayCare-Web.git
    cd daycare-backend
    ```

2. **Set Up MySQL Database**:
    - Create a MySQL database.
    - Update the `application.properties` file with your database credentials.

3. **Build and Run the Application**:
    ```sh
    mvn clean install
    mvn spring-boot:run
    ```

### Frontend (React)
1. **Navigate to the Frontend Directory**:
    ```sh
    cd ../frontend
    ```

2. **Install Dependencies**:
    ```sh
    npm install
    ```

3. **Run the Application**:
    ```sh
    npm run dev
    ```


## Live demo
    ```
    https://tobeprovided
    ```


## Technologies Used
- **Frontend**: React, Tailwind CSS, CSS
- **Backend**: Spring Boot, Spring Security, Java
- **Database**: MySQL
- **Image Handling**: EmailJS (for contact form)
-**Animation and Transitions**: framer motion and Lottie files

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch ( **git checkout -b feature** )
3. Make your changes and commit them (**git commit -am 'Add new feature'**)
4. Push to the branch (**git push origin feature**)
5. Create a pull request

## License
This project is a personal portfolio project and is not intended for commercial use or distribution. All rights reserved by the author.
