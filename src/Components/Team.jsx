import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    { 
      id: 1, 
      name: 'Alice Johnson', 
      role: 'Frontend Developer', 
      bio: 'Expert in React and UI/UX design.',
      image: 'https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/625956681_1464644681843898_5054813199230754454_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=7qpPWLEXAGUQ7kNvwF-fybO&_nc_oc=AdlN7g6PQohWIq7g-hrQIBbn_eic7KIAp6FkXEL9HrV5MlsjIMfBVY5VJ-bHMJb3Ybc&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=xHvR63fMKCv40YYz9HaQcg&oh=00_AftZrxpHM3B9ehKOgllUku0EzTsTMZ2ejU-b-kdFieUveA&oe=698D605D'
    },
    { 
      id: 2, 
      name: 'Bob Smith', 
      role: 'Backend Developer', 
      bio: 'Node.js and Database specialist.',
      image: 'https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/605581030_1166788138872956_8226082897301512042_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_ohc=H-UsJx1KydAQ7kNvwGlMBxr&_nc_oc=AdlynlEY_afVtbF6AJmFdbcCsi4DVWevgnB0eUA9nuZyirFYa-o3ai_fgz1DPZ13FU4&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=zSpW19IpmF3lx5ha7sYS9A&oh=00_AfvJ2g-yO8LJSgKnlZjvjrygVxJUh_1VZSfQKpKgRBRmrw&oe=698D62C7'
    },
    { 
      id: 3, 
      name: 'Charlie Davis', 
      role: 'UI/UX Designer', 
      bio: 'Creating beautiful user experiences.',
      image: 'https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/625956681_1464644681843898_5054813199230754454_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=7qpPWLEXAGUQ7kNvwF-fybO&_nc_oc=AdlN7g6PQohWIq7g-hrQIBbn_eic7KIAp6FkXEL9HrV5MlsjIMfBVY5VJ-bHMJb3Ybc&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=xHvR63fMKCv40YYz9HaQcg&oh=00_AftZrxpHM3B9ehKOgllUku0EzTsTMZ2ejU-b-kdFieUveA&oe=698D605D'
    },
    { 
      id: 4, 
      name: 'Diana Prince', 
      role: 'Project Manager', 
      bio: 'Keeping the team on track and organized.',
      image: 'https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/547955721_1086847286867042_4291512936221106581_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=71SBfU_wEs8Q7kNvwFXB5af&_nc_oc=AdmKP0Tk9G-z6zgLED5rVDxaeykumaL9n7MMpaJf8CYYjKuPpNaJFRXRam5rlK4ncnY&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=yVfw5Idtlu0_tXv0PrLhrA&oh=00_AftVP7OZfJOv9_Tgwj3k7P1_b0A9JdjGbW2EycN4q33HuQ&oe=698D4AC6'
    },
  ];

  return (
    <div className="team-container">
      <h1>Our Team</h1>
      <p className="team-subtitle">Meet the experts behind our project.</p>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <div className="member-avatar">
              <img src={member.image} alt={member.name} className="member-img" />
            </div>
            <h3>{member.name}</h3>
            <p className="member-role">{member.role}</p>
            <p className="member-bio">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
