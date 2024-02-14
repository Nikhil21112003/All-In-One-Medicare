const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});




let suggestions = [
  // "Channel",
  // "CodingLab",
  // "CodingNepal",
  // "YouTube",
  // "YouTuber",
  // "YouTube Channel",
  // "Blogger",
  // "Bollywood",
  // "Vlogger",
  // "Vechiles",
  // "Facebook",
  // "Freelancer",
  // "Facebook Page",
  // "Designer",
  // "Developer",
  // "Web Designer",
  // "Web Developer",
  // "Login Form in HTML & CSS",
  // "How to learn HTML & CSS",
  // "How to learn JavaScript",
  // "How to become Freelancer",
  // "How to become Web Designer",
  // "How to start Gaming Channel",
  // "How to start YouTube Channel",
  // "What does HTML stands for?",
  // "What does CSS stands for?",
  "Sanjivani Hospital, Near Data Mandir, Virar (W)",
  "Arogya Pharma,Karadi Wadi, Vasai West, Vasai, Maharashtra",
  "Sankhe Maternity Hospital, Vishwakarma Estate, Vasai (W)",
  "Dr Kale Hospital, Suyog Nagar, Vasai (W)"
];
