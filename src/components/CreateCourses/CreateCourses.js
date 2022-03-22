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
    const [availableAuthors, setAvailableAuthors] = useState([]);
    const [addedAuthors, setAddedAuthors] = useState([]);

    useEffect(() => {
        setAvailableAuthors([...authors]);
    }, [authors]);

    const createCourseHandler = () => {
        console.log(enteredTitle, enteredDescription, addedAuthors, enteredDuration)
        if (enteredTitle.trim().length === 0 || enteredDescription.trim().length === 0 || addedAuthors.trim().length === 0 || enteredDuration.trim().length === 0) {
            return
        }
        // onCreateCourse(enteredTitle, enteredDescription, currentCourseAuthors, enteredDuration);
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

        setAvailableAuthors((prevAuthorsList) => {
            return [...prevAuthorsList, author];
        })
        setEnteredAuthor('');
    }

    const addAuthorHandler = (e) => {
        const target = e.target;
        const parent = target.parentElement;
        const newAuthor = parent.firstChild.innerText;

        setAddedAuthors((prevAuthorsList) => {
            return [...prevAuthorsList, newAuthor]
        })
    }

    const deleteAuthorHandler = () => { }

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
                            <Button onClick={addAuthorHandler}>Add Author</Button>
                        </div>
                    })}
                    <div>
                        <h2 className={styles.title}>Course Authors</h2>
                        {addedAuthors.length === 0 && <p className={styles.authorList}>Author list is empty</p>}
                        {addedAuthors.map(author => {
                            return <div key={author.id} className={styles.author}>
                                <p className={styles.authorName}>{author}</p>
                                <Button onClick={deleteAuthorHandler}>Delete Author</Button>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
