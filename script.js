<script>
document.addEventListener("DOMContentLoaded", function () {
  const gradeSelect = document.getElementById("grade");
  const topicSelect = document.getElementById("topic");

  const topicsByGrade = {
    "Kindergarten": ["Counting", "Shapes", "Addition"],
    "1st Grade": ["Addition", "Subtraction", "Place Value"],
    "2nd Grade": ["Multiplication", "Measurement", "Money"],
    "3rd Grade": ["Division", "Fractions", "Time"],
    "4th Grade": ["Decimals", "Geometry", "Word Problems"],
    "5th Grade": ["Volume", "Graphs", "Equations"],
    "6th Grade": ["Expressions & Equations", "Ratios", "Geometry"],
    "7th Grade": ["Proportional Relationships", "Inequalities", "Probability"],
    "8th Grade": ["Linear Equations", "Functions", "Pythagorean Theorem"],
    "9th Grade": ["Algebra", "Quadratics", "Polynomials"],
    "10th Grade": ["Geometry", "Trigonometry", "Proofs"],
    "11th Grade": ["Pre-Calculus", "Statistics", "Limits"],
    "12th Grade": ["Calculus", "Derivatives", "Integrals"]
  };

  gradeSelect.addEventListener("change", function () {
    const selectedGrade = gradeSelect.value;
    const topics = topicsByGrade[selectedGrade] || [];

    // Clear previous options
    topicSelect.innerHTML = "";

    // Add new options