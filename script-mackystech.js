// Sample data with certificate serial numbers, names, and dates of issue

const certificates = [
    {
        serialNumber: "MTPL/PR/2024/1001",
        name: "Saloni Kushwaha",
        dateOfIssue: "2023-08-01"
    },
    {
        serialNumber: "MTPL/PR/2024/1002",
        name: "Farhat Naaz",
        dateOfIssue: "2024-08-01"
    }
];

function verifyCertificate() {
    const serialNumber = document.getElementById("serialNumber").value.trim();
    const resultElement = document.getElementById("result");

    const certificate = certificates.find(cert => cert.serialNumber === serialNumber);

    if (certificate) {
        resultElement.innerHTML = `
            <p style="color: green;">Certificate is valid.</p>
            <p><strong>Name:</strong> ${certificate.name}</p>
            <p><strong>Date of Issue:</strong> ${certificate.dateOfIssue}</p>
        `;
    } else if (serialNumber === "") {
        resultElement.innerHTML = "<p style='color: red;'>Please enter a serial number.</p>";
    } else {
        resultElement.innerHTML = "<p style='color: red;'>Certificate is invalid.</p>";
    }
}



//extra added

