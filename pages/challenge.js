// pages/challenge.js

import React from 'react';
import styles from '../styles/challenge.module.css'; // Import your CSS module
import Image from 'next/image'; // Import the Image component from Next.js

const challenges = [
    {
      id: 1,
      title: '#CNY Challenge ',
      description: 'Do a transition with your Chinese New Year outfit.',
      reward: 'Reward: 1 coin',
      icon: '/icon1.png', // Replace with the path to your image/icon
    },
    {
      id: 2,
      title: '#Dance Challenge',
      description: 'Show off your dance moves and groove to the beat.',
      reward: 'Reward: 2 coins',
      icon: '/icon1.png', // Replace with the path to your image/icon
    },
    {
      id: 3,
      title: '#Foodie Challenge',
      description: 'Share your favorite recipe or food creation.',
      reward: 'Reward: 3 coins',
      icon: '/icon1.png', // Replace with the path to your image/icon
    },
    {
      id: 4,
      title: '#Travel Challenge',
      description: 'Take us on a virtual tour of your favorite destination.',
      reward: 'Reward: 4 coins',
      icon: '/icon1.png', // Replace with the path to your image/icon
    },
    {
      id: 5,
      title: '#DIY Challenge',
      description: 'Get creative and showcase your DIY project or craft.',
      reward: 'Reward: 5 coins',
      icon: '/icon1.png', // Replace with the path to your image/icon
    },
    {
      id: 6,
      title: '#Fitness Challenge',
      description: 'Share your workout routine and fitness journey.',
      reward: 'Reward: 6 coins',
      icon: '/icon1.png', // Replace with the path to your image/icon
    },
    
  ];

function ChallengePage() {
  return (
    <div className={styles.challengesList}>
      {challenges.map((challenge) => (
        <div key={challenge.id} className={styles.challengeBox}>
          <Image
            src={challenge.icon}
            alt={`Icon for ${challenge.title}`}
            width={64}
            height={64}
          />
          <h2>{challenge.title}</h2>
          <p>{challenge.description}</p>
          <p>Reward: {challenge.reward}</p>
        </div>
      ))}
    </div>
  );
}

export default ChallengePage;

