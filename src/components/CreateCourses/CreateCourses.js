import React, { useState, useEffect } from "react";
import Input from "../Common/Input";
import Button from "../Common/Button";
import { formatDuration } from "../Helpers/utils";

import styles from "./CreateCourses.module.css";

export default function CreateCourses({ onCreateCourse, authors }) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');
    const [enteredDuration, setEnteredDuration] = useState('');
    const [availableAuthors, setAvailableAuthors] = useState(authors);
    const [addedAuthors, setAddedAuthors] = useState([]);

    const createCourseHandler = () => {
        if (!enteredTitle || !enteredDescription || addedAuthors.length === 0 || enteredDuration < 60) {
            alert('Please fill all of the inputs before submit!');
            return;
        }
        const course = {
            authors: addedAuthors.map((author) => author.id),
            creationDate: new Date().toLocaleString().split(',')[0],
            description: enteredDescription,
            duration: +enteredDuration,
            title: enteredTitle,
            id: enteredTitle + Math.random().toString(),


        }

        onCreateCourse(course)

        setEnteredTitle('');
        setEnteredDescription('');
        setEnteredAuthor('');
        setEnteredDuration('');
    }

    const duration = formatDuration(enteredDuration)


    const addNewAuthor = () => {
        if (!enteredAuthor) {
            alert('Please fill all of the inputs before submit!');
            return;
        }

        const author = {
            name: enteredAuthor,
            id: enteredAuthor + Math.random().toString(),
        };

        setAvailableAuthors([...authors, author])

        setEnteredAuthor('');
    }

    const addAuthorHandler = (currentAuthor) => {
        setAddedAuthors([...addedAuthors, currentAuthor])

        setAvailableAuthors(availableAuthors.filter(author => author.id !== currentAuthor.id))
    }

    const deleteAuthorHandler = (currentAuthor) => {
        setAvailableAuthors([...availableAuthors, currentAuthor])

        setAddedAuthors(addedAuthors.filter(author => author.id !== currentAuthor.id))
    }

    return (
        <div className={styles.container}>
            <div className={styles.mainAction}>
                <div className={styles.mainInfo}>
                    <div className={styles.wrapper}>
                        <Input value={enteredTitle} placeholder="Enter title..." onChange={(e) => setEnteredTitle(e.target.value)}>Title</Input>

                        <div className={styles.action}>
                            <Button type="submit" onClick={createCourseHandler}>Create course</Button>
                        </div>
                    </div>
                    <div>
                        <label className={styles.label}>Description</label>
                        <textarea value={enteredDescription} placeholder="Enter description" className={styles.textarea} onChange={(e) => setEnteredDescription(e.target.value)}></textarea>
                    </div>
                </div>

            </div>

            <div className={styles.innerContainer}>

                <div className={styles.leftContainer}>
                    <h2 className={styles.title}>Add Author</h2>
                    <div>
                        <Input value={enteredAuthor} placeholder="Enter author name..." onChange={(e) => setEnteredAuthor(e.target.value)}>Author Name</Input>
                        <Button onClick={addNewAuthor}>Create Author</Button>
                    </div>
                    <div >
                        <h2 className={styles.title}>Duration</h2>
                        <Input type="text" pattern="[0-9]*" value={enteredDuration} placeholder="Enter duration in minutes..." onChange={(e) => setEnteredDuration(e.target.value)}>Duration</Input>
                        <p className={styles.duration}>
                            Duration: <span className={styles.span}>{duration}</span>
                        </p>
                    </div>

                </div>

                <div className={styles.rightContainer}>

                    <h2 className={styles.title}>Authors</h2>
                    {availableAuthors.map(author => {
                        return <div key={author.id} className={styles.author}>
                            <p className={styles.authorName}>{author.name}</p>
                            <Button onClick={() => addAuthorHandler(author)}>Add Author</Button>
                        </div>
                    })}
                    <div>
                        <h2 className={styles.title}>Course Authors</h2>
                        {addedAuthors.length === 0 && <p className={styles.authorList}>Author list is empty</p>}
                        {addedAuthors.map(author => (
                            <div key={author.id} className={styles.author}>
                                <p className={styles.authorName}>{author.name}</p>
                                <Button onClick={() => deleteAuthorHandler(author)}>Delete Author</Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
