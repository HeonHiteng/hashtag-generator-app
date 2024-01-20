// ChallengeDetailsPage.js
import React from 'react';
import { useRouter } from 'next/router';
import styles from 'C:/Users/kelvi/Downloads/hashtag-generator-app/styles/ChallengeDetails.module.css';

const ChallengeDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const videoFileName = 'WhatsApp Video 2024-01-20 at 8.56.01 PM.mp4';
  const videoFilePath = `/videos/${videoFileName}`;

  const challengeDetails = {
    title: `Challenge #${id}`,
    description: `Unleash your creativity and join the excitement of our #DIYChallenge!`,
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>#DIY CHALLENGE</h1>
      <div className={styles.videoContainer}>
        <video className={styles.video} controls>
          <source src={videoFilePath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.description}>
        <div className={styles.section}>
          <strong>Description:</strong>
          <p>
            Get ready to roll up your sleeves and dive into creativity with our #DIYChallenge! 🛠️🎨
          </p>
        </div>

        <div className={styles.section}>
          <strong>Challenge:</strong>
          <p>
            Express your artistic flair by creating something amazing from scratch. Whether it's
            crafting, home decor, or a unique project, let your DIY skills shine in this creative
            challenge.
          </p>
        </div>

        <div className={styles.section}>
          <strong>How to Participate:</strong>
          <ul>
            <li>Choose your DIY project or craft idea.</li>
            <li>Show the step-by-step process in your video.</li>
            <li>
              Don't forget to add the #DIYChallenge hashtag to your video description and tag us to
              showcase your masterpiece!
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <p>
            Let your imagination run wild! 🚀✨ Don't miss out on the fun – start creating your
            #DIYChallenge video now! 🎉🔨
          </p>
        </div>

        <div className={styles.section}>
          <p>#CraftyCreations #DIYArtists #CreativeChallenge #HandmadeMagic</p>
        </div>
      </div>
    </div>
  );
};

export default ChallengeDetailsPage;
