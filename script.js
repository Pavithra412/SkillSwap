// Dummy skill data (you can add more later)
const skills = [
    {
      title: "Guitar Fingerpicking",
      category: "Music",
      image: "https://source.unsplash.com/400x300/?guitar",
      description: "Learn how to fingerpick a basic melody.",
      user: "Alex"
    },
    {
      title: "JavaScript Array Tricks",
      category: "Programming",
      image: "https://source.unsplash.com/400x300/?code",
      description: "Map, Filter, and Reduce in 1 minute!",
      user: "Priya"
    },
    {
      title: "Make Dalgona Coffee",
      category: "Cooking",
      image: "https://source.unsplash.com/400x300/?coffee",
      description: "Whip coffee like a pro in 60 seconds.",
      user: "Sara"
    }
  ];
  
  // Function to create and display cards
  function loadCards() {
    const container = document.getElementById("cards-container");
    skills.forEach(skill => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${skill.image}" alt="${skill.title}" />
        <div class="info">
          <h3>${skill.title}</h3>
          <p>${skill.description}</p>
          <p><strong>By:</strong> ${skill.user}</p>
          <span style="font-size: 0.8rem; color: #666;">#${skill.category}</span>
        </div>
      `;
      container.appendChild(card);
    });
  }
  
  // Scroll to feed section when button is clicked
  function scrollToFeed() {
    document.getElementById("feed").scrollIntoView({ behavior: 'smooth' });
  }
  
  // Load cards when the page loads
  loadCards();
  // Add skill from form
document.getElementById("skillForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    // Get values from form
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const image = document.getElementById("image").value;
    const description = document.getElementById("description").value;
    const user = document.getElementById("user").value;
  
    // Create new card
    const newSkill = {
      title,
      category,
      image,
      description,
      user
    };
  
    // Add to skill array and reload the card section
    skills.push(newSkill);
    document.getElementById("cards-container").innerHTML = "";
    loadCards();
  
    // Clear form
    document.getElementById("skillForm").reset();
  });