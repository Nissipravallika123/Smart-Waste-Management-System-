const users = [
  { name: "Amit Sharma", location: "Delhi", role: "Resident" },
  { name: "Riya Patel", location: "Mumbai", role: "Municipal Officer" },
  { name: "Kiran Mehta", location: "Ahmedabad", role: "Waste Truck Driver" },
  { name: "Sara Khan", location: "Bangalore", role: "Recycling Agent" },
  { name: "Rahul Verma", location: "Hyderabad", role: "App User" },
  { name: "Sneha Das", location: "Kolkata", role: "Smart Bin Technician" }
];

document.getElementById("locationBtn").addEventListener("click", () => {
  const userDisplay = document.getElementById("userDisplay");
  userDisplay.innerHTML = ''; // Clear existing content

  users.forEach(user => {
    const div = document.createElement("div");
    div.classList.add("user-card");
    div.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>City:</strong> ${user.location}</p>
      <p><strong>Role:</strong> ${user.role}</p>
    `;
    userDisplay.appendChild(div);
  });
});