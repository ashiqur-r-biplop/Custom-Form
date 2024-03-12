// load users leads
const fetchData = async () => {
  try {
    const response = await fetch(
      "https://conditional-drop-down-menu-backend.vercel.app/users"
    );
    const data = await response?.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

// Arrow function to render data from an array of objects
const renderData = (data) => {
  console.log(data);
  const container = document.getElementById("lead-data-table");
  if (!data) {
    container.innerHTML = "<p>Error fetching data</p>";
    return;
  }

  // Clear previous content
  container.innerHTML = "";

  // Iterate over the array of objects and render each item
  data?.forEach((item, i) => {
    const { email, name, number, selectedTime } = item;
    const itemElement = document.createElement("tr");
    itemElement.classList = "lead-row";
    itemElement.innerHTML = `
    <td class="lead-count">${i + 1}</td>
    <td>${name}</td>
    <td>${email}</td>
    <td>${number}</td>
    <td>${selectedTime}</td>
    `; // Example properties, replace with your own
    container.appendChild(itemElement);
  });
};

// Function to fetch data when the page loads
const loadData = async () => {
  const data = await fetchData();
  renderData(data);
};

// Function to handle the PDF download button click event
const handleDownload = () => {
  document.getElementById("download").addEventListener("click", () => {
    const dataContainer = document.getElementById("download-container");
    const opt = {
      margin: 1,
      filename: "Leads.pdf",
      image: { type: "jpeg", quality: 100 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "landscape" },
    };
    html2pdf().from(dataContainer).set(opt).save();
  });
};

// Execute both functions when the window loads
window.onload = () => {
  loadData();
  handleDownload();
};
