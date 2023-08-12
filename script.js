function toggleUploadForm() {
    var uploadFormContainer = document.getElementById("uploadFormContainer");
    if (uploadFormContainer.style.display === "none") {
        uploadFormContainer.style.display = "block";
    } else {
        uploadFormContainer.style.display = "none";
    }
}

function toggleWallet() {
    var walletContent = document.getElementById("walletContent");
    if (walletContent.style.display === "none") {
        walletContent.style.display = "block";
    } else {
        walletContent.style.display = "none";
    }
}
