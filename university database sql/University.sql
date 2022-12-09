CREATE TABLE Students(
    id int not null,
    firstname varchar not null,
    lastname varchar not null,
    student_id_num int not null,
    email varchar not null,
    addres varchar not null,
    birthday date not null,
    sex varchar not null,
    secondery_addres varchar,
    flat_number varchar,
    fk_facultys_id int not null
);
CREATE TABLE Lecturers(
    id int not null,
    firstname varchar not null,
    lastname varchar not null,
    lecturer_id_num int not null,
    email varchar not null,
    addres varchar not null,
    birthday date not null,
    sex varchar not null,
    secondery_addres varchar,
    flat_number varchar,
    bank_num int,
    fk_rank_id int,
    fk_asistants_id int not null
);
CREATE TABLE Rank(
    id int not null,
    rank_name varchar not null
);
CREATE TABLE Assistant_managers(
    id int not null,
    firstname varchar not null,
    lastname varchar not null,
    assistant_manager_id_num int not null,
    email varchar not null,
    addres varchar not null,
    birthday date not null,
    sex varchar not null,
    secondery_addres varchar null,
    flat_number varchar null,
    bank_num int null
);
CREATE TABLE Facultys(
    id int not null,
    faculty_name varchar not null,
    fk_courses_id int not null
);
CREATE TABLE Courses(
    id int not null,
    course_name varchar not null,
    fk_subjects_id int not null
);
CREATE TABLE Subjects(
    id int not null,
    subject_name varchar not null,
    fk_lectures_id int not null,
    fk_lecturers_id int not null
);
CREATE TABLE Lectures(
    id int not null,
    lecture_time time not null
);



INSERT INTO Students (id, firstname, lastname, student_id_num, email, addres, birthday, sex, secondery_addres, flat_number, fk_facultys_id)
values (1, 'Davit', 'Beridze', '61001111002', 'dberidze@gmail.com', '54 Aghmashenebeli avenue', '31-12-1992', 'Mr', '38 Gorgasali street', 122, 1),
(2, 'Nikoloz', 'Kapanadze', '65002311002', 'nkapanadze@gmail.com', '21 Chavchavadze street', '10-11-1990', 'Mr', '22 Rustaveli street', 12, 1),
(3, 'Nino', 'Giorgadze', '65002311321', 'ngiorgadze@gmail.com', '25 Asatiani street', '11-01-1991', 'Mrs', '31 Bagrationi street', 19, 2),
(4, 'Soso', 'Jugeli', '65002224891', 'sjugeli@gmail.com', '24 Pirosmani street', '05-01-1990', 'Mrs', '7 Aghmashenebeli street', 1, 2),
(4, 'Mariam', 'Jgenti', '65002224522', 'mjgenti@gmail.com', '2 Pirosmani street', '01-07-1988', 'Mrs', '56 Aghmashenebeli street', 14, 3);


INSERT INTO Lecturers (id, firstname, lastname, lecturer_id_num , email, addres, birthday, sex, secondery_addres, flat_number, bank_num, fk_rank_id, fk_asistants_id)
VALUES (1, 'Sesili', 'Gachechiladze', '68001166997', 'sgachechiladze@gmail.com', '82 Zubalashvili street', '24-05-1987',  'Mrs', '82 Eliava street', 21, 021549546311487, 1, 1),
 (2, 'Anzor', 'Gabelia', '680023123291', 'agabelia@gmail.com', '2 Bagrationi street', '12-08-1988', 'Mr', '72 Eliava street',  15, 021549542345234487, 2, 2);

INSERT INTO Assistant_managers (id, firstname, lastname, assistant_manager_id_num, email, addres, birthday, sex, secondery_addres, flat_number, bank_num)
VALUES (1, 'Giorgi', 'Bagrationi', 021544233138, 'gbagrationi@gmail.com', '20 Gorgasali', '30-08-1985', 'Mr', '1 Khimshiashvili street', 76, 576879698579856),
(2, 'Zaur', 'Lazishvili', 02154942354, 'zlazi@gmail.com', '40 Javaxishvili', '30-08-1987', 'Mr', '2 Jafaridze street', 20, 576879698799856);

INSERT INTO Rank(id, rank_name)
VALUES (1, 'Professor'), (2, 'Asistent proffesor');

INSERT INTO Facultys(id, faculty_name, fk_courses_id)
VALUES (1, 'Computer sience', 1),  (2, 'Math', 2), (3, 'Architecture', 3);
  
INSERT INTO Courses(id, course_name, fk_subjects_id)
VALUES (1, 'I', 1), (2, 'II', 2), (3, 'III', 3), (4, 'IV', 3);
  
INSERT INTO Subjects (id, subject_name, fk_lectures_id, fk_lecturers_id )
VALUES (1, 'GitHUB', 1, 1), (2, 'Development', 1, 2), (3, 'Algorithms', 1, 1), (4, 'Algebra', 2, 2), (5, 'Archicad', 2, 1), (6, 'English', 2, 2);

INSERT INTO Lectures (id, lecture_time)
VALUES (1, '09:00'), (2, '10:00'), (3, '11:00'), (4, '12:00');



/* გამოვიტანოთ რომელ ფაკულტეტზე სწავლობენ სტუდენტები */
SELECT students.firstname, students.lastname,  student_id_num, facultys.faculty_name
FROM facultys
LEFT JOIN students
ON students.fk_facultys_id = facultys.id;

/* გამოვიტანოთ რა საგნებს ასწავლიან ლეცტორები */
SELECT Subjects.subject_name, Lecturers.firstname, Lecturers.lastname,  Lecturers.lecturer_id_num, Lecturers.email, Lecturers.sex
FROM Lecturers
LEFT JOIN Subjects
ON Lecturers.id = Subjects.fk_lecturers_id;


/* დაბეჭდავს ინფორმაციას სტუდენტებზე)*/
SELECT   Facultys.faculty_name, Subjects.subject_name,  Students.firstname, Students.lastname,   Courses.course_name, Lectures.lecture_time, Lecturers.firstname, Lecturers.lastname
FROM Students
INNER JOIN Facultys
ON Students.fk_facultys_id = Facultys.id
INNER JOIN Courses
ON Facultys.fk_courses_id = Courses.id 
INNER JOIN Subjects
ON Courses.fk_subjects_id = Subjects.id
INNER JOIN Lectures
ON Subjects.fk_lectures_id = Lectures.id
INNER JOIN Lecturers
ON Subjects.fk_lecturers_id = Lecturers.id



