import React from "react";
import Input from "../Input";
import Button from "../Button";

import styles from "./CreateCourses.module.css";

export default function CreateCourses() {
    return (
        <div className={styles.container}>
            <div className={styles.mainAction}>
                <div className={styles.mainInfo}>
                    <div className={styles.wrapper}>
                        <Input placeholder="Enter title...">Title</Input>

                        <div className={styles.action}>
                            <Button>Create course</Button>
                        </div>
                    </div>
                    <div>
                        <label className={styles.label}>Description</label>
                        <textarea placeholder="Enter description" className={styles.textarea}></textarea>
                    </div>
                </div>

            </div>

            <div className={styles.innerContainer}>

                <div className={styles.leftContainer}>
                    <h2 className={styles.title}>Add Author</h2>
                    <div>
                        <Input placeholder="Enter author name...">Author Name</Input>
                        <Button>Create Author</Button>
                    </div>
                    <div >
                        <h2 className={styles.title}>Duration</h2>
                        <Input placeholder="Enter duration in minutes...">Duration</Input>
                        <p className={styles.duration}>
                            Duration: <span className={styles.span}>00:00</span> hours
                        </p>
                    </div>

                </div>

                <div className={styles.rightContainer}>

                    <h2 className={styles.title}>Authors</h2>
                    <div className={styles.author}>
                        <p>Author Name</p>
                        <Button>Add Author</Button>
                    </div>

                    <div className={styles.author}>
                        <p>Author Name</p>
                        <Button>Add Author</Button>
                    </div>
                    <div className={styles.author}>
                        <p>Author Name</p>
                        <Button>Add Author</Button>
                    </div>
                    <div>
                        <h2 className={styles.title}>Course Authors</h2>

                        <p>Author list is empty</p>
                    </div>
                </div>
            </div>
        </div >
    );
}
